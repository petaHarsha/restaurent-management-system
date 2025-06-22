const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  table: { type: mongoose.Schema.Types.ObjectId, ref: 'Table', required: true },
  guests: { type: Number, required: true, min: 1 },
  specialRequests: { type: String },
  preOrder: [
    {
      item: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
      quantity: { type: Number, min: 1 }
    }
  ],
  status: { 
    type: String, 
    enum: ['confirmed', 'completed', 'cancelled'],
    default: 'confirmed'
  }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);