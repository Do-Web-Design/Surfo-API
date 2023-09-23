const express = require('express')
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router({mergeParams: true});

router
  .route('/')
  .get(bookingController.getAllBooking)
  .post(
    // authController.protect, 
    // authController.restrictTo('user'),
    bookingController.setTourUserIds,
    bookingController.createBooking
  );

router
  .route('/:id')
  .get(authController.protect, bookingController.getBooking)
  .patch(
    authController.protect,
    authController.restrictTo('user', 'admin'), 
    bookingController.updateBooking
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    bookingController.deleteBooking
  );

module.exports = router;