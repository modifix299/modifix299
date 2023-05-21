import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}orders/`;


// Get All Orders action
const getAllOrders = async (token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }
    
    const response = await axios.get(API_URL+'getAllOrders', config)

    return response.data;
}

// Get One Order action
const getOneOrder = async (id,token) => {
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  }
  
  const response = await axios.get(API_URL+'getOneOrder/'+id, config)

  return response.data;
}

// Create Order action
const createOrder = async (data,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL+'newOrder', data, config)

  return response.data
}


// Update Order action
const updateOrder = async (data,token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.patch(API_URL+'update', data, config)

  return response.data
}




const orderService = {
    getAllOrders,
    getOneOrder,
    createOrder,
    updateOrder
}

export default orderService
