'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { courses } from '@/data/courses';

const CoursesCarousel = () => {
  const half = Math.ceil(courses.length / 2);
  const row1 = courses.slice(0, half);
  const row2 = courses.slice(half);

  return (
    <section className="py-4 md:py-6 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 mb-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-primary-purple text-sm md:text-base font-sora font-semibold tracking-[0.15em] uppercase mb-1">Oferta académica</p>
            <h2 className="text-3xl md:text-4xl font-sora font-bold text-gray-900 tracking-tight">
              Nuestros cursos
            </h2>
          </div>
          <Link href="/cursos" className="hidden md:flex items-center gap-1 text-primary-purple hover:text-primary-purple/80 text-sm font-sora font-medium transition-colors">
            Ver todos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Row 1 — scroll left */}
      <div className="relative mb-3">
        <div className="flex gap-3 animate-scroll-left">
          {[...row1, ...row1].map((course, i) => (
            <CourseCard key={`r1-${i}`} course={course} />
          ))}
        </div>
      </div>

      {/* Row 2 — scroll right */}
      <div className="relative">
        <div className="flex gap-3 animate-scroll-right">
          {[...row2, ...row2].map((course, i) => (
            <CourseCard key={`r2-${i}`} course={course} />
          ))}
        </div>
      </div>

      <div className="mt-5 text-center md:hidden">
        <Link href="/cursos" className="inline-flex items-center gap-1 text-primary-purple text-sm font-sora font-medium">
          Ver todos los cursos <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
          width: max-content;
          will-change: transform;
          backface-visibility: hidden;
        }
        .animate-scroll-right {
          animation: scroll-right 65s linear infinite;
          width: max-content;
          will-change: transform;
          backface-visibility: hidden;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-left, .animate-scroll-right {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

function CourseCard({ course }: { course: typeof courses[0] }) {
  const content = (
    <div className="group w-64 h-56 flex-shrink-0 bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-primary-purple/40 hover:shadow-lg hover:shadow-primary-purple/10 transition-all cursor-pointer flex flex-col">
      <div className="relative h-28 overflow-hidden flex-shrink-0">
        <img loading="lazy"
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div className="absolute top-2 right-2">
          <span className="px-2 py-0.5 rounded bg-white/90 text-gray-700 text-[10px] font-medium flex items-center gap-1 shadow-sm">
            <Clock className="w-2.5 h-2.5" />
            {course.duration}
          </span>
        </div>
      </div>
      <div className="p-3 flex flex-col flex-1">
        <h3 className="font-sora font-semibold text-gray-900 text-sm leading-snug mb-1.5 line-clamp-2 group-hover:text-primary-purple transition-colors">
          {course.title}
        </h3>
        <p className="text-gray-500 text-xs font-inter mt-auto">
          Desde {course.priceStudent}
        </p>
      </div>
    </div>
  );

  if (course.hasDetailPage) {
    return <Link href={`/curso/${course.id}`} className="no-underline">{content}</Link>;
  }
  return content;
}

export default CoursesCarousel;
