
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Search } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Nosotros', path: '/quienes-somos' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-9 w-full z-50 bg-white/70 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/40 shadow-lg shadow-black/5" style={{ WebkitBackdropFilter: 'blur(40px) saturate(1.5)' }}>
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/extendida-neon-campus/lovable-uploads/8b1e7650-cdc7-488e-92e9-bbdef0ef8af6.png"
              alt="Aula Extendida"
              className="h-10 w-auto object-contain brightness-0"
            />
          </Link>

          {/* Desktop nav — pill con acento purple */}
          <div className="hidden md:flex items-center bg-gray-100 border border-gray-300 rounded-full px-1 py-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`px-4 py-1.5 rounded-full text-[13px] font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-primary-purple text-white shadow-sm shadow-primary-purple/25'
                    : 'text-gray-500 hover:text-primary-purple'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Search + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery.trim()) {
                  router.push(`/cursos?q=${encodeURIComponent(searchQuery.trim())}`);
                  setSearchQuery('');
                }
              }}
              className="flex items-center bg-gray-100 border border-gray-300 rounded-full px-3.5 py-2 gap-2"
            >
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-[13px] text-gray-800 placeholder-gray-400 outline-none w-36"
              />
            </form>
            <button
              onClick={() => {
                const url = `https://wa.me/573107823744?text=${encodeURIComponent('Hola! Me interesa inscribirme en un curso de Aula Extendida')}`;
                window.open(url, '_blank');
              }}
              className="bg-subtle-gradient text-white text-[13px] font-semibold px-5 py-2 rounded-full transition-all hover:shadow-lg hover:shadow-primary-purple/30 hover:scale-105"
            >
              Inscríbete
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-primary-purple transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl shadow-primary-purple/5 absolute top-full inset-x-0">
          <div className="px-5 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2.5 text-sm font-medium transition-colors rounded-lg px-3 ${
                  isActive(item.path)
                    ? 'text-primary-purple bg-primary-purple/5 font-semibold'
                    : 'text-gray-500 hover:text-primary-purple hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                window.open(`https://wa.me/573107823744?text=${encodeURIComponent('Hola! Me interesa inscribirme')}`, '_blank');
                setIsMenuOpen(false);
              }}
              className="w-full mt-3 bg-subtle-gradient text-white text-sm font-semibold py-2.5 rounded-full hover:shadow-lg hover:shadow-primary-purple/30"
            >
              Inscríbete
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
