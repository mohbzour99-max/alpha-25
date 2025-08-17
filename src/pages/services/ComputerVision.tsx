import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Eye, Camera, Scan, Shield, Zap, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComputerVision = () => {
  const features = [
    {
      icon: Camera,
      title: 'Image Recognition',
      description: 'Identify and classify objects, people, and scenes in images with high accuracy.'
    },
    {
      icon: Scan,
      title: 'Object Detection',
      description: 'Locate and identify multiple objects within images and video streams.'
    },
    {
      icon: Brain,
      title: 'Deep Learning Models',
      description: 'Advanced neural networks trained on massive datasets for superior performance.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Process video streams and images in real-time for immediate insights.'
    },
    {
      icon: Shield,
      title: 'Quality Control',
      description: 'Automated inspection and quality assurance for manufacturing processes.'
    }
  ];

  const applications = [
    'Automated quality inspection and defect detection',
    'Security and surveillance systems',
    'Medical image analysis and diagnosis',
    'Autonomous vehicle navigation',
    'Retail inventory management',
    'Facial recognition and authentication',
    'Document processing and OCR',
    'Agricultural monitoring and analysis'
  ];

  const metrics = [
    {
      label: 'Object Detection Accuracy',
      value: '96.8%',
      description: 'Average accuracy across multiple object classes'
    },
    {
      label: 'Processing Speed',
      value: '45 FPS',
      description: 'Real-time video analysis capability'
    },
    {
      label: 'Image Classification',
      value: '98.2%',
      description: 'Top-1 accuracy on standard benchmarks'
    },
    {
      label: 'Defect Detection',
      value: '99.1%',
      description: 'Manufacturing quality control accuracy'
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
              <Eye className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Computer Vision</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Our computer vision solutions bring intelligence to visual data—helping organizations automate visual tasks and gain insights from images and videos.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">Visual Intelligence Capabilities</h2>
            <p className="text-lg text-alpha-neutral-800 max-w-3xl mx-auto">
              Transform visual data into actionable insights with state-of-the-art computer vision technology.
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

      {/* Applications & Performance Section */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">
                See Beyond Human Vision
              </h2>
              <p className="text-lg text-alpha-neutral-800 mb-8 leading-relaxed">
                Our computer vision systems can process and analyze visual information faster and more accurately 
                than human vision, enabling automation of complex visual tasks across industries.
              </p>
              
              <h3 className="text-xl font-semibold text-alpha-secondary mb-4">Industry Applications:</h3>
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
                  Implement Computer Vision
                </Link>
              </Button>
            </div>

            <div className="relative">
              <Card className="alpha-card border-0 p-8">
                <CardContent>
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-alpha-secondary mb-2">Performance Metrics</h3>
                      <p className="text-alpha-neutral-600">Industry-leading accuracy and speed</p>
                    </div>
                    
                    <div className="space-y-6">
                      {metrics.map((metric, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-alpha-neutral-800 font-medium text-sm">{metric.label}</span>
                            <span className="text-2xl font-bold text-alpha-primary">{metric.value}</span>
                          </div>
                          <p className="text-xs text-alpha-neutral-600">{metric.description}</p>
                          <div className="w-full bg-alpha-neutral-200 rounded-full h-1">
                            <div className="bg-alpha-primary h-1 rounded-full" style={{width: '95%'}}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 p-4 bg-alpha-primary/10 rounded-lg">
                      <h4 className="font-semibold text-alpha-secondary mb-2">Technology Stack</h4>
                      <div className="grid grid-cols-2 gap-2 text-xs text-alpha-neutral-700">
                        <div>• TensorFlow</div>
                        <div>• PyTorch</div>
                        <div>• OpenCV</div>
                        <div>• CUDA</div>
                        <div>• YOLO</div>
                        <div>• ResNet</div>
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

export default ComputerVision;