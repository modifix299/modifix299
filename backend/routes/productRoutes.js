const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { protect, authAdmin } = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path')

const upload = multer({storage: multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join( __dirname,'..' , 'uploads' ) )
    },
    filename: function(req, file, cb ) {
        cb(null, file.originalname)
    }
    }) 
})


router.route('/').get( productController.getAllProducts);
router.route('/getOne/:id').get( productController.getOneProduct);
router.route('/create').post(protect, authAdmin,  upload.array('images'), productController.createNewProduct);
router.route('/update').patch(protect, authAdmin, productController.updateProduct);
router.route('/delete').delete(protect, authAdmin, productController.deleteProduct);

module.exports = router;