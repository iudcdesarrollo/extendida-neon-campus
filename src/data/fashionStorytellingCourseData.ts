
export interface SessionContent {
  number: number;
  title: string;
  content: string;
}

export interface CourseData {
  title: string;
  duration: string;
  priceStudent: string;
  priceExternal: string;
  modality: string;
  schedule: string;
  sessions: string;
  image: string;
  description: string;
  tools: string[];
  audience: string;
  sessionsContent: SessionContent[];
}

export const fashionStorytellingCourseData: CourseData = {
  title: "Storytelling de Marca de Moda para Redes Sociales",
  duration: "20 horas",
  priceStudent: "$300.000 COP",
  priceExternal: "$400.000 COP",
  modality: "Presencial",
  schedule: "Miércoles de 2:00 p.m. a 6:00 p.m.",
  sessions: "5 sesiones de 4 horas",
  image: "/extendida-neon-campus/lovable-uploads/66f7c2c6-013e-4e68-a38e-3c70b10602a5.png",
  description: "Este curso es una inmersión en el diseño narrativo y visual aplicado específicamente al sector de la moda. Aprenderás a construir y comunicar una marca personal o de colección de moda de manera impactante, utilizando recursos gráficos, animación básica y lenguaje audiovisual adaptado para plataformas como Instagram y TikTok. Desde la conceptualización de la historia de la marca hasta la producción de contenido atractivo, los participantes desarrollarán las habilidades para crear una presencia digital distintiva en la industria de la moda.",
  tools: ["Canva", "DaVinci Resolve", "OBS Studio", "CapCut"],
  audience: "Estudiantes de diseño de modas, emprendedores de moda, creadores de contenido fashion",
  sessionsContent: [
    {
      number: 1,
      title: "Conceptos de Branding en Moda y Storytelling",
      content: "Definición de la identidad de marca, arquetipos de marca, cómo contar la historia de una colección."
    },
    {
      number: 2,
      title: "Creación de Contenido Visual con Canva para Moda",
      content: "Diseño de mood boards, gráficos para anuncios, posts y stories con estética fashion."
    },
    {
      number: 3,
      title: "Producción de Video para Moda con CapCut y OBS Studio",
      content: "Grabación de 'behind the scenes', looks, desfiles virtuales; edición rápida para Reels y TikTok."
    },
    {
      number: 4,
      title: "Edición y Post-producción en DaVinci Resolve para Moda",
      content: "Corrección de color para pasarelas, transiciones creativas, música y efectos de sonido para videos de moda."
    },
    {
      number: 5,
      title: "Estrategias de Contenido y Publicación",
      content: "Calendario de contenido, hashtags, análisis de métricas y adaptación para diferentes plataformas de moda."
    }
  ]
};
