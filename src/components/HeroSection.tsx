
'use client';

import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-tech-gradient overflow-hidden flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-purple/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-primary-blue/30 rounded-lg rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-20 w-16 h-16 border border-accent-purple/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-32 w-20 h-20 border border-accent-blue/30 rounded-lg animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-slide-up">
            <h1 className="text-4xl md:text-6xl font-sora font-bold text-white mb-6 leading-relaxed">
              Domina las
              <span className="block bg-subtle-gradient bg-clip-text text-transparent">
                tecnologías
              </span>
              que están cambiando el mundo
            </h1>

            <p className="text-xl text-gray-300 mb-8 font-inter leading-relaxed">
              Cursos cortos 100% prácticos en IA, 3D, Realidad Aumentada y más.
              Aprende con proyectos reales y conecta con la industria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/cursos" className="bg-subtle-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:shadow-primary-purple/50 transition-all duration-300 transform hover:scale-105 inline-block text-center">
                Explora los cursos
              </Link>

              <button
                onClick={() => window.open('https://tally.so/r/mON5B7', '_blank')}
                className="border-2 border-primary-blue text-primary-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-blue hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Escoge el mejor curso para ti
              </button>
            </div>
          </div>

          {/* Image with Futuristic Visual Elements */}
          <div className="relative flex justify-center lg:justify-end animate-float">
            <div className="relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-subtle-gradient opacity-20 animate-glow z-0"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border-2 border-primary-blue animate-spin z-0" style={{animationDuration: '20s'}}></div>

              <div className="relative z-10">
                <img
                  src="/extendida-neon-campus/lovable-uploads/32c8996e-c8cd-4bba-a02c-c1659526eb9f.png"
                  alt="Tecnología futurista - Aula Extendida"
                  className="w-96 h-auto object-contain animate-float"
                />
              </div>

              <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary-blue/30 rounded-lg rotate-45 animate-float z-0"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-accent-purple/30 rounded-full animate-float z-0" style={{animationDelay: '2s'}}></div>

              <div className="absolute top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary-purple rounded-full flex items-center justify-center z-0">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
