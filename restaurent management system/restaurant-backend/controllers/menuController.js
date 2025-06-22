const MenuItem = require('../models/MenuItem');

exports.getMenu = async (req, res) => {
  try {
    const menuItems = await MenuItem.find().sort('category');
    // Group by category
    const menu = {};
    menuItems.forEach(item => {
      if (!menu[item.category]) {
        menu[item.category] = [];
      }
      menu[item.category].push(item);
    });
    res.json(menu);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.searchMenu = async (req, res) => {
  const { query } = req.query;
  
  try {
    const items = await MenuItem.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } }
      ]
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};