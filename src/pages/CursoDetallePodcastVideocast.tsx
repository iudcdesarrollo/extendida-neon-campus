
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CourseHero from '../components/courseDetail/CourseHero';
import CourseContent from '../components/courseDetail/CourseContent';
import EnrollmentForm from '../components/courseDetail/EnrollmentForm';
import { podcastVideocastCourseData } from '../data/podcastVideocastCourseData';

const CursoDetallePodcastVideocast = () => {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      <CourseHero courseData={podcastVideocastCourseData} />

      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <CourseContent
              description={podcastVideocastCourseData.description}
              tools={podcastVideocastCourseData.tools}
              audience={podcastVideocastCourseData.audience}
              sessionsContent={podcastVideocastCourseData.sessionsContent}
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

export default CursoDetallePodcastVideocast;
