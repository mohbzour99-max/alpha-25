import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, TrendingUp, Users, Star, BarChart3, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const RetailEcommerce = () => {
  const solutions = [
    {
      icon: Star,
      title: 'Personalized Recommendations',
      description: 'AI-powered product recommendations that increase conversion rates and customer satisfaction.'
    },
    {
      icon: TrendingUp,
      title: 'Demand Forecasting',
      description: 'Predict customer demand patterns to optimize inventory and reduce stockouts.'
    },
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Identify distinct customer groups for targeted marketing and personalized experiences.'
    },
    {
      icon: BarChart3,
      title: 'Price Optimization',
      description: 'Dynamic pricing strategies based on market conditions and customer behavior.'
    },
    {
      icon: Zap,
      title: 'Fraud Detection',
      description: 'Real-time fraud detection to protect your business and customers.'
    }
  ];

  const benefits = [
    'Increase conversion rates by up to 35%',
    'Reduce inventory costs by 20-30%',
    'Improve customer lifetime value by 25%',
    'Decrease cart abandonment rates',
    'Optimize marketing spend efficiency',
    'Enhance customer satisfaction scores'
  ];

  const caseStudy = {
    title: 'E-commerce Platform Transformation',
    results: [
      { metric: 'Conversion Rate', improvement: '+42%' },
      { metric: 'Average Order Value', improvement: '+28%' },
      { metric: 'Customer Retention', improvement: '+35%' },
      { metric: 'Inventory Turnover', improvement: '+31%' }
    ]
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-alpha-primary to-alpha-secondary text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Retail & E-commerce AI Solutions</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Transform customer experiences with personalized recommendations, inventory optimization, and predictive analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">AI Solutions for Retail</h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Leverage artificial intelligence to create exceptional shopping experiences and optimize your retail operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <Card key={solution.title} className="alpha-card border-0 p-6 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="h-8 w-8 text-alpha-primary" />
                  </div>
                  <CardTitle className="text-alpha-secondary">
                    {solution.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-alpha-neutral-800">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Case Study Section */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
                Drive Retail Success with AI
              </h2>
              <p className="text-lg text-alpha-neutral-800 mb-8 leading-relaxed">
                Our AI solutions help retail and e-commerce businesses create personalized shopping experiences, 
                optimize operations, and increase profitability through data-driven insights.
              </p>
              
              <h3 className="text-xl font-semibold text-alpha-secondary mb-4">Key Benefits:</h3>
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-alpha-neutral-800">
                    <div className="w-2 h-2 bg-alpha-primary rounded-full mr-3 mt-2"></div>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Button asChild className="bg-alpha-primary hover:bg-alpha-primary/90">
                <Link to="/contact">
                  Transform Your Retail Business
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-alpha-secondary mb-2">{caseStudy.title}</h3>
                      <p className="text-alpha-neutral-600">Results achieved within 6 months</p>
                    </div>
                    
                    <div className="space-y-4">
                      {caseStudy.results.map((result, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-alpha-neutral-50 rounded-lg">
                          <span className="text-alpha-neutral-800 font-medium">{result.metric}</span>
                          <span className="text-2xl font-bold text-alpha-primary">{result.improvement}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-alpha-primary/10 rounded-lg">
                      <h4 className="font-semibold text-alpha-secondary mb-2">Implementation Highlights</h4>
                      <ul className="text-sm text-alpha-neutral-700 space-y-1">
                        <li>• Deployed recommendation engine across 50,000+ products</li>
                        <li>• Integrated with existing e-commerce platform</li>
                        <li>• Real-time personalization for 1M+ customers</li>
                        <li>• A/B tested optimization strategies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RetailEcommerce;