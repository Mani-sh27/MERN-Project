import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="border-b border-gray-200 text-sm">
      {/* Top Banner */}
      <div className="bg-gray-100 py-2 px-4 flex justify-between items-center text-gray-600">
        <p>Get up to 50% off new season styles, limited time only</p>
        <div className="flex gap-4">
          <Link to="/help-center">Help Center</Link>
          <Link to="/order-tracking">Order Tracking</Link>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-10" />
          <div>
            <h1 className="text-xl font-bold">CLASSYSHOP</h1>
            <p className="text-xs text-gray-500">BIG MEGA STORE</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-8">
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search products here..."
              className="w-full px-4 py-2 outline-none"
            />
            <button className="bg-red-500 text-white px-4">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-gray-700">
          <Link to="/login" className="hover:text-red-500">Login / Register</Link>
          <FaHeart className="text-lg" />
          <div className="relative">
            <FaShoppingCart className="text-lg" />
            <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">1</span>
          </div>
        </div>
      </div>

      {/* Bottom Menu */}

    </header>
  );
};

export default Header;
