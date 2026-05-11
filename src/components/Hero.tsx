/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-20 overflow-hidden bg-brand-secondary/30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-xs font-bold tracking-[0.4em] uppercase text-brand-accent mb-6">
              Spring / Summer Collection 2026
            </span>
            <h1 className="text-7xl lg:text-[9rem] font-display font-bold leading-[0.8] tracking-tighter mb-10 bg-clip-text text-transparent bg-gradient-to-br from-brand-primary via-brand-primary to-brand-accent/50">
              HOME OF<br />QUALITY DRESSES
            </h1>
            <p className="text-xl text-gray-600 max-w-md mb-12 font-medium leading-relaxed">
              Discover a curated collection of premium dresses and high-end apparel. Precision engineered for style, quality, and durability.
            </p>
            <div className="flex flex-wrap gap-5">
              <button className="px-12 py-6 bg-brand-primary text-white font-bold uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-95 transition-all flex items-center gap-4 group">
                Purchase Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-12 py-6 border border-brand-primary/20 font-bold uppercase tracking-widest text-xs hover:bg-brand-primary hover:text-white transition-all shadow-sm">
                View Archive
              </button>
            </div>
          </motion.div>
        </div>

        <div className="relative h-[600px] lg:h-[850px] group/hero">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-0 overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200&h=1600" 
              alt="High fashion editorial urban techwear" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover/hero:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-primary/5 mix-blend-multiply" />
          </motion.div>
          <div className="absolute bottom-12 -left-12 w-80 h-80 border-t border-l border-brand-primary/20 hidden lg:block -z-10" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] hidden lg:block -z-10" />
          
          {/* Floating Data Point */}
          <div className="absolute top-20 left-10 bg-white/80 backdrop-blur-xl border border-white/50 p-4 shadow-2xl hidden lg:block">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-accent mb-1">Index Ver.</span>
            <span className="block font-mono text-xs font-medium">SS26_COL_001</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-gradient-to-b from-brand-primary/50 to-transparent"
        />
      </div>
    </section>
  );
}
