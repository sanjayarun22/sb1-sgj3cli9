import { useState, useEffect } from 'react';
import { Product } from '../types';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Premium Saree Box',
      description: 'Elegant packaging solution for luxury sarees',
      image: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&q=80',
      category: 'saree'
    },
    {
      id: '2',
      name: 'Wedding Collection Box',
      description: 'Special packaging for bridal collections',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80',
      category: 'wedding'
    },
    {
      id: '3',
      name: 'Luxury Gift Box',
      description: 'Premium gift packaging for special occasions',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80',
      category: 'gift'
    }
  ]);

  // In a real application, you would fetch products from an API
  useEffect(() => {
    // Fetch products from API
  }, []);

  return { products };
}