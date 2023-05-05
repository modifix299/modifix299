const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    
    name: {
        type: String, 
        required: true
    },
  
    // image: {
    //     type: String
    // },

    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        reqired: true,
    }
},
{ timestamps: true });

module.exports = mongoose.model('Product',productSchema);




