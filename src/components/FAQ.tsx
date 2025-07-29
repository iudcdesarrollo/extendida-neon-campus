
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '¿Qué necesito para empezar?',
      answer: 'Solo necesitas una computadora con conexión a internet. Todos nuestros cursos incluyen las licencias de software necesarias y te proporcionamos las herramientas desde el primer día.'
    },
    {
      question: '¿Recibo certificado?',
      answer: 'Sí, al completar exitosamente cada curso recibirás un certificado digital verificable que podrás agregar a tu portafolio profesional y LinkedIn.'
    },
    {
      question: '¿Puedo pagar por cuotas?',
      answer: 'Ofrecemos diferentes planes de pago, incluyendo opciones de financiamiento y descuentos especiales para estudiantes del IUDC. Contáctanos para conocer las mejores opciones.'
    },
    {
      question: '¿Cuánto duran los cursos?',
      answer: "Nuestros cursos están diseñados para ser intensivos pero manejables. La duración varía entre 20 y 40 horas, distribuidas en sesiones prácticas de 2 - 10 horas por semana."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-dark-bg relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            Preguntas{' '}
            <span className="bg-subtle-gradient bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-black/50 border border-primary-purple/20 rounded-2xl overflow-hidden hover:border-primary-purple/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-primary-purple/5 transition-colors"
              >
                <span className="font-orbitron font-bold text-white text-lg pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary-purple transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="h-px bg-subtle-gradient mb-4"></div>
                  <p className="text-gray-300 font-space leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
