import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Shield, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Human-Centered',
      description: 'AI that amplifies human capabilities'
    },
    {
      icon: Shield,
      title: 'Ethical & Transparent',
      description: 'Responsible AI development practices'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Cutting-edge solutions for tomorrow'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building together with unity'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-alpha-primary to-alpha-secondary text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Alpha AI</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Everyone serves a smarter world. We will build together, with courage, intelligence, innovation, and unity: And we will succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-alpha-neutral-800 leading-relaxed">
              Our approach prioritizes human-centered design, using AI to handle repetitive tasks while humans focus on what they do best: empathy, decision-making, and building connections. Transparency and ethical review processes are essential to every implementation. We aim to be a recognized force in creating meaningful jobs, enabling ethical digital innovation, and shaping inclusive AI practices – both locally and globally.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <Card key={value.title} className="alpha-card border-0 text-center p-6">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-alpha-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-alpha-secondary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-alpha-neutral-800">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;