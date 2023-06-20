import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import orderService from './orderService';

const initialState = {
    orders: [],
    order: {},
    // userOrders: [],
    isError: false,
    isAdded: false,
    isUpdated: false,
    isLoading: false,
    message: '',
}

// // Get One User Order reducer
// export const getuserOrders = createAsyncThunk('orders/getAll', async (id, thunkAPI) => {
//   try {
//       const token = thunkAPI.getState().auth.user.token;
//       return await orderService.getuserOrders(id, token);
//   } catch (error) {
//       const message =
//       (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//       error.message ||
//       error.toString()
//       return thunkAPI.rejectWithValue(message)
//   }
// }
// );

// Get All Orders reducer
export const getAllOrders = createAsyncThunk('orders/getAll', async (_, thunkAPI) => {
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
export const getOneOrder = createAsyncThunk('orders/getOne', async (id, thunkAPI) => {
  try {
      const token = thunkAPI.getState().auth.user.token;
      return await orderService.getOneOrder(id, token);
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

// Create new Order
export const createOrder = createAsyncThunk('orders/create',async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await orderService.createOrder(data, token)
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

// Update Order
export const updateOrder = createAsyncThunk('products/update',async (data, thunkAPI) => {
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
      // //get all user orders
      // .addCase(getuserOrders.pending, (state) => {
      //   state.isLoading = true
      // })
      // .addCase(getuserOrders.fulfilled, (state, action) => {
      //   state.isLoading = false
      //   state.orders = action.payload
      // })
      // .addCase(getuserOrders.rejected, (state, action) => {
      //   state.isLoading = false
      //   state.isError = true
      //   state.message = action.payload
      // })
      //get all orders
        .addCase(getAllOrders.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getAllOrders.fulfilled, (state, action) => {
          state.isLoading = false
          state.orders = action.payload
        })
        .addCase(getAllOrders.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
      //get one order
        .addCase(getOneOrder.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getOneOrder.fulfilled, (state, action) => {
          state.isLoading = false
          state.order = action.payload
        })
        .addCase(getOneOrder.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
      //create new Order
        .addCase(createOrder.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createOrder.fulfilled, (state, action) => {
          state.isLoading = false
          state.isAdded = true
          state.message = action.payload
        })
        .addCase(createOrder.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
      //update  order
      .addCase(updateOrder.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateOrder.fulfilled, (state, action) => {
        state.isLoading = false
        state.isUpdated = true
        state.message = action.payload
      })
      .addCase(updateOrder.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
    },
})
  
export const { reset } = orderSlice.actions
export default orderSlice.reducer
  