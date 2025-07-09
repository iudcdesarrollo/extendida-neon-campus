
import { Course } from '../courses';

export const aiCourses: Course[] = [
  {
    id: 6,
    title: 'Automatización de Render con IA',
    duration: '20 horas',
    priceStudent: '$300.000 COP',
    priceExternal: '$400.000 COP',
    tools: ['Blender', 'RenderMan', 'IA'],
    audience: 'Animadores, artistas 3D y técnicos interesados en IA aplicada a procesos técnicos',
    category: 'ia',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    hasDetailPage: true
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
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400',
    hasDetailPage: true
  }
];
