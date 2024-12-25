import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { addresses } from '../data/addresses';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Get in touch with our team for custom packaging solutions
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {addresses.map((address) => (
            <div key={address.id} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{address.title}</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div className="ml-4">
                    <p className="text-gray-700">{address.street}</p>
                    <p className="text-gray-700">{address.city}, {address.state}</p>
                    <p className="text-gray-700">{address.pincode}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <p className="ml-4 text-gray-700">{address.phone}</p>
                </div>

                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <p className="ml-4 text-gray-700">{address.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}