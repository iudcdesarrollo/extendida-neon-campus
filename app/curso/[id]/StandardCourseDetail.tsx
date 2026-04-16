'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CourseHero from '@/components/courseDetail/CourseHero';
import CourseContent from '@/components/courseDetail/CourseContent';
import EnrollmentForm from '@/components/courseDetail/EnrollmentForm';
import { NormalizedCourseData } from '@/data/courseRegistry';

export default function StandardCourseDetail({ courseData }: { courseData: NormalizedCourseData }) {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />

      <CourseHero courseData={courseData} />

      <section className="px-4 sm:px-6 lg:px-8 py-4 pb-8">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-3xl px-6 py-8 md:px-10 md:py-10">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-10">
            <CourseContent
              description={courseData.description}
              tools={courseData.tools}
              audience={courseData.audience}
              sessionsContent={courseData.sessionsContent}
            />
            <div>
              <EnrollmentForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
