
import React from 'react';
import { Search } from 'lucide-react';
import CourseCard from './CourseCard';

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

interface CoursesGridProps {
  filteredCourses: Course[];
}

const CoursesGrid: React.FC<CoursesGridProps> = ({ filteredCourses }) => {
  if (filteredCourses.length === 0) {
    return (
      <div className="text-center py-8 md:py-16">
        <Search className="w-16 h-16 text-gray-500 mx-auto mb-4" />
        <h3 className="text-2xl font-sora font-bold text-gray-900 mb-4">
          No encontramos cursos que coincidan
        </h3>
        <p className="text-gray-900 font-inter">
          Intenta con otros términos de búsqueda o selecciona una categoría diferente.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Results Count */}
      <p className="text-gray-900 mb-8 font-inter">
        Mostrando {filteredCourses.length} curso{filteredCourses.length !== 1 ? 's' : ''}
      </p>

      {/* Courses Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </>
  );
};

export default CoursesGrid;
