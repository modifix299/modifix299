const Order = require('../models/orderModel');

const createNewOrder = async (req, res) => {
  try {
    const { productId, customerId, orderquantity, totalPrice } = req.body;
    const order = new Order({
      product: productId,
      customer: customerId,
      orderquantity,
      totalPrice,
    });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createNewOrder
}