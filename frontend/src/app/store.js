import { configureStore } from '@reduxjs/toolkit';
import userReducer from "../features/userSlice.js"
import cartReducer from "../features/cartSlice.js";
import orderReducer from '../features/orderSlice.js';
import productReducer from '../features/productsSlice.js';


export const store = configureStore({
  reducer: {
    user:userReducer,
    products : productReducer,
    cart : cartReducer,
    orders : orderReducer,
  },
})
