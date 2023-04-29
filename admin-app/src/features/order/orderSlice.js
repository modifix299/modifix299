import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import orderService from './orderService';

const initialState = {
    orders: [],
    order: {},
    isError: false,
    isAdded: false,
    isUpdated: false,
    isLoading: false,
    message: '',
}

// Get All Orders reducer
export const getOrders = createAsyncThunk('orders/getAll', async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await orderService.getAllOrders(token);
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

// Get One Order reducer
export const getOrder = createAsyncThunk('orders/getOne', async (id, thunkAPI) => {
  try {
      const token = thunkAPI.getState().auth.user.token;
      return await orderService.getOneOrder(id,token);
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

// // Create new Product
// export const createProduct = createAsyncThunk('products/create',async (data, thunkAPI) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token
//       return await productService.createProduct(data, token)
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString()
//       return thunkAPI.rejectWithValue(message)
//     }
//   }
// )

// Update  Order
export const updateOrder = createAsyncThunk('orders/update',async (data, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await orderService.updateOrder(data, token)
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
)

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
      //get all users
        .addCase(getOrders.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getOrders.fulfilled, (state, action) => {
          state.isLoading = false
          state.products = action.payload
        })
        .addCase(getOrders.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
      //get one order
        .addCase(getOrder.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getOrder.fulfilled, (state, action) => {
          state.isLoading = false
          state.product = action.payload
        })
        .addCase(getOrder.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
    //   //create new user
    //     .addCase(createProduct.pending, (state) => {
    //       state.isLoading = true
    //     })
    //     .addCase(createProduct.fulfilled, (state, action) => {
    //       state.isLoading = false
    //       state.isAdded = true
    //       state.message = action.payload
    //     })
    //     .addCase(createProduct.rejected, (state, action) => {
    //       state.isLoading = false
    //       state.isError = true
    //       state.message = action.payload
    //     })
    //   //update user
    //     .addCase(updateProduct.pending, (state) => {
    //       state.isLoading = true
    //     })
    //     .addCase(updateProduct.fulfilled, (state, action) => {
    //       state.isLoading = false
    //       state.isUpdated = true
    //       state.message = action.payload
    //     })
    //     .addCase(updateProduct.rejected, (state, action) => {
    //       state.isLoading = false
    //       state.isError = true
    //       state.message = action.payload
    //     })
    },
})
  
export const { reset } = orderSlice.actions
export default orderSlice.reducer
  