
export interface SessionContent {
  number: number;
  title: string;
  content: string;
}

export interface CourseDetailData {
  id: number;
  title: string;
  duration: string;
  priceStudent: string;
  priceExternal: string;
  modality: string;
  schedule: string;
  sessions: string;
  tools: string[];
  audience: string;
  image: string;
  description: string;
  sessions_content: SessionContent[];
}

export const twineeCourseData: CourseDetailData = {
  id: 2,
  title: 'Creación de Guiones Interactivos con Twine e Ink',
  duration: '20 horas',
  priceStudent: '$300.000 COP',
  priceExternal: '$400.000 COP',
  modality: 'Presencial',
  schedule: 'Viernes de 2:00 p.m. a 6:00 p.m.',
  sessions: '5 sesiones de 4 horas',
  tools: ['Twine', 'Ink (open source)'],
  audience: 'Narradores, guionistas y diseñadores interesados en storytelling interactivo',
  image: '/lovable-uploads/bcb5d844-5074-4efa-b0af-78a4010aac2b.png',
  description: 'Sumérgete en el arte del storytelling no lineal con este curso práctico, ideal para quienes buscan dar vida a narrativas dinámicas. Aprenderás a estructurar y escribir guiones interactivos que son esenciales para videojuegos, aplicaciones educativas y experiencias inmersivas. A través de talleres prácticos, los participantes explorarán las herramientas Twine e Ink, desarrollando la capacidad de crear historias ramificadas que respondan a las decisiones del usuario, fomentando la participación activa y la inmersión del público.',
  sessions_content: [
    {
      number: 1,
      title: 'Introducción al Storytelling Interactivo',
      content: 'Conceptos de narrativa no lineal, arcos de personaje interactivos, tipos de decisiones y consecuencias.'
    },
    {
      number: 2,
      title: 'Fundamentos de Twine',
      content: 'Interfaz, creación de pasajes, enlaces, variables y condicionales en Twine.'
    },
    {
      number: 3,
      title: 'Diseño de Ramificaciones y Múltiples Finales',
      content: 'Estrategias para diseñar narrativas con múltiples caminos y desenlaces.'
    },
    {
      number: 4,
      title: 'Introducción a Ink y su Integración',
      content: 'Sintaxis básica de Ink, creación de nudos y flujos narrativos complejos.'
    },
    {
      number: 5,
      title: 'Proyecto Final y Publicación',
      content: 'Desarrollo de un guion interactivo completo, exportación y consideraciones para la publicación.'
    }
  ]
};
