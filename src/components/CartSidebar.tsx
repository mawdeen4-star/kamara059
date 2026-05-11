/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types.ts';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export default function CartSidebar({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemove 
}: CartSidebarProps) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            <div className="p-8 border-b border-gray-100 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-display font-bold uppercase tracking-tight">Your Cart</h2>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <Trash2 className="text-gray-300" size={32} />
                  </div>
                  <h3 className="font-bold uppercase tracking-tight mb-2">Empty Bag</h3>
                  <p className="text-sm text-gray-500 max-w-[200px]">
                    Looks like you haven't added anything to your collection yet.
                  </p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="w-24 h-32 bg-gray-100 overflow-hidden shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex flex-col justify-between flex-1 py-1">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="text-sm font-bold uppercase tracking-tight">{item.name}</h4>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="p-1 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-all"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-[10px] font-bold text-brand-accent uppercase tracking-widest">{item.category}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 bg-gray-50 px-3 py-1 border border-gray-100">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="text-gray-400 hover:text-brand-primary"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-xs font-mono font-bold w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="text-gray-400 hover:text-brand-primary"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="text-sm font-mono font-bold">GH₵{item.price * item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="p-8 border-t border-gray-100 bg-gray-50/50">
              <div className="flex justify-between items-end mb-8">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Subtotal</p>
                  <p className="text-xs text-gray-500 italic">Shipping & taxes calculated at checkout</p>
                </div>
                <p className="text-3xl font-display font-bold tracking-tight">GH₵{total}</p>
              </div>
              <button 
                disabled={items.length === 0}
                onClick={() => {
                  const itemsList = items.map(item => `- ${item.name} (x${item.quantity}): GH₵${item.price * item.quantity}`).join('\n');
                  const message = encodeURIComponent(
                    `Hello Rockets Boutique! I would like to place an order:\n\n${itemsList}\n\n*Total: GH₵${total}*\n\nPlease let me know how to proceed with payment and delivery.`
                  );
                  window.open(`https://wa.me/233598309392?text=${message}`, '_blank');
                }}
                className="w-full bg-brand-primary text-white py-5 flex items-center justify-center gap-3 font-bold uppercase tracking-[0.2em] text-sm hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Place Order via WhatsApp <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
