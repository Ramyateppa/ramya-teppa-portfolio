import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-section space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gradient leading-tight">
              Ramya Teppa
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              Electronics & Communication Engineering Student
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate about technology, coding, and innovation. Combining electronics expertise 
              with modern programming skills to build the future.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="shadow-professional hover:shadow-glow transition-all duration-300"
              onClick={scrollToAbout}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover:border-primary/50 transition-all duration-300"
              >
                <a 
                  href="https://github.com/Ramyateppa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
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
                  LinkedIn
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover:border-primary/50 transition-all duration-300"
              >
                <a 
                  href="mailto:ramyateppa61@gmail.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;