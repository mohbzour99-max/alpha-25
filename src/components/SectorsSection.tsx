import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  ShoppingCart, 
  Building2, 
  HeartHandshake, 
  GraduationCap, 
  Plane, 
  Truck, 
  Home, 
  Briefcase, 
  Radio 
} from 'lucide-react';

const SectorsSection = () => {
  const { t } = useTranslation();

  const sectors = [
    {
      key: 'retail',
      icon: ShoppingCart,
      href: '/sectors/retail-ecommerce'
    },
    {
      key: 'banking',
      icon: Building2,
      href: '/industries'
    },
    {
      key: 'healthcare',
      icon: HeartHandshake,
      href: '/industries'
    },
    {
      key: 'education',
      icon: GraduationCap,
      href: '/industries'
    },
    {
      key: 'tourism',
      icon: Plane,
      href: '/industries'
    },
    {
      key: 'logistics',
      icon: Truck,
      href: '/industries'
    },
    {
      key: 'realEstate',
      icon: Home,
      href: '/industries'
    },
    {
      key: 'professional',
      icon: Briefcase,
      href: '/industries'
    },
    {
      key: 'communications',
      icon: Radio,
      href: '/industries'
    }
  ];

  return (
    <section id="sectors" className="alpha-section-padding bg-alpha-neutral-50">
      <div className="alpha-container">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-alpha-primary mb-6">
            {t('sectors.title')}
          </h2>
          <p className="text-lg md:text-xl text-alpha-neutral-800 max-w-3xl mx-auto">
            {t('sectors.subtitle')}
          </p>
        </div>

        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent>
            {sectors.map((sector, index) => (
              <CarouselItem key={sector.key} className="basis-full md:basis-1/2 lg:basis-1/4">
                <Link to={sector.href}>
                  <Card className={`alpha-card border-0 group cursor-pointer text-center p-6 h-48 flex flex-col fade-in-up-delay-${(index % 4) + 1} hover:shadow-lg transition-shadow`}>
                  <CardContent className="pt-3 flex flex-col justify-center flex-1">
                    <div className="w-16 h-16 rounded-full bg-alpha-primary/10 text-alpha-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <sector.icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-alpha-secondary group-hover:text-alpha-primary transition-colors">
                      {t(`sectors.${sector.key}`)}
                    </h3>
                  </CardContent>
                </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-alpha-primary border-alpha-primary hover:bg-alpha-primary hover:text-white" />
          <CarouselNext className="text-alpha-primary border-alpha-primary hover:bg-alpha-primary hover:text-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default SectorsSection;