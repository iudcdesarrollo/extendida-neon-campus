
import React from 'react';
import { Search } from 'lucide-react';

interface Category {
  value: string;
  label: string;
}

interface CourseFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: Category[];
}

const CourseFilters: React.FC<CourseFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-12">
      {/* Search Input */}
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Buscar cursos por nombre o audiencia..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-black/50 border border-primary-purple/30 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-primary-purple transition-colors"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white" />
      </div>

      {/* Category Filter */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="bg-black/50 border border-primary-purple/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-purple transition-colors"
      >
        {categories.map((category) => (
          <option key={category.value} value={category.value} className="bg-black">
            {category.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourseFilters;
