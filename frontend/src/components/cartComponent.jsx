import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useFetchData } from './hooks';
import { useDispatch, useSelector } from 'react-redux';  
import {addItems, removeItems, clearCart } from '../features/cartSlice.js';

const CartPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { items, totalAmount } = useSelector(state => state.cart);
  
  const url = "http://localhost:3000/api/cart";
 

  
  const { isLoading, isError, data, error } = useFetchData(url,addItems)

  const cartItems = data || [];
  


  const removeProduct = async (id) => {
    const data = await axios.delete(`http://localhost:3000/api/cart/${id}`,{
      withCredentials: true,
    })
  }
  const fixed = {
    size: 'Large',
    inStock: true,
    estimatedShipping: 'Ships in 3–4 weeks',
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const allProducts = []
  cartItems.map(item => allProducts.push(item.product.id))


  const sendOrder = async()=>{
    const data = await axios.post("http://localhost:3000/api/orders/",{
      product_id : allProducts 
    },{
      withCredentials: true,
    })
    navigate("/orders")
  }

  const handleQuantityChange = (id, quantity) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const subtotal = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const shippingEstimate = 5.00;
  const taxEstimate = subtotal * 0.08;
  const orderTotal = subtotal + shippingEstimate + taxEstimate;

  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>
      <form>
        <div className="flex space-x-8">
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
                        alt={`Front of men's ${item.product.name} in ${item.product.color}`}
                        src={item.product.image}
                        className="h-24 w-24 object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <h3 className="text-lg font-medium text-gray-900">{item.product.name}</h3>
                        <p className="ml-4 text-lg font-medium text-gray-900">${item.product.price}</p>
                      </div>
                      <div className="flex items-center mt-2">
                        <p className="text-sm text-gray-500">Color: {item.product.color}</p>
                        <p className="ml-4 text-sm text-gray-500">Size: {fixed.size}</p>
                      </div>
                      <div className="flex items-center mt-4">
                        <label htmlFor={`quantity-${item.id}`} className="text-sm text-gray-700">Quantity:</label>
                        <select
                          id={`quantity-${item.id}`}
                          value={item.quantity}
                          onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                          className="ml-2 border border-gray-300 rounded-md p-1"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(qty => (
                            <option key={qty} value={qty}>{qty}</option>
                          ))}
                        </select>
                        <button
                          type="button"
                          onClick={() => {
                            removeItem(item.id)
                            removeProduct(item.id)
                          }
                          }
                          className="ml-4 text-sm text-red-600 hover:text-red-800"
                        >
                          Remove
                        </button>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">
                        {fixed.inStock ? (
                          <p>In stock</p>
                        ) : (
                          <p className="text-gray-400">Out of stock</p>
                        )}
                        <p>{fixed.estimatedShipping}</p>
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
              <section aria-labelledby="summary-heading" className="w-80 bg-gray-50 p-6 rounded-lg shadow-md">
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
