'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowLeft, Clock, MapPin, Users, Calendar, CheckCircle2,
  Sparkles, Award, Briefcase, Palette, Film, Target,
  GraduationCap, Building2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import EnrollmentForm from '@/components/courseDetail/EnrollmentForm';

const valueProps = [
  { icon: Film, title: '40 horas practicas', text: 'Demostraciones en vivo, ejercicios dirigidos y retroalimentacion colectiva.' },
  { icon: Sparkles, title: 'Licencia incluida', text: 'Toon Boom Harmony Essentials durante todo el mes de formacion.' },
  { icon: Briefcase, title: 'Portafolio', text: 'Tres ejercicios de animacion finalizados como evidencia tecnica.' },
  { icon: Award, title: 'Certificado', text: 'Certificacion institucional avalada por la IUDC.' },
];

const curriculum = [
  { week: 1, title: 'Fundamentos de Harmony', hours: '10 h', topics: ['Interfaz y flujo de trabajo', 'Herramientas de dibujo vectorial y raster', 'Capas, timeline y exposicion de dibujos'] },
  { week: 2, title: 'Animacion Cuadro a Cuadro', hours: '10 h', topics: ['Principios de animacion', 'Timing, spacing y fluidez de movimiento', 'Ciclos de caminata y acciones basicas'] },
  { week: 3, title: 'Clean Up Profesional', hours: '10 h', topics: ['Lectura de rough animation', 'Control y consistencia de linea', 'Adherencia al model sheet'] },
  { week: 4, title: 'Proyecto Final y Portafolio', hours: '10 h', topics: ['Ejercicio integrador', 'Render y exportacion profesional', 'Presentacion de portafolio final'] },
];

const audiences = [
  { icon: GraduationCap, title: 'Estudiantes IUDC', items: ['Animacion, Videojuegos y Diseno Grafico', 'Egresados en proceso de empleabilidad', 'Tarifa preferencial institucional'] },
  { icon: Building2, title: 'Profesionales externos', items: ['Animadores independientes', 'Disenadores del sector creativo', 'Interesados en animacion 2D profesional'] },
];

const logistics = [
  { icon: Clock, label: 'Duracion', value: '4 semanas / 40 horas' },
  { icon: MapPin, label: 'Modalidad', value: 'Presencial' },
  { icon: Users, label: 'Cupo total', value: '25 participantes' },
  { icon: Calendar, label: 'Horario', value: '10 horas semanales' },
];

