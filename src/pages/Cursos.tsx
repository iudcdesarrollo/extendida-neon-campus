
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Cursos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const courses = [
    {
      id: 1,
      title: 'Diseño UX/UI de Espacios Interactivos para Arquitectura XR',
      duration: '30 horas',
      priceStudent: '$450.000 COP',
      priceExternal: '$600.000 COP',
      tools: ['Unity', 'Figma', 'Blender'],
      audience: 'Arquitectos, diseñadores de espacios y desarrolladores XR',
      category: 'xr',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400'
    },
    {
      id: 2,
      title: 'Inteligencia Artificial Aplicada al Arte Digital',
      duration: '25 horas',
      priceStudent: '$400.000 COP',
      priceExternal: '$550.000 COP',
      tools: ['Python', 'TensorFlow', 'Photoshop'],
      audience: 'Artistas digitales, programadores y creadores de contenido',
      category: 'ia',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400'
    },
    {
      id: 3,
      title: 'Modelado 3D Avanzado con Realidad Aumentada',
      duration: '35 horas',
      priceStudent: '$500.000 COP',
      priceExternal: '$650.000 COP',
      tools: ['Blender', 'Unity', 'AR Core'],
      audience: 'Diseñadores 3D, desarrolladores y artistas digitales',
      category: '3d',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=400'
    },
    {
      id: 4,
      title: 'Desarrollo de Experiencias Inmersivas VR',
      duration: '40 horas',
      priceStudent: '$550.000 COP',
      priceExternal: '$700.000 COP',
      tools: ['Unity', 'Oculus SDK', 'C#'],
      audience: 'Desarrolladores, diseñadores UX y creadores de experiencias',
      category: 'vr',
      image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400'
    },
    {
      id: 5,
      title: 'Animación Procedimental con IA',
      duration: '28 horas',
      priceStudent: '$420.000 COP',
      priceExternal: '$570.000 COP',
      tools: ['Houdini', 'Python', 'Machine Learning'],
      audience: 'Animadores, artistas técnicos y desarrolladores creativos',
      category: 'ia',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400'
    },
    {
      id: 6,
      title: 'Prototipado Digital para Productos Interactivos',
      duration: '22 horas',
      priceStudent: '$380.000 COP',
      priceExternal: '$500.000 COP',
      tools: ['Figma', 'Principle', 'After Effects'],
      audience: 'Diseñadores UX/UI, product managers y emprendedores',
      category: 'diseno',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400'
    }
  ];

  const categories = [
    { value: 'todos', label: 'Todos los cursos' },
    { value: 'ia', label: 'Inteligencia Artificial' },
    { value: 'xr', label: 'Realidad Extendida' },
    { value: '3d', label: 'Diseño 3D' },
    { value: 'vr', label: 'Realidad Virtual' },
    { value: 'diseno', label: 'Diseño Digital' }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.audience.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todos' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getToolColor = (tool: string) => {
    const colors = {
      'Unity': 'bg-neon-purple/20 text-neon-purple',
      'Figma': 'bg-electric-blue/20 text-electric-blue',
      'Blender': 'bg-neon-pink/20 text-neon-pink',
      'Python': 'bg-neon-green/20 text-neon-green',
      'TensorFlow': 'bg-neon-purple/20 text-neon-purple',
      'Photoshop': 'bg-electric-blue/20 text-electric-blue',
      'AR Core': 'bg-neon-pink/20 text-neon-pink',
      'Oculus SDK': 'bg-neon-green/20 text-neon-green',
      'C#': 'bg-neon-purple/20 text-neon-purple',
      'Houdini': 'bg-electric-blue/20 text-electric-blue',
      'Machine Learning': 'bg-neon-pink/20 text-neon-pink',
      'Principle': 'bg-neon-green/20 text-neon-green',
      'After Effects': 'bg-neon-purple/20 text-neon-purple'
    };
    return colors[tool as keyof typeof colors] || 'bg-gray-600/20 text-gray-400';
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-tech-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border border-neon-purple/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-electric-blue/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
            Descubre Nuestros{' '}
            <span className="bg-neon-gradient bg-clip-text text-transparent">
              Cursos
            </span>
          </h1>
          <p className="text-xl text-gray-300 font-space max-w-3xl mx-auto">
            Aprende a crear, modelar, diseñar e innovar desde cero con tecnologías que están revolucionando el mundo digital.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            {/* Search Input */}
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Buscar cursos por nombre o audiencia..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-black/50 border border-neon-purple/30 rounded-lg px-4 py-3 pl-12 text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple transition-colors"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-black/50 border border-neon-purple/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-purple transition-colors"
            >
              {categories.map((category) => (
                <option key={category.value} value={category.value} className="bg-black">
                  {category.label}
                </option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <p className="text-gray-400 mb-8 font-space">
            Mostrando {filteredCourses.length} curso{filteredCourses.length !== 1 ? 's' : ''}
          </p>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-black/60 rounded-2xl border border-neon-purple/20 hover:border-neon-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-neon-purple/20 hover:-translate-y-2 overflow-hidden"
              >
                {/* Course Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-neon-gradient opacity-20 group-hover:opacity-30 transition-opacity"></div>
                </div>

                <div className="p-6">
                  {/* Course Title */}
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-neon-purple transition-colors">
                    {course.title}
                  </h3>

                  {/* Duration and Price */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-electric-blue font-space font-semibold flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      {course.duration}
                    </span>
                  </div>

                  {/* Prices */}
                  <div className="mb-4 space-y-1">
                    <p className="text-neon-green font-space font-semibold">
                      Estudiantes IUDC: {course.priceStudent}
                    </p>
                    <p className="text-gray-300 font-space">
                      Externos: {course.priceExternal}
                    </p>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tools.map((tool, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getToolColor(tool)}`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Audience */}
                  <p className="text-gray-400 font-space text-sm mb-6 leading-relaxed">
                    <span className="text-neon-pink font-semibold">👥 </span>
                    {course.audience}
                  </p>

                  {/* CTA Button */}
                  <button className="w-full bg-neon-gradient text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-neon-purple/50 transition-all duration-300 transform hover:scale-105">
                    Ver más detalles
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                No encontramos cursos que coincidan
              </h3>
              <p className="text-gray-400 font-space">
                Intenta con otros términos de búsqueda o selecciona una categoría diferente.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Cursos;
