import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Users, ShoppingCart, Heart, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecommendationModels = () => {
  const features = [
    {
      icon: Users,
      title: 'Collaborative Filtering',
      description: 'Recommend items based on similar user preferences and behaviors.'
    },
    {
      icon: Target,
      title: 'Content-Based Filtering',
      description: 'Suggest items similar to what users have previously engaged with.'
    },
    {
      icon: Zap,
      title: 'Real-time Personalization',
      description: 'Deliver instant, personalized recommendations as users browse.'
    },
    {
      icon: Heart,
      title: 'Preference Learning',
      description: 'Continuously learn and adapt to changing user preferences.'
    },
    {
      icon: ShoppingCart,
      title: 'Cross-selling & Upselling',
      description: 'Increase revenue with intelligent product recommendations.'
    }
  ];

  const benefits = [
    'Increase conversion rates by up to 35%',
    'Reduce customer search time significantly',
    'Boost average order value through smart suggestions',
    'Improve customer satisfaction and loyalty',
    'Enhance user engagement and retention',
    'Optimize inventory turnover rates'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-alpha-primary to-alpha-secondary text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Recommendation Models</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Deliver smart, personalized shopping experiences. Our recommendation systems reduce search time and increase customer satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">Intelligent Recommendation Engine</h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Our advanced algorithms analyze user behavior, preferences, and patterns to deliver highly relevant recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={feature.title} className="alpha-card border-0 p-6 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-alpha-primary" />
                  </div>
                  <CardTitle className="text-alpha-secondary">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-alpha-neutral-800">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
                Personalize Every Customer Journey
              </h2>
              <p className="text-lg text-alpha-neutral-800 mb-8 leading-relaxed">
                Transform your customer experience with AI-powered recommendations that understand individual 
                preferences and deliver exactly what your customers are looking for.
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
                  Implement Recommendations
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-alpha-secondary mb-2">Performance Impact</h3>
                      <p className="text-alpha-neutral-600">Average improvements with recommendation systems</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-alpha-neutral-50 rounded-lg">
                        <span className="text-alpha-neutral-800">Conversion Rate</span>
                        <span className="text-2xl font-bold text-alpha-primary">+35%</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-alpha-neutral-50 rounded-lg">
                        <span className="text-alpha-neutral-800">Average Order Value</span>
                        <span className="text-2xl font-bold text-alpha-primary">+28%</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-alpha-neutral-50 rounded-lg">
                        <span className="text-alpha-neutral-800">Customer Engagement</span>
                        <span className="text-2xl font-bold text-alpha-primary">+42%</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-alpha-neutral-50 rounded-lg">
                        <span className="text-alpha-neutral-800">Return Customers</span>
                        <span className="text-2xl font-bold text-alpha-primary">+31%</span>
                      </div>
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

export default RecommendationModels;