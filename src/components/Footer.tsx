
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.016 6.756.072 5.526.127 4.688.243 3.964.412a5.157 5.157 0 0 0-1.865.859 5.147 5.147 0 0 0-.859 1.865C.98 3.86.864 4.698.809 5.928.753 7.162.737 7.568.737 11.189s.016 4.027.072 5.261c.055 1.23.17 2.068.34 2.792a5.147 5.147 0 0 0 .859 1.865 5.157 5.157 0 0 0 1.865.859c.724.169 1.562.285 2.792.34 1.234.056 1.64.072 5.261.072s4.027-.016 5.261-.072c1.23-.055 2.068-.17 2.792-.34a5.157 5.157 0 0 0 1.865-.859 5.147 5.147 0 0 0 .859-1.865c.169-.724.285-1.562.34-2.792.056-1.234.072-1.64.072-5.261s-.016-4.027-.072-5.261c-.055-1.23-.17-2.068-.34-2.792a5.147 5.147 0 0 0-.859-1.865 5.157 5.157 0 0 0-1.865-.859c-.724-.169-1.562-.285-2.792-.34C16.044.016 15.638 0 12.017 0zM12.017 2.162c3.565 0 3.988.013 5.398.066 1.301.059 2.005.278 2.475.463.621.242 1.065.53 1.531.995.465.466.753.91.995 1.531.185.47.404 1.174.463 2.475.053 1.41.066 1.833.066 5.398s-.013 3.988-.066 5.398c-.059 1.301-.278 2.005-.463 2.475-.242.621-.53 1.065-.995 1.531-.466.465-.91.753-1.531.995-.47.185-1.174.404-2.475.463-1.41.053-1.833.066-5.398.066s-3.988-.013-5.398-.066c-1.301-.059-2.005-.278-2.475-.463-.621-.242-1.065-.53-1.531-.995-.465-.466-.91-.753 1.531-.995-.47-.185 1.174-.404 2.475-.463 1.41-.053 1.833-.066 5.398-.066z"/>
          <path d="M12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12.017 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
          <circle cx="18.406" cy="5.594" r="1.44"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-black border-t border-primary-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <div className="w-66 h-42 flex items-center justify-center">
                <img
                  src="/extendida-neon-campus/lovable-uploads/c9705e28-40cf-4465-90c8-7ff83c94f94d.png"
                  alt="Aula Extendida Logo"
                  className="w-66 h-42 object-contain"
                />
              </div>
            </Link>

            <p className="text-gray-300 font-inter leading-relaxed mb-6 max-w-md">
              Formamos líderes creativos preparados para afrontar el presente y futuro tecnológico
              con cursos prácticos en las tecnologías más demandadas.
            </p>

            {/* Newsletter */}
            <div className="flex flex-col sm:flex-row gap-2 max-w-md">
              <input
                type="email"
                placeholder="Tu email para novedades"
                className="flex-1 bg-black/50 border border-primary-purple/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-purple"
              />
              <button className="bg-subtle-gradient text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-purple/50 transition-all duration-300">
                Suscribirse
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-sora font-bold text-white text-lg mb-6">Navegación</h3>
            <div className="space-y-3">
              <Link href="/" className="block text-gray-300 hover:text-primary-purple transition-colors">
                Home
              </Link>
              <Link href="/cursos" className="block text-gray-300 hover:text-primary-purple transition-colors">
                Cursos
              </Link>
              <Link href="/quienes-somos" className="block text-gray-300 hover:text-primary-purple transition-colors">
                Quiénes Somos
              </Link>
              <Link href="/contacto" className="block text-gray-300 hover:text-primary-purple transition-colors">
                Contacto
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-sora font-bold text-white text-lg mb-6">Síguenos</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-primary-purple/20 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-primary-purple/40 transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-6 flex justify-center">
              <img
                src="/extendida-neon-campus/lovable-uploads/41d3f0cf-4b86-4b4b-b86d-93cdad9ee711.png"
                alt="Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-purple/20 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-inter">
            © 2024 Aula Extendida. Todos los derechos reservados.
            <span className="block sm:inline sm:ml-2 mt-2 sm:mt-0">
              Creando el futuro de la educación tecnológica.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
