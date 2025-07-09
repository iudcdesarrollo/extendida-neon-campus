
import { Course } from '../courses';

export const xrCourses: Course[] = [
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
    id: 10,
    title: 'Visualización de Colecciones en Realidad Aumentada (AR)',
    duration: '30 horas',
    priceStudent: '$450.000 COP',
    priceExternal: '$600.000 COP',
    tools: ['Blender', 'Unity', 'Vuforia', 'Adobe Aero'],
    audience: 'Diseñadores de moda, desarrolladores creativos, docentes en visual merchandising',
    category: 'xr',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
    hasDetailPage: true
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
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
    hasDetailPage: true
  }
];
