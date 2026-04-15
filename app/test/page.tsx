'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Play, ArrowRight, Star, Clock, ChevronRight,
  Sparkles, Layers, PenTool, Film, Zap, Check, Menu, X, Award,
} from 'lucide-react';

/* ── DATA ─────────────────────────────────────────── */

const navLinks = [
  { name: 'Inicio', href: '/test' },
  { name: 'Cursos', href: '/cursos' },
  { name: 'Nosotros', href: '/quienes-somos' },
  { name: 'Contacto', href: '/contacto' },
];

const coursesHighlight = [
  {
    id: 22,
    title: 'Animación 2D con Toon Boom Harmony',
    tag: 'Nuevo',
    hours: '40h',
    description: 'Clean up profesional y animación cuadro a cuadro con la herramienta estándar de la industria.',
    image: '/extendida-neon-campus/lovable-uploads/3e10495c-49d3-4cac-ab38-75f5598ce01c.png',
  },
  {
    id: 2,
    title: 'Modelado de Personajes en Blender',
    tag: 'Popular',
    hours: '30h',
    description: 'Diseño y escultura digital de personajes 3D listos para videojuegos y animación.',
    image: '/extendida-neon-campus/lovable-uploads/3e10495c-49d3-4cac-ab38-75f5598ce01c.png',
  },
  {
    id: 1,
    title: 'Modelado 3D para Moda',
    tag: '3D',
    hours: '40h',
    description: 'Accesorios de moda modelados digitalmente para impresión 3D y prototipado rápido.',
    image: '/extendida-neon-campus/lovable-uploads/3e10495c-49d3-4cac-ab38-75f5598ce01c.png',
  },
];

const processSteps = [
  { icon: PenTool, title: 'Aprende', desc: 'Docentes activos en la industria audiovisual.' },
  { icon: Layers, title: 'Practica', desc: 'Ejercicios reales desde la primera sesión.' },
  { icon: Film, title: 'Crea', desc: 'Portafolio profesional al finalizar.' },
  { icon: Zap, title: 'Conecta', desc: 'Vínculo directo con el sector creativo.' },
];

const testimonials = [
  { name: 'Laura M.', role: 'Egresada Animación', text: 'El curso de Harmony me abrió la puerta a mi primer trabajo en un estudio. La práctica intensiva marca la diferencia.' },
  { name: 'Carlos R.', role: 'Diseñador Freelance', text: 'Blender cambió mi carrera. Los proyectos que hice durante el curso son parte de mi portafolio profesional hoy.' },
  { name: 'Ana S.', role: 'Estudiante Videojuegos', text: 'Las herramientas que aprendí me dieron ventaja frente a otros candidatos en las prácticas profesionales.' },
];

const SocialYoutube = () => (
  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);
