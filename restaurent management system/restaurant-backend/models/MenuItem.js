const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  category: { 
    type: String, 
    required: true,
    enum: ['Starters', 'Mains', 'Desserts', 'Drinks']
  },
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true, min: 0 },
  description: { type: String },
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('MenuItem', menuItemSchema);