const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');
const { protect, isAdmin } = require('../middlewares/auth');

router.get('/', protect, staffController.getStaff);
router.post('/', protect, isAdmin, staffController.createStaff);
router.put('/:id', protect, isAdmin, staffController.updateStaff);
router.delete('/:id', protect, isAdmin, staffController.deleteStaff);

module.exports = router;