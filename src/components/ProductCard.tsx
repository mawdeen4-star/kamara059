/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Plus, Eye } from 'lucide-react';
import { Product } from '../types.ts';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
  index?: number;
  key?: string | number;
}

export default function ProductCard({ product, onAddToCart, index = 0 }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F2F2F2] mb-6">
        <img 
          src={product.image} 
          alt={`${product.name} - ${product.description}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        
        <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <button 
            onClick={() => onAddToCart(product)}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-brand-primary hover:bg-brand-accent hover:text-white transition-colors"
          >
            <Plus size={24} />
          </button>
          <button className="w-14 h-14 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-brand-primary transition-colors">
            <Eye size={24} />
          </button>
        </div>

        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur text-[10px] font-bold uppercase tracking-widest">
            {product.category}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-2 group-hover:text-brand-accent transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider font-medium line-clamp-1 max-w-[200px]">
            {product.description}
          </p>
        </div>
        <p className="text-xs font-mono font-medium text-brand-primary/70">GH₵{product.price}</p>
      </div>
    </motion.div>
  );
}
