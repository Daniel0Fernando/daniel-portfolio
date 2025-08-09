import { Heart, Github, Linkedin, Mail } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-gradient mb-4">Daniel Fernando</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Aspiring Software Developer passionate about creating innovative solutions 
                through code and design. Always ready for new challenges and opportunities.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {[{
                href: '#about',
                label: 'About'
              }, {
                href: '#projects',
                label: 'Projects'
              }, {
                href: '#services',
                label: 'Services'
              }, {
                href: '#contact',
                label: 'Contact'
              }].map(link => <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                    {link.label}
                  </a>)}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <a href="mailto:godsonfdo26@gmail.com" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-smooth">
                  <Mail className="w-4 h-4 mr-2" />
                  godsonfdo26@gmail.com
                </a>
                <p className="text-sm text-muted-foreground">
                  Colombo 13, Sri Lanka
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
            

            <div className="flex items-center space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth" title="LinkedIn">
                
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth" title="GitHub">
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;