import React from 'react';
import { useNavigate } from 'react-router-dom';

const PopularCategories = () => {
  const navigate = useNavigate(); // Note the () to call the hook correctly

  // Create a navigation handler function
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Shop by Category</h2>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* New Arrivals Category */}
        <div 
          className="relative rounded-lg overflow-hidden cursor-pointer" 
          onClick={() => handleNavigation("/products")}
        >
          <img
            alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-featured-category.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div>
              <h3 className="text-xl font-semibold">
                New Arrivals
              </h3>
              <p className="mt-2">Shop now</p>
            </div>
          </div>
        </div>

        {/* Accessories Category */}
        <div 
          className="relative rounded-lg overflow-hidden cursor-pointer" 
          onClick={() => handleNavigation("/products")}
        >
          <img
            alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-category-01.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div>
              <h3 className="text-xl font-semibold">
               Accessories
              </h3>
              <p className="mt-2">Shop now</p>
            </div>
          </div>
        </div>

        {/* Workspace Category */}
        <div 
          className="relative rounded-lg overflow-hidden cursor-pointer" 
          onClick={() => handleNavigation("/products")}
        >
          <img
            alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
            src="https://tailwindui.com/plus/img/ecommerce-images/home-page-03-category-02.jpg"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-25"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white">
            <div>
              <h3 className="text-xl font-semibold">
                Workspace
              </h3>
              <p className="mt-2">Shop now</p>
            </div>
          </div>
        </div>
      </div>

      {/* Browse All Categories Button */}
      <div 
        className="flex justify-center mt-6 cursor-pointer" 
        onClick={() => handleNavigation("/products")}
      >
        <div className="text-blue-500 flex items-center">
          Browse all categories <span aria-hidden="true"> →</span>
        </div>
      </div>
    </div>
  );
}

export default PopularCategories;