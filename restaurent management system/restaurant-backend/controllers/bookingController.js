const Booking = require('../models/Booking');
const Table = require('../models/Table');

exports.createBooking = async (req, res) => {
  const { date, time, tableId, guests, specialRequests, preOrder } = req.body;
  const userId = req.user.id;
  
  try {
    // Check if table is available
    const existingBooking = await Booking.findOne({ 
      date, 
      time, 
      table: tableId 
    });
    
    if (existingBooking) {
      return res.status(400).json({ message: 'Table is already booked for this time' });
    }
    
    const booking = new Booking({
      user: userId,
      date,
      time,
      table: tableId,
      guests,
      specialRequests,
      preOrder,
      status: 'confirmed'
    });
    
    await booking.save();
    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate('table')
      .sort('-date -time');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAvailableTables = async (req, res) => {
  const { date, time, guests } = req.query;
  
  try {
    // Find tables with capacity >= guests
    const tables = await Table.find({ capacity: { $gte: guests } });
    
    // Find bookings for the requested time
    const bookings = await Booking.find({ date, time });
    
    // Filter out booked tables
    const bookedTableIds = bookings.map(b => b.table.toString());
    const availableTables = tables.filter(
      table => !bookedTableIds.includes(table._id.toString())
    );
    
    res.json(availableTables);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};