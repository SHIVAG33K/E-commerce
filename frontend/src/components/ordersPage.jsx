import React from 'react';

const OrderPage = () => {
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
          <OrderItem 
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
          />

          <OrderItem 
            orderNumber="AT48441546" 
            datePlaced="Dec 22, 2020" 
            totalAmount="$40.00"
            items={[
              {
                name: "Double Stack Clothing Bag",
                price: "$40.00",
                description: "Save space and protect your favorite clothes in this double-layer garment bag.",
                imageUrl: "https://tailwindui.com/plus/img/ecommerce-images/order-history-page-03-product-03.jpg",
                deliveredDate: "January 5, 2021"
              }
            ]}
          />
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
      {items.map((item, index) => (
        <div key={index} className="flex items-start space-x-4">
          <img
            className="w-24 h-24 object-cover rounded-md shadow-md"
            src={item.imageUrl}
            alt={item.name}
          />
          <div className="flex-1">
            <h5 className="text-lg font-semibold text-gray-800">{item.name}</h5>
            <p className="text-sm text-gray-500">{item.price}</p>
            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            <p className="text-sm text-gray-400 mt-2">Delivered on {item.deliveredDate}</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">View product</a>
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Buy again</a>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="text-right">
      <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Order Options</button>
    </div>
  </div>
);

export default OrderPage;
