const Product = require('../models/productModel');



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
    const { name, price, stockquantity, description } = req.body;    

    // Confirm all data fields
    if ( !name || !price || !stockquantity || !description) {
        return res.status(400).json({ message: 'Required fields are missing' })
    }
    

    const productObject = {name, price, stockquantity, description};

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