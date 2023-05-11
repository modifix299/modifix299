import {addCartItemRequest, addCartItemSuccess} from '../features/cart/cartSlice';
import axios from 'axios'

export const addCartItem = (id, quantity) => async(dispatch) => {
    try {
        dispatch(addCartItemRequest())
        const {data } = await axios.get(`/api/v1/product/${id}`)
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