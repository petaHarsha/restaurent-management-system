const Staff = require('../models/Staff');

exports.getStaff = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createStaff = async (req, res) => {
  const { name, email, role, phone } = req.body;
  
  try {
    const staff = new Staff({ name, email, role, phone });
    await staff.save();
    res.status(201).json(staff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateStaff = async (req, res) => {
  const { id } = req.params;
  
  try {
    const staff = await Staff.findByIdAndUpdate(id, req.body, { new: true });
    if (!staff) {
      return res.status(404).json({ message: 'Staff member not found' });
    }
    res.json(staff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteStaff = async (req, res) => {
  const { id } = req.params;
  
  try {
    const staff = await Staff.findByIdAndDelete(id);
    if (!staff) {
      return res.status(404).json({ message: 'Staff member not found' });
    }
    res.json({ message: 'Staff member deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};