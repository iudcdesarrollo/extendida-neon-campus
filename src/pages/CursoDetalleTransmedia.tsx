
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CourseHero from '../components/courseDetail/CourseHero';
import CourseContent from '../components/courseDetail/CourseContent';
import EnrollmentForm from '../components/courseDetail/EnrollmentForm';
import { transmediaCourseData } from '../data/transmediaCourseData';
import useScrollToTop from '../hooks/useScrollToTop';

const CursoDetalleTransmedia = () => {
  useScrollToTop();
  const courseData = {
    title: transmediaCourseData.title,
    duration: transmediaCourseData.duration,
    priceStudent: transmediaCourseData.priceStudent,
    priceExternal: transmediaCourseData.priceExternal,
    modality: transmediaCourseData.modality,
    schedule: transmediaCourseData.schedule,
    sessions: transmediaCourseData.sessions,
    image: transmediaCourseData.image
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      <CourseHero courseData={courseData} />

      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <CourseContent
              description={transmediaCourseData.description}
              tools={transmediaCourseData.tools}
              audience={transmediaCourseData.audience}
              sessionsContent={transmediaCourseData.sessions_content}
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

export default CursoDetalleTransmedia;
