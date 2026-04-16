import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Target, Rocket, Lightbulb, Handshake, Palette, Zap, Wrench, Building, Gem } from 'lucide-react';

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />

      {/* Hero */}
      <div className="px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-4">
        <section className="relative bg-gradient-to-br from-[#1a0f2e] via-[#0f0a1f] to-[#0c0f1a] overflow-hidden rounded-3xl max-w-7xl mx-auto">
          <div className="absolute inset-0 hidden sm:block">
            <div className="absolute top-16 right-16 w-32 h-32 border border-primary-purple/20 rounded-full sm:animate-float"></div>
            <div className="absolute bottom-16 left-16 w-24 h-24 border border-primary-blue/20 rounded-lg rotate-45 sm:animate-float" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary-purple/10 rounded-full blur-2xl"></div>
          </div>
          <div className="relative px-6 sm:px-10 lg:px-14 py-10 md:py-14 text-center">
            <h1 className="text-3xl md:text-5xl font-sora font-bold text-white mb-4 leading-tight">
              Quiénes{' '}
              <span className="bg-subtle-gradient bg-clip-text text-transparent">Somos</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 font-inter max-w-2xl mx-auto">
              En el Centro Interdisciplinar de Creación Digital de la IUDC somos pioneros en la formación tecnológica del futuro.
            </p>
          </div>
        </section>
      </div>

      {/* Mission and Vision */}
      <section className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:border-primary-purple/40 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-subtle-gradient rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-sora font-bold text-gray-900">Misión</h2>
            </div>
            <p className="text-gray-600 font-inter text-sm md:text-base leading-relaxed">
              Formar líderes creativos preparados para afrontar el presente y futuro tecnológico,
              proporcionando educación práctica y actualizada en las tecnologías más innovadoras
              y demandadas del mercado digital actual.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 hover:border-primary-blue/40 transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-blue to-accent-purple rounded-xl flex items-center justify-center">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl md:text-2xl font-sora font-bold text-gray-900">Visión</h2>
            </div>
            <p className="text-gray-600 font-inter text-sm md:text-base leading-relaxed">
              Ser la comunidad de aprendizaje más dinámica de Latinoamérica en innovación digital,
              reconocida por formar profesionales que lideran la transformación tecnológica
              en sus industrias y comunidades.
            </p>
          </div>
        </div>
      </section>

      {/* Values + Approach unified */}
      <section className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl px-6 py-8 md:px-10 md:py-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Values */}
            <div>
              <p className="text-primary-purple text-sm font-sora font-semibold tracking-[0.15em] uppercase mb-1">Principios</p>
              <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 tracking-tight mb-6">
                Nuestros{' '}
                <span className="bg-subtle-gradient bg-clip-text text-transparent">Valores</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Lightbulb, title: 'Innovación', desc: 'A la vanguardia de tecnologías emergentes' },
                  { icon: Handshake, title: 'Colaboración', desc: 'Comunidades de aprendizaje colaborativo' },
                  { icon: Palette, title: 'Creatividad', desc: 'Pensamiento creativo y experimentación' },
                  { icon: Zap, title: 'Excelencia', desc: 'Calidad en todo lo que hacemos' },
                ].map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-primary-purple/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-purple/20 transition-colors">
                        <Icon className="w-4.5 h-4.5 text-primary-purple" />
                      </div>
                      <div>
                        <h3 className="font-sora font-semibold text-gray-900 text-sm group-hover:text-primary-purple transition-colors">{v.title}</h3>
                        <p className="text-gray-500 text-xs font-inter leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Approach */}
            <div>
              <p className="text-primary-purple text-sm font-sora font-semibold tracking-[0.15em] uppercase mb-1">Metodología</p>
              <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 tracking-tight mb-6">
                Nuestro{' '}
                <span className="bg-subtle-gradient bg-clip-text text-transparent">Enfoque</span>
              </h2>
              <div className="space-y-4">
                {[
                  { icon: Wrench, title: 'Educación Práctica', desc: 'Aprendizaje 100% hands-on con proyectos reales desde el primer día.' },
                  { icon: Building, title: 'Conexión Industrial', desc: 'Vínculos directos con empresas líderes en tecnología y diseño digital.' },
                  { icon: Gem, title: 'Futuro Presente', desc: 'Tecnologías emergentes que están definiendo el futuro hoy.' },
                ].map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <div key={i} className="flex items-start gap-3 group">
                      <div className="w-9 h-9 rounded-lg bg-primary-purple/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-purple/20 transition-colors">
                        <Icon className="w-4.5 h-4.5 text-primary-purple" />
                      </div>
                      <div>
                        <h3 className="font-sora font-semibold text-gray-900 text-sm group-hover:text-primary-purple transition-colors">{a.title}</h3>
                        <p className="text-gray-500 text-xs font-inter leading-relaxed">{a.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
