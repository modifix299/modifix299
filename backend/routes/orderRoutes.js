const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { protect, authCustomer } = require('../middleware/authMiddleware');

router.route('/create').post( protect, authCustomer, orderController.createNewOrder);

module.exports = router;
