const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const Customer = require('../models/customerModel')

// @desc    Register new customer
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const { firstname, lastname, mobile, email, shippingaddress, city, zipcode ,password } = req.body
  
    if ( !firstname || !lastname || !mobile || !email || !shippingaddress || !city || !zipcode || !password) {
      res.status(400)
      throw new Error('Please add all fields')
    }
  
    // Check if customer exists
    const customerExists = await Customer.findOne({ email })
  
    if (customerExists) {
      res.status(400)
      throw new Error('User already exists')
    }
  
    // Hash password 
    const hashedPassword = await bcrypt.hash(password, 10); // salt rounds
  
    // Create customer
    const customer = await Customer.create({
        firstname, 
        lastname, 
        mobile, 
        email, 
        shippingaddress, 
        city, 
        zipcode ,
        password: hashedPassword,
    })
  
    if (customer) {
      res.status(201).json({
        _id: customer.id,
        firstname: customer.firstname,
        lastname: customer.lastname,
        mobile: customer.mobile,
        email: customer.email,
        shippingaddress: customer.shippingaddress,
        city: customer.city,
        zipcode: customer.zipcode,
        token: generateToken(customer._id),
      })
    } else {
      res.status(400)
      throw new Error('Invalid customer data')
    }
})


// @desc    Authenticate a customer
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
  
    if(!email || !password){
        res.status(400).json({ message: 'All credentials are required' })
    }

    // Check for customer email
    const customer = await Customer.findOne({ email })

    // if (customer && customer.active)
    // {
        if (customer && (await bcrypt.compare(password, customer.password)))
        {
            res.json({
                _id: customer.id,
                firstname: customer.firstname,
                lastname: customer.lastname,
                mobile: customer.mobile,
                email: customer.email,
                shippingaddress: customer.shippingaddress,
                city: customer.city,
                zipcode: customer.zipcode,
                token: generateToken(customer._id),
            })
        } else {
            res.status(401).json({ message: 'Invalid credentials' })
            throw new Error('Invalid credentials')
        }
    // } else {
    //     res.status(401).json({ message: 'User is not active. Please contact you system administrator' })
    //     throw new Error('Invalid credentials')
    // }
    
})
  
// @desc    Get customer data
// @route   GET /api/users/me
// @access  Private
const getOneCustomer = asyncHandler(async (req, res) => {
    const id = req.params['id'];

    const customer = await Customer.findById(id).select('-password');

    if (!customer) {
        return res.status(400).json({ message: 'Customer not found' })
    } else {
        return res.status(201).json(customer);
    } 
})
  
// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d', })
}
  
module.exports = {
    registerUser,
    loginUser,
    getOneCustomer,
}
  