'use client';

import React from 'react';
import { Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SessionContent {
  number: number;
  title: string;
  content: string;
}

interface CourseContentProps {
  description: string;
  tools: string[];
  audience: string;
  sessionsContent: SessionContent[];
}

const CourseContent: React.FC<CourseContentProps> = ({
  description,
  tools,
  audience,
  sessionsContent
}) => {
  const safeTools = tools || [];
  const safeSessionsContent = sessionsContent || [];
  
  return (
    <div className="lg:col-span-2 space-y-12">
      {/* Description */}
      <div>
        <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 mb-6">
          Descripción del Curso
        </h2>
        <p className="text-gray-900 font-inter leading-relaxed text-lg">
          {description}
        </p>
      </div>

      {/* Tools */}
      <div>
        <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 mb-6">
          Herramientas
        </h2>
        <div className="flex flex-wrap gap-3">
          {safeTools.map((tool, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full text-sm font-semibold bg-accent-blue/20 text-accent-blue border border-accent-blue/30"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Target Audience */}
      <div>
        <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 mb-6">
          Público Objetivo
        </h2>
        <p className="text-gray-900 font-inter leading-relaxed text-lg flex items-start">
          <Users className="w-6 h-6 text-primary-purple mr-3 mt-1 flex-shrink-0" />
          {audience}
        </p>
      </div>

      {/* Session Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-sora font-bold text-gray-900 mb-6">
          📅 Contenido por Sesión
        </h2>
        <div className="space-y-4">
          {safeSessionsContent.map((session, index) => (
            <Card key={index} className="bg-white border border-gray-200 border-primary-purple/20 hover:border-primary-purple/50 transition-colors">
              <CardHeader className="pb-3">
                <CardTitle className="text-gray-900 font-sora flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary-purple mr-3" />
                  Sesión {session.number}: {session.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-900 font-inter leading-relaxed">
                  {session.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
