import {addCartItemRequest, addCartItemSuccess} from '../features/cart/cartSlice';
import axios from 'axios'
const API_URL = `${process.env.REACT_APP_API_BASE_URL}products/`;

export const addCartItem = (id, quantity) => async(dispatch) => {
    try {
        dispatch(addCartItemRequest())
        const {data } = await axios.get(API_URL+'getOne/'+id)
        dispatch(addCartItemSuccess({
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            // image: data.product.images[0].image,
            stockquantity: data.product.stockquantity,
            quantity
        }))
    } catch (error) {
        
    }
}