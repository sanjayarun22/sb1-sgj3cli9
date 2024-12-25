import React from 'react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
      <div className="flex items-center">
        <img
          className="h-12 w-12 rounded-full"
          src={testimonial.image}
          alt={testimonial.personName}
          loading="lazy"
        />
        <div className="ml-4">
          <p className="text-lg font-semibold text-gray-900">{testimonial.personName}</p>
          <p className="text-gray-600">{testimonial.role}</p>
          <p className="text-blue-600 font-medium">{testimonial.companyName}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700 italic">"{testimonial.content}"</p>
    </div>
  );
}