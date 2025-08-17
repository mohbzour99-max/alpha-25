import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Target, Compass } from 'lucide-react';

const VisionMission = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-alpha-primary to-alpha-secondary text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Vision & Mission</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Shaping the future of AI with purpose and responsibility
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Vision */}
            <Card className="alpha-card border-0 p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-alpha-primary" />
                </div>
                <CardTitle className="text-2xl text-alpha-secondary">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-alpha-neutral-800 leading-relaxed">
                  To be the leading force in creating a smarter, more connected world where AI enhances human potential and drives meaningful innovation across all sectors of society.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="alpha-card border-0 p-8">
              <CardHeader>
                <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-alpha-primary" />
                </div>
                <CardTitle className="text-2xl text-alpha-secondary">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-alpha-neutral-800 leading-relaxed">
                  To develop and deploy ethical AI solutions that amplify human capabilities, create meaningful opportunities, and build a more inclusive digital future through transparent and responsible innovation.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <Card className="alpha-card border-0 p-8">
            <CardHeader>
              <div className="w-16 h-16 bg-alpha-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Compass className="h-8 w-8 text-alpha-primary" />
              </div>
              <CardTitle className="text-2xl text-alpha-secondary text-center">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-alpha-secondary mb-2">Human-Centered Design</h3>
                  <p className="text-alpha-neutral-800">We prioritize human needs and capabilities in every AI solution we create.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-alpha-secondary mb-2">Ethical Innovation</h3>
                  <p className="text-alpha-neutral-800">We maintain the highest standards of ethics and transparency in our development processes.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-alpha-secondary mb-2">Collaborative Excellence</h3>
                  <p className="text-alpha-neutral-800">We believe in the power of unity and collaboration to achieve extraordinary results.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-alpha-secondary mb-2">Continuous Learning</h3>
                  <p className="text-alpha-neutral-800">We embrace continuous improvement and adaptation in our pursuit of excellence.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionMission;