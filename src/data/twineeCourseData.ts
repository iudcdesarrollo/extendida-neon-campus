
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
  id: 3,
  title: 'Creación de Guiones Interactivos con Twine e Ink',
  duration: '40 horas',
  priceStudent: '$450.000 COP',
  priceExternal: '$650.000 COP',
  modality: 'Presencial (opcional virtual de 6:00 p.m. a 8:00 p.m. con mínimo 10 inscritos)',
  schedule: 'Viernes y Miércoles de 2:00 p.m. a 6:00 p.m.',
  sessions: '10 sesiones de 4 horas',
  tools: ['Twine', 'Ink'],
  audience: 'Narradores, guionistas, diseñadores de videojuegos, docentes, y creativos interesados en storytelling interactivo',
  image: '/lovable-uploads/bcb5d844-5074-4efa-b0af-78a4010aac2b.png',
  description: 'Sumérgete en el arte del storytelling no lineal con este curso práctico, ideal para quienes buscan dar vida a narrativas dinámicas. Aprenderás a estructurar y escribir guiones interactivos esenciales para videojuegos, aplicaciones educativas y experiencias inmersivas. A través de talleres y ejercicios guiados, los participantes explorarán herramientas como Twine e Ink para crear historias ramificadas que respondan a las decisiones del usuario, fomentando la participación activa y la inmersión narrativa.',
  sessions_content: [
    {
      number: 1,
      title: 'Introducción al Storytelling Interactivo',
      content: 'Narrativa no lineal, estructuras ramificadas, decisiones y consecuencias.'
    },
    {
      number: 2,
      title: 'Diseño de Personajes Interactivos',
      content: 'Construcción de personajes con agencia, arcos dinámicos y personalidad reactiva.'
    },
    {
      number: 3,
      title: 'Fundamentos de Twine (I)',
      content: 'Interfaz, creación de pasajes, enlaces, lógica simple.'
    },
    {
      number: 4,
      title: 'Fundamentos de Twine (II)',
      content: 'Variables, condicionales, estilos visuales y exportación.'
    },
    {
      number: 5,
      title: 'Diseño de Estructuras Narrativas Complejas',
      content: 'Mapas de flujo, esquemas de interacción, ritmo.'
    },
    {
      number: 6,
      title: 'Introducción a Ink (I)',
      content: 'Sintaxis básica, nudos, ramificaciones.'
    },
    {
      number: 7,
      title: 'Ink (II) + Integración avanzada',
      content: 'Elecciones anidadas, condiciones, estructura de proyectos largos.'
    },
    {
      number: 8,
      title: 'Adaptación de Guiones a Plataformas Interactivas',
      content: 'Uso en videojuegos, apps, publicaciones digitales.'
    },
    {
      number: 9,
      title: 'Desarrollo del Proyecto Final',
      content: 'Escritura y montaje de una narrativa interactiva original.'
    },
    {
      number: 10,
      title: 'Presentación y Retroalimentación',
      content: 'Lectura cruzada, pruebas de jugabilidad, exportación y cierre.'
    }
  ]
};
