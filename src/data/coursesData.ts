export interface Course {
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

export interface Category {
  value: string;
  label: string;
}

export const courses: Course[] = [
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
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400',
    hasDetailPage: true
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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400',
    hasDetailPage: true
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

export const categories: Category[] = [
  { value: 'todos', label: 'Todos los cursos' },
  { value: 'ia', label: 'Inteligencia Artificial' },
  { value: 'xr', label: 'Realidad Extendida' },
  { value: '3d', label: 'Diseño 3D' },
  { value: 'vr', label: 'Realidad Virtual' },
  { value: 'diseno', label: 'Diseño Digital' }
];
