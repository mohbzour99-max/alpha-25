import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, MessageSquare, Zap, Clock, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIAssistants = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Understand and respond to human language with high accuracy and context awareness.'
    },
    {
      icon: Zap,
      title: 'Task Automation',
      description: 'Automate repetitive tasks and workflows to increase productivity and efficiency.'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Provide round-the-clock support and assistance without human intervention.'
    },
    {
      icon: Users,
      title: 'Multi-Channel Support',
      description: 'Deploy across web, mobile, voice, and messaging platforms seamlessly.'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with compliance to industry standards and regulations.'
    }
  ];

  const useCases = [
    'Customer service and support automation',
    'Internal help desk and IT support',
    'Sales lead qualification and nurturing',
    'Appointment scheduling and management',
    'Document processing and data entry',
    'Employee onboarding and training'
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-alpha-primary to-alpha-secondary text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bot className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Assistants & AI Agents</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              AI Assistants and AI Agents help unlock the full potential of your workforce by taking over repetitive, time-consuming tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">Intelligent Assistant Capabilities</h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Our AI assistants are designed to understand, learn, and adapt to your business needs.
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

      {/* Use Cases Section */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
                Transform Your Operations
              </h2>
              <p className="text-lg text-alpha-neutral-800 mb-8 leading-relaxed">
                Deploy intelligent assistants across your organization to handle routine tasks, 
                provide instant support, and free up your team to focus on high-value activities.
              </p>
              
              <h3 className="text-xl font-semibold text-alpha-secondary mb-4">Common Use Cases:</h3>
              <ul className="space-y-3 mb-8">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start text-alpha-neutral-800">
                    <div className="w-2 h-2 bg-alpha-primary rounded-full mr-3 mt-2"></div>
                    {useCase}
                  </li>
                ))}
              </ul>

              <Button asChild className="bg-alpha-primary hover:bg-alpha-primary/90">
                <Link to="/contact">
                  Deploy Your AI Assistant
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-alpha-secondary mb-2">Performance Metrics</h3>
                      <p className="text-alpha-neutral-600">Average improvements with AI assistants</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-alpha-neutral-800">Response Time</span>
                        <span className="text-2xl font-bold text-alpha-primary">-85%</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-alpha-neutral-800">Task Completion</span>
                        <span className="text-2xl font-bold text-alpha-primary">+60%</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-alpha-neutral-800">Cost Savings</span>
                        <span className="text-2xl font-bold text-alpha-primary">-40%</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-alpha-neutral-800">Customer Satisfaction</span>
                        <span className="text-2xl font-bold text-alpha-primary">+35%</span>
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

export default AIAssistants;