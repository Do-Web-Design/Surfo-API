const express = require("express");
const authController = require('../controllers/authController');
const tourController = require('../controllers/tourController');
const reviewRouter = require('./reviewRoutes')
const commentRouter = require('./commentRoutes')

const router = express.Router();

router.use('/:tourId/reviews', reviewRouter);
router.use('/:tourId/comments', commentRouter);

router
  .route('/')
  .get(authController.isLoggedIn, tourController.getAllTours)
  .post(
    authController.protect, 
    authController.restrictTo('admin'), 
    tourController.createTour
  ); 

router
.route('/:id')
.get(tourController.getTour)
.patch(
  authController.protect, 
  authController.restrictTo('admin'),
  tourController.updateTour)
.delete(
  authController.protect, 
  authController.restrictTo('admin'), 
  tourController.deleteTour);

  module.exports = router;