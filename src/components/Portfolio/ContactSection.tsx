import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, MapPin, Phone, Download } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "ramyateppa61@gmail.com",
      href: "mailto:ramyateppa61@gmail.com",
      description: "Send me an email for any inquiries"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "github.com/Ramyateppa",
      href: "https://github.com/Ramyateppa",
      description: "Check out my code repositories"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "Ramya Teppa",
      href: "https://www.linkedin.com/in/ramya-teppa-93ba15342/",
      description: "Connect with me professionally"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Hyderabad, Telangana, India",
      href: "#",
      description: "Open to opportunities in this region"
    }
  ];

  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="animate-section space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Let's Connect</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm actively seeking internship and placement opportunities. 
              Let's discuss how I can contribute to your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="skill-card group">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        {method.icon}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{method.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                      
                      {method.href !== "#" ? (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="hover:border-primary/50 transition-all duration-300"
                        >
                          <a 
                            href={method.href}
                            target={method.title !== "Email" ? "_blank" : undefined}
                            rel={method.title !== "Email" ? "noopener noreferrer" : undefined}
                            className="text-xs"
                          >
                            {method.value}
                          </a>
                        </Button>
                      ) : (
                        <p className="text-xs text-primary font-medium">{method.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="project-card">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold text-primary">Ready to Make an Impact</h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    As a dedicated Electronics and Communication Engineering student with proven academic excellence 
                    and hands-on experience, I'm excited to bring my technical skills, creative thinking, and 
                    strong work ethic to your team. Let's discuss how I can contribute to your organization's success.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button 
                      size="lg"
                      asChild
                      className="shadow-professional hover:shadow-glow transition-all duration-300"
                    >
                      <a href="mailto:ramyateppa61@gmail.com" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Send Message
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg"
                      asChild
                      className="hover:border-primary/50 transition-all duration-300"
                    >
                      <a 
                        href="https://www.linkedin.com/in/ramya-teppa-93ba15342/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Linkedin className="h-4 w-4" />
                        Connect on LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Ramya Teppa. Built with passion and dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;