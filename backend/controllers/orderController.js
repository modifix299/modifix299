const {Order} = require('../models/orderModel');
const { OrderItem } = require('../models/orderItem');

//get all orders
// router.get(`/`, async (req, res) =>{
//     const orderList = await Order.find().populate('user', 'name').sort({'dateOrdered': -1});

const getAllOrders = (async (req, res) => {
    const orders = await Order.find().populate('customer', 'firstname').sort({'dateOrdered': -1});

    

    if(!orders) {
        res.status(500).json({success: false})
    } 
    res.send(orders);
})

const getOneOrder = ( async (req, res) =>{
    const order = await Order.findById(req.params.id)
    .populate('customer', 'firstname')
    .populate({ 
        path: 'orderItems', populate: {
            path : 'product'} 
        });

    if(!order) {
        res.status(500).json({success: false})
    } 
    res.send(order);
})



//create order
const createNewOrder = (async (req,res)=>{
    const orderItemsIds = Promise.all(req.body.orderItems.map(async (orderItem) =>{
        let newOrderItem = new OrderItem({
            quantity: orderItem.quantity,
            product: orderItem.product
        })

        newOrderItem = await newOrderItem.save();

        return newOrderItem._id;
    }))
    const orderItemsIdsResolved =  await orderItemsIds;

    const totalPrices = await Promise.all(orderItemsIdsResolved.map(async (orderItemId)=>{
        const orderItem = await OrderItem.findById(orderItemId).populate('product', 'price');
        const totalprice = orderItem.product.price * orderItem.quantity;
        return totalprice
    }))

    const totalprice = totalPrices.reduce((a,b) => a +b , 0);

    let order = new Order({
        orderItems: orderItemsIdsResolved,
        shippingaddress: req.body.shippingaddress,
        city: req.body.city,
        zipcode: req.body.zipcode,
        mobile: req.body.mobile,
        status: req.body.status,
        totalprice: totalprice,
        customer: req.body.customer,
    })
    order = await order.save();

    if(!order)
    return res.status(400).send('the order cannot be created!')

    res.send(order);
})

//order update
const orderUpdate = (async (req, res)=> {
    const order = await Order.findByIdAndUpdate(
        req.params.id,
        {
            status: req.body.status
        },
        { new: true}
    )

    if(!order)
    return res.status(400).send('the order cannot be update!')

    res.send(order);
})

//delete
const deleteOrder = (req, res)=>{
    Order.findByIdAndRemove(req.params.id).then(async order =>{
        if(order) {
            await order.orderItems.map(async orderItem => {
                await OrderItem.findByIdAndRemove(orderItem)
            })
            return res.status(200).json({success: true, message: 'the order is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "order not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
}

const totalServices = (async (req, res)=> {
    const totalSales= await Order.aggregate([
        { $group: { _id: null , totalsales : { $sum : '$totalPrice'}}}
    ])

    if(!totalSales) {
        return res.status(400).send('The order sales cannot be generated')
    }

    res.send({totalsales: totalSales.pop().totalsales})
})

const orderCounting = (async (req, res) =>{
    const orderCount = await Order.countDocuments((count) => count)

    if(!orderCount) {
        res.status(500).json({success: false})
    } 
    res.send({
        orderCount: orderCount
    });
})

const clientOrderList = (async (req, res) =>{
    const customerOrderList = await Order.find({customer: req.params.customerid}).populate({ 
        path: 'orderItems', populate: {
            path : 'product', populate: 'category'} 
        }).sort({'dateOrdered': -1});

    if(!customerOrderList) {
        res.status(500).json({success: false})
    } 
    res.send(customerOrderList);
})



module.exports = {
    getAllOrders,
    getOneOrder,
    createNewOrder,
    orderUpdate,
    deleteOrder,
    orderCounting,
    clientOrderList,
    totalServices
};