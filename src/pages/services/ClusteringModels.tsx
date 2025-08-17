import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Layers, Users, Target, BarChart3, Zap, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClusteringModels = () => {
  const features = [
    {
      icon: Users,
      title: 'Customer Segmentation',
      description: 'Group customers based on behavior, preferences, and demographics.'
    },
    {
      icon: Target,
      title: 'Market Segmentation',
      description: 'Identify distinct market segments for targeted marketing strategies.'
    },
    {
      icon: Brain,
      title: 'Unsupervised Learning',
      description: 'Discover hidden patterns without predefined categories or labels.'
    },
    {
      icon: BarChart3,
      title: 'Data Visualization',
      description: 'Interactive visualizations to explore and understand clusters.'
    },
    {
      icon: Zap,
      title: 'Real-time Clustering',
      description: 'Dynamic clustering that adapts as new data becomes available.'
    }
  ];

  const applications = [
    'Customer behavior analysis and segmentation',
    'Product recommendation groupings',
    'Market research and analysis',
    'Fraud detection and anomaly identification',
    'Inventory categorization and management',
    'Social network analysis',
    'Geographic market segmentation',
    'Risk assessment groupings'
  ];

  const clusterTypes = [
    {
      name: 'High-Value Customers',
      percentage: 25,
      description: 'Premium customers with high lifetime value',
      color: 'bg-green-500'
    },
    {
      name: 'Regular Customers',
      percentage: 45,
      description: 'Consistent purchasers with moderate spending',
      color: 'bg-blue-500'
    },
    {
      name: 'Price-Sensitive',
      percentage: 20,
      description: 'Deal-seekers who respond to promotions',
      color: 'bg-yellow-500'
    },
    {
      name: 'New Customers',
      percentage: 10,
      description: 'Recent acquisitions with growth potential',
      color: 'bg-purple-500'
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
              <Layers className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Clustering Models</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Understand customer diversity at scale. We segment your audience into actionable clusters for targeted strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">Advanced Clustering Capabilities</h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Discover hidden patterns and group similar data points to unlock valuable business insights.
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

      {/* Applications & Example Section */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
                Unlock Hidden Patterns
              </h2>
              <p className="text-lg text-alpha-neutral-800 mb-8 leading-relaxed">
                Our clustering algorithms automatically discover meaningful groups within your data, 
                enabling you to understand customer segments, optimize operations, and create targeted strategies.
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
                  Start Clustering Analysis
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-alpha-secondary mb-2">Customer Segments</h3>
                      <p className="text-alpha-neutral-600">Example clustering results for e-commerce</p>
                    </div>
                    
                    <div className="space-y-4">
                      {clusterTypes.map((cluster, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-alpha-neutral-800 font-medium">{cluster.name}</span>
                            <span className="text-alpha-primary font-semibold">{cluster.percentage}%</span>
                          </div>
                          <div className="w-full bg-alpha-neutral-200 rounded-full h-2">
                            <div 
                              className={`${cluster.color} h-2 rounded-full`} 
                              style={{width: `${cluster.percentage}%`}}
                            ></div>
                          </div>
                          <p className="text-xs text-alpha-neutral-600">{cluster.description}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-alpha-primary/10 rounded-lg">
                      <h4 className="font-semibold text-alpha-secondary mb-2">Clustering Insights</h4>
                      <ul className="text-xs text-alpha-neutral-700 space-y-1">
                        <li>• 4 distinct customer segments identified</li>
                        <li>• 89% classification accuracy achieved</li>
                        <li>• 32% improvement in campaign targeting</li>
                        <li>• 24% increase in customer retention</li>
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

export default ClusteringModels;