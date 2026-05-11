/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Twitter, Facebook, ArrowUpRight, Phone, Mail, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-primary text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="lg:col-span-1">
            <div className="inline-block p-3 border border-white/20 mb-8">
              <span className="text-2xl font-display font-bold tracking-tighter uppercase italic">ROCKETS</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-12 text-sm leading-relaxed font-medium">
              Premium dresses and high-end apparel for the modern inhabitant. Precision engineered for quality. Established 2026.
            </p>
            <div className="flex gap-6">
              <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-brand-accent hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-brand-accent hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-3 border border-white/10 rounded-full hover:bg-brand-accent hover:text-white transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-8">Navigation</h3>
            <ul className="space-y-4">
              {[
                { name: 'Collection', link: '#collection' },
                { name: 'Quality', link: '#quality' },
                { name: 'Philosophy', link: '#philosophy' },
                { name: 'Archive', link: '#' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    {item.name} <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-8">Connect</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:0598309392" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-3">
                  <Phone size={16} className="text-brand-accent" /> 0598309392
                </a>
              </li>
              <li>
                <a href="https://wa.me/233598309392" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-3">
                  <MessageSquare size={16} className="text-brand-accent" /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:mawdeen4@gmail.com" className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-3">
                  <Mail size={16} className="text-brand-accent" /> mawdeen4@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-accent mb-8">Journal</h3>
            <p className="text-sm text-gray-400 mb-6 font-medium italic">Subscribe to receive updates on collections and early access.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full bg-white/5 border-b border-white/20 py-4 px-0 text-sm focus:border-white focus:outline-none transition-colors placeholder:text-gray-600"
              />
              <button className="absolute right-0 top-1/2 -translate-y-1/2 text-xs font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-500">
            © 2026 ROCKETS BOUTIQUE. ALL DATA ENCRYPTED.
          </p>
          <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Shipping</a>
          </div>
        </div>
      </div>
      
      {/* Cinematic Marquee */}
      <div className="mt-24 py-8 border-y border-white/5 opacity-5 pointer-events-none select-none overflow-hidden">
        <div className="animate-marquee-slow whitespace-nowrap flex gap-40">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-9xl font-display font-bold uppercase italic">
              Future Essentials Urban Edges Technical Craft
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
