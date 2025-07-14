
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CourseHero from '../components/courseDetail/CourseHero';
import CourseContent from '../components/courseDetail/CourseContent';
import EnrollmentForm from '../components/courseDetail/EnrollmentForm';
import { narrativaEspacialCourseData } from '../data/narrativaEspacialCourseData';
import useScrollToTop from '../hooks/useScrollToTop';

const CursoDetalleNarrativaEspacial = () => {
  useScrollToTop();
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      <CourseHero courseData={narrativaEspacialCourseData} />

      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <CourseContent
              description={narrativaEspacialCourseData.description}
              tools={narrativaEspacialCourseData.tools}
              audience={narrativaEspacialCourseData.audience}
              sessionsContent={narrativaEspacialCourseData.sessionsContent}
            />
            
            <div className="lg:col-span-1">
              <EnrollmentForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CursoDetalleNarrativaEspacial;
