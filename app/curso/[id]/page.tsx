import { notFound } from 'next/navigation';
import { getCourseData, getAllCourseIds } from '@/data/courseRegistry';
import StandardCourseDetail from './StandardCourseDetail';
import ToonBoomHarmonyLanding from './ToonBoomHarmonyLanding';

export function generateStaticParams() {
  return getAllCourseIds().map((id) => ({ id }));
}

export default function CursoPage({ params }: { params: { id: string } }) {
  const courseData = getCourseData(params.id);

  if (!courseData) {
    notFound();
  }

  if (courseData.isCustomLanding) {
    return <ToonBoomHarmonyLanding />;
  }

  return <StandardCourseDetail courseData={courseData} />;
}
