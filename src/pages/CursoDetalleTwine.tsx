
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Clock, Users, Calendar, MapPin, ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

const CursoDetalleTwine = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    defaultValues: {
      nombre: '',
      email: '',
      telefono: '',
      tipoEstudiante: '',
      motivacion: '',
      experiencia: ''
    }
  });

  const cursoData = {
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
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800',
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

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      toast({
        title: "¡Inscripción enviada exitosamente!",
        description: "Te contactaremos pronto con más detalles sobre el curso.",
      });
      form.reset();
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-tech-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 border border-primary-purple/20 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-primary-blue/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link 
            to="/cursos" 
            className="inline-flex items-center text-white hover:text-primary-purple transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Volver a Cursos
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">
                {cursoData.title}
              </h1>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-white">
                  <Clock className="w-5 h-5 mr-2 text-primary-purple" />
                  <span className="font-space">{cursoData.duration}</span>
                </div>
                <div className="flex items-center text-white">
                  <MapPin className="w-5 h-5 mr-2 text-primary-purple" />
                  <span className="font-space">{cursoData.modality}</span>
                </div>
                <div className="flex items-center text-white">
                  <Calendar className="w-5 h-5 mr-2 text-primary-purple" />
                  <span className="font-space text-sm">{cursoData.schedule}</span>
                </div>
                <div className="flex items-center text-white">
                  <Users className="w-5 h-5 mr-2 text-primary-purple" />
                  <span className="font-space text-sm">{cursoData.sessions}</span>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-primary-purple font-space font-semibold mb-2">Precios:</p>
                <p className="text-white font-space">Estudiantes IUDC: <span className="text-accent-blue font-bold">{cursoData.priceStudent}</span></p>
                <p className="text-white font-space">Externos: <span className="text-accent-blue font-bold">{cursoData.priceExternal}</span></p>
              </div>
            </div>

            <div className="relative">
              <img 
                src={cursoData.image} 
                alt={cursoData.title}
                className="w-full h-80 object-cover rounded-2xl border border-primary-purple/20"
              />
              <div className="absolute inset-0 bg-subtle-gradient opacity-20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div>
                <h2 className="text-3xl font-orbitron font-bold text-white mb-6">
                  Descripción del Curso
                </h2>
                <p className="text-white font-space leading-relaxed text-lg">
                  {cursoData.description}
                </p>
              </div>

              {/* Tools */}
              <div>
                <h2 className="text-3xl font-orbitron font-bold text-white mb-6">
                  Herramientas
                </h2>
                <div className="flex flex-wrap gap-3">
                  {cursoData.tools.map((tool, index) => (
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
                <h2 className="text-3xl font-orbitron font-bold text-white mb-6">
                  Público Objetivo
                </h2>
                <p className="text-white font-space leading-relaxed text-lg flex items-start">
                  <Users className="w-6 h-6 text-primary-purple mr-3 mt-1 flex-shrink-0" />
                  {cursoData.audience}
                </p>
              </div>

              {/* Session Content */}
              <div>
                <h2 className="text-3xl font-orbitron font-bold text-white mb-6">
                  📅 Contenido por Sesión
                </h2>
                <div className="space-y-4">
                  {cursoData.sessions_content.map((session, index) => (
                    <Card key={index} className="bg-black/60 border-primary-purple/20 hover:border-primary-purple/50 transition-colors">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-white font-orbitron flex items-center">
                          <CheckCircle className="w-5 h-5 text-primary-purple mr-3" />
                          Sesión {session.number}: {session.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white font-space leading-relaxed">
                          {session.content}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Enrollment Form */}
            <div>
              <Card className="bg-black/80 border-primary-purple/30 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-2xl font-orbitron font-bold bg-subtle-gradient bg-clip-text text-transparent">
                    Inscríbete Ahora
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <FormField
                        control={form.control}
                        name="nombre"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Nombre Completo *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Tu nombre completo" 
                                {...field} 
                                className="bg-black/50 border-primary-purple/30 text-white placeholder-gray-400 focus:border-primary-purple"
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Email *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="tu@email.com" 
                                {...field} 
                                className="bg-black/50 border-primary-purple/30 text-white placeholder-gray-400 focus:border-primary-purple"
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="telefono"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Teléfono *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="300 123 4567" 
                                {...field} 
                                className="bg-black/50 border-primary-purple/30 text-white placeholder-gray-400 focus:border-primary-purple"
                                required
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="tipoEstudiante"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Tipo de Estudiante *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="bg-black/50 border-primary-purple/30 text-white">
                                  <SelectValue placeholder="Selecciona una opción" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-black border-primary-purple/30">
                                <SelectItem value="estudiante-iudc" className="text-white">Estudiante IUDC</SelectItem>
                                <SelectItem value="externo" className="text-white">Externo</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="experiencia"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">Experiencia Previa</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Cuéntanos sobre tu experiencia con narrativa interactiva, Twine o desarrollo de historias..." 
                                {...field} 
                                className="bg-black/50 border-primary-purple/30 text-white placeholder-gray-400 focus:border-primary-purple min-h-20"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="motivacion"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-white">¿Por qué quieres tomar este curso?</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Cuéntanos tus motivaciones y objetivos..." 
                                {...field} 
                                className="bg-black/50 border-primary-purple/30 text-white placeholder-gray-400 focus:border-primary-purple min-h-20"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        className="w-full bg-subtle-gradient text-white py-3 font-semibold hover:shadow-lg hover:shadow-primary-purple/50 transition-all duration-300 transform hover:scale-105"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Enviando...' : 'Enviar Inscripción'}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CursoDetalleTwine;
