
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CourseHero from '../components/courseDetail/CourseHero';
import CourseContent from '../components/courseDetail/CourseContent';
import EnrollmentForm from '../components/courseDetail/EnrollmentForm';
import { socialMediaContentCourseData } from '../data/socialMediaContentCourseData';

const CursoDetalleSocialMedia = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      <CourseHero courseData={socialMediaContentCourseData} />
      
      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <CourseContent
              description={socialMediaContentCourseData.description}
              tools={socialMediaContentCourseData.tools}
              audience={socialMediaContentCourseData.audience}
              sessionsContent={socialMediaContentCourseData.sessionsContent}
            />
            <EnrollmentForm />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CursoDetalleSocialMedia;
