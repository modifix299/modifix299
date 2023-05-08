const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    shippingaddress: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        requyired: true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        type: Array,
        default: []
    }
    
});

module.exports = mongoose.model('Customer', customerSchema);




// {
//     "firstname":"customer",
//     "lastname":"three",
//     "mobile":766410882,
//     "email":"customer3@gmail",
//     "password":"customer3",
//     "shippingaddress":"pointpedro",
//     "city":"jaffna",
//     "zipcode":40000
// }