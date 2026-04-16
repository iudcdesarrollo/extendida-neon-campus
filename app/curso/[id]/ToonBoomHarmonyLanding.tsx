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
  { icon: Film, title: '40 horas de formación práctica', text: 'Demostraciones en vivo, ejercicios dirigidos y retroalimentación colectiva con docente especializado.' },
  { icon: Sparkles, title: 'Licencia oficial incluida', text: 'Toon Boom Harmony Essentials durante todo el mes de formación, sin costo adicional.' },
  { icon: Briefcase, title: 'Portafolio profesional', text: 'Tres ejercicios de animación finalizados como evidencia real de competencia técnica.' },
  { icon: Award, title: 'Certificado IUDC', text: 'Certificación institucional avalada por la Dirección de Animación de la IUDC.' },
];

const curriculum = [
  { week: 1, title: 'Fundamentos de Harmony', hours: '10 h', topics: ['Interfaz y flujo de trabajo', 'Herramientas de dibujo vectorial y raster', 'Capas, timeline y exposición de dibujos'] },
  { week: 2, title: 'Animación Cuadro a Cuadro', hours: '10 h', topics: ['Principios de animación', 'Timing, spacing y fluidez de movimiento', 'Ciclos de caminata y acciones básicas'] },
  { week: 3, title: 'Clean Up Profesional', hours: '10 h', topics: ['Lectura de rough animation', 'Control y consistencia de línea', 'Adherencia al model sheet y trazado vectorial limpio'] },
  { week: 4, title: 'Proyecto Final y Portafolio', hours: '10 h', topics: ['Ejercicio integrador', 'Render y exportación profesional', 'Presentación de portafolio final'] },
];

const audiences = [
  { icon: GraduationCap, title: 'Estudiantes IUDC', items: ['Animación, Videojuegos y Diseño Gráfico', 'Egresados en proceso de empleabilidad', 'Tarifa preferencial institucional'] },
  { icon: Building2, title: 'Profesionales externos', items: ['Animadores independientes', 'Diseñadores del sector creativo', 'Interesados en animación 2D profesional'] },
];

