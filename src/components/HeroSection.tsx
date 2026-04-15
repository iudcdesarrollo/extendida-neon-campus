
'use client';

import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-22 md:pt-24 pb-4">
      <section className="relative bg-gradient-to-br from-[#1a0f2e] via-[#0f0a1f] to-[#0c0f1a] overflow-hidden rounded-3xl max-w-7xl mx-auto">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-16 left-10 w-24 h-24 border border-primary-purple/20 rounded-full animate-float"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border border-primary-blue/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-16 left-20 w-12 h-12 border border-accent-purple/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-primary-purple/8 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative px-6 sm:px-10 lg:px-14 py-8 md:py-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Content */}
            <div className="text-center lg:text-left animate-slide-up">
              <h1 className="text-3xl md:text-5xl font-sora font-bold text-white mb-4 leading-tight">
                <span className="sm:whitespace-nowrap">Domina las <span className="bg-subtle-gradient bg-clip-text text-transparent">tecnologías</span></span> que están cambiando el mundo
              </h1>

              <p className="text-base md:text-lg text-gray-300 mb-6 font-inter leading-relaxed max-w-lg mx-auto lg:mx-0">
                Cursos cortos 100% prácticos en IA, 3D, Realidad Aumentada y más.
                Aprende con proyectos reales y conecta con la industria.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Link href="/cursos" className="group relative inline-flex items-center justify-center gap-3 text-white px-10 py-4 rounded-full font-sora font-semibold text-base overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-primary-purple/40 backdrop-blur-xl">
                  <span className="absolute inset-0 bg-subtle-gradient opacity-90"></span>
                  <span className="absolute inset-0 bg-white/0 group-hover:bg-white/15 backdrop-blur-sm transition-colors"></span>
                  <span className="relative">Explorar cursos</span>
                  <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>

                <button
                  onClick={() => window.open('https://tally.so/r/mON5B7', '_blank')}
                  className="group relative inline-flex items-center justify-center gap-3 text-white hover:text-white px-10 py-4 rounded-full font-sora font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-white/10"
                >
                  <span className="absolute inset-0 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/[0.2] group-hover:bg-white/[0.15] group-hover:border-white/[0.35] transition-all"></span>
                  <span className="relative flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </span>
                    ¿Qué curso va conmigo?
                  </span>
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-subtle-gradient opacity-20 animate-glow z-0"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-primary-blue animate-spin z-0" style={{animationDuration: '20s'}}></div>

                <div className="relative z-10">
                  <img
                    src="/extendida-neon-campus/lovable-uploads/32c8996e-c8cd-4bba-a02c-c1659526eb9f.png"
                    alt="Tecnología futurista - Aula Extendida"
                    className="w-full max-w-[280px] md:max-w-[320px] h-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
