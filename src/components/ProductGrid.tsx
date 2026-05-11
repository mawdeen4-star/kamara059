/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import ProductCard from './ProductCard.tsx';
import { Product } from '../types.ts';
import { PRODUCTS } from '../constants.ts';
import { useState } from 'react';

interface ProductGridProps {
  onAddToCart: (p: Product) => void;
}

export default function ProductGrid({ onAddToCart }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all ${
                selectedCategory === cat 
                  ? 'bg-brand-primary text-white' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        {filteredProducts.map((product, idx) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={onAddToCart}
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}
