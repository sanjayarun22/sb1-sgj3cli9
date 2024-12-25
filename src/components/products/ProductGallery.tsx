import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { useProducts } from '../../hooks/useProducts';

export default function ProductGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { products } = useProducts();

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div key={product.id} className="flex-none w-full md:w-1/2 lg:w-1/3 snap-start">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      
      <div className="hidden md:block">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
          aria-label="Previous product"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
          aria-label="Next product"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}