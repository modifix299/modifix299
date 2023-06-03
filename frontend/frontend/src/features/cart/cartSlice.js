import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import cartService from './cartService';

const initialState = {
    items: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')): [],    
    isError: false,
    isAdded: false,
    isUpdated: false,
    isRemoved: false,
    isLoading: false,
    message: '',
}

export const addCartItemSuccess = createAsyncThunk('cartItem/addSuccess', async (data, thunkAPI) => {
    try {
        // const token = thunkAPI.getState().auth.user.token;
        return await cartService.addCartItem(data.id, data.quantity, data.user);
    } catch (error) {
        const message =
        (error.response &&
            error.response.data &&
            error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}
);

export const removeAllItemsFromCart = createAsyncThunk('cartItem/removeAll', async (_, thunkAPI) => {
    try {
        const user_id = thunkAPI.getState().auth.user._id;
        return await cartService.removeAllItemsFromCart(user_id);
    } catch (error) {
        const message =
        (error.response &&
            error.response.data &&
            error.response.data.message) ||
        error.message ||
        error.toString()
        return thunkAPI.rejectWithValue(message)
    }
}
);



export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
      //addCartItemSuccess
        .addCase(addCartItemSuccess.pending, (state) => {
          state.isLoading = true
        })
        .addCase(addCartItemSuccess.fulfilled, (state, action) => {
          const item = action.payload

          const isItemExist = state.items.find( i => i.product === item.product);
            
            if(isItemExist) {
                state = {
                    ...state,
                    isLoading: false,
                }
            }else{
                state = {
                    items: [...state.items, item],
                    isLoading: false
                }
                
                localStorage.setItem('cartItems', JSON.stringify(state.items));
            }
            return state
            
        })
        .addCase(addCartItemSuccess.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
    
    //removeAllItemsFromCart
        .addCase(removeAllItemsFromCart.pending, (state) => {
            state.isLoading = true
        })
        .addCase(removeAllItemsFromCart.fulfilled, (state, action) => {
            console.log(action.payload);
            const filterItems = state.items.filter(item => {
                return item.user !== action.payload
            })
            localStorage.setItem('cartItems', JSON.stringify(filterItems));
            return {
                ...state,
                items: filterItems
            }
        })
        .addCase(removeAllItemsFromCart.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        })
    },
})

export const { reset } = cartSlice.actions
export default cartSlice.reducer