import { Palette, Code, Smartphone, Database, Globe, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
const ServicesSection = () => {
  const services = [{
    icon: <Palette className="w-8 h-8" />,
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning user interfaces using Figma. From wireframes to high-fidelity prototypes, I design user experiences that engage and convert.",
    features: ["User Research & Analysis", "Wireframing & Prototyping", "Design Systems", "Mobile-First Design"],
    tools: ["Figma", "Sketch"],
    popular: true
  }, {
    icon: <Globe className="w-8 h-8" />,
    title: "Full-Stack Solutions",
    description: "Developing robust server-side applications with Node.js and Express.js, including RESTful APIs, database design, and cloud integration, alongside building responsive and performant web applications using modern React.js and cutting-edge technologies to bring designs to life.",
    features: ["Complete Web Applications", "E-commerce Platforms", "Database Design & Management", "Authentication & Security", "React.js Applications", "Responsive Design", "API Integration"],
    tools: ["Node.js", "Express.js", "MongoDB", "MySQL", "React.js", "TypeScript"],
    popular: false
  }];
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional freelance services combining technical expertise with creative design thinking
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => <Card key={index} className={`card-gradient border-border hover:border-primary/50 transition-smooth group relative ${service.popular ? 'ring-2 ring-primary/20' : ''}`}>
                {service.popular && <div className="absolute -top-3 left-6">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <Zap className="w-3 h-3 mr-1" />
                      Most Popular
                    </div>
                  </div>}
                
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary mr-4 group-hover:bg-primary/20 transition-smooth">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-smooth">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-accent">What I Offer:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                          {feature}
                        </li>)}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-accent">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool, idx) => <span key={idx} className="px-3 py-1 bg-secondary/50 text-secondary-foreground text-xs rounded-full border border-border">
                          {tool}
                        </span>)}
                    </div>
                  </div>

                  <Button onClick={scrollToContact} className="w-full group-hover:glow-primary transition-smooth">
                    Get Started
                  </Button>
                </CardContent>
              </Card>)}
          </div>

          {/* Process Section */}
          

          {/* CTA */}
          <div className="text-center mt-16">
            
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;