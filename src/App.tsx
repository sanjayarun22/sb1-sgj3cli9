import React from 'react';
import SEO from './components/SEO';
import Header from './components/layout/Header';
import Hero from './components/Hero';
import ProductGallery from './components/products/ProductGallery';
import TestimonialGallery from './components/testimonials/TestimonialGallery';
import Contact from './components/Contact';
import Breadcrumb from './components/Breadcrumb';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SEO />
      <Header />
      <div className="pt-16">
        <Breadcrumb items={[
          { label: 'Products', href: '#products' },
          { label: 'Contact', href: '#contact' }
        ]} />
        <Hero />
        <section id="products" className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Products
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                Discover our range of premium packaging solutions
              </p>
            </div>
            <ProductGallery />
          </div>
        </section>
        <section id="testimonials" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Trusted by Leading Brands
              </h2>
              <p className="mt-4 text-xl text-gray-500">
                See what our clients have to say about our packaging solutions
              </p>
            </div>
            <TestimonialGallery />
          </div>
        </section>
        <Contact />
      </div>
    </div>
  );
}

export default App;