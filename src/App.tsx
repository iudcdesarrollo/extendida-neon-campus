
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cursos from "./pages/Cursos";
import CursoDetalleModelado3DAccesorios from "./pages/CursoDetalleModelado3DAccesorios";
import CursoDetalle from "./pages/CursoDetalle";
import CursoDetalleTwine from "./pages/CursoDetalleTwine";
import CursoDetalleGDevelop from "./pages/CursoDetalleGDevelop";
import CursoDetalleUXUIXR from "./pages/CursoDetalleUXUIXR";
import CursoDetalleIluminacion from "./pages/CursoDetalleIluminacion";
import CursoDetalleAutomatizacion from "./pages/CursoDetalleAutomatizacion";
import CursoDetalleFoley from "./pages/CursoDetalleFoley";
import CursoDetalleSocialMedia from "./pages/CursoDetalleSocialMedia";
import CursoDetalleFashionStorytelling from "./pages/CursoDetalleFashionStorytelling";
import CursoDetalleARFashion from "./pages/CursoDetalleARFashion";
import CursoDetallePodcastVideocast from "./pages/CursoDetallePodcastVideocast";
import CursoDetalleAIAudiovisual from "./pages/CursoDetalleAIAudiovisual";
import CursoDetalleTransmedia from "./pages/CursoDetalleTransmedia";
import CursoDetalleNarrativaEspacial from "./pages/CursoDetalleNarrativaEspacial";
import CursoDetalleArquitecturaXR from "./pages/CursoDetalleArquitecturaXR";
import CursoDetalleVisualizacionArquitectonica from "./pages/CursoDetalleVisualizacionArquitectonica";
import CursoDetalleModelado3DAnimales from "./pages/CursoDetalleModelado3DAnimales";
import CursoDetalleBusinessIntelligence from "./pages/CursoDetalleBusinessIntelligence";
import CursoDetalleModelosNegocioIA from "./pages/CursoDetalleModelosNegocioIA";
import CursoDetalleVisualizacionDatos from "./pages/CursoDetalleVisualizacionDatos";
import QuienesSomos from "./pages/QuienesSomos";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/curso/1" element={<CursoDetalleModelado3DAccesorios />} />
          <Route path="/curso/2" element={<CursoDetalle />} />
          <Route path="/curso/3" element={<CursoDetalleTwine />} />
          <Route path="/curso/4" element={<CursoDetalleGDevelop />} />
          <Route path="/curso/5" element={<CursoDetalleUXUIXR />} />
          <Route path="/curso/6" element={<CursoDetalleIluminacion />} />
          <Route path="/curso/7" element={<CursoDetalleAutomatizacion />} />
          <Route path="/curso/8" element={<CursoDetalleFoley />} />
          <Route path="/curso/9" element={<CursoDetalleSocialMedia />} />
          <Route path="/curso/10" element={<CursoDetalleFashionStorytelling />} />
          <Route path="/curso/11" element={<CursoDetalleARFashion />} />
          <Route path="/curso/12" element={<CursoDetallePodcastVideocast />} />
          <Route path="/curso/13" element={<CursoDetalleAIAudiovisual />} />
          <Route path="/curso/14" element={<CursoDetalleTransmedia />} />
          <Route path="/curso/15" element={<CursoDetalleNarrativaEspacial />} />
          <Route path="/curso/16" element={<CursoDetalleArquitecturaXR />} />
          <Route path="/curso/17" element={<CursoDetalleVisualizacionArquitectonica />} />
          <Route path="/curso/18" element={<CursoDetalleModelado3DAnimales />} />
          <Route path="/curso/19" element={<CursoDetalleBusinessIntelligence />} />
          <Route path="/curso/20" element={<CursoDetalleModelosNegocioIA />} />
          <Route path="/curso/21" element={<CursoDetalleVisualizacionDatos />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
