import { useState, useEffect } from 'react';
import { Testimonial } from '../types';

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: '1',
      companyName: 'Sri Kumaran Silks',
      personName: 'Rajesh Kumar',
      role: 'Managing Director',
      content: 'Their packaging solutions have elevated our brand presence significantly. The quality and design of their saree boxes are unmatched in the industry.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
    },
    {
      id: '2',
      companyName: 'Pothys',
      personName: 'Ramesh Pothy',
      role: 'CEO',
      content: 'We have been working with them for over 5 years. Their attention to detail and commitment to quality has helped us maintain our premium brand image.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200'
    }
  ]);

  // In a real application, you would fetch testimonials from an API
  useEffect(() => {
    // Fetch testimonials from API
  }, []);

  return { testimonials };
}