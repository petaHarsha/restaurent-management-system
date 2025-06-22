const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { 
    type: String, 
    required: true,
    enum: ['Vegetables', 'Fruits', 'Dairy', 'Meat', 'Dry Goods', 'Beverages', 'Cleaning Supplies']
  },
  quantity: { type: Number, required: true, min: 0 },
  unit: { 
    type: String, 
    required: true,
    enum: ['kg', 'g', 'l', 'ml', 'pcs', 'pack']
  },
  supplier: { type: String },
  threshold: { type: Number, min: 0 },
  lastUpdated: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Inventory', inventorySchema);