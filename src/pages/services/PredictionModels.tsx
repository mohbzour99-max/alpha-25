import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Target, Brain, Lightbulb, BarChart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PredictionModels = () => {
  const features = [
    {
      icon: Brain,
      title: 'Machine Learning Algorithms',
      description: 'Advanced ML models trained on your historical data for accurate predictions.'
    },
    {
      icon: Target,
      title: 'Demand Forecasting',
      description: 'Predict customer demand patterns to optimize inventory and resources.'
    },
    {
      icon: BarChart,
      title: 'Market Analysis',
      description: 'Forecast market trends and identify emerging opportunities.'
    },
    {
      icon: Lightbulb,
      title: 'Risk Assessment',
      description: 'Predict potential risks and implement proactive mitigation strategies.'
    },
    {
      icon: Zap,
      title: 'Real-time Predictions',
      description: 'Get instant predictions with live data streaming and processing.'
    }
  ];

  const applications = [
    'Sales and revenue forecasting',
    'Customer churn prediction',
    'Equipment maintenance scheduling',
    'Supply chain optimization',
    'Financial risk assessment',
    'Market trend analysis'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-alpha-primary to-alpha-secondary text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Prediction Models</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Make informed decisions and stay ahead of customer needs with our advanced prediction models.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">Predictive Analytics Capabilities</h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Leverage the power of machine learning to predict future outcomes and make data-driven decisions.
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

      {/* Applications Section */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
                Predict the Future of Your Business
              </h2>
              <p className="text-lg text-alpha-neutral-800 mb-8 leading-relaxed">
                Our prediction models analyze historical patterns, market conditions, and external factors 
                to provide accurate forecasts that help you make strategic decisions with confidence.
              </p>
              
              <h3 className="text-xl font-semibold text-alpha-secondary mb-4">Key Applications:</h3>
              <ul className="space-y-3 mb-8">
                {applications.map((application, index) => (
                  <li key={index} className="flex items-start text-alpha-neutral-800">
                    <div className="w-2 h-2 bg-alpha-primary rounded-full mr-3 mt-2"></div>
                    {application}
                  </li>
                ))}
              </ul>

              <Button asChild className="bg-alpha-primary hover:bg-alpha-primary/90">
                <Link to="/contact">
                  Start Predicting Today
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-alpha-secondary mb-2">Prediction Accuracy</h3>
                      <p className="text-alpha-neutral-600">Average model performance across industries</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-alpha-neutral-800">Sales Forecasting</span>
                          <span className="text-alpha-primary font-semibold">94%</span>
                        </div>
                        <div className="w-full bg-alpha-neutral-200 rounded-full h-2">
                          <div className="bg-alpha-primary h-2 rounded-full" style={{width: '94%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-alpha-neutral-800">Demand Planning</span>
                          <span className="text-alpha-primary font-semibold">91%</span>
                        </div>
                        <div className="w-full bg-alpha-neutral-200 rounded-full h-2">
                          <div className="bg-alpha-primary h-2 rounded-full" style={{width: '91%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-alpha-neutral-800">Risk Assessment</span>
                          <span className="text-alpha-primary font-semibold">88%</span>
                        </div>
                        <div className="w-full bg-alpha-neutral-200 rounded-full h-2">
                          <div className="bg-alpha-primary h-2 rounded-full" style={{width: '88%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-alpha-neutral-800">Market Trends</span>
                          <span className="text-alpha-primary font-semibold">86%</span>
                        </div>
                        <div className="w-full bg-alpha-neutral-200 rounded-full h-2">
                          <div className="bg-alpha-primary h-2 rounded-full" style={{width: '86%'}}></div>
                        </div>
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

export default PredictionModels;