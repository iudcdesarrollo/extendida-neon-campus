'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

const EnrollmentForm = () => {
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
    <Card className="bg-black/80 border-primary-purple/30 sticky top-24">
      <CardHeader>
        <CardTitle className="text-2xl font-sora font-bold bg-subtle-gradient bg-clip-text text-transparent">
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
  );
};

export default EnrollmentForm;
