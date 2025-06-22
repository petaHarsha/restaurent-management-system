const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

exports.register = async (req, res) => {
  const { name, email, phone, password } = req.body;
  
  try {
    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    
    const user = new User({ name, email, phone, password });
    await user.save();
    
    // Create token
    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRE
    });
    
    res.status(201).json({ token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
      expiresIn: config.JWT_EXPIRE
    });
    
    res.json({ token, user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.adminLogin = async (req, res) => {
  const { password } = req.body;
  
  if (password === config.ADMIN_PASSWORD) {
    const token = jwt.sign({ isAdmin: true }, config.JWT_SECRET, {
      expiresIn: '1h'
    });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid admin password' });
  }
};