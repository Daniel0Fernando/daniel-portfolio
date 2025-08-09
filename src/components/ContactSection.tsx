import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const contactInfo = [{
    icon: <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+94 769812848",
    href: "tel:+94769812848"
  }, {
    icon: <Mail className="w-5 h-5" />,
    label: "Email",
    value: "godsonfdo26@gmail.com",
    href: "mailto:godsonfdo26@gmail.com"
  }, {
    icon: <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Colombo 13, Sri Lanka",
    href: "#"
  }];
  const socialLinks = [{
    icon: <Linkedin className="w-5 h-5" />,
    label: "LinkedIn",
    href: "#",
    color: "hover:text-blue-500"
  }, {
    icon: <Github className="w-5 h-5" />,
    label: "GitHub",
    href: "#",
    color: "hover:text-gray-400"
  }];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_xesioc5', // Service ID
        'template_wcbgzb7', // Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Daniel Fernando',
        },
        'UtXO5jrCJrCTw4YqY' // Public Key
      );

      console.log('EmailJS result:', result);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!"
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your next project? I'd love to hear from you. Send me a message and let's discuss your ideas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new opportunities, interesting projects, 
                  and potential collaborations. Whether you have a question about my work 
                  or want to explore working together, don't hesitate to reach out.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => <Card key={index} className="card-gradient border-border hover:border-primary/50 transition-smooth">
                    <CardContent className="p-4">
                      <a href={info.href} className="flex items-center space-x-4 hover:text-primary transition-smooth">
                        <div className="p-3 bg-primary/10 rounded-lg text-primary">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>)}
              </div>

              {/* Social Links */}
              

              {/* Availability Status */}
              <Card className="card-gradient border-border">
                
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="card-gradient border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required className="bg-background border-border focus:border-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project or ask any questions..." rows={6} required className="bg-background border-border focus:border-primary resize-none" />
                  </div>

                  <Button type="submit" className="w-full glow-primary" disabled={isSubmitting}>
                    {isSubmitting ? <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div> : <div className="flex items-center">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </div>}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;