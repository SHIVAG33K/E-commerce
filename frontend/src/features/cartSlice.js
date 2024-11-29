import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:  [],
    totalAmount: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems: (state,action) => {
      const newItem = action.payload;
      state.items.push(newItem);
      state.totalAmount += newItem.price;
    },
    removeItems: (state,action) => {
        const product = action.payload;
        const exist = state.items.find(item => item.id == product.id);
        if (exist){
            state.items.filter(item => item.id != product.id );
            state.totalAmount -= exist.price
        }
    },
    clearCart: state => {
        state.items = [];
        state.totalAmount = 0;
      },
  },
})

export const { addItems, removeItems, clearCart} = cartSlice.actions

export default cartSlice.reducer