import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_BASE_URL}products/`;


// Get All Products action
const getAllProducts = async () => {
    // const config = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    // }
    
    const response = await axios.get(API_URL)

    return response.data;
}

// Get One Products action
const getOneProduct = async (id) => {
  // const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  // }
  
  const response = await axios.get(API_URL+'getOne/'+id)

  return response.data;
}

const productService = {
    getAllProducts,
    getOneProduct,
}

export default productService
