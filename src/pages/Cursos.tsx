import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Clock, Users, Search } from 'lucide-react';

const Cursos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const courses = [
    {
      id: 1,
      title: 'Diseño y Modelado de Personajes en Blender',
      duration: '30 horas',
      priceStudent: '$450.000 COP',
      priceExternal: '$600.000 COP',
      tools: ['Blender', 'Krita', 'MakeHuman'],
      audience: 'Estudiantes y profesionales interesados en el diseño de personajes 3D para medios digitales',
      category: '3d',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=400',
      hasDetailPage: true
    },
    {
      id: 2,
      title: 'Creación de Guiones Interactivos con Twine e Ink',
      duration: '20 horas',
      priceStudent: '$300.000 COP',
      priceExternal: '$400.000 COP',
      tools: ['Twine', 'Ink'],
      audience: 'Narradores, guionistas y diseñadores interesados en storytelling interactivo',
      category: 'diseno',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400'
    },
    {
      id: 3,
      title: 'Desarrollo de Juegos 2D con GDevelop',
      duration: '30 horas',
      priceStudent: '$450.000 COP',
      priceExternal: '$600.000 COP',
      tools: ['GDevelop'],
      audience: 'Personas con interés en crear videojuegos sin necesidad de saber programar',
      category: 'diseno',
      image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400'
    },
    {
      id: 4,
      title: 'Diseño UX/UI para Realidad Extendida (XR)',
      duration: '30 horas',
      priceStudent: '$450.000 COP',
      priceExternal: '$600.000 COP',
      tools: ['Figma', 'Unity', 'Prototipado XR'],
      audience: 'Diseñadores, desarrolladores y creativos interesados en experiencias inmersivas',
      category: 'xr',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400'
    },
    {
      id: 5,
      title: 'Técnicas Avanzadas de Iluminación Digital',
      duration: '30 horas',
      priceStudent: '$450.000 COP',
      priceExternal: '$600.000 COP',
      tools: ['Blender', 'Unreal Engine'],
      audience: 'Artistas visuales, animadores y técnicos en producción digital',
      category: '3d',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400'
    },
    {
      id: 6,
      title: 'Automatización de Render con IA',
      duration: '20 horas',
      priceStudent: '$300.000 COP',
      priceExternal: '$400.000 COP',
      tools: ['Blender', 'RenderMan', 'IA'],
      audience: 'Animadores, artistas 3D y técnicos interesados en IA aplicada a procesos técnicos',
      category: 'ia',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400'
    },
    {
      id: 7,
      title: 'Técnicas de Foley y Diseño Sonoro Creativo',
      duration: '20 horas',
      priceStudent: '$300.000 COP',
      priceExternal: '$400.000 COP',
      tools: ['Audacity', 'Reaper'],
      audience: 'Estudiantes y creadores de contenido sonoro para medios digitales',
      category: 'diseno',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400'
    },
    {
      id: 8,
      title: 'Creación y Animación de Contenido para Redes Sociales',
      duration: '20 horas',
      priceStudent: '$300.000 COP',
      priceExternal: '$400.000 COP',
      tools: ['Blender', 'DaVinci Resolve', 'Canva'],
      audience: 'Creadores de contenido, community managers y emprendedores digitales',
      category: 'diseno',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400'
    },
    {
      id: 9,
      title: 'Storytelling de Marca de Moda para Redes Sociales',
      duration: '20 horas',
      priceStudent: '$300.000 COP',
      priceExternal: '$400.000 COP',
      tools: ['Canva', 'DaVinci Resolve', 'OBS Studio', 'CapCut'],
      audience: 'Estudiantes de diseño de modas, emprendedores de moda, creadores de contenido fashion',
      category: 'diseno',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400'
    },
    {
      id: 10,
      title: 'Visualización de Colecciones en Realidad Aumentada (AR)',
      duration: '30 horas',
      priceStudent: '$450.000 COP',
      priceExternal: '$600.000 COP',
      tools: ['Blender', 'Unity', 'Vuforia', 'Adobe Aero'],
      audience: 'Diseñadores de moda, desarrolladores creativos, docentes en visual merchandising',
      category: 'xr',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400'
    },
    {
      id: 11,
      title: 'Diseño de Contenido para Podcast y VideoCast',
      duration: '20 horas',
      priceStudent: '$300.000 COP',
      priceExternal: '$400.000 COP',
      tools: ['OBS Studio', 'Reaper', 'DaVinci Resolve', 'Canva'],
      audience: 'Estudiantes de comunicación, periodistas, creadores de contenido y docentes',
      category: 'diseno',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400'
    },
    {
      id: 12,
      title: 'Creación de Contenido Audiovisual con IA para Narrativas Digitales',
      duration: '30 horas',
      priceStudent: '$450.000 COP',
      priceExternal: '$600.000 COP',
      tools: ['Runway ML', 'ChatGPT', 'Descript', 'Pictory AI', 'Canva'],
      audience: 'Comunicadores, estudiantes y productores de medios digitales interesados en innovación narrativa',
      category: 'ia',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400'
    },
    {
      id: 13,
      title: 'Transmedia y Narrativas Interactivas para Campañas Sociales',
      duration: '30 horas',
      priceStudent: '$450.000 COP',
      priceExternal: '$600.000 COP',
      tools: ['Twine', 'Canva', 'Instagram', 'TikTok', 'Notion'],
      audience: 'Profesionales de la comunicación, ONGs, estudiantes de comunicación y ciencias sociales',
      category: 'diseno',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400'
    },
    {
      id: 14,
      title: 'Narrativa Espacial y Storytelling Arquitectónico',
      duration: '30 horas',
      priceStudent: '$450.000 COP',
      priceExternal: '$600.000 COP',
      tools: ['Blender', 'Unreal Engine', 'Figma'],
      audience: 'Estudiantes y profesionales de arquitectura, diseño de espacios, visualización 3D',
      category: '3d',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=400'
    },
    {
      id: 15,
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
      id: 16,
      title: 'Visualización Arquitectónica con Blender y Unreal Engine',
      duration: '40 horas',
      priceStudent: '$600.000 COP',
      priceExternal: '$800.000 COP',
      tools: ['Blender', 'Unreal Engine'],
      audience: 'Estudiantes y profesionales en arquitectura, diseño de interiores, paisajismo, urbanismo',
      category: '3d',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=400'
    },
    {
      id: 17,
      title: 'Modelado 3D de Animales para Simulación y Educación Veterinaria',
      duration: '30 horas',
      priceStudent: '$450.000 COP',
      priceExternal: '$600.000 COP',
      tools: ['Blender', 'ZBrushCoreMini', 'Sketchfab'],
      audience: 'Estudiantes de veterinaria, biología, docentes, ilustradores científicos',
      category: '3d',
      image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=400'
    },
    {
      id: 18,
      title: 'Técnicas de Visualización de Datos e Historias con Datos',
      duration: '30 horas',
      priceStudent: '$450.000 COP',
      priceExternal: '$600.000 COP',
      tools: ['Flourish', 'Tableau Public', 'Canva', 'OBS'],
      audience: 'Comunicadores, docentes, analistas, diseñadores, gestores culturales y científicos sociales',
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

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-tech-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary-purple/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary-blue/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-6">
            Descubre Nuestros{' '}
            <span className="bg-subtle-gradient bg-clip-text text-transparent">
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

          {/* Results Count */}
          <p className="text-white mb-8 font-space">
            Mostrando {filteredCourses.length} curso{filteredCourses.length !== 1 ? 's' : ''}
          </p>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-black/60 rounded-2xl border border-primary-purple/20 hover:border-primary-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-purple/20 hover:-translate-y-2 overflow-hidden"
              >
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
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3 group-hover:text-primary-purple transition-colors">
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {course.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-blue/20 text-accent-blue border border-accent-blue/30"
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
            ))}
          </div>

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-white mx-auto mb-4" />
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4">
                No encontramos cursos que coincidan
              </h3>
              <p className="text-white font-space">
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
