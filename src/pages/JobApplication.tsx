import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Upload, ArrowLeft } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const JobApplication = () => {
  const { jobId } = useParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    coverLetter: '',
    experience: '',
    portfolio: '',
    yearsExperience: '',
    availability: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Application Submitted Successfully!",
        description: "We'll review your application and get back to you soon.",
      });
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        coverLetter: '',
        experience: '',
        portfolio: '',
        yearsExperience: '',
        availability: ''
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-16">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to={`/careers/${jobId}`} className="text-alpha-primary hover:underline mb-4 inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Job Details
              </Link>
              <h1 className="text-4xl font-bold text-alpha-secondary mb-4">Apply for Position</h1>
              <p className="text-lg text-alpha-neutral-800">
                Fill out the form below to submit your application.
              </p>
            </div>

            <Card className="alpha-card border-0">
              <CardHeader>
                <CardTitle>Application Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="yearsExperience">Years of Experience *</Label>
                      <Select onValueChange={(value) => handleSelectChange('yearsExperience', value)} required>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="0-1">0-1 years</SelectItem>
                          <SelectItem value="2-3">2-3 years</SelectItem>
                          <SelectItem value="4-5">4-5 years</SelectItem>
                          <SelectItem value="6-10">6-10 years</SelectItem>
                          <SelectItem value="10+">10+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="availability">Availability *</Label>
                      <Input
                        id="availability"
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        required
                        className="mt-2"
                        placeholder="e.g., Immediate, 2 weeks notice"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="experience">Relevant Experience *</Label>
                    <Textarea
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="mt-2"
                      placeholder="Describe your relevant work experience..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="coverLetter">Cover Letter *</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="mt-2"
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="portfolio">Portfolio/LinkedIn URL</Label>
                    <Input
                      id="portfolio"
                      name="portfolio"
                      type="url"
                      value={formData.portfolio}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="https://..."
                    />
                  </div>

                  <div>
                    <Label>Resume/CV *</Label>
                    <div className="mt-2 border-2 border-dashed border-alpha-neutral-200 rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-alpha-neutral-400 mx-auto mb-2" />
                      <p className="text-alpha-neutral-600 mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-alpha-neutral-500">
                        PDF, DOC, or DOCX (max 5MB)
                      </p>
                      <Button type="button" variant="outline" className="mt-2">
                        Choose File
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-alpha-primary hover:bg-alpha-primary/90 flex-1"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Submitting...
                        </div>
                      ) : (
                        'Submit Application'
                      )}
                    </Button>
                    
                    <Button type="button" variant="outline" asChild>
                      <Link to={`/careers/${jobId}`}>
                        Cancel
                      </Link>
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JobApplication;