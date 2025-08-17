import { useParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, DollarSign, Users, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  const { jobId } = useParams();

  const jobs = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      salary: 'Competitive',
      description: 'Join our AI engineering team to develop cutting-edge machine learning solutions.',
      requirements: [
        'PhD or Masters in Computer Science, AI, or related field',
        '5+ years of experience in machine learning',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)'
      ]
    },
    {
      id: '2',
      title: 'Product Manager - AI Solutions',
      department: 'Product',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      salary: 'Competitive',
      description: 'Lead product strategy and development for our AI-powered solutions.',
      requirements: [
        'MBA or equivalent experience',
        '3+ years in product management',
        'Experience with AI/ML products',
        'Strong analytical and communication skills'
      ]
    },
    {
      id: '3',
      title: 'Data Scientist',
      department: 'Research',
      location: 'Riyadh, Saudi Arabia',
      type: 'Full-time',
      salary: 'Competitive',
      description: 'Analyze complex datasets and develop predictive models to drive business insights.',
      requirements: [
        'Masters in Statistics, Mathematics, or related field',
        '3+ years of data science experience',
        'Proficiency in R, Python, SQL',
        'Experience with statistical modeling and machine learning'
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with diverse, talented teams building the future of AI'
    },
    {
      icon: TrendingUp,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career advancement'
    },
    {
      icon: Award,
      title: 'Innovation Culture',
      description: 'Be part of groundbreaking AI research and development'
    }
  ];

  // If jobId is provided, show specific job details
  const selectedJob = jobId ? jobs.find(job => job.id === jobId) : null;

  if (selectedJob) {
    return (
      <div className="min-h-screen">
        <Navigation />
        
        {/* Job Details */}
        <section className="pt-24 pb-16">
          <div className="alpha-container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link to="/careers" className="text-alpha-primary hover:underline mb-4 inline-block">
                  ← Back to Careers
                </Link>
                <h1 className="text-4xl font-bold text-alpha-secondary mb-4">{selectedJob.title}</h1>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {selectedJob.location}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {selectedJob.type}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <DollarSign className="h-3 w-3" />
                    {selectedJob.salary}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card className="alpha-card border-0 p-6 mb-6">
                    <CardHeader>
                      <CardTitle>Job Description</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-alpha-neutral-800 leading-relaxed">
                        {selectedJob.description}
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="alpha-card border-0 p-6">
                    <CardHeader>
                      <CardTitle>Requirements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {selectedJob.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-alpha-neutral-800">
                            <div className="w-2 h-2 bg-alpha-primary rounded-full mr-3 mt-2"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="alpha-card border-0 p-6">
                    <CardHeader>
                      <CardTitle>Apply Now</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-alpha-neutral-800 mb-4">
                        Ready to join our team? Submit your application today.
                      </p>
                      <Button asChild className="w-full bg-alpha-primary hover:bg-alpha-primary/90">
                        <Link to={`/careers/${selectedJob.id}/apply`}>
                          Apply for this Position
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-alpha-primary to-alpha-secondary text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Alpha AI</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Shape the future of AI technology while building meaningful solutions for tomorrow's world.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="alpha-section-padding bg-alpha-neutral-50">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">Why Join Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={benefit.title} className="alpha-card border-0 text-center p-6">
                <CardHeader>
                  <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-alpha-primary" />
                  </div>
                  <CardTitle className="text-alpha-secondary">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-alpha-neutral-800">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-alpha-primary mb-6">Open Positions</h2>
            <p className="text-lg text-alpha-neutral-800">
              Explore exciting opportunities to make an impact
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {jobs.map((job) => (
              <Card key={job.id} className="alpha-card border-0 p-6">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-alpha-secondary mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge variant="outline">{job.department}</Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {job.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {job.type}
                        </Badge>
                      </div>
                      <p className="text-alpha-neutral-800">
                        {job.description}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Button asChild className="bg-alpha-primary hover:bg-alpha-primary/90">
                        <Link to={`/careers/${job.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;