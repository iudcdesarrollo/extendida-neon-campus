import { modelado3dAccesoriosModaCourseData } from './modelado3dAccesoriosModaCourseData';
import { twineeCourseData } from './twineeCourseData';
import { gdevelopCourseData } from './gdevelopCourseData';
import { uxuiXRCourseData } from './uxuiXRCourseData';
import { iluminacionCourseData } from './iluminacionCourseData';
import { automationRenderCourseData } from './automationRenderCourseData';
import { foleyCourseData } from './foleyCourseData';
import { socialMediaContentCourseData } from './socialMediaContentCourseData';
import { fashionStorytellingCourseData } from './fashionStorytellingCourseData';
import { arFashionVisualizationCourseData } from './arFashionVisualizationCourseData';
import { podcastVideocastCourseData } from './podcastVideocastCourseData';
import { aiAudiovisualContentCourseData } from './aiAudiovisualContentCourseData';
import { transmediaCourseData } from './transmediaCourseData';
import { narrativaEspacialCourseData } from './narrativaEspacialCourseData';
import { arquitecturaXRCourseData } from './arquitecturaXRCourseData';
import { visualizacionArquitectonicaCourseData } from './visualizacionArquitectonicaCourseData';
import { modelado3DAnimalesCourseData } from './modelado3DAnimalesCourseData';
import { businessIntelligenceCourseData } from './businessIntelligenceCourseData';
import { modelosNegocioIACourseData } from './modelosNegocioIACourseData';
import { visualizacionDatosCourseData } from './visualizacionDatosCourseData';
import { toonBoomHarmonyCourseData } from './toonBoomHarmonyCourseData';

export interface NormalizedCourseData {
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
  sessionsContent: { number: number; title: string; content: string }[];
  isCustomLanding?: boolean;
}

function normalize(data: any): NormalizedCourseData {
  return {
    title: data.title || '',
    duration: data.duration || '',
    priceStudent: data.priceStudent || '',
    priceExternal: data.priceExternal || '',
    modality: data.modality || 'Presencial',
    schedule: data.schedule || '',
    sessions: data.sessions || '',
    image: data.image || '',
    description: data.description || '',
    tools: data.tools || [],
    audience: data.audience || '',
    sessionsContent: data.sessionsContent || data.sessions_content || [],
  };
}

// Curso id=2 has inline data in the old CursoDetalle.tsx
const cursoDetalle2Data = {
  title: 'Diseño y Modelado de Personajes en Blender',
  duration: '30 horas',
  priceStudent: '$450.000 COP',
  priceExternal: '$600.000 COP',
  modality: 'Presencial',
  schedule: 'Lunes y Miércoles de 2:00 p.m. a 6:00 p.m.',
  sessions: '7.5 sesiones de 4 horas',
  image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=800',
  description: 'Este curso integral está diseñado para sumergir a los participantes en el fascinante mundo del diseño y modelado de personajes 3D. Integrando sólidos fundamentos artísticos de anatomía y diseño conceptual con técnicas avanzadas de modelado digital, el programa prepara a los estudiantes para crear personajes listos para videojuegos, animación y publicidad.',
  tools: ['Blender (open source)', 'Krita (open source)', 'MakeHuman (open source)'],
  audience: 'Estudiantes y profesionales interesados en el diseño de personajes 3D para medios digitales',
  sessionsContent: [
    { number: 1, title: 'Introducción al Diseño de Personajes y Blender', content: 'Conceptos de diseño de personajes, anatomía básica (proporciones y esqueleto), interfaz y navegación en Blender.' },
    { number: 2, title: 'Modelado Base y Esculpido Digital', content: 'Técnicas de bloqueo, uso de primitivas, introducción a las herramientas de esculpido en Blender.' },
    { number: 3, title: 'Detalle y Topología', content: 'Refinamiento de formas, conceptos de retopología para animación, uso de Krita para conceptualización de texturas.' },
    { number: 4, title: 'Texturizado y Materiales', content: 'Creación de UVs, pintura de texturas en Blender/Krita, configuración de materiales PBR.' },
    { number: 5, title: 'Rigging Básico', content: 'Creación de armaduras (rigs) para personajes, introducción a la cinemática inversa.' },
    { number: 6, title: 'Pose y Expresiones', content: 'Postura del personaje, creación de expresiones faciales básicas, renderizado de poses estáticas.' },
    { number: 7, title: 'Renderizado Final y Post-producción', content: 'Configuración de iluminación, render engines en Blender (Cycles/Eevee), retoque final.' },
    { number: 7.5, title: 'Revisión de Proyectos y Feedback', content: 'Sesión dedicada a la revisión de los proyectos finales y resolución de dudas. (2 horas)' },
  ],
};

export const courseRegistry: Record<string, NormalizedCourseData> = {
  '1': normalize(modelado3dAccesoriosModaCourseData),
  '2': normalize(cursoDetalle2Data),
  '3': normalize(twineeCourseData),
  '4': normalize(gdevelopCourseData),
  '5': normalize(uxuiXRCourseData),
  '6': normalize(iluminacionCourseData),
  '7': normalize(automationRenderCourseData),
  '8': normalize(foleyCourseData),
  '9': normalize(socialMediaContentCourseData),
  '10': normalize(fashionStorytellingCourseData),
  '11': normalize(arFashionVisualizationCourseData),
  '12': normalize(podcastVideocastCourseData),
  '13': normalize(aiAudiovisualContentCourseData),
  '14': normalize(transmediaCourseData),
  '15': normalize(narrativaEspacialCourseData),
  '16': normalize(arquitecturaXRCourseData),
  '17': normalize(visualizacionArquitectonicaCourseData),
  '18': normalize(modelado3DAnimalesCourseData),
  '19': normalize(businessIntelligenceCourseData),
  '20': normalize(modelosNegocioIACourseData),
  '21': normalize(visualizacionDatosCourseData),
  '22': { ...normalize(toonBoomHarmonyCourseData), isCustomLanding: true },
};

export function getCourseData(id: string): NormalizedCourseData | null {
  return courseRegistry[id] || null;
}

export function getAllCourseIds(): string[] {
  return Object.keys(courseRegistry);
}
