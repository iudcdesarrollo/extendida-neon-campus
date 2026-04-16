
import React from 'react';
import Link from 'next/link';
import { Clock, Users, Calendar, MapPin, ArrowLeft } from 'lucide-react';

interface CourseData {
  title: string;
  duration: string;
  priceStudent: string;
  priceExternal: string;
  modality: string;
  schedule: string;
  sessions: string;
  image: string;
}

interface CourseHeroProps {
  courseData: CourseData;
}

const CourseHero: React.FC<CourseHeroProps> = ({ courseData }) => {
  return (
    <section className="pt-28 md:pt-36 pb-8 md:pb-16 bg-tech-gradient relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-primary-purple/20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary-blue/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/cursos"
          className="inline-flex items-center text-gray-700 hover:text-primary-purple transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Volver a Cursos
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-sora font-bold text-gray-900 mb-6">
              {courseData.title}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="flex items-center text-gray-900">
                <Clock className="w-5 h-5 mr-2 text-primary-purple" />
                <span className="font-inter">{courseData.duration}</span>
              </div>
              <div className="flex items-center text-gray-900">
                <MapPin className="w-5 h-5 mr-2 text-primary-purple" />
                <span className="font-inter">{courseData.modality}</span>
              </div>
              <div className="flex items-center text-gray-900">
                <Calendar className="w-5 h-5 mr-2 text-primary-purple" />
                <span className="font-inter text-sm">{courseData.schedule}</span>
              </div>
              <div className="flex items-center text-gray-900">
                <Users className="w-5 h-5 mr-2 text-primary-purple" />
                <span className="font-inter text-sm">{courseData.sessions}</span>
              </div>
            </div>

            <div className="mb-6">
              <p className="text-primary-purple font-inter font-semibold mb-2">Precios:</p>
              <p className="text-gray-900 font-inter">Estudiantes IUDC: <span className="text-accent-blue font-bold">{courseData.priceStudent}</span></p>
              <p className="text-gray-900 font-inter">Externos: <span className="text-accent-blue font-bold">{courseData.priceExternal}</span></p>
            </div>
          </div>

          <div className="relative">
            <img
              src={courseData.image}
              alt={courseData.title}
              className="w-full h-48 md:h-80 object-cover rounded-2xl border border-primary-purple/20"
            />
            <div className="absolute inset-0 bg-subtle-gradient opacity-20 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
