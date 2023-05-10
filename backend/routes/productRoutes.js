const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { protect, authAdmin } = require('../middleware/authMiddleware');


router.route('/').get( productController.getAllProducts);
router.route('/getOne/:id').get( productController.getOneProduct);
router.route('/create').post( protect, authAdmin, productController.createNewProduct);
router.route('/update').patch(protect, authAdmin, productController.updateProduct);
router.route('/delete').delete(protect, authAdmin, productController.deleteProduct);

module.exports = router;