
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
    image: '/lovable-uploads/30a4951f-b879-4be0-8179-5bb9f4ef3569.png',
    hasDetailPage: true
  },
  {
    id: 13,
    title: 'Creación de Contenido Audiovisual con IA para Narrativas Digitales',
    duration: '30 horas',
    priceStudent: '$450.000 COP',
    priceExternal: '$600.000 COP',
    tools: ['Runway ML', 'ChatGPT', 'Descript', 'Pictory AI', 'Canva'],
    audience: 'Comunicadores, estudiantes y productores de medios digitales interesados en innovación narrativa',
    category: 'ia',
    image: '/lovable-uploads/1f77ba4b-0952-423a-b6ed-bf67746eb458.png',
    hasDetailPage: true
  }
];
