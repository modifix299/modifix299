const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { protect, authAdmin, authCustomer } = require('../middleware/authMiddleware');

router.route('/create').post(orderController.createNewOrder);
// router.route('/update').post( protect, authCustomer, authAdmin, orderController.updateOrder);
// router.route('/getOne/:id').get( protect, authCustomer, authAdmin, orderController.getOneOrder);
router.route('/').get(protect, authAdmin, orderController.getAllOrders);

module.exports = router;
