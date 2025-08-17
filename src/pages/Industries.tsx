import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

const Industries = () => {
  const industries = [
    {
      icon: ShoppingCart,
      title: 'Retail & E-commerce',
      description: 'Transform customer experiences with personalized recommendations, inventory optimization, and predictive analytics.',
      features: ['Customer Segmentation', 'Demand Forecasting', 'Price Optimization', 'Fraud Detection']
    },
    {
      icon: Building2,
      title: 'Banking & Financial Services',
      description: 'Enhance financial operations with risk assessment, fraud detection, and automated customer service.',
      features: ['Risk Management', 'Algorithmic Trading', 'Credit Scoring', 'Regulatory Compliance']
    },
    {
      icon: HeartHandshake,
      title: 'Healthcare',
      description: 'Improve patient outcomes with diagnostic assistance, treatment optimization, and operational efficiency.',
      features: ['Medical Imaging', 'Drug Discovery', 'Patient Monitoring', 'Clinical Decision Support']
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Personalize learning experiences and improve educational outcomes through adaptive learning systems.',
      features: ['Personalized Learning', 'Student Assessment', 'Content Recommendation', 'Performance Analytics']
    },
    {
      icon: Plane,
      title: 'Hospitality & Tourism',
      description: 'Optimize guest experiences and operational efficiency with intelligent booking and service systems.',
      features: ['Dynamic Pricing', 'Guest Personalization', 'Demand Forecasting', 'Service Optimization']
    },
    {
      icon: Truck,
      title: 'Transportation & Logistics',
      description: 'Streamline supply chains and optimize routes with predictive analytics and automation.',
      features: ['Route Optimization', 'Fleet Management', 'Predictive Maintenance', 'Supply Chain Analytics']
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-alpha-primary to-alpha-secondary text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Delivering AI excellence across diverse sectors and transforming businesses worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={industry.title} className="alpha-card border-0 p-6 h-full">
                <CardHeader>
                  <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mb-4">
                    <industry.icon className="h-8 w-8 text-alpha-primary" />
                  </div>
                  <CardTitle className="text-xl text-alpha-secondary">
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-alpha-neutral-800 mb-6 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-alpha-secondary mb-3">Key Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-alpha-neutral-800">
                          <div className="w-2 h-2 bg-alpha-primary rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
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

export default Industries;