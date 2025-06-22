const MenuItem = require('../models/MenuItem');
const Staff = require('../models/Staff');
const Inventory = require('../models/Inventory');
const Booking = require('../models/Booking');

// Menu Management
exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find().sort('category');
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createMenuItem = async (req, res) => {
  const { category, name, price, description } = req.body;
  
  try {
    const menuItem = new MenuItem({ category, name, price, description });
    await menuItem.save();
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Similar update and delete methods for menu items...

// Staff Management
exports.getStaffMembers = async (req, res) => {
  try {
    const staff = await Staff.find();
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createStaffMember = async (req, res) => {
  const { name, email, role, phone } = req.body;
  
  try {
    const staff = new Staff({ name, email, role, phone });
    await staff.save();
    res.status(201).json(staff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Inventory Management
exports.getInventoryItems = async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Analytics
exports.getSalesAnalytics = async (req, res) => {
  try {
    // Sample analytics data - in a real app, you'd aggregate from the database
    const salesData = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [50000, 60000, 75000, 65000, 80000, 90000]
    };
    res.json(salesData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};