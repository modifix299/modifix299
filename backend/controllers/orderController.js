const catchAsyncError = require('../middleware/catchAsyncError');
const Order = require('../models/orderModel');
const Product = require('../models/productModel');


//Create New Order 
const newOrder =  catchAsyncError( async (req, res, next) => {
    const {
        orderItems,
        shippingInfo,
        totalPrice,
        orderStatus,
        user
     } = req.body;

    const order = await Order.create({
        orderItems,
        shippingInfo,
        totalPrice,
        orderStatus,
        user
})

    res.status(200).json(
        order
    )
})

//Get Single Order 
const getSingleOrder = catchAsyncError(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate('user', 'name email');
    if(!order) {
        return next(new ErrorHandler(`Order not found with this id: ${req.params.id}`, 404))
    }

    res.status(200).json(
        order
    )
})

//Get Loggedin User Orders
const myOrders = catchAsyncError(async (req, res, next) => {
    const orders = await Order.find({user: req.user.id});

    res.status(200).json(
        orders
    )
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

    res.status(200).json(
        [order]
        
    )

});

//Admin: Update Order
const updateOrder = catchAsyncError(async (req, res, next) => {
    const { id, orderStatus } = req.body;
    
    // Confirm data
    if (!id || !orderStatus) {
      return res.status(400).json({ message: 'Order Status & ID required' });
    }
      const order = await Order.findById(id);
  
      if (!order) {
        return res.status(404).json({ message: 'Order not found' });
      }
  
      order.orderStatus = orderStatus;
      const updatedOrder = await order.save();
  

    // if(order.orderStatus == 'Delivered') {
    //     return next(new ErrorHandler('Order has been already delivered!', 400))
    // }
    //Updating the product stockquantity of each order item
    order.orderItems.forEach(async orderItem => {
        await updateStock(orderItem.product, orderItem.quantity)
    })

    // order.orderStatus = req.body.orderStatus;
    order.deliveredAt = Date.now();
    await order.save();

    res.status(200).json()
    
});

const updateStock = async (productId, quantity) => {
    try {
      const product = await Product.findById(productId);
  
      if (!product) {
        throw new Error('Product not found');
      }
  
      if (product.stockquantity < quantity) {
        throw new Error('Insufficient stock');
      }
  
      product.stockquantity -= quantity;
  
      await product.save();
    } catch (error) {
      throw error;
    }
  };


module.exports = {
    newOrder,
    getSingleOrder,
    myOrders,
    getAllOrders,
    updateOrder,
    getOneOrder,
    updateStock
}