
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Quiénes Somos', path: '/quienes-somos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/85 backdrop-blur-md border-b border-neon-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-neon-gradient rounded-lg flex items-center justify-center group-hover:animate-glow transition-all duration-300">
              <span className="text-white font-orbitron font-bold text-lg">AE</span>
            </div>
            <span className="text-white font-orbitron font-bold text-xl group-hover:text-neon-purple transition-colors">
              Aula Extendida
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-white hover:text-neon-purple transition-colors duration-300 ${
                  isActive(item.path) ? 'text-neon-purple' : ''
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-purple transition-all duration-300 ${
                  isActive(item.path) ? 'w-full' : 'group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            
            <button className="bg-neon-gradient text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 transform hover:scale-105">
              Inscribirme
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-neon-purple transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 rounded-lg mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 text-white hover:text-neon-purple transition-colors ${
                    isActive(item.path) ? 'text-neon-purple bg-neon-purple/10' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="w-full bg-neon-gradient text-white px-6 py-2 rounded-lg font-semibold mt-4">
                Inscribirme
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
