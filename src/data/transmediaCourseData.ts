
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

export const transmediaCourseData: CourseDetailData = {
  id: 4,
  title: 'Transmedia y Narrativas Interactivas para Campañas Sociales',
  duration: '30 horas',
  priceStudent: '$450.000 COP',
  priceExternal: '$600.000 COP',
  modality: 'Presencial',
  schedule: 'Lunes y Miércoles de 2:00 p.m. a 6:00 p.m.',
  sessions: '7.5 sesiones de 4 horas',
  tools: ['Twine', 'Canva', 'Instagram', 'TikTok', 'Notion'],
  audience: 'Profesionales de la comunicación, ONGs, estudiantes de comunicación y ciencias sociales',
  image: '/extendida-neon-campus/lovable-uploads/0fedadd0-d0c5-4f1f-a71a-9898e3a42523.png',
  description: 'Diseña campañas de impacto social, educativo o institucional que trasciendan las plataformas tradicionales. Este curso te enseñará a construir historias distribuidas estratégicamente en múltiples medios, movilizando audiencias y fomentando la participación activa. A través de ejercicios prácticos, los participantes aprenderán a crear narrativas transmedia que aprovechen el potencial de redes sociales, herramientas interactivas y otras plataformas digitales para generar un cambio positivo.',
  sessions_content: [
    {
      number: 1,
      title: 'Introducción a la Narrativa Transmedia y sus Principios',
      content: 'Definición, casos de estudio, componentes clave de una estrategia transmedia.'
    },
    {
      number: 2,
      title: 'Diseño de Mundos Narrativos y Audiencias',
      content: 'Creación de universos narrativos, segmentación de audiencias y sus patrones de consumo de medios.'
    },
    {
      number: 3,
      title: 'Storytelling Interactivo con Twine para Impacto Social',
      content: 'Creación de micro-historias ramificadas, dilemas morales, llamados a la acción.'
    },
    {
      number: 4,
      title: 'Contenido para Redes Sociales en Campañas (Instagram, TikTok)',
      content: 'Adaptación de mensajes a formatos específicos, creación de contenido viral, estrategias de hashtag.'
    },
    {
      number: 5,
      title: 'Gestión de Proyectos Transmedia con Notion',
      content: 'Organización de ideas, seguimiento de tareas, colaboración en equipos para campañas.'
    },
    {
      number: 6,
      title: 'Medición y Evaluación de Impacto',
      content: 'KPIs para campañas sociales, herramientas de análisis de datos, feedback y optimización.'
    },
    {
      number: 7,
      title: 'Estrategias de Movilización y Participación Ciudadana',
      content: 'Gamificación, activismo digital, creación de comunidades en línea.'
    },
    {
      number: 7.5,
      title: 'Presentación de Propuestas de Campañas Transmedia (2 horas)',
      content: 'Demostración de proyectos de los estudiantes.'
    }
  ]
};
