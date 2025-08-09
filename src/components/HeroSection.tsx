
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/daniel-profile.jpg';

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Daniel_Fernando_CV.pdf';
    link.download = 'Daniel_Fernando_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-primary">
                  
                  
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Hello, I'm{' '}
                  <span className="text-gradient">Daniel Fernando</span>
                </h1>
                
                <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">Software Engineer | UI/UX Enthusiast</h2>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Aspiring software developer seeking challenging opportunities to apply and enhance 
                technical skills in a dynamic industry environment. Eager to collaborate with 
                seasoned professionals and leverage emerging technologies to drive innovation 
                and personal growth.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button onClick={scrollToAbout} size="lg" className="glow-primary">
                  Explore My Work
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={downloadCV}
                >
                  Download CV
                </Button>
              </div>

              {/* Quick Contact Links */}
              <div className="flex items-center space-x-6 pt-4">
                <a href="https://www.linkedin.com/in/daniel-fernando-623b9922b/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth" title="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/Daniel0Fernando" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth" title="GitHub">
                  <Github size={20} />
                </a>
                <div className="flex items-center text-muted-foreground">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">Colombo 13, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 glow-primary">
                  <img src={profileImage} alt="Daniel Fernando" className="w-full h-full object-cover" />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-muted-foreground" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
