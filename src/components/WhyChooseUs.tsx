
import React from 'react';
import { Book, Users, Folder } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Book,
      title: 'Aprende con proyectos reales',
      description: 'Desde el primer día aplicarás lo aprendido en retos del mundo creativo actual.'
    },
    {
      icon: Folder,
      title: 'Conecta con la industria creativa',
      description: 'Nuestros cursos están diseñados junto a empresas reales para que tus habilidades tengan demanda.'
    },
    {
      icon: Users,
      title: 'Docentes en ejercicio profesional',
      description: 'No solo enseñan, también crean, diseñan y son profesionales en activo.'
    }
  ];

  return (
    <section className="py-20 bg-dark-bg relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 border border-primary-purple rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-blue rounded-lg rotate-45"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sora font-bold text-white mb-6">
            Aprende como lo hacen los{' '}
            <span className="bg-subtle-gradient bg-clip-text text-transparent">
              profesionales
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="group bg-black/50 p-8 rounded-2xl border border-primary-purple/20 hover:border-primary-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-purple/20 hover:-translate-y-2"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-16 h-16 text-white" />
                </div>
                
                <h3 className="text-2xl font-sora font-bold text-white mb-4 group-hover:text-primary-purple transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 font-inter leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative line */}
                <div className="mt-6 w-0 h-0.5 bg-subtle-gradient group-hover:w-full transition-all duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
