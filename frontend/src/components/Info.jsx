import React from 'react';

const BusinessInfo = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-24 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">
            We built our business on great customer service
          </h2>
          <p className="mt-4 text-gray-600">
            At the beginning at least, but then we realized we could make a lot more money if we kinda stopped caring about that. Our new strategy is to write a bunch of things that look really good in the headlines, then clarify in the small print but hope people don't actually read it.
          </p>
        </div>
        <div className="relative">
          <img
            alt="Business image"
            src="https://tailwindui.com/plus/img/ecommerce-images/incentives-07-hero.jpg"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {/* Free Shipping */}
        <div className="flex flex-col items-start">
          <img
            alt="Shipping icon"
            src="https://tailwindui.com/plus/img/ecommerce/icons/icon-shipping-simple.svg"
            className="h-12 w-12 text-indigo-600"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Free shipping</h3>
          <p className="mt-2 text-gray-600">
            It's not actually free we just price it into the products. Someone's paying for it, and it's not us.
          </p>
        </div>

        {/* Warranty */}
        <div className="flex flex-col items-start">
          <img
            alt="Warranty icon"
            src="https://tailwindui.com/plus/img/ecommerce/icons/icon-warranty-simple.svg"
            className="h-12 w-12 text-indigo-600"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">10-year warranty</h3>
          <p className="mt-2 text-gray-600">
            If it breaks in the first 10 years we'll replace it. After that you're on your own though.
          </p>
        </div>

        {/* Exchanges */}
        <div className="flex flex-col items-start">
          <img
            alt="Exchange icon"
            src="https://tailwindui.com/plus/img/ecommerce/icons/icon-exchange-simple.svg"
            className="h-12 w-12 text-indigo-600"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">Exchanges</h3>
          <p className="mt-2 text-gray-600">
            If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfo;
