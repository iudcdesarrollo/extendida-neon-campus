
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
    <div className="px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-4">
      <section className="relative bg-gradient-to-br from-[#1a0f2e] via-[#0f0a1f] to-[#0c0f1a] overflow-hidden rounded-3xl max-w-7xl mx-auto">
        <div className="absolute inset-0 hidden sm:block">
          <div className="absolute top-16 left-10 w-24 h-24 border border-primary-purple/20 rounded-full sm:animate-float"></div>
          <div className="absolute bottom-16 right-16 w-16 h-16 border border-primary-blue/20 rounded-lg rotate-45 sm:animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-primary-purple/10 rounded-full blur-2xl"></div>
        </div>

        <div className="relative px-6 sm:px-10 lg:px-14 py-8 md:py-10">
          {/* Back Button */}
          <Link
            href="/cursos"
            className="inline-flex items-center text-gray-300 hover:text-white transition-colors mb-6 group text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver a Cursos
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-sora font-bold text-white mb-5 leading-tight">
                {courseData.title}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                <div className="flex items-center text-gray-300">
                  <Clock className="w-4 h-4 mr-2 text-accent-blue flex-shrink-0" />
                  <span className="font-inter text-sm">{courseData.duration}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 text-accent-blue flex-shrink-0" />
                  <span className="font-inter text-sm">{courseData.modality}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-2 text-accent-blue flex-shrink-0" />
                  <span className="font-inter text-sm">{courseData.schedule}</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="w-4 h-4 mr-2 text-accent-blue flex-shrink-0" />
                  <span className="font-inter text-sm">{courseData.sessions}</span>
                </div>
              </div>

              <div>
                <p className="text-accent-blue font-inter font-semibold text-xs uppercase tracking-wider mb-2">Precios</p>
                <p className="text-gray-300 font-inter text-sm">Estudiantes IUDC: <span className="text-white font-bold">{courseData.priceStudent}</span></p>
                <p className="text-gray-300 font-inter text-sm">Externos: <span className="text-white font-bold">{courseData.priceExternal}</span></p>
              </div>
            </div>

            <div className="relative">
              <img loading="lazy"
                src={courseData.image}
                alt={courseData.title}
                className="w-full h-48 md:h-72 object-cover rounded-2xl border border-white/10"
              />
              <div className="absolute inset-0 bg-subtle-gradient opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseHero;
