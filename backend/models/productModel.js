const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    stockquantity:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
        
}, {
    timestamps: true //important
})


module.exports = mongoose.model("Products", productSchema)