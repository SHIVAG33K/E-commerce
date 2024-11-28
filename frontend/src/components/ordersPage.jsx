import React, { useEffect, useState } from 'react';
import axios from "axios";

const OrderPage = () => {
  const [data, setData] = useState([])

  const fetchData = async() => {
    const data = await axios.get("http://localhost:3000/api/orders/",{
      withCredentials: true
    });
    setData(data);
  };

  useEffect(() => {
    fetchData();
  },[]) 
  console.log(data);
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
                  datePlaced="Dec 28, 2024" 
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
      <span className="text-sm text-gray-500">{totalAmount}</span>
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
      <div>
        <dt className="font-medium text-gray-700">Total amount</dt>
        <dd>{totalAmount}</dd>
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
