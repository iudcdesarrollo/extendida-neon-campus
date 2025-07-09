
import { threeDCourses } from './courses/3dCourses';
import { designCourses } from './courses/designCourses';
import { aiCourses } from './courses/aiCourses';
import { xrCourses } from './courses/xrCourses';

export interface Course {
  id: number;
  title: string;
  duration: string;
  priceStudent: string;
  priceExternal: string;
  tools: string[];
  audience: string;
  category: string;
  image: string;
  hasDetailPage?: boolean;
}

export const courses: Course[] = [
  ...threeDCourses,
  ...designCourses,
  ...aiCourses,
  ...xrCourses
].sort((a, b) => a.id - b.id); // Sort by ID to maintain the original order
