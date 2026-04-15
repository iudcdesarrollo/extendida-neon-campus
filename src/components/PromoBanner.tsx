'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

const PromoBanner = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary-purple overflow-hidden">
      <div className="relative h-9 flex items-center justify-center">
        {/* Scrolling text */}
        <div className="flex items-center gap-6 animate-promo-scroll whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <Link key={i} href="/curso/22" className="flex items-center gap-3 text-white no-underline">
              <span className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">-50%</span>
              <span className="text-xs font-inter">
                <strong className="font-sora">Toon Boom Harmony</strong>
                {' · '}
                <span className="line-through opacity-70">$800.000</span>
                {' → '}
                <strong className="text-yellow-300 font-sora">$400.000</strong>
                {' · Primeros 20 cupos'}
              </span>
              <span className="text-white/40 text-xs">|</span>
            </Link>
          ))}
        </div>

        {/* Close button */}
        <button
          onClick={() => setVisible(false)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors z-10"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      <style jsx>{`
        @keyframes promo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-promo-scroll {
          animation: promo-scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PromoBanner;
