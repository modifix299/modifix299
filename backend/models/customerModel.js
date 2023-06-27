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
    phone: {
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
    zipcode: {
        type: Number,
        requyired: true
    },
    password: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        default: true
    },
    
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