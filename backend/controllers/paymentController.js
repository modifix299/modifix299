const Payments = require('../models/paymentModel')
const Customers = require('../models/customerModel')
const Products = require('../models/productModel')



    const getPayments = async(req, res) =>{
        try {
            const payments = await Payments.find()
            res.json(payments)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
    const createPayment = async(req, res) => {
        try {
            const customer = await Customers.findById(req.customer.id).select('name email')
            if(!customer) return res.status(400).json({msg: "customer does not exist."})

            const {cart, paymentID, address} = req.body;

            const {_id, name, email} = customer;

            const newPayment = new Payments({
                customer_id: _id, name, email, cart, paymentID, address
            })

            cart.filter(item => {
                return sold(item._id, item.quantity, item.sold)
            })

            
            await newPayment.save()
            res.json({msg: "Payment Succes!"})
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }


    const sold = async (id, quantity, oldSold) =>{
        await Products.findOneAndUpdate({_id: id}, {
        sold: quantity + oldSold
        })
    }

module.exports = {
    getPayments,
    createPayment,
    sold
}