import { useState } from 'react';
import { ExternalLink, Github, Palette, Code, Brain, ShoppingCart, TrendingUp, Users, Monitor } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
interface Project {
  title: string;
  description: string;
  technologies: string[];
  category: string;
  icon: React.ReactNode;
  designFeatures?: string[];
  prototypeUrl?: string;
}
const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('academic');
  const academicProjects: Project[] = [{
    title: "Fashion Sentiment Checker",
    description: "AI-driven tool for sentiment analysis in fashion branding, analyzing customer feedback and social media mentions to provide insights for fashion brands.",
    technologies: ["Python", "Machine Learning", "NLP", "Sentiment Analysis"],
    category: "AI/ML",
    icon: <Brain className="w-6 h-6" />
  }, {
    title: "CricOzy",
    description: "ML-powered cricket training platform that analyzes player performance, provides personalized training recommendations, and tracks progress over time.",
    technologies: ["Python", "Machine Learning", "Data Analytics", "Sports Analytics"],
    category: "AI/ML",
    icon: <TrendingUp className="w-6 h-6" />
  }, {
    title: "SOUNDBLAZE",
    description: "Full-featured music instrument e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.",
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "Full-Stack",
    icon: <ShoppingCart className="w-6 h-6" />
  }, {
    title: "Academic Progress Predictor",
    description: "Machine learning system that predicts student academic performance based on various factors and provides personalized study recommendations.",
    technologies: ["Python", "Data Visualization"],
    category: "AI/ML",
    icon: <TrendingUp className="w-6 h-6" />
  }];
  const uiuxProjects: Project[] = [{
    title: "Smart Glasses Landing Page",
    description: "High-impact, photography-driven landing page for a smart-glasses brand featuring bold typographic hero, product showcase with pricing, customization options, and conversion-focused newsletter & shop interactions.",
    technologies: ["Figma", "Design Systems", "User Research", "Prototyping", "Analytics"],
    category: "UI/UX Design",
    icon: <Monitor className="w-6 h-6" />,
    designFeatures: ["Bold Typography", "Immersive Imagery", "Minimal Layout", "Product Focused"],
    prototypeUrl: "https://www.figma.com/proto/ZM7whc1SVx0Jb5A4BqvbMG/Trial-Project-2?node-id=6-2&p=f&t=NL7AcrIvMVWysW9l-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
  }, {
    title: "Centralized HR & IT Asset Dashboard",
    description: "Enterprise-level employee device and HR management system designed for Crextio Company, streamlining asset tracking and employee onboarding processes.",
    technologies: ["Figma", "Enterprise UX", "System Design", "Workflow Optimization"],
    category: "UI/UX Design",
    icon: <Monitor className="w-6 h-6" />,
    designFeatures: ["Asset Management", "Employee Portal", "Admin Dashboard", "Reporting System"],
    prototypeUrl: "https://www.figma.com/proto/duFOFDooZxIWPiYxyLPUpz/HR-Website?node-id=56-380&p=f&t=Pnx6YpCcPxIDqW73-1&scaling=scale-down&content-scaling=fixed&page-id=56%3A153&starting-point-node-id=56%3A380"
  }, {
    title: "Krypto NFT Marketplace Landing Page",
    description: "Modern web landing page for an NFT marketplace, featuring bold typographic hierarchy, dark-gradient branding, illustrative visuals, clear CTAs, and trust signals to drive conversions.",
    technologies: ["Figma", "Design Systems", "Prototyping"],
    category: "UI/UX Design",
    icon: <Monitor className="w-6 h-6" />,
    designFeatures: ["Modern Aesthetics", "Responsive Layout", "Visual Hierarchy", "Conversion Focused"],
    prototypeUrl: "https://www.figma.com/proto/Y0Wa925dSdvfbuEsXdj3SM/Trial-Project-3?node-id=5-80&p=f&t=FMH2gnzALkShku8c-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1"
  }];
  const allProjects = activeCategory === 'academic' ? academicProjects : uiuxProjects;
  const categories = [{
    id: 'academic',
    label: 'Academic Projects',
    count: academicProjects.length
  }, {
    id: 'uiux',
    label: 'UI/UX Projects',
    count: uiuxProjects.length
  }];
  return <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of academic projects and design work showcasing my technical and creative skills
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-card rounded-lg p-1 border border-border">
              {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-6 py-3 rounded-md text-sm font-medium transition-smooth ${activeCategory === category.id ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`}>
                  {category.label}
                  <Badge variant="secondary" className="ml-2">
                    {category.count}
                  </Badge>
                </button>)}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => <Card key={index} className="card-gradient border-border hover:border-primary/50 transition-smooth group hover:glow-primary">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">
                      {project.icon}
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Design Features for UI/UX projects */}
                  {project.designFeatures && <div className="mb-4">
                      <h4 className="text-sm font-medium text-accent mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {project.designFeatures.map((feature, idx) => <span key={idx} className="text-xs text-muted-foreground">
                            • {feature}
                          </span>)}
                      </div>
                    </div>}

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => <Badge key={idx} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>)}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {project.category === "UI/UX Design" && project.prototypeUrl && (
                    <div className="pt-4">
                      <Button variant="outline" size="sm" className="w-full" asChild>
                        <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Prototype
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>)}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">Interested in seeing my work?</p>
            <Button size="lg" className="glow-primary" asChild>
              <a href="https://github.com/Daniel0Fernando?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;