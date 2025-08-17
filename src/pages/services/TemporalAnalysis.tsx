import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, TrendingUp, Calendar, BarChart3, Activity, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const TemporalAnalysis = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Time Series Forecasting',
      description: 'Predict future values based on historical time-based data patterns.'
    },
    {
      icon: Activity,
      title: 'Seasonal Analysis',
      description: 'Identify and model seasonal patterns and cyclical behaviors.'
    },
    {
      icon: Calendar,
      title: 'Event Detection',
      description: 'Automatically detect anomalies and significant events in time series.'
    },
    {
      icon: BarChart3,
      title: 'Trend Decomposition',
      description: 'Break down time series into trend, seasonal, and residual components.'
    },
    {
      icon: Target,
      title: 'Multi-variate Analysis',
      description: 'Analyze relationships between multiple time-dependent variables.'
    }
  ];

  const applications = [
    'Financial market forecasting and trading',
    'Supply chain demand planning',
    'Energy consumption optimization',
    'Website traffic and user behavior analysis',
    'Equipment maintenance scheduling',
    'Economic indicator prediction',
    'Weather and climate modeling',
    'Healthcare patient monitoring'
  ];

  const forecastTypes = [
    {
      name: 'Sales Revenue',
      accuracy: '94%',
      horizon: '12 months',
      description: 'Monthly revenue forecasting with seasonal adjustments'
    },
    {
      name: 'Inventory Demand',
      accuracy: '91%',
      horizon: '8 weeks',
      description: 'Product demand forecasting for optimal stock levels'
    },
    {
      name: 'Energy Usage',
      accuracy: '89%',
      horizon: '24 hours',
      description: 'Hourly energy consumption prediction'
    },
    {
      name: 'Customer Traffic',
      accuracy: '87%',
      horizon: '4 weeks',
      description: 'Daily customer visit patterns and trends'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-alpha-primary to-alpha-secondary text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Temporal Data Analysis Models</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Plan with confidence using advanced time series forecasting and temporal pattern analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">Time Series Intelligence</h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Extract insights from time-dependent data to understand trends, patterns, and make accurate predictions.
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

      {/* Applications & Forecasting Examples Section */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
                Master Time-Based Insights
              </h2>
              <p className="text-lg text-alpha-neutral-800 mb-8 leading-relaxed">
                Our temporal analysis models help you understand how your data changes over time, 
                identify patterns, and make accurate predictions for better strategic planning.
              </p>
              
              <h3 className="text-xl font-semibold text-alpha-secondary mb-4">Key Applications:</h3>
              <div className="grid grid-cols-1 gap-2 mb-8">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-start text-alpha-neutral-800">
                    <div className="w-2 h-2 bg-alpha-primary rounded-full mr-3 mt-2"></div>
                    <span className="text-sm">{application}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-alpha-primary hover:bg-alpha-primary/90">
                <Link to="/contact">
                  Start Time Series Analysis
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-alpha-secondary mb-2">Forecasting Performance</h3>
                      <p className="text-alpha-neutral-600">Sample accuracy rates across different time horizons</p>
                    </div>
                    
                    <div className="space-y-6">
                      {forecastTypes.map((forecast, index) => (
                        <div key={index} className="p-4 bg-alpha-neutral-50 rounded-lg border">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold text-alpha-secondary">{forecast.name}</h4>
                              <p className="text-xs text-alpha-neutral-600">{forecast.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-alpha-primary">{forecast.accuracy}</div>
                              <div className="text-xs text-alpha-neutral-600">{forecast.horizon}</div>
                            </div>
                          </div>
                          <div className="w-full bg-alpha-neutral-200 rounded-full h-1 mt-3">
                            <div 
                              className="bg-alpha-primary h-1 rounded-full" 
                              style={{width: forecast.accuracy}}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-alpha-primary/10 rounded-lg">
                      <h4 className="font-semibold text-alpha-secondary mb-2">Advanced Techniques</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs text-alpha-neutral-700">
                        <div>• ARIMA Models</div>
                        <div>• LSTM Networks</div>
                        <div>• Prophet</div>
                        <div>• Seasonal Decomposition</div>
                        <div>• Exponential Smoothing</div>
                        <div>• Wavelet Analysis</div>
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

export default TemporalAnalysis;