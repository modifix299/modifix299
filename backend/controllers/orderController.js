const catchAsyncError = require('../middleware/catchAsyncError');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');


//Create New Order 
const newOrder =  catchAsyncError( async (req, res, next) => {
    const {
        orderItems,
        shippingInfo,
        totalPrice,
        user
    } = req.body;

    const order = await Order.create({
        orderItems,
        shippingInfo,
        totalPrice,
        user
    })

    res.status(200).json({
        success: true,
        order
    })
})

//Get Single Order 
const getSingleOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');
    if(!order) {
        return next(new ErrorHandler(`Order not found with this id: ${req.params.id}`, 404))
    }

    res.status(200).json({
        success: true,
        order
    })
})

//Get Loggedin User Orders - /api/v1/myorders
const myOrders = catchAsyncError(async (req, res, next) => {
    const orders = await Order.find({user: req.user.id});

    res.status(200).json({
        success: true,
        orders
    })
})

//Get All Orders 
const getAllOrders = catchAsyncError(async (req, res, next) => {
    const orders = await Order.find();
    res.status(200).json(
        orders
    )
})

// Get One Order
const getOneOrder = (async (req, res) => {
    const id = req.params['id'];

    const order = await Order.findById(id);

    if (!order) {
        return res.status(400).json({ message: 'Order not found' })
    } else {
        return res.status(201).json(order);
    } 

});

//Admin: Update Order / Order Status - api/v1/order/:id
const updateOrder =  catchAsyncError(async (req, res, next) => {
    const { id, shippingInfo, user, orderItems, totalPrice, orderStatus, createdAt } = req.body
    
    // Confirm data 
    if ( !orderStatus ) {
        return res.status(400).json({ message: 'Order Status required' })
    }
    const order = await Order.findById(req.params.id);

    // if(order.orderStatus == 'Delivered') {
    //     return next(new ErrorHandler('Order has been already delivered!', 400))
    // }
    //Updating the product stockquantity of each order item
    // order.orderItems.forEach(async orderItem => {
    //     await updateStock(orderItem.product, orderItem.quantity)
    // })

    // order.orderStatus = req.body.orderStatus;
    // order.deliveredAt = Date.now();
    // await order.save();

    res.status(200).json()
    
});

async function updateStock (productId, quantity){
    const product = await Product.findById(productId);
    product.stockquantity = product.stockquantity - quantity;
    product.save({validateBeforeSave: false})
}

//Admin: Delete Order - api/v1/order/:id
const deleteOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    if(!order) {
        return next(new ErrorHandler(`Order not found with this id: ${req.params.id}`, 404))
    }

    await order.remove();
    res.status(200).json({
        success: true
    })
})

module.exports = {
    newOrder,
    getSingleOrder,
    myOrders,
    getAllOrders,
    updateOrder,
    deleteOrder,
    getOneOrder
}