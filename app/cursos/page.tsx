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
      <section className="pt-20 pb-16 bg-tech-gradient relative overflow-hidden">
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary-purple/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary-blue/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-sora font-bold text-gray-900 mb-6">
            Descubre Nuestros{' '}
            <span className="bg-subtle-gradient bg-clip-text text-transparent">
              Cursos
            </span>
          </h1>
          <p className="text-xl text-gray-600 font-inter max-w-3xl mx-auto">
            Aprende a crear, modelar, diseñar e innovar desde cero con tecnologías que están revolucionando el mundo digital.
          </p>
        </div>
      </section>

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
