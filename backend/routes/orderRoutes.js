const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { protect, authAdmin, authCustomer } = require('../middleware/authMiddleware');


router.route('/newOrder').post(orderController.newOrder);
router.route('/getSingleOrder/:id').get(protect, authCustomer, orderController.getSingleOrder);
router.route('/myorders').get(protect, authCustomer, orderController.myOrders);

//Admin Routes
router.route('/getallOrders').get(protect, authAdmin, orderController.orders);
router.route('/getOneOrder/:id/update').patch(protect, authAdmin, orderController.updateOrder);

module.exports = router;