import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import SectorsSection from '@/components/SectorsSection';
import CTASection from '@/components/CTASection';
import SmallCTASection from '@/components/SmallCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CTASection />
      <AboutSection />
      <ServicesSection />
      <SectorsSection />
      <SmallCTASection />
      <Footer />
    </div>
  );
};

export default Index;