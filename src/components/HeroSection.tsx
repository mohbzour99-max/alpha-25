import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20 md:py-32 flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 alpha-container text-center text-white">
        <div className="max-w-4xl mx-auto fade-in-up">
        </div>
      </div>
    </section>
  );
};

export default HeroSection;