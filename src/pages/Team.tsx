import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Team = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Al-Rashid',
      role: 'Chief Executive Officer',
      bio: 'Leading AI researcher with 15+ years of experience in machine learning and ethical AI development.',
      avatar: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
      initials: 'SA'
    },
    {
      name: 'Ahmed Hassan',
      role: 'Chief Technology Officer',
      bio: 'Former Google AI engineer specializing in large-scale AI systems and cloud infrastructure.',
      avatar: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
      initials: 'AH'
    },
    {
      name: 'Dr. Fatima Al-Zahra',
      role: 'Head of Research',
      bio: 'PhD in Computer Science with expertise in natural language processing and computer vision.',
      avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      initials: 'FA'
    },
    {
      name: 'Omar Khalil',
      role: 'Head of Product',
      bio: 'Product strategist with a track record of launching successful AI-powered products.',
      avatar: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400',
      initials: 'OK'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-alpha-primary to-alpha-secondary text-white">
        <div className="alpha-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Team</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Meet the brilliant minds behind Alpha AI's innovative solutions
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="alpha-section-padding">
        <div className="alpha-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={member.name} className="alpha-card border-0 text-center p-6">
                <CardContent className="pt-6">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-alpha-primary text-white text-lg">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h3 className="text-xl font-bold text-alpha-secondary mb-1">
                    {member.name}
                  </h3>
                  
                  <p className="text-alpha-primary font-medium mb-3">
                    {member.role}
                  </p>
                  
                  <p className="text-alpha-neutral-800 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  
                  <div className="flex justify-center gap-2">
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                      <Mail className="h-4 w-4" />
                    </Button>
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

export default Team;