import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, Database, PieChart, LineChart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

const DataAnalytics = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'Forecast future trends and outcomes with advanced statistical models.'
    },
    {
      icon: Database,
      title: 'Data Integration',
      description: 'Seamlessly connect and analyze data from multiple sources.'
    },
    {
      icon: PieChart,
      title: 'Interactive Dashboards',
      description: 'Visualize your data with customizable, real-time dashboards.'
    },
    {
      icon: LineChart,
      title: 'Performance Metrics',
      description: 'Track KPIs and business metrics with automated reporting.'
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Monitor your business operations with live data streams.'
    }
  ];

  const benefits = [
    'Make data-driven decisions with confidence',
    'Identify hidden patterns and opportunities',
    'Reduce operational costs through optimization',
    'Improve customer satisfaction and retention',
    'Accelerate time-to-insight for critical decisions'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-alpha-primary to-alpha-secondary text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Data Analytics</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Unlock actionable insights through our end-to-end analytics approach and transform your data into competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">Our Analytics Capabilities</h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              From data collection to actionable insights, we provide comprehensive analytics solutions.
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
                Why Choose Our Data Analytics?
              </h2>
              <p className="text-lg text-alpha-neutral-800 mb-8 leading-relaxed">
                Our comprehensive analytics platform empowers organizations to make informed decisions, 
                optimize operations, and drive growth through data-driven insights.
              </p>
              
              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start text-alpha-neutral-800">
                    <div className="w-2 h-2 bg-alpha-primary rounded-full mr-3 mt-2"></div>
                    {benefit}
                  </li>
                ))}
              </ul>

              <Button asChild className="bg-alpha-primary hover:bg-alpha-primary/90">
                <Link to="/contact">
                  Get Started Today
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-alpha-neutral-800">Revenue Growth</span>
                      <span className="text-2xl font-bold text-alpha-primary">+34%</span>
                    </div>
                    <div className="w-full bg-alpha-neutral-200 rounded-full h-2">
                      <div className="bg-alpha-primary h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-alpha-neutral-800">Cost Reduction</span>
                      <span className="text-2xl font-bold text-alpha-primary">-28%</span>
                    </div>
                    <div className="w-full bg-alpha-neutral-200 rounded-full h-2">
                      <div className="bg-alpha-primary h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-alpha-neutral-800">Decision Speed</span>
                      <span className="text-2xl font-bold text-alpha-primary">+45%</span>
                    </div>
                    <div className="w-full bg-alpha-neutral-200 rounded-full h-2">
                      <div className="bg-alpha-primary h-2 rounded-full" style={{width: '85%'}}></div>
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

export default DataAnalytics;