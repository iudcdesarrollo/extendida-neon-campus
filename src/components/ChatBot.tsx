'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, MessageCircle, Send, Sparkles, Clock, Award, DollarSign, Calendar, Briefcase } from 'lucide-react';

type Step = {
  id: string;
  question: string;
  options?: { label: string; next?: string; href?: string; isLink?: boolean }[];
  answer?: string;
};

const flow: Record<string, Step> = {
  start: {
    id: 'start',
    question: 'Sabemos que estás interesado en formarte con nosotros. Cuéntanos, ¿qué estás buscando?',
    options: [
      { label: 'Ver todos los cursos disponibles', href: '/cursos', isLink: true },
      { label: 'No sé cuál curso elegir', next: 'guidance' },
      { label: 'Información sobre precios', next: 'pricing' },
      { label: 'Tengo otra pregunta', next: 'faq' },
    ],
  },
  guidance: {
    id: 'guidance',
    question: 'Te ayudamos a encontrar tu curso ideal. ¿Qué te interesa más?',
    options: [
      { label: 'Animación 2D', href: '/curso/22', isLink: true },
      { label: 'Modelado 3D', href: '/cursos', isLink: true },
      { label: 'Diseño y UX', href: '/cursos', isLink: true },
      { label: 'Hacer test de orientación', href: 'https://tally.so/r/mON5B7', isLink: true },
    ],
  },
  pricing: {
    id: 'pricing',
    question: 'Tenemos tarifas diferenciadas:',
    options: [
      { label: 'Estudiantes IUDC desde $400.000', next: 'pricingDetail' },
      { label: 'Externos desde $600.000', next: 'pricingDetail' },
      { label: 'Quiero hablar con un asesor', href: 'https://wa.me/573107823744?text=' + encodeURIComponent('Hola! Quiero info sobre precios'), isLink: true },
    ],
  },
  pricingDetail: {
    id: 'pricingDetail',
    question: 'El precio incluye: 40h de formación, licencia oficial del software, materiales y certificado IUDC. ¿Quieres ver los cursos disponibles?',
    options: [
      { label: 'Ver cursos', href: '/cursos', isLink: true },
      { label: 'Hablar con asesor por WhatsApp', href: 'https://wa.me/573107823744?text=' + encodeURIComponent('Hola! Tengo dudas sobre los precios'), isLink: true },
    ],
  },
  faq: {
    id: 'faq',
    question: 'Estas son las preguntas más frecuentes:',
    options: [
      { label: '¿Recibo certificado?', next: 'cert' },
      { label: '¿Puedo pagar por cuotas?', next: 'payment' },
      { label: '¿Cuánto duran los cursos?', next: 'duration' },
      { label: 'Otra pregunta — WhatsApp', href: 'https://wa.me/573107823744?text=' + encodeURIComponent('Hola! Tengo una pregunta'), isLink: true },
    ],
  },
  cert: {
    id: 'cert',
    question: 'Sí, al completar exitosamente recibes un certificado digital verificable expedido por la IUDC, ideal para tu portafolio y LinkedIn.',
    options: [
      { label: 'Ver cursos disponibles', href: '/cursos', isLink: true },
      { label: 'Volver al inicio', next: 'start' },
    ],
  },
  payment: {
    id: 'payment',
    question: 'Ofrecemos planes de financiamiento y descuentos para estudiantes IUDC. Contacta a un asesor para opciones personalizadas.',
    options: [
      { label: 'Hablar con asesor', href: 'https://wa.me/573107823744?text=' + encodeURIComponent('Hola! Quiero info sobre planes de pago'), isLink: true },
      { label: 'Volver al inicio', next: 'start' },
    ],
  },
  duration: {
    id: 'duration',
    question: 'La mayoría duran entre 30 y 40 horas, distribuidas en 4-8 semanas con sesiones intensivas. Algunos como Toon Boom Harmony son de 4 semanas / 10h semanales.',
    options: [
      { label: 'Ver cursos disponibles', href: '/cursos', isLink: true },
      { label: 'Volver al inicio', next: 'start' },
    ],
  },
};

