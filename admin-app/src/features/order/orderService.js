import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}orders/`;


// Get All Orders action
const getAllOrders = async (token) => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }
    
    const response = await axios.get(API_URL, config)

    return response.data;
}

// Get One Order action
const getOneOrder = async (id,token) => {
  const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
  }
  
  const response = await axios.get(API_URL+'getOne/'+id, config)

  return response.data;
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
    updateOrder
}

export default orderService
