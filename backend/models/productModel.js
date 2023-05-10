const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    product_id:{
        type: String,
        unique: true
    },
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
    
    // images:{
    //     type: Object,
    //     required: true
    // },
    // category:{
    //     type: String
    // },
    // checked:{
    //     type: Boolean,
    //     default: false
    // },
    // sold:{
    //     type: Number,
    //     default: 0
    // }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("Products", productSchema)