import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import FreeResources from '@/components/FreeResources';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <FreeResources />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
