const Cart = require('../models/cartModel');

const addToCart = async (req, res) => {
  try {
    const { customer, product, quantity, price } = req.body;
    const cartItem = { product, quantity, price };
    
    let cart = await Cart.findOne({ customer });
    
    if (!cart) {
      // If the cart doesn't exist, create a new one
      cart = new Cart({ customer, cartItems: [cartItem] });
    } else {
      // If the cart already exists, add the new item to it
      const existingCartItemIndex = cart.cartItems.findIndex(item => item.product == product);
      if (existingCartItemIndex >= 0) {
        // If the item already exists in the cart, update the quantity and price
        const existingCartItem = cart.cartItems[existingCartItemIndex];
        existingCartItem.quantity += quantity;
        existingCartItem.price += price;
      } else {
        // If the item doesn't exist in the cart, add it as a new item
        cart.cartItems.push(cartItem);
      }
    }
    
    // Save the updated cart to the database
    const updatedCart = await cart.save();
    res.status(201).json({ message: 'Item added to cart', cart: updatedCart });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getCart = async (req, res) => {
  try {
    const { customer } = req.body;
    const cart = await Cart.findOne({ customer }).populate('cartItems.product');
    res.status(200).json({ cart });
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = {
  addToCart,
  getCart
};
