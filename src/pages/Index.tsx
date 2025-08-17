import Navigation from '@/components/Navigation';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import SectorsSection from '@/components/SectorsSection';
import CareersSection from '@/components/CareersSection';
import CTASection from '@/components/CTASection';
import SmallCTASection from '@/components/SmallCTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CTASection />
      <AboutSection />
      <ServicesSection />
      <SectorsSection />
      <SmallCTASection />
      <CareersSection />
      <Footer />
    </div>
  );
};

export default Index;