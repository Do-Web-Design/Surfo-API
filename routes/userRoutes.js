const fs = require('fs')
const express = require("express");
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const reviewRouter = require('./reviewRoutes')
const commentRouter = require('./commentRoutes')
const bookmarkRouter = require('./bookmarkRoutes')
const bookingRouter = require('./bookingRoutes')

const router = express.Router({mergeParams: true});

router.use('/:userId/reviews', reviewRouter);
router.use('/:userId/comments', commentRouter);
router.use('/:userId/bookmarks', bookmarkRouter);
router.use('/:userId/booking', bookingRouter);


router.post('/signup', authController.signup); 
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.use(authController.protect);

router.patch(
  '/updateMyPassword', 
  authController.updatePassword
);

router.get(
'/me', 
userController.getMe, 
userController.getUser
)

router.patch(
'/updateMe', 
userController.uploadUserPhoto,
userController.resizeUserPhoto,
userController.updateMe
);

router.delete(
'/deleteMe', 
userController.deleteMe
); 

router.use(authController.restrictTo('admin'));

router
.route('/')
.get(userController.getAllUsers)
.post(userController.createUser);

router
.route('/:id')
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser);

module.exports = router;