const logistics = [
  { icon: Clock, label: 'Duración', value: '4 semanas / 40 horas' },
  { icon: MapPin, label: 'Modalidad', value: 'Presencial – aula de cómputo' },
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
            <div className="absolute top-16 left-10 w-24 h-24 border border-primary-purple/20 rounded-full animate-float" />
            <div className="absolute bottom-16 right-16 w-16 h-16 border border-primary-blue/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary-purple/10 rounded-full blur-3xl" />
          </div>

          <div className="relative px-6 sm:px-10 lg:px-14 py-8 md:py-10">
            <Link href="/cursos" className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-6 group text-sm">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Volver a Cursos
            </Link>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="animate-slide-up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-accent-blue font-inter text-xs mb-5">
                  <Palette className="w-3.5 h-3.5" />
                  Curso Libre IUDC · 2026
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-sora font-bold text-white mb-4 leading-tight">
                  Animación 2D Profesional con{' '}
                  <span className="bg-subtle-gradient bg-clip-text text-transparent">Toon Boom Harmony</span>
                </h1>
                <p className="text-base md:text-lg text-gray-300 font-inter leading-relaxed mb-6">
                  Fórmate en la herramienta estándar de la industria audiovisual con énfasis en animación cuadro a cuadro y clean up profesional.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#inscripcion" className="inline-flex items-center justify-center px-6 py-3 bg-subtle-gradient text-white font-semibold font-inter rounded-full text-sm hover:shadow-lg hover:shadow-primary-purple/50 transition-all duration-300 hover:-translate-y-0.5">
                    Inscríbete Ahora
                  </a>
                  <a href="#curriculum" className="inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold font-inter rounded-full text-sm hover:bg-white/15 transition-colors">
                    Ver Currículum
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-subtle-gradient rounded-2xl blur-2xl opacity-20" />
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
                  <div>
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
          </div>
        </section>
      </div>

      {/* VALUE PROPS */}
      <section className="py-10 md:py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-sora font-bold text-gray-900 mb-4">¿Por qué este curso?</h2>
            <p className="text-gray-500 font-inter max-w-2xl mx-auto">
              Surge en articulación con el sector audiovisual bogotano para fortalecer la empleabilidad de animadores en nivel de entrada.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop) => (
              <div key={prop.title} className="group bg-white border border-primary-purple/20 rounded-2xl p-6 hover:border-primary-purple/60 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-subtle-gradient flex items-center justify-center mb-4 group-hover:animate-glow">
                  <prop.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-900 font-sora font-semibold text-lg mb-2">{prop.title}</h3>
                <p className="text-gray-500 font-inter text-sm leading-relaxed">{prop.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" className="py-10 md:py-20 bg-tech-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-blue/20 border border-primary-blue/40 text-accent-blue font-inter text-sm mb-4">
              <Target className="w-4 h-4" />
              4 módulos · 40 horas totales
            </div>
            <h2 className="text-3xl md:text-4xl font-sora font-bold text-gray-900 mb-4">Estructura curricular</h2>
            <p className="text-gray-500 font-inter max-w-2xl mx-auto">
              Cuatro semanas intensivas con una progresión clara desde los fundamentos hasta la entrega de un portafolio profesional.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {curriculum.map((module) => (
              <div key={module.week} className="relative bg-white border border-primary-purple/30 rounded-2xl p-8 hover:border-primary-purple transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-primary-purple font-inter">Semana {module.week}</span>
                    <h3 className="text-2xl font-sora font-bold text-gray-900 mt-1">{module.title}</h3>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-accent-blue/20 border border-accent-blue/40 text-accent-blue font-inter text-sm">{module.hours}</span>
                </div>
                <ul className="space-y-2">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-start text-gray-600 font-inter">
                      <CheckCircle2 className="w-5 h-5 text-primary-purple mr-3 mt-0.5 flex-shrink-0" />
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
      <section className="py-10 md:py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-sora font-bold text-gray-900 mb-4">Tarifas diferenciadas</h2>
            <p className="text-gray-500 font-inter max-w-2xl mx-auto">
              Precios competitivos frente al mercado. Cursos similares en Bogotá oscilan entre $350.000 y $800.000 sin incluir licencia de software.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="relative bg-white border-2 border-primary-purple rounded-2xl p-8 overflow-hidden">
              <div className="absolute -top-px left-1/2 -translate-x-1/2 bg-subtle-gradient text-gray-900 font-inter text-xs px-4 py-1 rounded-b-lg uppercase tracking-wider">Tarifa preferencial</div>
              <div className="mt-4">
                <h3 className="text-lg md:text-xl font-sora font-bold text-gray-900 mb-2">Estudiante activo IUDC</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl md:text-5xl font-sora font-bold bg-subtle-gradient bg-clip-text text-transparent">$400.000</span>
                  <span className="text-gray-500 font-inter">COP</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {['40 horas de formación', 'Licencia Harmony Essentials 1 mes', 'Certificado IUDC', 'Materiales y assets incluidos'].map((item) => (
                    <li key={item} className="flex items-center text-gray-600 font-inter"><CheckCircle2 className="w-5 h-5 text-accent-blue mr-3 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
                <a href="#inscripcion" className="block text-center w-full py-3 bg-subtle-gradient text-white font-semibold font-inter rounded-xl hover:shadow-lg hover:shadow-primary-purple/50 transition-all">Inscribirme</a>
              </div>
            </div>
            <div className="bg-white border border-primary-purple/30 rounded-2xl p-8 hover:border-primary-purple/60 transition-colors">
              <div className="mt-4">
                <h3 className="text-lg md:text-xl font-sora font-bold text-gray-900 mb-2">Participante externo</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl md:text-5xl font-sora font-bold text-gray-900">$600.000</span>
                  <span className="text-gray-500 font-inter">COP</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {['40 horas de formación', 'Licencia Harmony Essentials 1 mes', 'Certificado IUDC', 'Portafolio de 3 ejercicios'].map((item) => (
                    <li key={item} className="flex items-center text-gray-600 font-inter"><CheckCircle2 className="w-5 h-5 text-primary-purple mr-3 flex-shrink-0" />{item}</li>
                  ))}
                </ul>
                <a href="#inscripcion" className="block text-center w-full py-3 border border-primary-purple text-white font-semibold font-inter rounded-xl hover:bg-primary-purple/10 transition-colors">Inscribirme</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="py-10 md:py-20 bg-tech-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-sora font-bold text-gray-900 mb-4">Población objetivo</h2>
            <p className="text-gray-500 font-inter max-w-2xl mx-auto">
              Requisito de ingreso: conocimientos básicos de dibujo. No se requiere experiencia previa en animación digital.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {audiences.map((audience) => (
              <div key={audience.title} className="bg-white border border-primary-purple/30 rounded-2xl p-8 hover:border-primary-purple transition-colors">
                <div className="w-14 h-14 rounded-2xl bg-subtle-gradient flex items-center justify-center mb-4">
                  <audience.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-sora font-bold text-gray-900 mb-4">{audience.title}</h3>
                <ul className="space-y-2">
                  {audience.items.map((item) => (
                    <li key={item} className="flex items-start text-gray-600 font-inter">
                      <CheckCircle2 className="w-5 h-5 text-accent-blue mr-3 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENROLLMENT */}
      <section id="inscripcion" className="py-10 md:py-20 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-sora font-bold text-gray-900 mb-6">Asegura tu cupo</h2>
              <p className="text-gray-600 font-inter text-lg leading-relaxed mb-6">
                Solo hay <span className="text-accent-blue font-bold">25 cupos disponibles</span> para esta primera edición del curso.
              </p>
              <div className="space-y-4">
                {['Respuesta en menos de 24 horas hábiles', 'Soporte personalizado durante todo el proceso', 'Articulación directa con el sector audiovisual bogotano'].map((item) => (
                  <div key={item} className="flex items-center text-gray-600 font-inter">
                    <CheckCircle2 className="w-5 h-5 text-primary-purple mr-3 flex-shrink-0" />
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
