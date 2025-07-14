
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CourseHero from '../components/courseDetail/CourseHero';
import CourseContent from '../components/courseDetail/CourseContent';
import EnrollmentForm from '../components/courseDetail/EnrollmentForm';
import { modelado3DAnimalesCourseData } from '../data/modelado3DAnimalesCourseData';
import useScrollToTop from '../hooks/useScrollToTop';

const CursoDetalleModelado3DAnimales = () => {
  useScrollToTop();
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      <CourseHero courseData={modelado3DAnimalesCourseData} />

      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <CourseContent
              description={modelado3DAnimalesCourseData.description}
              tools={modelado3DAnimalesCourseData.tools}
              audience={modelado3DAnimalesCourseData.audience}
              sessionsContent={modelado3DAnimalesCourseData.sessionsContent}
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
};

export default CursoDetalleModelado3DAnimales;
