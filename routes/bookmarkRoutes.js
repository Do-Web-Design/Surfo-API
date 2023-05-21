const express = require('express')
const authController = require('../controllers/authController');
const bookmarkController = require('../controllers/bookmarkController');

const router = express.Router({mergeParams: true});

router
  .route('/')
  .get(bookmarkController.getAllBookmark)
  .post(
    authController.protect, 
    authController.restrictTo('user'),
    bookmarkController.setTourUserIds,
    bookmarkController.createBookmark
  );

router
  .route('/:id')
  .get(authController.protect, bookmarkController.getBookmark)
  .patch(
    authController.protect,
    authController.restrictTo('user', 'admin'), 
    bookmarkController.updateBookmark
  )
  .delete(
    authController.protect,
    authController.restrictTo('user', 'admin'),
    bookmarkController.deleteBookmark
  );

module.exports = router;