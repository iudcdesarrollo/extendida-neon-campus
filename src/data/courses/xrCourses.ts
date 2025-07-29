
import { Course } from '../courses';

export const xrCourses: Course[] = [
  {
    id: 15,
    title: 'Diseño UX/UI para Realidad Extendida (XR)',
    duration: '30 horas',
    priceStudent: '$450.000 COP',
    priceExternal: '$600.000 COP',
    tools: ['Figma', 'Unity', 'Prototipado XR'],
    audience: 'Diseñadores, desarrolladores y creativos interesados en experiencias inmersivas',
    category: 'vr',
    image: '/lovable-uploads/b480e4bf-df68-476f-816e-1228a5b23559.png',
    hasDetailPage: true
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
    image: '/lovable-uploads/a5ef8d56-0f74-4dfd-a37c-3017335476b3.png',
    hasDetailPage: true
  },
  {
    id: 18,
    title: 'Diseño UX/UI de Espacios Interactivos para Arquitectura XR',
    duration: '30 horas',
    priceStudent: '$450.000 COP',
    priceExternal: '$600.000 COP',
    tools: ['Unity', 'Figma', 'Blender'],
    audience: 'Arquitectos, diseñadores de espacios y desarrolladores XR',
    category: 'vr',
    image: '/lovable-uploads/279c4498-2e42-43a7-8bdf-3bd31e431eb0.png',
    hasDetailPage: true
  }
];
