import React from 'react';
import { Package } from 'lucide-react';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Package className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Premium Pack</span>
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
}