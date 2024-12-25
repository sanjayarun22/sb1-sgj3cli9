import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#products', label: 'Products' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map(item => (
          <a 
            key={item.href}
            href={item.href}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg">
            <div className="px-4 py-2 space-y-2">
              {navItems.map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}