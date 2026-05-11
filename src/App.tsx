/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import ProductGrid from './components/ProductGrid.tsx';
import CartSidebar from './components/CartSidebar.tsx';
import Footer from './components/Footer.tsx';
import { Product, CartItem } from './types.ts';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar 
        cartCount={cartCount} 
        onCartToggle={() => setIsCartOpen(!isCartOpen)} 
      />
      
      <main>
        <Hero />
        
        {/* Featured Section Banner */}
        <section id="banner" className="bg-brand-primary py-12 overflow-hidden border-y border-white/10">
          <div className="flex animate-marquee-slow whitespace-nowrap gap-24 items-center">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-24">
                <span className="text-white text-xs font-bold uppercase tracking-[0.4em] opacity-40">Architectural Silhouettes</span>
                <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.4em]">Future Proofing Essentials</span>
              </div>
            ))}
          </div>
        </section>

        <section id="collection">
          <ProductGrid onAddToCart={addToCart} />
        </section>

        {/* Quality & Craftsmanship Section */}
        <section id="quality" className="bg-white py-32 px-6 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-accent mb-8 block">Craftsmanship</span>
                <h2 className="text-5xl lg:text-7xl font-display font-bold leading-tight tracking-tighter mb-12">
                  ENGINEERED FOR<br />THE EXTRAORDINARY.
                </h2>
                <div className="space-y-12">
                  <div className="border-l-2 border-brand-accent pl-8">
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Premium Fabrics</h4>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                      We source our textiles from the world's most innovative mills. Our 2026 collection features water-reactive membranes and bio-derived synthetics.
                    </p>
                  </div>
                  <div className="border-l-2 border-gray-200 pl-8">
                    <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Technical Precision</h4>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                      Every seam is ultrasonically welded or double-stitched for extreme durability. Clothing designed to last a lifetime, not a season.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square bg-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558603668-6570496b66f8?auto=format&fit=crop&q=80&w=1200" 
                  alt="Textile detail and craftsmanship" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 right-8 bg-white p-6 shadow-2xl">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-widest text-brand-primary/40 mb-2">Microscopic View</p>
                  <p className="font-mono text-xs">FIBER_DENSITY_STAKE: 98%</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Philosophy Section */}
        <section id="philosophy" className="bg-brand-secondary/50 py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-8 block">Our Philosophy</span>
            <h2 className="text-4xl lg:text-5xl font-display font-medium leading-tight tracking-tight text-brand-primary/80 italic">
              "We believe in clothing as armor—minimalist, durable, and technologically advanced. Each piece is meticulously engineered for the urban nomad of 2026."
            </h2>
          </div>
        </section>
      </main>

      <Footer />

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  );
}
