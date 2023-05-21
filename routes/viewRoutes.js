const express = require('express');
const authController = require('./../controllers/authController')

const router = express.Router();

router.get('/loggedIn', authController.isLoggedIn, authController.getOverview);

module.exports = router;