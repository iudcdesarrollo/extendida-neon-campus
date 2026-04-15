import React from 'react';
import { FileText, Book, ExternalLink } from 'lucide-react';

const FreeResources = () => {
  const resources = [
    {
      title: 'Manuales PDF',
      description: 'Guías completas y recursos descargables',
      icon: FileText,
      href: 'https://drive.google.com/drive/folders/1mXSzmg0BtJszukDS9tw5Nn-2GoQH_mRh?usp=sharing'
    },
    {
      title: 'Guías para elegir tu curso',
      description: 'Te ayudamos a encontrar el mejor camino',
      icon: Book,
      href: 'https://tally.so/r/mON5B7'
    }
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-4 md:py-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary-purple/5 via-primary-blue/5 to-primary-purple/5 border border-gray-200 rounded-3xl px-6 py-8 md:px-10 md:py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Title */}
            <div className="md:max-w-xs">
              <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 leading-tight">
                Recursos{' '}
                <span className="bg-subtle-gradient bg-clip-text text-transparent">Gratuitos</span>
              </h2>
              <p className="text-gray-500 font-inter text-sm mt-2">Materiales para que empieces a crear desde ya.</p>
            </div>

            {/* Cards inline */}
            <div className="flex flex-col sm:flex-row gap-3 flex-1 md:justify-end">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <a
                    key={index}
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-primary-purple/40 hover:shadow-md hover:shadow-primary-purple/10 transition-all no-underline"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-purple/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-purple/20 transition-colors">
                      <IconComponent className="w-5 h-5 text-primary-purple" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-sora font-semibold text-gray-900 text-sm group-hover:text-primary-purple transition-colors">{resource.title}</p>
                      <p className="text-gray-500 text-xs font-inter">{resource.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary-purple flex-shrink-0 transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
