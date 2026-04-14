import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aula Extendida - Cursos Tecnológicos del Futuro',
  description:
    'Plataforma de formación en cursos cortos sobre realidad aumentada, IA, diseño 3D y nuevas tecnologías',
  openGraph: {
    title: 'Aula Extendida - Cursos Tecnológicos del Futuro',
    description:
      'Domina las tecnologías que están cambiando el mundo con cursos 100% prácticos',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&family=Orbitron:wght@400;700;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
