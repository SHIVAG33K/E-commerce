import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  orders : []
}

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    createOrders: (state,action) => {
      state.orders.push(action.payload);
    },
    cancelOrder : (state,action) => {
      const product = action.payload;
      const exist = state.orders.find(item => item.id == product.id);
      if (exist){
          state.orders.filter(item => item.id != product.id );
      }
    }
  },
})

export const { createOrders,cancelOrder} = orderSlice.actions

export default orderSlice.reducer