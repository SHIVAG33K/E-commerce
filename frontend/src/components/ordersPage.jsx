import React, { useEffect, useState } from 'react';
import axios from "axios";
import { createOrders } from '../features/orderSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';

const OrderPage = () => {
  const [data, setData] = useState([])
  const dispatch = useDispatch();
  const url = "https://ecom-backend-production-a959.up.railway.app/api/orders/"
  // const url = 'http://localhost:3000/api/orders/'

  // const fetchData = async() => {
  //   const data = await axios.get("http://localhost:3000/api/orders/",{
  //     withCredentials: true
  //   });
  //   ;
  // };
  const { orders } = useSelector(state => state.orders);
  const shouldFetch = orders.length === 0;
  const fetchData = async () => {
    try {
      const data = await axios.get(url, {
        withCredentials: true
      });
      if (data.data) {
        setData(data)
        dispatch(createOrders(data.data));
      }
      return data.data;
    } catch (e) {
      console.error(e);
      return null; 
    }
  };

  const {  isLoading, isError, error } = useQuery({
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

  // useEffect(() => {
  //   fetchData();
  // },[]) 
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const year = today.getFullYear();
  
  const formattedDate = `${month}/${day}/${year}`|| "12/02/2024";
  
  return (
    <div className="px-6 py-8 sm:px-24 bg-gray-100 min-h-screen">
      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl text-left	font-bold text-gray-900">Order History</h1>
          <p className="text-lg text-left	text-gray-500 mt-2">
            Check the status of recent orders, manage returns, and explore similar products.
          </p>
        </div>

        <div className="space-y-8">
        {data.length === 0 ? (
                <p>No products available.</p>
              ) : (

                <OrderItem 
                  orderNumber="AT48441546" 
                  datePlaced={formattedDate}
                  totalAmount="$40.00"x
                  items={data.data}
                />  )}


          {/* <OrderItem 
            orderNumber="WU88191111" 
            datePlaced="Jul 6, 2021" 
            totalAmount="$160.00"
            items={[
              {
                name: "Micro Backpack",
                price: "$70.00",
                description: "The Micro Backpack is the perfect size for your essential everyday carry items.",
                imageUrl: "https://tailwindui.com/plus/img/ecommerce-images/order-history-page-03-product-01.jpg",
                deliveredDate: "July 12, 2021"
              },
              {
                name: "Nomad Shopping Tote",
                price: "$90.00",
                description: "This durable shopping tote is perfect for the world traveler.",
                imageUrl: "https://tailwindui.com/plus/img/ecommerce-images/order-history-page-03-product-02.jpg",
                deliveredDate: "July 12, 2021"
              }
            ]}
          /> */}
        </div>
      </div>
    </div>
  );
};

const OrderItem = ({ orderNumber, datePlaced, totalAmount, items }) => (
  <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="text-lg font-semibold text-gray-700">
        Order placed on <time>{datePlaced}</time>
      </h3>
    
    </div>
    <dl className="grid grid-cols-3 gap-4 text-sm text-gray-500">
      <div>
        <dt className="font-medium text-gray-700">Order number</dt>
        <dd>{orderNumber}</dd>
      </div>
      <div>
        <dt className="font-medium text-gray-700">Date placed</dt>
        <dd>{datePlaced}</dd>
      </div>
    </dl>

    <div className="space-y-6">
    {items.length === 0 ? (
    <p>No products available.</p>
       ) : (
      items.map((item, index) => (
        item.product ? (
        <div key={index} className="flex items-start space-x-4">
          <img
            className="w-24 h-24 object-cover rounded-md shadow-md"
            src={item.product.image}
            alt={item.name}
          />
          <div className="flex-1">
            <h5 className="text-lg font-semibold text-gray-800">{item.product.name}</h5>
            {/* <p className="text-sm text-gray-500">{item.product.price}</p> */}
            <p className="text-sm text-gray-500 mt-1">{item.product.description}</p>
            <p className="text-sm text-gray-400 mt-2">Delivered on {item.product.deliveredDate}</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">View product</a>
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Buy again</a>
            </div>
          </div>
        </div>
            ) :  <p>No products available.</p> 
          ))
        )}
    </div>

    <div className="text-right">
      <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Order Options</button>
    </div>
  </div>
);

export default OrderPage;
