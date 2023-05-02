const Order = require('../models/orderModel');

// Get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get one order
const getOneOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update order
const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const { status } = req.body;
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    // order.product = productId;
    // order.customer = customerId;
    // order.orderquantity = orderquantity;
    // order.totalPrice = totalPrice;
    order.status = status;
    await order.save();
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create new order
const createNewOrder = async (req, res) => {
  try {
    const { productId, customerId, orderquantity, totalPrice, status } = req.body;
    const order = new Order({
      product: productId,
      customer: customerId,
      orderquantity,
      totalPrice,
      status,
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


module.exports = {
  createNewOrder,
  updateOrder,
  getOneOrder,
  getAllOrders
}