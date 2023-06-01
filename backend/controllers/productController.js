const Product = require('../models/productModel');
require('dotenv').config();


//Get all products
const getAllProducts = (async (req, res) => {
    const products = await Product.find();

    if(!products?.length){
        return res.status(400).json({
            message: 'No products found.'
        });
    }

    res.json(products);
});


// Get One Product
const getOneProduct = (async (req, res) => {
    const id = req.params['id'];

    const product = await Product.findById(id);

    if (!product) {
        return res.status(400).json({ message: 'Product not found' })
    } else {
        return res.status(201).json(product);
    } 

});

//Create new product
const createNewProduct = (async (req, res) => {  

    let photos = []
    let BACK_END = process.env.BACKEND_URL;

        if(req.files.length > 0) {
        req.files.forEach( file => {

            let url = `${BACK_END}uploads/${file.originalname}`;
            photos.push({ image: url })
        })
    }    

    // req.body.user = req.user.id;
    const { name, price, stockquantity, description} = req.body;
    const images = photos; 
    
    // Confirm all data fields
    if ( !name || !price || !stockquantity || !description || !images) {
        return res.status(400).json({ message: 'Required fields are missing' })
    }
    
    // Check for duplicate productid
    const duplicate = await Product.findById();   
    const productObject = {name, price, stockquantity, description, images};

    // Create and store new user 
    const product = await Product.create(productObject);

    if (product) { //created 
        res.status(201).json({ message: `New product ${name} created` });
    } else {
        res.status(400).json({ message: 'Invalid data received' });
    }
});


// Update a product
const updateProduct = (async (req, res) => {
    const { id, name, price, stockquantity, description} = req.body

    // Confirm data 
    if ( !id || !name || !price || !stockquantity || !description) {
        return res.status(400).json({ message: 'Required fields are missing' })
    }
    // Does the product exist to update?
    const product = await Product.findById(id);

    if (!product) {
        return res.status(400).json({ message: 'Product not found' })
    }
   

    product.name = name;    
    product.price = price;
    product.stockquantity = stockquantity;
    product.description = description;
    // product.images = images;
    // product.sold = sold;   

    const updatedProduct = await product.save()

    res.json({ message: `Product ${updatedProduct.productname} updated` })
})

//DELETE /products
const deleteProduct = (async (req, res) => {
    const {_id} = req.body;

    // Confirm data
    if (!_id) {
        return res.status(400).json({ message: 'Product ID Required' })
    }
    
    // Does the product exist to delete?
    const product = await Product.findById(_id)

    if (!product) {
        return res.status(400).json({ message: 'Product not found' })
    }

    const result = await product.deleteOne()

    const reply = `Product ${result.productname} deleted`

    res.json(reply)
})

module.exports = {
    getAllProducts,
    createNewProduct,
    updateProduct,
    deleteProduct,
    getOneProduct
    
}