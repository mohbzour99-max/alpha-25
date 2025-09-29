import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-alpha-primary via-alpha-primary/90 to-alpha-secondary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-pulse">
          <Sparkles className="h-6 w-6 text-white/20" />
        </div>
        <div className="absolute top-32 right-20 animate-bounce">
          <Zap className="h-8 w-8 text-white/15" />
        </div>
        <div className="absolute bottom-32 left-32 animate-pulse delay-1000">
          <Sparkles className="h-5 w-5 text-white/25" />
        </div>
        <div className="absolute bottom-20 right-16 animate-bounce delay-500">
          <Zap className="h-7 w-7 text-white/20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 alpha-container text-center text-white">
        <div className="max-w-4xl mx-auto fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="group bg-white/95 backdrop-blur-md text-alpha-primary hover:bg-white border border-white/50 rounded-full px-12 py-6 text-xl font-semibold shadow-2xl hover:shadow-white/40 transition-all duration-500 hover:scale-105"
            >
              <Link to="/contact">
                Get Started Today
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-2 border-white text-white bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full px-12 py-6 text-xl font-semibold transition-all duration-500 hover:scale-105"
            >
              <Link to="/about">
                <Play className="mr-3 h-6 w-6" />
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;