const SocialInstagram = () => (
  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
);
const SocialTiktok = () => (
  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
);
const SocialLinkedin = () => (
  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 11-.001-4.125 2.062 2.062 0 01.001 4.125zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

const socials = [
  { name: 'YouTube', icon: SocialYoutube, href: '#' },
  { name: 'Instagram', icon: SocialInstagram, href: '#' },
  { name: 'TikTok', icon: SocialTiktok, href: '#' },
  { name: 'LinkedIn', icon: SocialLinkedin, href: '#' },
];

/* ── COMPONENT ────────────────────────────────────── */

export default function TestHomePage() {
  const [activeStep, setActiveStep] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dark-bg font-inter antialiased">

      {/* ── NAVBAR ──────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 bg-dark-bg/80 backdrop-blur-2xl border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex items-center justify-between h-14">
            <div className="hidden md:flex items-center gap-6">
              {navLinks.slice(0, 2).map((l) => (
                <Link key={l.name} href={l.href} className="text-white/55 hover:text-white text-[13px] font-medium tracking-wide transition-colors">
                  {l.name}
                </Link>
              ))}
            </div>

            <Link href="/test" className="absolute left-1/2 -translate-x-1/2">
              <img src="/extendida-neon-campus/lovable-uploads/8b1e7650-cdc7-488e-92e9-bbdef0ef8af6.png" alt="Aula Extendida" className="h-6 w-auto object-contain" />
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {navLinks.slice(2).map((l) => (
                <Link key={l.name} href={l.href} className="text-white/55 hover:text-white text-[13px] font-medium tracking-wide transition-colors">
                  {l.name}
                </Link>
              ))}
              <button
                onClick={() => window.open('https://wa.me/573107823744?text=' + encodeURIComponent('Hola! Me interesa inscribirme en un curso'), '_blank')}
                className="bg-primary-purple text-white text-[12px] font-semibold px-4 py-1.5 rounded-md transition-all hover:bg-primary-purple/85"
              >
                Inscríbete
              </button>
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white/70 hover:text-white z-10">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-dark-bg border-t border-white/[0.06] absolute top-14 inset-x-0 shadow-2xl shadow-black/50">
            <div className="px-5 py-4 space-y-0.5">
              {navLinks.map((l) => (
                <Link key={l.name} href={l.href} onClick={() => setMenuOpen(false)}
                  className="block py-2.5 text-white/70 hover:text-white text-sm font-medium transition-colors">
                  {l.name}
                </Link>
              ))}
              <button
                onClick={() => { window.open('https://wa.me/573107823744', '_blank'); setMenuOpen(false); }}
                className="w-full mt-3 bg-primary-purple text-white text-sm font-semibold py-2.5 rounded-lg">
                Inscríbete
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#120a2e] to-dark-bg" />
          <div className="absolute top-0 -left-20 w-72 h-72 bg-primary-purple/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 -right-20 w-72 h-72 bg-primary-blue/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-5 pt-24 pb-12 md:pt-28 md:pb-14">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/[0.1] text-white/60 text-[11px] font-medium mb-5">
                <Sparkles className="w-3 h-3 text-primary-purple" />
                Inscripciones abiertas 2026
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-sora font-extrabold text-white leading-[1.1] tracking-tight mb-4">
                Donde el arte
                <br />
                <span className="bg-gradient-to-r from-primary-purple via-accent-purple to-primary-blue bg-clip-text text-transparent">
                  cobra vida
                </span>
              </h1>

              <p className="text-sm md:text-[15px] text-white/55 leading-relaxed mb-7 max-w-md mx-auto lg:mx-0">
                Cursos intensivos de animación 2D, modelado 3D y diseño digital con profesionales activos de la industria audiovisual colombiana.
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5 justify-center lg:justify-start mb-8">
                <Link href="/cursos"
                  className="group inline-flex items-center justify-center gap-2 bg-primary-purple hover:bg-primary-purple/90 text-white px-6 py-3 rounded-lg font-sora font-semibold text-sm transition-all hover:shadow-xl hover:shadow-primary-purple/20">
                  Explorar cursos
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <button onClick={() => window.open('https://tally.so/r/mON5B7', '_blank')}
                  className="inline-flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-white px-6 py-3 rounded-lg font-sora font-semibold text-sm transition-all">
                  <Play className="w-4 h-4" />
                  ¿Qué curso va conmigo?
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-8">
                {[
                  { v: '22+', l: 'Cursos' }, { v: '40h', l: 'Promedio' },
                  { v: '25', l: 'Cupos' }, { v: '100%', l: 'Práctico' },
                ].map((s) => (
                  <div key={s.l} className="text-center lg:text-left">
                    <p className="text-lg font-sora font-bold text-white">{s.v}</p>
                    <p className="text-[10px] text-white/40 mt-0.5 uppercase tracking-wider">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <div className="hidden lg:block">
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-purple/10 rounded-full blur-3xl" />

                <div className="relative space-y-3">
                  <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-red-400/60" />
                      <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
                      <div className="w-2 h-2 rounded-full bg-green-400/60" />
                    </div>
                    <span className="text-white/25 text-[10px] ml-1">workspace.blend</span>
                  </div>

                  <div className="bg-black/25 rounded-lg p-3.5 border border-white/[0.05]">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <Film className="w-3 h-3 text-primary-purple" />
                      <span className="text-white/55 text-[11px] font-sora font-medium">Timeline</span>
                    </div>
                    {['Keyframe 1', 'Keyframe 2', 'Keyframe 3', 'Keyframe 4'].map((kf, i) => (
                      <div key={kf} className="flex items-center gap-2.5 mb-1.5 last:mb-0">
                        <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${i === 1 ? 'bg-primary-purple' : 'bg-white/15'}`} />
                        <div className="flex-1 h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary-purple to-primary-blue rounded-full" style={{ width: `${25 + i * 20}%` }} />
                        </div>
                        <span className="text-white/25 text-[9px] w-14 text-right">{kf}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-black/25 rounded-lg p-3.5 border border-white/[0.05]">
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <PenTool className="w-3 h-3 text-accent-blue" />
                      <span className="text-white/55 text-[11px] font-sora font-medium">Herramientas</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Blender', 'Toon Boom', 'Krita', 'ZBrush', 'Substance'].map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded bg-white/[0.05] border border-white/[0.08] text-white/50 text-[10px]">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-black/25 rounded-lg p-3.5 border border-white/[0.05]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-purple to-primary-blue flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white text-[11px] font-sora font-medium">Portafolio</p>
                        <p className="text-white/35 text-[10px]">3 proyectos</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-green-400 text-[11px] font-sora font-semibold">Listo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-primary-purple text-[11px] font-sora font-semibold tracking-[0.2em] uppercase mb-2">Metodología</p>
            <h2 className="text-2xl md:text-3xl font-sora font-bold text-white tracking-tight">De cero a profesional</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {processSteps.map((step, i) => (
              <div
                key={step.title}
                onMouseEnter={() => setActiveStep(i)}
                className={`group p-4 md:p-5 rounded-xl border transition-all duration-200 cursor-default ${
                  activeStep === i
                    ? 'bg-primary-purple/[0.08] border-primary-purple/25 -translate-y-0.5'
                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                  activeStep === i ? 'bg-primary-purple' : 'bg-white/[0.06]'
                }`}>
                  <step.icon className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-white font-sora font-semibold text-sm mb-1">{step.title}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COURSES ───────────────────────── */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-[#0d0720] to-dark-bg" />
        <div className="max-w-6xl mx-auto px-5 relative">
          <div className="flex items-end justify-between mb-8 md:mb-10">
            <div>
              <p className="text-primary-purple text-[11px] font-sora font-semibold tracking-[0.2em] uppercase mb-2">Destacados</p>
              <h2 className="text-2xl md:text-3xl font-sora font-bold text-white tracking-tight">Cursos que transforman</h2>
            </div>
            <Link href="/cursos" className="hidden md:flex items-center gap-1 text-white/45 hover:text-white text-xs font-medium transition-colors">
              Ver todos <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {coursesHighlight.map((course) => (
              <Link key={course.id} href={`/curso/${course.id}`}
                className="group bg-white/[0.02] border border-white/[0.06] rounded-xl overflow-hidden hover:border-primary-purple/30 transition-all duration-200 hover:-translate-y-0.5">
                <div className="relative h-36 overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent" />
                  <div className="absolute top-2.5 left-2.5 flex gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-primary-purple text-white text-[10px] font-semibold">{course.tag}</span>
                    <span className="px-2 py-0.5 rounded bg-black/50 backdrop-blur text-white/80 text-[10px] flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" />{course.hours}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-sora font-semibold text-sm mb-1.5 group-hover:text-primary-purple transition-colors leading-snug">{course.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed mb-3">{course.description}</p>
                  <span className="inline-flex items-center text-primary-purple text-xs font-sora font-medium">
                    Ver detalles <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 text-center md:hidden">
            <Link href="/cursos" className="inline-flex items-center gap-1 text-white/45 hover:text-white text-xs font-medium transition-colors">
              Ver todos los cursos <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ───────────────────────────── */}
      <section className="py-12 md:py-16 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-primary-purple text-[11px] font-sora font-semibold tracking-[0.2em] uppercase mb-2">Testimonios</p>
            <h2 className="text-2xl md:text-3xl font-sora font-bold text-white tracking-tight">Lo que dicen nuestros estudiantes</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.12] transition-colors">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 text-primary-purple fill-primary-purple" />
                  ))}
                </div>
                <p className="text-white/55 text-[13px] leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-purple to-primary-blue flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-sora font-bold text-[11px]">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-sora font-medium text-xs">{t.name}</p>
                    <p className="text-white/40 text-[11px]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────── */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-purple/[0.06] via-dark-bg to-primary-blue/[0.06]" />
        <div className="relative max-w-xl mx-auto px-5 text-center">
          <h2 className="text-2xl md:text-4xl font-sora font-bold text-white tracking-tight mb-3">
            Tu próximo proyecto{' '}
            <span className="bg-gradient-to-r from-primary-purple to-primary-blue bg-clip-text text-transparent">empieza aquí</span>
          </h2>
          <p className="text-white/45 text-sm leading-relaxed mb-7 max-w-sm mx-auto">
            Cupos limitados. Inscríbete y construye el portafolio que la industria necesita.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2.5">
            <Link href="/cursos"
              className="group inline-flex items-center justify-center gap-2 bg-white text-dark-bg px-6 py-3 rounded-lg font-sora font-bold text-sm transition-all hover:shadow-xl hover:shadow-white/10">
              Ver cursos <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <button onClick={() => window.open('https://wa.me/573107823744', '_blank')}
              className="inline-flex items-center justify-center gap-2 bg-white/[0.06] border border-white/[0.1] text-white px-6 py-3 rounded-lg font-sora font-semibold text-sm transition-all hover:bg-white/[0.1]">
              WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────── */}
      <footer className="border-t border-white/[0.06] bg-dark-bg">
        <div className="max-w-6xl mx-auto px-5 py-10 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 mb-10">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <img src="/extendida-neon-campus/lovable-uploads/8b1e7650-cdc7-488e-92e9-bbdef0ef8af6.png" alt="Aula Extendida" className="h-6 w-auto object-contain mb-3" />
              <p className="text-white/40 text-xs leading-relaxed max-w-[220px]">
                Formamos creadores digitales con cursos prácticos en animación, 3D y diseño.
              </p>
            </div>

            {/* Nav */}
            <div>
              <h4 className="text-white/70 text-[11px] font-sora font-semibold uppercase tracking-wider mb-3">Navegación</h4>
              <div className="space-y-2">
                {navLinks.map((l) => (
                  <Link key={l.name} href={l.href} className="block text-white/40 hover:text-white/70 text-xs transition-colors">{l.name}</Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white/70 text-[11px] font-sora font-semibold uppercase tracking-wider mb-3">Contacto</h4>
              <div className="space-y-2 text-white/40 text-xs">
                <a href="https://wa.me/573107823744" target="_blank" rel="noopener noreferrer" className="block hover:text-white/70 transition-colors">+57 310 782 3744</a>
                <p>Bogotá, Colombia</p>
                <p>IUDC</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white/70 text-[11px] font-sora font-semibold uppercase tracking-wider mb-3">Síguenos</h4>
              <div className="flex gap-2">
                {socials.map((s) => (
                  <a key={s.name} href={s.href} aria-label={s.name}
                    className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.15] transition-all">
                    <s.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.06] pt-5 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-white/25 text-[11px]">© 2026 Aula Extendida · Institución Universitaria de Colombia</p>
            <p className="text-white/20 text-[11px]">Creando el futuro de la educación creativa</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
