const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
 
    totalPrice: {
      type: Number,
      required: true,
    },
    cartItems: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        Price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],

    orderStatus: {
          type: String,
          enum: ["pending", "processing", "shipped", "delivered"],
          default: "pending",       
      },
  },
);

module.exports = mongoose.model("Order", orderSchema);

