'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CourseFilters from '@/components/courses/CourseFilters';
import CoursesGrid from '@/components/courses/CoursesGrid';
import { courses, categories } from '@/data/coursesData';

export default function CursosPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.audience.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />

      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-4">
        <section className="relative bg-gradient-to-br from-[#1a0f2e] via-[#0f0a1f] to-[#0c0f1a] overflow-hidden rounded-3xl max-w-7xl mx-auto">
          <div className="absolute inset-0 hidden sm:block">
            <div className="absolute top-16 left-10 w-24 h-24 border border-primary-purple/20 rounded-full animate-float"></div>
            <div className="absolute bottom-16 right-16 w-16 h-16 border border-primary-blue/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary-purple/10 rounded-full blur-3xl"></div>
          </div>
          <div className="relative px-6 sm:px-10 lg:px-14 py-10 md:py-14 text-center">
            <h1 className="text-3xl md:text-5xl font-sora font-bold text-white mb-4 leading-tight">
              Descubre Nuestros{' '}
              <span className="bg-subtle-gradient bg-clip-text text-transparent">Cursos</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 font-inter max-w-2xl mx-auto">
              Aprende a crear, modelar, diseñar e innovar desde cero con tecnologías que están revolucionando el mundo digital.
            </p>
          </div>
        </section>
      </div>

      {/* Search and Filter Section */}
      <section className="py-12 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CourseFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />

          <CoursesGrid filteredCourses={filteredCourses} />
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