const iconForLabel = (label: string) => {
  if (label.toLowerCase().includes('curso')) return Sparkles;
  if (label.toLowerCase().includes('precio') || label.includes('$')) return DollarSign;
  if (label.toLowerCase().includes('certif')) return Award;
  if (label.toLowerCase().includes('cuota') || label.toLowerCase().includes('pago')) return DollarSign;
  if (label.toLowerCase().includes('dur')) return Clock;
  if (label.toLowerCase().includes('whatsapp') || label.toLowerCase().includes('asesor')) return MessageCircle;
  if (label.toLowerCase().includes('test')) return Briefcase;
  if (label.toLowerCase().includes('volver') || label.toLowerCase().includes('inicio')) return Calendar;
  return Send;
};

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [currentStep, setCurrentStep] = useState<string>('start');

  useEffect(() => {
    const timer = setTimeout(() => setShowTeaser(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const step = flow[currentStep];

  return (
    <>
      {/* Teaser bubble (when closed) */}
      {!open && showTeaser && (
        <div className="fixed bottom-24 left-6 z-40 max-w-[260px] animate-slide-up">
          <button
            onClick={() => setOpen(true)}
            className="bg-white rounded-2xl shadow-2xl shadow-black/15 border border-gray-200 p-4 text-left hover:shadow-2xl hover:shadow-primary-purple/20 transition-all hover:-translate-y-0.5 cursor-pointer w-full relative group"
          >
            <button
              onClick={(e) => { e.stopPropagation(); setShowTeaser(false); }}
              className="absolute top-2 right-2 w-5 h-5 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-400 transition-colors"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-purple to-primary-blue flex items-center justify-center">
                  <span className="text-white font-sora font-bold text-sm">A</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-green-500 border-2 border-white" />
              </div>
              <div className="min-w-0">
                <p className="text-gray-900 font-sora font-semibold text-sm">¿Te ayudo a elegir? 👋</p>
                <p className="text-gray-500 text-xs truncate">Soy tu asesora en línea</p>
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Chat trigger button */}
      <button
        onClick={() => { setOpen(!open); setShowTeaser(false); }}
        className={`fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-subtle-gradient text-white shadow-lg shadow-primary-purple/30 flex items-center justify-center transition-all hover:scale-110 ${open ? 'rotate-180' : ''}`}
        aria-label="Abrir chat"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 left-6 z-50 w-[calc(100vw-3rem)] max-w-sm bg-white rounded-2xl shadow-2xl shadow-black/20 border border-gray-200 overflow-hidden flex flex-col" style={{ maxHeight: 'calc(100vh - 8rem)' }}>
          {/* Header */}
          <div className="bg-gradient-to-br from-[#1a0f2e] via-[#0f0a1f] to-[#0c0f1a] px-5 py-4 flex items-center gap-3 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-purple/20 rounded-full blur-2xl" />
            <div className="relative flex items-center gap-3 flex-1 min-w-0">
              <div className="relative flex-shrink-0">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary-purple to-primary-blue flex items-center justify-center">
                  <span className="text-white font-sora font-bold">A</span>
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-[#0f0a1f]" />
              </div>
              <div className="min-w-0">
                <p className="text-white font-sora font-semibold text-sm">Aula Extendida</p>
                <p className="text-gray-300 text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  En línea ahora
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="relative text-gray-300 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Conversation */}
          <div className="flex-1 overflow-y-auto px-5 py-5 bg-gray-50 space-y-3">
            {/* Bot greeting */}
            <div className="flex gap-2 items-start">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-purple to-primary-blue flex items-center justify-center flex-shrink-0">
                <span className="text-white font-sora font-bold text-[11px]">A</span>
              </div>
              <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 shadow-sm border border-gray-100 max-w-[85%]">
                <p className="text-gray-700 text-sm leading-relaxed">{step.question}</p>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-2 pt-1">
              {step.options?.map((opt, i) => {
                const Icon = iconForLabel(opt.label);
                if (opt.isLink && opt.href) {
                  if (opt.href.startsWith('http')) {
                    return (
                      <a
                        key={i}
                        href={opt.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 w-full bg-white border border-primary-purple/20 hover:border-primary-purple hover:bg-primary-purple/5 rounded-xl px-3.5 py-2.5 text-left text-sm text-gray-800 font-medium transition-all no-underline group"
                      >
                        <Icon className="w-4 h-4 text-primary-purple flex-shrink-0" />
                        <span className="flex-1">{opt.label}</span>
                      </a>
                    );
                  }
                  return (
                    <Link
                      key={i}
                      href={opt.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2.5 w-full bg-white border border-primary-purple/20 hover:border-primary-purple hover:bg-primary-purple/5 rounded-xl px-3.5 py-2.5 text-left text-sm text-gray-800 font-medium transition-all no-underline group"
                    >
                      <Icon className="w-4 h-4 text-primary-purple flex-shrink-0" />
                      <span className="flex-1">{opt.label}</span>
                    </Link>
                  );
                }
                return (
                  <button
                    key={i}
                    onClick={() => opt.next && setCurrentStep(opt.next)}
                    className="flex items-center gap-2.5 w-full bg-white border border-primary-purple/20 hover:border-primary-purple hover:bg-primary-purple/5 rounded-xl px-3.5 py-2.5 text-left text-sm text-gray-800 font-medium transition-all"
                  >
                    <Icon className="w-4 h-4 text-primary-purple flex-shrink-0" />
                    <span className="flex-1">{opt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="px-5 py-3 bg-white border-t border-gray-100 flex items-center justify-between gap-3">
            <p className="text-[11px] text-gray-400">¿Necesitas más ayuda?</p>
            <a
              href="https://wa.me/573107823744"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-whatsapp-green hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              Chatear por WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
