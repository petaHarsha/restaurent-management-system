const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { protect, isAdmin } = require('../middlewares/auth');

// Menu Management
router.route('/menu')
  .get(adminController.getMenuItems)
  .post(protect, isAdmin, adminController.createMenuItem);

router.route('/menu/:id')
  .put(protect, isAdmin, adminController.updateMenuItem)
  .delete(protect, isAdmin, adminController.deleteMenuItem);

// Staff Management
router.route('/staff')
  .get(protect, isAdmin, adminController.getStaffMembers)
  .post(protect, isAdmin, adminController.createStaff);

router.route('/staff/:id')
  .put(protect, isAdmin, adminController.updateStaff)
  .delete(protect, isAdmin, adminController.deleteStaff);

// Inventory Management
router.route('/inventory')
  .get(protect, isAdmin, adminController.getInventoryItems)
  .post(protect, isAdmin, adminController.createInventoryItem);

router.route('/inventory/:id')
  .put(protect, isAdmin, adminController.updateInventoryItem)
  .delete(protect, isAdmin, adminController.deleteInventoryItem);

// Analytics
router.get('/analytics/sales', protect, isAdmin, adminController.getSalesAnalytics);
router.get('/analytics/popular-items', protect, isAdmin, adminController.getPopularItems);

module.exports = router;