export default function ToonBoomHarmonyLanding() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />

      {/* HERO */}
      <div className="px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-4">
        <section className="relative bg-gradient-to-br from-[#1a0f2e] via-[#0f0a1f] to-[#0c0f1a] overflow-hidden rounded-3xl max-w-7xl mx-auto">
          <div className="absolute inset-0 hidden sm:block pointer-events-none">
            <div className="absolute top-16 left-10 w-24 h-24 border border-primary-purple/20 rounded-full sm:animate-float" />
            <div className="absolute bottom-16 right-16 w-16 h-16 border border-primary-blue/20 rounded-lg rotate-45 sm:animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary-purple/10 rounded-full blur-2xl" />
          </div>
          <div className="relative px-6 sm:px-10 lg:px-14 py-8 md:py-10">
            <Link href="/cursos" className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-6 group text-sm">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Volver a Cursos
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-accent-blue font-inter text-xs mb-5">
                  <Palette className="w-3.5 h-3.5" />
                  Curso Libre IUDC 2026
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-sora font-bold text-white mb-4 leading-tight">
                  Animacion 2D con{' '}
                  <span className="bg-subtle-gradient bg-clip-text text-transparent">Toon Boom Harmony</span>
                </h1>
                <p className="text-base md:text-lg text-gray-300 font-inter leading-relaxed mb-6">
                  Formate en la herramienta estandar de la industria audiovisual con enfasis en animacion cuadro a cuadro y clean up profesional.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#inscripcion" className="inline-flex items-center justify-center px-6 py-3 bg-subtle-gradient text-white font-semibold font-inter rounded-full text-sm hover:shadow-lg hover:shadow-primary-purple/50 transition-all hover:-translate-y-0.5">
                    Inscribete Ahora
                  </a>
                  <a href="#curriculum" className="inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold font-inter rounded-full text-sm hover:bg-white/15 transition-colors">
                    Ver Curriculum
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="relative bg-white/[0.06] border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="grid grid-cols-2 gap-3 sm:gap-5">
                    {logistics.map((item) => (
                      <div key={item.label} className="flex flex-col">
                        <div className="flex items-center gap-2 text-accent-blue mb-1.5">
                          <item.icon className="w-4 h-4" />
                          <span className="text-[10px] uppercase tracking-wider font-inter">{item.label}</span>
                        </div>
                        <span className="text-white font-sora font-semibold text-sm">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="h-px bg-white/10 my-4" />
                  <p className="text-[10px] uppercase tracking-wider text-accent-blue font-inter mb-2.5">Incluye</p>
                  <ul className="space-y-1.5">
                    {['Licencia Harmony Essentials 1 mes', 'Materiales y model sheets', 'Certificado IUDC'].map((item) => (
                      <li key={item} className="flex items-center text-gray-300 font-inter text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* VALUE PROPS + CURRICULUM */}
      <section className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl px-6 py-8 md:px-10 md:py-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Value props */}
            <div>
              <p className="text-primary-purple text-sm font-sora font-semibold tracking-[0.15em] uppercase mb-1">Beneficios</p>
              <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 tracking-tight mb-6">
                Por que{' '}
                <span className="bg-subtle-gradient bg-clip-text text-transparent">este curso</span>
              </h2>
              <div className="space-y-4">
                {valueProps.map((prop) => (
                  <div key={prop.title} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-primary-purple/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-purple/20 transition-colors">
                      <prop.icon className="w-4 h-4 text-primary-purple" />
                    </div>
                    <div>
                      <h3 className="font-sora font-semibold text-gray-900 text-sm group-hover:text-primary-purple transition-colors">{prop.title}</h3>
                      <p className="text-gray-500 text-xs font-inter leading-relaxed">{prop.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audience */}
            <div>
              <p className="text-primary-purple text-sm font-sora font-semibold tracking-[0.15em] uppercase mb-1">Dirigido a</p>
              <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 tracking-tight mb-6">
                Poblacion{' '}
                <span className="bg-subtle-gradient bg-clip-text text-transparent">objetivo</span>
              </h2>
              <div className="space-y-4">
                {audiences.map((aud) => (
                  <div key={aud.title} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-primary-purple/30 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary-purple/10 flex items-center justify-center flex-shrink-0">
                        <aud.icon className="w-4 h-4 text-primary-purple" />
                      </div>
                      <h3 className="font-sora font-semibold text-gray-900 text-sm">{aud.title}</h3>
                    </div>
                    <ul className="space-y-1.5 pl-12">
                      {aud.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-gray-500 font-inter text-xs">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary-purple flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl px-6 py-8 md:px-10 md:py-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-purple/10 border border-primary-purple/20 text-primary-purple font-inter text-xs mb-3">
              <Target className="w-3.5 h-3.5" />
              4 modulos - 40 horas totales
            </div>
            <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 tracking-tight">Estructura curricular</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {curriculum.map((module) => (
              <div key={module.week} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-primary-purple/30 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-primary-purple font-inter font-semibold">Semana {module.week}</span>
                    <h3 className="text-lg font-sora font-bold text-gray-900 mt-0.5">{module.title}</h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-accent-blue/10 text-accent-blue font-inter text-xs font-medium">{module.hours}</span>
                </div>
                <ul className="space-y-1.5">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2 text-gray-500 font-inter text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary-purple mt-0.5 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4">
          {/* IUDC */}
          <div className="bg-white border-2 border-primary-purple rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-subtle-gradient text-white font-inter text-[10px] px-3 py-0.5 rounded-b-lg uppercase tracking-wider">Preferencial</div>
            <div className="mt-3">
              <h3 className="text-base font-sora font-bold text-gray-900 mb-1">Estudiante activo IUDC</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl md:text-4xl font-sora font-bold bg-subtle-gradient bg-clip-text text-transparent">$400.000</span>
                <span className="text-gray-500 font-inter text-sm">COP</span>
              </div>
              <ul className="space-y-2 mb-5">
                {['40 horas de formacion', 'Licencia Harmony 1 mes', 'Certificado IUDC', 'Materiales incluidos'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600 font-inter text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent-blue flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <a href="#inscripcion" className="block text-center w-full py-3 bg-subtle-gradient text-white font-semibold font-inter rounded-xl text-sm hover:shadow-lg hover:shadow-primary-purple/30 transition-all">Inscribirme</a>
            </div>
          </div>
          {/* Externo */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-primary-purple/30 transition-colors">
            <div className="mt-3">
              <h3 className="text-base font-sora font-bold text-gray-900 mb-1">Participante externo</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl md:text-4xl font-sora font-bold text-gray-900">$600.000</span>
                <span className="text-gray-500 font-inter text-sm">COP</span>
              </div>
              <ul className="space-y-2 mb-5">
                {['40 horas de formacion', 'Licencia Harmony 1 mes', 'Certificado IUDC', 'Portafolio de 3 ejercicios'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600 font-inter text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary-purple flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
              <a href="#inscripcion" className="block text-center w-full py-3 border border-primary-purple text-primary-purple font-semibold font-inter rounded-xl text-sm hover:bg-primary-purple/5 transition-colors">Inscribirme</a>
            </div>
          </div>
        </div>
      </section>

      {/* ENROLLMENT */}
      <section id="inscripcion" className="px-4 sm:px-6 lg:px-8 py-4 pb-8">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl px-6 py-8 md:px-10 md:py-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <p className="text-primary-purple text-sm font-sora font-semibold tracking-[0.15em] uppercase mb-1">Inscripcion</p>
              <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 tracking-tight mb-4">
                Asegura tu{' '}
                <span className="bg-subtle-gradient bg-clip-text text-transparent">cupo</span>
              </h2>
              <p className="text-gray-500 font-inter text-sm leading-relaxed mb-5">
                Solo hay <span className="text-primary-purple font-semibold">25 cupos disponibles</span> para esta primera edicion del curso.
              </p>
              <div className="space-y-3">
                {['Respuesta en menos de 24 horas', 'Soporte personalizado', 'Articulacion con el sector audiovisual'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-gray-600 font-inter text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary-purple flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <EnrollmentForm />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
