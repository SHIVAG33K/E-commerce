import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFetchData } from './hooks';
import { useDispatch, useSelector } from 'react-redux';
import { addItems, removeItems, clearCart } from '../features/cartSlice.js';
import { useQuery } from '@tanstack/react-query';


const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items, totalAmount } = useSelector(state => state.cart);
  const url = 'https://ecom-backend-production-a959.up.railway.app/api/cart';
  // const url = 'http://localhost:3000/api/cart';
  const shouldFetch = items.length === 0;

  const fetchData = async () => {
    try {
      const response = await axios.get(url, {
        withCredentials: true
      });
      if (response.data) {
        dispatch(addItems(response.data));
      }
      return response.data;
    } catch (e) {
      console.error(e);
      return null; 
    }
  };
  
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [url], 
    queryFn: fetchData, 
    enabled: shouldFetch,
  });


  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div role="status" className="text-center">
          <svg
            aria-hidden="true"
            className="w-16 h-16 text-blue-500 animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
          <p className="text-blue-600 mt-2">Loading...</p>
        </div>
      </div>
    );
  }

  const cartItems = items || [];

  const removeProduct = async (id) => {
    try {
      const data = await axios.delete(`https://ecom-backend-production-a959.up.railway.app/api/cart/${id}`, { withCredentials: true });
      if (data) {
        dispatch(removeItems(id));  
      }
    } catch (e) {
      console.log(e);
    }
  };

  const allProducts = cartItems.map(item => item.id);  

  const sendOrder = async () => {
    try {
      const data = await axios.post('https://ecom-backend-production-a959.up.railway.app/api/orders/', {
        product_id: allProducts,
      }, {
        withCredentials: true,
      });
      navigate('/orders');
    } catch (e) {
      console.error('Error sending order:', e);
    }
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(removeItems(id));  
    dispatch(addItems([{ product: { ...cartItems.find(item => item.id === id), quantity } }])); 
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  const shippingEstimate = 5.00;
  const taxEstimate = subtotal * 0.08;
  const orderTotal = subtotal + shippingEstimate + taxEstimate;

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>
      <form>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Items List */}
          <section aria-labelledby="cart-heading" className="flex-1">
            <h2 id="cart-heading" className="text-xl font-semibold mb-4">Items in your shopping cart</h2>
            <ul role="list" className="divide-y divide-gray-200">
              {cartItems.length === 0 ? (
                <p>No products available.</p>
              ) : (
                cartItems.map(item => (
                  <li key={item.id} className="flex py-6">
                    <div className="flex-shrink-0">
                      <img
                        alt={`Front of men's ${item.name} in ${item.color}`}
                        src={item.image}
                        className="h-24 w-24 object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                        <p className="ml-4 text-lg font-medium text-gray-900">${item.price}</p>
                      </div>
                      <div className="flex items-center mt-2">
                        <p className="text-sm text-gray-500">Color: {item.color}</p>
                        <p className="ml-4 text-sm text-gray-500">Size: Large</p>
                      </div>
                      <div className="flex items-center mt-4">
                        <label htmlFor={`quantity-${item.id}`} className="text-sm text-gray-700">Quantity:</label>
                        <select
                          id={`quantity-${item.id}`}
                          value={item?.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                          className="ml-2 border border-gray-300 rounded-md p-1"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(qty => (
                            <option key={qty} value={qty}>{qty}</option>
                          ))}
                        </select>
                        <button
                          type="button"
                          onClick={() => removeProduct(item.id)}
                          className="ml-4 text-sm text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </section>

          {/* Order Summary */}
          <div>
            {cartItems.length === 0 ? (
              <p>No products available.</p>
            ) : (
              <section aria-labelledby="summary-heading" className="w-full lg:w-80 bg-gray-50 p-6 rounded-lg shadow-md mt-8 lg:mt-0">
                <h2 id="summary-heading" className="text-xl font-semibold mb-4">Order Summary</h2>
                <dl className="space-y-4">
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Subtotal</dt>
                    <dd className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Shipping Estimate</dt>
                    <dd className="text-sm font-medium text-gray-900">${shippingEstimate.toFixed(2)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-sm text-gray-500">Tax Estimate</dt>
                    <dd className="text-sm font-medium text-gray-900">${taxEstimate.toFixed(2)}</dd>
                  </div>
                  <div className="flex justify-between border-t border-gray-200 pt-4">
                    <dt className="text-lg font-semibold text-gray-900">Order Total</dt>
                    <dd className="text-lg font-semibold text-gray-900">${orderTotal.toFixed(2)}</dd>
                  </div>
                </dl>
                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    onClick={sendOrder}
                  >
                    Checkout
                  </button>
                </div>
              </section>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CartPage;
