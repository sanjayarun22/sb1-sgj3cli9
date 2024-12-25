import React from 'react';
import { Package, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Package className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">PremiumBox</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-blue-600">Products</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-gray-700" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}