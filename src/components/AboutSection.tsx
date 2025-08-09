import { GraduationCap, Briefcase, Code, Database, Wrench } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const education = [
    {
      degree: "BEng(Hons) Software Engineering",
      institution: "Informatics Institute of Technology (IIT)",
      period: "2021 – 2025",
      status: "Completed"
    },
    {
      degree: "Cambridge GCE AS & AL",
      institution: "British Council",
      period: "2020",
      status: "Completed"
    },
    {
      degree: "GCE O/L",
      institution: "St. Nicholas' International College",
      period: "2018",
      status: "Completed"
    }
  ];

  const experience = [
    {
      title: "Software Engineer Intern",
      company: "SLT Digital Labs",
      period: "Aug 2023 – July 2024",
      projects: ["Cloud-based eSIM platform", "Face API", "IP camera RTSP integration"],
      techStack: ["Node.js", "Express.js", "MongoDB"],
      skills: ["Backend development", "UI/UX in Figma", "RESTful APIs", "RTSP research"]
    }
  ];

  const skills = {
    programming: ["Python", "Java", "JavaScript", "HTML & CSS", "Node.js", "React.js"],
    databases: ["MySQL", "MongoDB"],
    tools: ["VS Code", "GitHub", "Figma", "MATLAB"],
    concepts: ["SDLC", "Algorithms", "System Architecture", "Teamwork", "Adaptability"]
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating innovative solutions through code and design
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <GraduationCap className="text-primary mr-3" size={28} />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="card-gradient border-border hover:border-primary/50 transition-smooth">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <div className="text-right mt-2 md:mt-0">
                        <p className="text-muted-foreground">{edu.period}</p>
                        <p className="text-sm text-accent">{edu.status}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Briefcase className="text-primary mr-3" size={28} />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>
            {experience.map((exp, index) => (
              <Card key={index} className="card-gradient border-border hover:border-primary/50 transition-smooth">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <p className="text-muted-foreground mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h5 className="font-medium text-accent mb-2">Projects</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {exp.projects.map((project, idx) => (
                          <li key={idx}>• {project}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-accent mb-2">Tech Stack</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-accent mb-2">Skills Developed</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {exp.skills.map((skill, idx) => (
                          <li key={idx}>• {skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Section */}
          <div>
            <div className="flex items-center mb-8">
              <Code className="text-primary mr-3" size={28} />
              <h3 className="text-2xl font-bold">Technical Skills</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="card-gradient border-border hover:border-primary/50 transition-smooth">
                <CardContent className="p-6 text-center">
                  <Code className="text-primary mb-4 mx-auto" size={32} />
                  <h4 className="font-semibold mb-3">Programming</h4>
                  <div className="space-y-2">
                    {skills.programming.map((lang, idx) => (
                      <span key={idx} className="block text-sm text-muted-foreground">
                        {lang}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border hover:border-primary/50 transition-smooth">
                <CardContent className="p-6 text-center">
                  <Database className="text-primary mb-4 mx-auto" size={32} />
                  <h4 className="font-semibold mb-3">Databases</h4>
                  <div className="space-y-2">
                    {skills.databases.map((db, idx) => (
                      <span key={idx} className="block text-sm text-muted-foreground">
                        {db}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border hover:border-primary/50 transition-smooth">
                <CardContent className="p-6 text-center">
                  <Wrench className="text-primary mb-4 mx-auto" size={32} />
                  <h4 className="font-semibold mb-3">Tools</h4>
                  <div className="space-y-2">
                    {skills.tools.map((tool, idx) => (
                      <span key={idx} className="block text-sm text-muted-foreground">
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="card-gradient border-border hover:border-primary/50 transition-smooth">
                <CardContent className="p-6 text-center">
                  <GraduationCap className="text-primary mb-4 mx-auto" size={32} />
                  <h4 className="font-semibold mb-3">Concepts</h4>
                  <div className="space-y-2">
                    {skills.concepts.map((concept, idx) => (
                      <span key={idx} className="block text-sm text-muted-foreground">
                        {concept}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;