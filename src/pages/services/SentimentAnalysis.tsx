import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, TrendingUp, Shield, Eye, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SentimentAnalysis = () => {
  const features = [
    {
      icon: MessageCircle,
      title: 'Multi-Language Support',
      description: 'Analyze sentiment across multiple languages and cultural contexts.'
    },
    {
      icon: Eye,
      title: 'Real-time Monitoring',
      description: 'Monitor brand sentiment across all digital channels in real-time.'
    },
    {
      icon: TrendingUp,
      title: 'Trend Analysis',
      description: 'Track sentiment trends over time to identify patterns and changes.'
    },
    {
      icon: AlertTriangle,
      title: 'Crisis Detection',
      description: 'Early warning system for potential reputation threats and issues.'
    },
    {
      icon: Shield,
      title: 'Brand Protection',
      description: 'Proactive brand monitoring and reputation management capabilities.'
    }
  ];

  const dataSources = [
    'Social media platforms (Twitter, Facebook, Instagram)',
    'Customer reviews and ratings',
    'News articles and blog posts',
    'Customer support conversations',
    'Survey responses and feedback forms',
    'Forum discussions and comments',
    'Email communications',
    'Chat transcripts and messages'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-alpha-primary to-alpha-secondary text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Sentiment Analysis Models</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Protect your brand and business in real time with advanced sentiment analysis across all unstructured data sources.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">Advanced Sentiment Intelligence</h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Understand customer emotions, opinions, and attitudes through sophisticated natural language processing.
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

      {/* Data Sources Section */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
                Comprehensive Sentiment Monitoring
              </h2>
              <p className="text-lg text-alpha-neutral-800 mb-8 leading-relaxed">
                Our sentiment analysis models process vast amounts of unstructured text data to provide 
                actionable insights about customer opinions, brand perception, and market sentiment.
              </p>
              
              <h3 className="text-xl font-semibold text-alpha-secondary mb-4">Data Sources We Analyze:</h3>
              <div className="grid grid-cols-1 gap-2 mb-8">
                {dataSources.map((source, index) => (
                  <div key={index} className="flex items-start text-alpha-neutral-800">
                    <div className="w-2 h-2 bg-alpha-primary rounded-full mr-3 mt-2"></div>
                    <span className="text-sm">{source}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="bg-alpha-primary hover:bg-alpha-primary/90">
                <Link to="/contact">
                  Start Monitoring Sentiment
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-alpha-secondary mb-2">Sentiment Distribution</h3>
                      <p className="text-alpha-neutral-600">Real-time brand sentiment analysis</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <span className="text-green-800 font-medium">Positive</span>
                        <span className="text-2xl font-bold text-green-600">68%</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border-l-4 border-gray-400">
                        <span className="text-gray-800 font-medium">Neutral</span>
                        <span className="text-2xl font-bold text-gray-600">22%</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <span className="text-red-800 font-medium">Negative</span>
                        <span className="text-2xl font-bold text-red-600">10%</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-alpha-primary/10 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-alpha-neutral-800 font-medium">Overall Score</span>
                        <span className="text-2xl font-bold text-alpha-primary">+58</span>
                      </div>
                      <div className="w-full bg-alpha-neutral-200 rounded-full h-2">
                        <div className="bg-alpha-primary h-2 rounded-full" style={{width: '79%'}}></div>
                      </div>
                      <p className="text-xs text-alpha-neutral-600 mt-2 text-center">
                        Score range: -100 (very negative) to +100 (very positive)
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

export default SentimentAnalysis;