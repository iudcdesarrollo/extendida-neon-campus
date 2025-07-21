
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users } from 'lucide-react';

interface Course {
  id: number;
  title: string;
  duration: string;
  priceStudent: string;
  priceExternal: string;
  tools: string[];
  audience: string;
  category: string;
  image: string;
  hasDetailPage?: boolean;
}

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="group bg-black/60 rounded-2xl border border-primary-purple/20 hover:border-primary-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-purple/20 hover:-translate-y-2 overflow-hidden">
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-subtle-gradient opacity-20 group-hover:opacity-30 transition-opacity"></div>
      </div>

      <div className="p-6">
        {/* Course Title */}
        <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-primary-purple transition-colors line-clamp-2">
          {course.title}
        </h3>

        {/* Duration and Price */}
        <div className="flex justify-between items-center mb-4">
          <span className="text-white font-space font-semibold flex items-center gap-1">
            <Clock className="w-4 h-4 text-white" />
            {course.duration}
          </span>
        </div>

        {/* Prices */}
        <div className="mb-4 space-y-1">
          <p className="text-white font-space font-semibold">
            Estudiantes IUDC: {course.priceStudent}
          </p>
          <p className="text-white font-space">
            Externos: {course.priceExternal}
          </p>
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2 mb-4 overflow-hidden" style={{ maxHeight: '2rem' }}>
          {course.tools.map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue/20 text-accent-blue border border-accent-blue/30 whitespace-nowrap"
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Audience */}
        <p className="text-white font-space text-sm mb-6 leading-relaxed">
          <Users className="inline w-4 h-4 text-white mr-2" />
          {course.audience}
        </p>

        {/* CTA Button */}
        {course.hasDetailPage ? (
          <Link 
            to={`/curso/${course.id}`}
            className="block w-full bg-subtle-gradient text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-purple/50 transition-all duration-300 transform hover:scale-105 text-center"
          >
            Ver más detalles
          </Link>
        ) : (
          <button className="w-full bg-subtle-gradient text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-purple/50 transition-all duration-300 transform hover:scale-105">
            Ver más detalles
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
