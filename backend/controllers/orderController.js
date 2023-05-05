const Order = require("../models/orderModel");

//get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate({
      path: "customer",
      select: "-password"
    }).populate("cartItems.productId");
    res.status(200).json({ orders });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//New Order
const createNewOrder = async (req, res) => {
  const { customer, totalPrice, cartItems } = req.body;
  const duplicateorder = await Order.findOne({ customer });

  const order = new Order({
    customer,
    totalPrice,
    cartItems,
  });
  try {
    const savedOrder = await order.save();
    res.status(201).json({ message: "Order created successfully", order: savedOrder });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  getAllOrders,
  createNewOrder
};

