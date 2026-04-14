'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    curso: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Formulario enviado! Te contactaremos pronto.');
  };

  const cursos = [
    'Diseño UX/UI de Espacios Interactivos para Arquitectura XR',
    'Inteligencia Artificial Aplicada al Arte Digital',
    'Modelado 3D Avanzado con Realidad Aumentada',
    'Desarrollo de Experiencias Inmersivas VR',
    'Animación Procedimental con IA',
    'Prototipado Digital para Productos Interactivos',
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-tech-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary-purple/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary-blue/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border border-accent-purple/20 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-sora font-bold text-white mb-6">
            Comienza Tu{' '}
            <span className="bg-subtle-gradient bg-clip-text text-transparent">
              Transformación
            </span>
          </h1>
          <p className="text-xl text-gray-300 font-inter max-w-3xl mx-auto">
            Estás a un paso de dominar las tecnologías del futuro. Inscríbete ahora y únete a la próxima generación de creadores digitales.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <div className="bg-black/60 p-8 rounded-2xl border border-primary-purple/30 hover:border-primary-purple/50 transition-all duration-300">
              <h2 className="text-3xl font-sora font-bold text-white mb-8 text-center">
                Formulario de{' '}
                <span className="bg-subtle-gradient bg-clip-text text-transparent">
                  Inscripción
                </span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-white font-inter font-semibold mb-2">Nombre Completo *</label>
                  <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required className="w-full bg-black/50 border border-primary-purple/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-purple transition-colors" placeholder="Tu nombre completo" />
                </div>

                <div>
                  <label htmlFor="correo" className="block text-white font-inter font-semibold mb-2">Correo Electrónico *</label>
                  <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleInputChange} required className="w-full bg-black/50 border border-primary-purple/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-purple transition-colors" placeholder="tu@email.com" />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-white font-inter font-semibold mb-2">Teléfono</label>
                  <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} className="w-full bg-black/50 border border-primary-purple/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-purple transition-colors" placeholder="+57 300 123 4567" />
                </div>

                <div>
                  <label htmlFor="curso" className="block text-white font-inter font-semibold mb-2">Curso de Interés</label>
                  <select id="curso" name="curso" value={formData.curso} onChange={handleInputChange} className="w-full bg-black/50 border border-primary-purple/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-purple transition-colors">
                    <option value="" className="bg-black">Selecciona un curso</option>
                    {cursos.map((curso, index) => (
                      <option key={index} value={curso} className="bg-black">{curso}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-white font-inter font-semibold mb-2">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleInputChange} rows={4} className="w-full bg-black/50 border border-primary-purple/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-purple transition-colors resize-none" placeholder="Cuéntanos sobre tus objetivos y expectativas..." />
                </div>

                <button type="submit" className="w-full bg-subtle-gradient text-white py-4 px-6 rounded-lg font-sora font-bold text-lg hover:shadow-xl hover:shadow-primary-purple/50 transition-all duration-300 transform hover:scale-105">
                  Inscribirme Ahora
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-black/60 p-6 rounded-2xl border border-whatsapp-green/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-whatsapp-green/10 rounded-full -mr-10 -mt-10"></div>
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-whatsapp-green rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-sora font-bold text-white">WhatsApp Directo</h3>
                  </div>
                  <p className="text-gray-300 font-inter mb-4">
                    También puedes escribirnos por WhatsApp de lunes a viernes de 8:00 a.m. a 6:00 p.m.
                  </p>
                  <p className="text-white font-inter font-bold text-lg mb-4">310 782 3744</p>
                  <a href="https://wa.me/573107823744" target="_blank" rel="noopener noreferrer" className="inline-block bg-whatsapp-green text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-whatsapp-green/50 transition-all duration-300 transform hover:scale-105">
                    Chatear Ahora
                  </a>
                </div>
              </div>

              <div className="bg-black/60 p-6 rounded-2xl border border-primary-blue/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-sora font-bold text-white">Respuesta Rápida</h3>
                </div>
                <p className="text-gray-300 font-inter">
                  Te contactaremos en menos de 24 horas para resolver todas tus dudas y ayudarte a elegir el mejor curso para tu futuro profesional.
                </p>
              </div>

              <div className="bg-black/60 p-6 rounded-2xl border border-accent-purple/30">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent-purple rounded-lg flex items-center justify-center mr-4">
                    <span className="text-white text-xl">🎁</span>
                  </div>
                  <h3 className="text-xl font-sora font-bold text-white">Beneficios Especiales</h3>
                </div>
                <ul className="text-gray-300 font-inter space-y-2">
                  <li>Descuentos para estudiantes IUDC</li>
                  <li>Planes de financiamiento flexibles</li>
                  <li>Acceso a recursos gratuitos</li>
                  <li>Certificación verificable</li>
                </ul>
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
