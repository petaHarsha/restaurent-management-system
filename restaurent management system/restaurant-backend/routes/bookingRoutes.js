const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');
const { protect } = require('../middlewares/auth');

router.post('/', protect, bookingController.createBooking);
router.get('/my-bookings', protect, bookingController.getUserBookings);
router.get('/available-tables', protect, bookingController.getAvailableTables);

module.exports = router;