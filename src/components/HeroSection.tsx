
'use client';

import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-tech-gradient overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-10 w-24 h-24 border border-primary-purple/20 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-primary-blue/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-16 left-20 w-12 h-12 border border-accent-purple/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:pt-28 md:pb-14">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-3xl md:text-5xl font-sora font-bold text-white mb-4 leading-tight">
              Domina las
              <span className="block bg-subtle-gradient bg-clip-text text-transparent">
                tecnologías
              </span>
              que están cambiando el mundo
            </h1>

            <p className="text-base md:text-lg text-gray-300 mb-6 font-inter leading-relaxed max-w-lg mx-auto lg:mx-0">
              Cursos cortos 100% prácticos en IA, 3D, Realidad Aumentada y más.
              Aprende con proyectos reales y conecta con la industria.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link href="/cursos" className="bg-subtle-gradient text-white px-6 py-3 rounded-lg font-semibold text-sm hover:shadow-xl hover:shadow-primary-purple/50 transition-all duration-300 transform hover:scale-105 inline-block text-center">
                Explora los cursos
              </Link>

              <button
                onClick={() => window.open('https://tally.so/r/mON5B7', '_blank')}
                className="border border-primary-blue text-primary-blue px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-blue hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Escoge el mejor curso para ti
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
                  className="w-72 md:w-80 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
