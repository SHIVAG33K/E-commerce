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
      
      if(newItem && newItem.length > 0){
        newItem.map(item => {
          state.items.push(item);  
          // state.totalAmount += item.price; 
        });
      }
      
      
      // state.totalAmount += newItem.price;
    },
    removeItems: (state,action) => {
        const product = action.payload;
      
        const exist = state.items.find(item => item.id == product);
      
        if (exist){
          state.items = state.items.filter(item => item.id != product );
           
            // state.totalAmount -= exist.price
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