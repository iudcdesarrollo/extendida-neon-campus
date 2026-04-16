import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Target, Rocket, Lightbulb, Handshake, Palette, Zap, Wrench, Building, Gem } from 'lucide-react';

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />

      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-4">
        <section className="relative bg-gradient-to-br from-[#1a0f2e] via-[#0f0a1f] to-[#0c0f1a] overflow-hidden rounded-3xl max-w-7xl mx-auto">
          <div className="absolute inset-0 hidden sm:block">
            <div className="absolute top-16 right-16 w-32 h-32 border border-primary-purple/20 rounded-full animate-float"></div>
            <div className="absolute bottom-16 left-16 w-24 h-24 border border-primary-blue/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary-purple/10 rounded-full blur-3xl"></div>
          </div>
          <div className="relative px-6 sm:px-10 lg:px-14 py-10 md:py-14 text-center">
            <h1 className="text-3xl md:text-5xl font-sora font-bold text-white mb-4 leading-tight">
              Quiénes{' '}
              <span className="bg-subtle-gradient bg-clip-text text-transparent">Somos</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 font-inter max-w-2xl mx-auto">
              En el Centro Interdisciplinar de Creación Digital de la Institución Universitaria de Colombia somos pioneros en la formación tecnológica del futuro.
            </p>
          </div>
        </section>
      </div>

      {/* Mission and Vision */}
      <section className="py-10 md:py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Mission */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary-purple/20 rounded-full animate-glow"></div>
              <div className="bg-white p-8 rounded-2xl border border-primary-purple/30 hover:border-primary-purple/60 transition-all duration-300 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-subtle-gradient rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900">Misión</h2>
                </div>
                <p className="text-gray-600 font-inter text-lg leading-relaxed">
                  Formar líderes creativos preparados para afrontar el presente y futuro tecnológico,
                  proporcionando educación práctica y actualizada en las tecnologías más innovadoras
                  y demandadas del mercado digital actual.
                </p>
                <div className="mt-6 w-full h-0.5 bg-subtle-gradient"></div>
              </div>
            </div>

            {/* Vision */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-blue/20 rounded-lg rotate-45 animate-float"></div>
              <div className="bg-white p-8 rounded-2xl border border-primary-blue/30 hover:border-primary-blue/60 transition-all duration-300 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-blue to-accent-purple rounded-lg flex items-center justify-center mr-4">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900">Visión</h2>
                </div>
                <p className="text-gray-600 font-inter text-lg leading-relaxed">
                  Ser la comunidad de aprendizaje más dinámica de Latinoamérica en innovación digital,
                  reconocida por formar profesionales que lideran la transformación tecnológica
                  en sus industrias y comunidades.
                </p>
                <div className="mt-6 w-full h-0.5 bg-gradient-to-r from-primary-blue to-accent-purple"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-10 md:py-20 bg-tech-gradient relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-accent-blue/50 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 border border-accent-purple/50 rounded-lg rotate-12"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-sora font-bold text-gray-900 mb-6">
              Nuestros{' '}
              <span className="bg-subtle-gradient bg-clip-text text-transparent">
                Valores
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: 'Innovación', description: 'Siempre a la vanguardia de las tecnologías emergentes' },
              { icon: Handshake, title: 'Colaboración', description: 'Construimos comunidades de aprendizaje colaborativo' },
              { icon: Palette, title: 'Creatividad', description: 'Fomentamos el pensamiento creativo y la experimentación' },
              { icon: Zap, title: 'Excelencia', description: 'Comprometidos con la calidad en todo lo que hacemos' },
            ].map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-20 h-20 bg-subtle-gradient rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-glow">
                    <IconComponent className="w-10 h-10 text-gray-600" />
                  </div>
                  <h3 className="text-lg md:text-xl font-sora font-bold text-gray-900 mb-3 group-hover:text-primary-purple transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-inter">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-10 md:py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-sora font-bold text-gray-900 mb-6">
              Nuestro{' '}
              <span className="bg-subtle-gradient bg-clip-text text-transparent">
                Enfoque
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: 'Educación Práctica', description: 'Aprendizaje 100% hands-on con proyectos reales desde el primer día.', icon: Wrench },
              { title: 'Conexión Industrial', description: 'Vínculos directos con empresas líderes en tecnología y diseño digital.', icon: Building },
              { title: 'Futuro Presente', description: 'Tecnologías emergentes que están definiendo el futuro hoy.', icon: Gem },
            ].map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl border border-primary-purple/20 hover:border-primary-purple/50 transition-all duration-300 text-center group hover:-translate-y-2">
                  <div className="mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    <IconComponent className="w-12 h-12 text-gray-600" />
                  </div>
                  <h3 className="text-2xl font-sora font-bold text-gray-900 mb-4 group-hover:text-primary-purple transition-colors">
                    {approach.title}
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
