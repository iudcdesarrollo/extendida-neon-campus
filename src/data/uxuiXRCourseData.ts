interface SessionContent {
  number: number;
  title: string;
  content: string;
}

interface CourseDetailData {
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

export const uxuiXRCourseData: CourseDetailData = {
  id: 13,
  title: 'Diseño UX/UI para Realidad Extendida (XR)',
  duration: '30 horas',
  priceStudent: '$450.000 COP',
  priceExternal: '$600.000 COP',
  modality: 'Presencial',
  schedule: 'Lunes y Miércoles de 2:00 p.m. a 6:00 p.m.',
  sessions: '7.5 sesiones de 4 horas',
  tools: ['Figma (gratuito)', 'Unity (gratuito)', 'herramientas de prototipado XR'],
  audience: 'Diseñadores, desarrolladores y creativos interesados en experiencias inmersivas',
  image: '/lovable-uploads/b480e4bf-df68-476f-816e-1228a5b23559.png',
  description: 'Este curso especializado aborda el diseño de interfaces y experiencias de usuario específicamente para entornos de Realidad Extendida (XR), que incluyen Realidad Virtual (VR), Realidad Aumentada (AR) y Realidad Mixta (MR). Los participantes explorarán cómo la psicología del usuario, el diseño visual y las técnicas de interacción avanzada se fusionan para crear experiencias inmersivas intuitivas y efectivas. A través de proyectos prácticos, se aprenderá a prototipar y evaluar soluciones UX/UI para el espacio tridimensional.',
  sessions_content: [
    {
      number: 1,
      title: 'Introducción a XR y UX/UI en Entornos Inmersivos',
      content: 'Definición de XR, principios fundamentales de UX/UI en 3D, desafíos y oportunidades.'
    },
    {
      number: 2,
      title: 'Psicología del Usuario en XR',
      content: 'Percepción, cognición, presencia y confort en entornos virtuales y aumentados.'
    },
    {
      number: 3,
      title: 'Diseño de Interacción para XR',
      content: 'Modelos de interacción (raycasting, teletransportación, manipulación directa), gestos y comandos de voz.'
    },
    {
      number: 4,
      title: 'Prototipado de Interfaces en Figma y Unity',
      content: 'Diseño de wireframes y mockups 2D/3D en Figma, creación de elementos UI básicos en Unity.'
    },
    {
      number: 5,
      title: 'Navegación y Usabilidad en Espacios XR',
      content: 'Diseño de flujos de usuario, puntos de interés, feedback visual y sonoro.'
    },
    {
      number: 6,
      title: 'Pruebas de Usuario y Evaluación',
      content: 'Métodos de testeo, recolección de datos, iteración de diseño basada en feedback.'
    },
    {
      number: 7,
      title: 'Consideraciones Avanzadas y Accesibilidad',
      content: 'Diseño para diferentes plataformas XR, accesibilidad y ética en XR.'
    },
    {
      number: 7.5,
      title: 'Presentación de Proyectos Finales',
      content: 'Demostración de los prototipos UX/UI desarrollados. (2 horas)'
    }
  ]
};