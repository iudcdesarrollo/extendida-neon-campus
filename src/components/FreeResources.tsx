
import React from 'react';

const FreeResources = () => {
  const resources = [
    {
      title: 'Manuales PDF',
      description: 'Guías completas y recursos descargables',
      icon: '📚',
      color: 'neon-purple'
    },
    {
      title: 'Guías para elegir tu curso ideal',
      description: 'Te ayudamos a encontrar el mejor camino',
      icon: '🗺️',
      color: 'electric-blue'
    },
    {
      title: 'Acceso a clases abiertas',
      description: 'Prueba nuestros cursos antes de inscribirte',
      icon: '🎥',
      color: 'neon-pink'
    },
    {
      title: 'Plantillas de trabajo',
      description: 'Figma, Unity, Blender y más herramientas',
      icon: '🛠️',
      color: 'neon-green'
    }
  ];

  return (
    <section className="py-20 bg-tech-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 border border-neon-purple/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-20 w-24 h-24 border border-electric-blue/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
            🎁 Recursos Gratuitos para{' '}
            <span className="bg-neon-gradient bg-clip-text text-transparent">
              Crear Más y Mejor
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group bg-black/60 p-6 rounded-2xl border border-gray-700/50 hover:border-neon-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-neon-purple/20 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {resource.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 font-space text-sm mb-6 leading-relaxed">
                {resource.description}
              </p>

              {/* Download Button */}
              <button className="w-full bg-neon-gradient text-white py-3 px-4 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                </svg>
                Descargar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
