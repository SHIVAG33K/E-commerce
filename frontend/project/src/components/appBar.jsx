import { useState } from 'react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

function AppBar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Store label */}
      <h1 className="text-lg font-bold">STORE</h1>

      {/* Search bar */}
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        {/* Profile Icon with Dropdown */}
        <div className="relative group">
          <FaUser className="text-xl cursor-pointer" />

          {/* Dropdown menu that appears on hover */}
          <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Profile</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Edit Profile</a>
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Log Out</a>
          </div>
        </div>

        {/* Cart Icon */}
        <div className="relative">
          <FaShoppingCart className="text-xl cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-semibold rounded-full px-1">0</span>
        </div>
      </div>
    </div>
  );
}

export default AppBar;
