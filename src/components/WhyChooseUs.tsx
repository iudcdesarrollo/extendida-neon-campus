'use client';

import React, { useState } from 'react';
import { Book, Users, Folder, ChevronDown } from 'lucide-react';

const features = [
  {
    icon: Book,
    title: 'Proyectos reales',
    description: 'Desde el primer día aplicarás lo aprendido en retos del mundo creativo actual.'
  },
  {
    icon: Folder,
    title: 'Industria creativa',
    description: 'Cursos diseñados junto a empresas reales para que tus habilidades tengan demanda.'
  },
  {
    icon: Users,
    title: 'Docentes activos',
    description: 'No solo enseñan — crean, diseñan y son profesionales en ejercicio.'
  }
];

const faqs = [
  {
    question: '¿Qué necesito para empezar?',
    answer: 'Solo necesitas una computadora con conexión a internet. Todos nuestros cursos incluyen las licencias de software necesarias.'
  },
  {
    question: '¿Recibo certificado?',
    answer: 'Sí, al completar el curso recibirás un certificado digital verificable expedido por la IUDC.'
  },
  {
    question: '¿Puedo pagar por cuotas?',
    answer: 'Ofrecemos planes de pago y descuentos especiales para estudiantes IUDC. Contáctanos para más info.'
  },
  {
    question: '¿Cuánto duran los cursos?',
    answer: 'Entre 20 y 40 horas, distribuidas en sesiones prácticas semanales.'
  }
];

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-4 md:py-6">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl px-6 py-8 md:px-10 md:py-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Left — Benefits */}
          <div>
            <p className="text-primary-purple text-sm font-sora font-semibold tracking-[0.15em] uppercase mb-1">¿Por qué elegirnos?</p>
            <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 tracking-tight mb-6">
              Aprende como los{' '}
              <span className="bg-subtle-gradient bg-clip-text text-transparent">profesionales</span>
            </h2>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary-purple/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-purple/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-primary-purple" />
                    </div>
                    <div>
                      <h3 className="font-sora font-semibold text-gray-900 text-base mb-0.5 group-hover:text-primary-purple transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 font-inter text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — FAQ */}
          <div>
            <p className="text-primary-purple text-sm font-sora font-semibold tracking-[0.15em] uppercase mb-1">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 tracking-tight mb-6">
              Preguntas{' '}
              <span className="bg-subtle-gradient bg-clip-text text-transparent">frecuentes</span>
            </h2>

            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-primary-purple/30 transition-colors"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left px-4 py-3.5 flex justify-between items-center gap-3"
                  >
                    <span className="font-sora font-semibold text-gray-900 text-sm">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-primary-purple flex-shrink-0 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openIndex === index && (
                    <div className="px-4 pb-3.5">
                      <div className="h-px bg-gray-100 mb-3"></div>
                      <p className="text-gray-500 font-inter text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
