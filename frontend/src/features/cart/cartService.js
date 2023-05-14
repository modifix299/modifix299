import axios from 'axios'

const API_URL = `${process.env.REACT_APP_API_BASE_URL}products/`;

const addCartItem = async(id, quantity, user) => {
    try {
        // dispatch(addCartItemRequest())
        const {data } = await axios.get(API_URL+'getOne/'+id)
        const dataItems = {
            product: data._id,
            name: data.name,
            price: data.price,
            // image: data.product.images[0].image,
            stockquantity: data.stockquantity,
            quantity,
            user
        }
        return dataItems;
    } catch (error) {           
        console.log(error);
    }
}

//after order success
const removeAllItemsFromCart = async(user) => {
    try {
        const user_id = user;
        return user_id;
    } catch (error) {           
        console.log(error);
    }
}

const cartService = {
    addCartItem,
    removeAllItemsFromCart
}

export default cartService;