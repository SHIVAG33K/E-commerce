import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalAmount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems: (state, action) => {
      const newItems = Array.isArray(action.payload) ? action.payload : [action.payload];
      newItems.forEach(({ product }) => {
        state.items.push(product);  
        state.totalAmount += product.price * (product.quantity || 1);  
      });
    },
    removeItems: (state, action) => {
      const productId = action.payload;
      const product = state.items.find(item => item.id === productId);
      if (product) {
        state.items = state.items.filter(item => item.id !== productId); 
        state.totalAmount -= product.price * (product.quantity || 1); 
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;  
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
