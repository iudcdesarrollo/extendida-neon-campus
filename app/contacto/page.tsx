'use client';

import React, { useState } from 'react';
import { Zap, Gift, MessageCircle, CheckCircle2 } from 'lucide-react';
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
    alert('Formulario enviado. Te contactaremos pronto.');
  };

  const cursos = [
    'Animación 2D con Toon Boom Harmony',
    'Modelado de Personajes en Blender',
    'Diseño UX/UI para Arquitectura XR',
    'Inteligencia Artificial Aplicada al Arte Digital',
    'Modelado 3D con Realidad Aumentada',
    'Desarrollo de Experiencias Inmersivas VR',
  ];

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />

      {/* Hero */}
      <div className="px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-4">
        <section className="relative bg-gradient-to-br from-[#1a0f2e] via-[#0f0a1f] to-[#0c0f1a] overflow-hidden rounded-3xl max-w-7xl mx-auto">
          <div className="absolute inset-0 hidden sm:block">
            <div className="absolute top-16 left-10 w-24 h-24 border border-primary-purple/20 rounded-full sm:animate-float"></div>
            <div className="absolute bottom-16 right-16 w-16 h-16 border border-primary-blue/20 rounded-lg rotate-45 sm:animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary-purple/10 rounded-full blur-2xl"></div>
          </div>
          <div className="relative px-6 sm:px-10 lg:px-14 py-10 md:py-14 text-center">
            <h1 className="text-3xl md:text-5xl font-sora font-bold text-white mb-4 leading-tight">
              Comienza Tu{' '}
              <span className="bg-subtle-gradient bg-clip-text text-transparent">Transformación</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 font-inter max-w-2xl mx-auto">
              Inscribete y unete a la proxima generacion de creadores digitales.
            </p>
          </div>
        </section>
      </div>

      {/* Form + Info */}
      <section className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl px-6 py-8 md:px-10 md:py-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Form */}
            <div>
              <p className="text-primary-purple text-sm font-sora font-semibold tracking-[0.15em] uppercase mb-1">Inscripcion</p>
              <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 tracking-tight mb-6">
                Formulario de{' '}
                <span className="bg-subtle-gradient bg-clip-text text-transparent">registro</span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-gray-700 font-inter font-medium text-sm mb-1.5">Nombre Completo *</label>
                  <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-purple focus:ring-1 focus:ring-primary-purple/20 transition-all text-sm" placeholder="Tu nombre completo" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="correo" className="block text-gray-700 font-inter font-medium text-sm mb-1.5">Email *</label>
                    <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleInputChange} required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-purple focus:ring-1 focus:ring-primary-purple/20 transition-all text-sm" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-gray-700 font-inter font-medium text-sm mb-1.5">Telefono</label>
                    <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-purple focus:ring-1 focus:ring-primary-purple/20 transition-all text-sm" placeholder="+57 300 123 4567" />
                  </div>
                </div>
                <div>
                  <label htmlFor="curso" className="block text-gray-700 font-inter font-medium text-sm mb-1.5">Curso de interes</label>
                  <select id="curso" name="curso" value={formData.curso} onChange={handleInputChange} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-primary-purple focus:ring-1 focus:ring-primary-purple/20 transition-all text-sm">
                    <option value="" className="bg-white">Selecciona un curso</option>
                    {cursos.map((curso, index) => (
                      <option key={index} value={curso} className="bg-white">{curso}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-gray-700 font-inter font-medium text-sm mb-1.5">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleInputChange} rows={3} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-primary-purple focus:ring-1 focus:ring-primary-purple/20 transition-all resize-none text-sm" placeholder="Tus objetivos y expectativas..." />
                </div>
                <button type="submit" className="w-full bg-subtle-gradient text-white py-3.5 px-6 rounded-xl font-sora font-bold text-sm hover:shadow-xl hover:shadow-primary-purple/30 transition-all hover:-translate-y-0.5">
                  Inscribirme Ahora
                </button>
              </form>
            </div>

            {/* Info cards */}
            <div className="space-y-4">
              <p className="text-primary-purple text-sm font-sora font-semibold tracking-[0.15em] uppercase mb-1">Canales</p>
              <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 tracking-tight mb-4">
                Contacta{' '}
                <span className="bg-subtle-gradient bg-clip-text text-transparent">con nosotros</span>
              </h2>

              <a href="https://wa.me/573107823744" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:border-whatsapp-green/50 hover:shadow-md hover:shadow-whatsapp-green/10 transition-all no-underline group">
                <div className="w-10 h-10 bg-whatsapp-green rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sora font-semibold text-gray-900 text-sm group-hover:text-whatsapp-green transition-colors">WhatsApp Directo</p>
                  <p className="text-gray-500 text-xs font-inter">310 782 3744 — Lun a Vie, 8am - 6pm</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4">
                <div className="w-10 h-10 bg-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sora font-semibold text-gray-900 text-sm">Respuesta rapida</p>
                  <p className="text-gray-500 text-xs font-inter">Te contactamos en menos de 24 horas</p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-accent-purple rounded-lg flex items-center justify-center flex-shrink-0">
                    <Gift className="w-5 h-5 text-white" />
                  </div>
                  <p className="font-sora font-semibold text-gray-900 text-sm">Beneficios</p>
                </div>
                <div className="space-y-2 pl-14">
                  {['Descuentos para estudiantes IUDC', 'Planes de financiamiento', 'Recursos gratuitos', 'Certificacion verificable'].map((b, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-purple flex-shrink-0" />
                      <p className="text-gray-600 text-xs font-inter">{b}</p>
                    </div>
                  ))}
                </div>
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
