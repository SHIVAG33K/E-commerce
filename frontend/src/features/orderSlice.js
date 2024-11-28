import { createSlice } from '@reduxjs/toolkit'

const initialState = {

}

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    orders: (state) => {
      state = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { orders} = orderSlice.actions

export default orderSlice.reducer