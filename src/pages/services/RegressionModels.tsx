import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, TrendingUp, BarChart3, Activity, Calculator, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const RegressionModels = () => {
  const features = [
    {
      icon: LineChart,
      title: 'Linear Regression',
      description: 'Model relationships between variables for accurate predictions and insights.'
    },
    {
      icon: Activity,
      title: 'Multiple Regression',
      description: 'Analyze complex relationships with multiple independent variables.'
    },
    {
      icon: TrendingUp,
      title: 'Time Series Analysis',
      description: 'Forecast future values based on historical time-based data patterns.'
    },
    {
      icon: Calculator,
      title: 'Statistical Modeling',
      description: 'Advanced statistical techniques for robust predictive modeling.'
    },
    {
      icon: Target,
      title: 'Performance Optimization',
      description: 'Optimize business processes through regression-based insights.'
    }
  ];

  const applications = [
    'Sales and revenue forecasting',
    'Price optimization strategies',
    'Resource allocation planning',
    'Performance metric prediction',
    'Risk factor analysis',
    'Market demand modeling',
    'Operational efficiency optimization',
    'Financial planning and budgeting'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-alpha-primary to-alpha-secondary text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <LineChart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Regression Models</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Boost operational efficiency with forecasting solutions tailored to your business needs and objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">Advanced Regression Analytics</h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Leverage statistical modeling to understand relationships, predict outcomes, and optimize business performance.
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
                Data-Driven Decision Making
              </h2>
              <p className="text-lg text-alpha-neutral-800 mb-8 leading-relaxed">
                Our regression models help you understand the relationships between different business variables, 
                enabling you to make informed decisions and optimize performance across all areas of your organization.
              </p>
              
              <h3 className="text-xl font-semibold text-alpha-secondary mb-4">Business Applications:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-start text-alpha-neutral-800">
                    <div className="w-2 h-2 bg-alpha-primary rounded-full mr-3 mt-2"></div>
                    <span className="text-sm">{application}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-alpha-primary hover:bg-alpha-primary/90">
                <Link to="/contact">
                  Start Modeling Today
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-alpha-secondary mb-2">Model Performance</h3>
                      <p className="text-alpha-neutral-600">Typical accuracy rates across different regression models</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-alpha-neutral-800">Sales Forecasting</span>
                          <span className="text-alpha-primary font-semibold">R² = 0.92</span>
                        </div>
                        <div className="w-full bg-alpha-neutral-200 rounded-full h-2">
                          <div className="bg-alpha-primary h-2 rounded-full" style={{width: '92%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-alpha-neutral-800">Price Optimization</span>
                          <span className="text-alpha-primary font-semibold">R² = 0.89</span>
                        </div>
                        <div className="w-full bg-alpha-neutral-200 rounded-full h-2">
                          <div className="bg-alpha-primary h-2 rounded-full" style={{width: '89%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-alpha-neutral-800">Demand Planning</span>
                          <span className="text-alpha-primary font-semibold">R² = 0.87</span>
                        </div>
                        <div className="w-full bg-alpha-neutral-200 rounded-full h-2">
                          <div className="bg-alpha-primary h-2 rounded-full" style={{width: '87%'}}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-alpha-neutral-800">Resource Allocation</span>
                          <span className="text-alpha-primary font-semibold">R² = 0.85</span>
                        </div>
                        <div className="w-full bg-alpha-neutral-200 rounded-full h-2">
                          <div className="bg-alpha-primary h-2 rounded-full" style={{width: '85%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-3 bg-alpha-primary/10 rounded-lg">
                      <p className="text-sm text-alpha-neutral-700 text-center">
                        R² values indicate model accuracy (closer to 1.0 = better fit)
                      </p>
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

export default RegressionModels;