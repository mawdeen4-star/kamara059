/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  cartCount: number;
  onCartToggle: () => void;
}

export default function Navbar({ cartCount, onCartToggle }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <button 
            className="lg:hidden p-2 -ml-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <a href="/" className="text-2xl font-bold tracking-tighter font-display uppercase">
            ROCKETS<span className="text-brand-accent">BOUTIQUE</span>
          </a>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-gray-500">
            <a href="#collection" className="hover:text-brand-primary transition-colors">Collection</a>
            <a href="#quality" className="hover:text-brand-primary transition-colors">Quality</a>
            <a href="#philosophy" className="hover:text-brand-primary transition-colors">Philosophy</a>
            <a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden sm:block p-2 text-gray-500 hover:text-brand-primary transition-colors">
            <Search size={20} />
          </button>
          <button 
            onClick={onCartToggle}
            className="p-2 relative text-brand-primary group"
          >
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 bg-brand-accent text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 px-6 py-12 flex flex-col gap-6"
        >
          <a href="#collection" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-medium uppercase">Collection</a>
          <a href="#quality" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-medium uppercase">Quality</a>
          <a href="#philosophy" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-medium uppercase">Philosophy</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-display font-medium uppercase">Contact</a>
        </motion.div>
      )}
    </nav>
  );
}
