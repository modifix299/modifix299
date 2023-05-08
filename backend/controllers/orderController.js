const Payments = require('../models/paymentModel');
const Customers = require('../models/customerModel');

const addToCart =  async (req, res) =>{
    try {
        const customer = await Customers.findById(req.customer.id)
        if(!customer) return res.status(400).json({msg: "customer does not exist."})

        await customer.findOneAndUpdate({_id: req.customer.id}, {
            cart: req.body.cart
        })

        return res.json({msg: "Added to cart"})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}
const history = async(req, res) =>{
    try {
        const history = await Payments.find({customer_id: req.customer.id})

        res.json(history)
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = {
    addToCart,
    history
}