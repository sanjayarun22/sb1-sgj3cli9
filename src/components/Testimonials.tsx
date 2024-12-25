import React from 'react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Leading Brands
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            See what our clients have to say about our packaging solutions
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-8 shadow-sm">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.personName}
                />
                <div className="ml-4">
                  <p className="text-lg font-semibold text-gray-900">{testimonial.personName}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-blue-600 font-medium">{testimonial.companyName}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}