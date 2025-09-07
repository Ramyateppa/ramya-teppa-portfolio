import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, CheckCircle } from 'lucide-react';

const ExperienceSection = () => {
  const experience = {
    company: "GLOLED",
    position: "Support Specialist",
    duration: "May 2023 – 6 months internship completed",
    location: "Kukatpally, Hyderabad, Telangana, India",
    responsibilities: [
      "Provided technical and operational support in a high-paced environment",
      "Assisted in optimizing workflows and improving customer satisfaction",
      "Collaborated with cross-functional teams to resolve complex issues",
      "Gained hands-on experience in professional work environment",
      "Developed strong communication and problem-solving skills"
    ]
  };

  return (
    <section id="experience" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="animate-section space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Professional Experience</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hands-on professional experience in technical support and operations, 
              building real-world skills in a dynamic work environment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="project-card">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                  <div className="flex-1 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Building className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-primary">{experience.company}</h3>
                          <p className="text-xl font-semibold">{experience.position}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-primary">Key Responsibilities & Achievements</h4>
                      <ul className="space-y-3">
                        {experience.responsibilities.map((responsibility, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Badge 
                        variant="default"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        6 Months Completed Successfully
                      </Badge>
                    </div>
                  </div>

                  <div className="lg:w-64 mt-6 lg:mt-0">
                    <div className="card-gradient p-6 rounded-xl border border-border">
                      <h4 className="font-semibold mb-4 text-primary">Skills Developed</h4>
                      <div className="space-y-2">
                        <Badge variant="secondary" className="w-full justify-center">Technical Support</Badge>
                        <Badge variant="secondary" className="w-full justify-center">Customer Service</Badge>
                        <Badge variant="secondary" className="w-full justify-center">Problem Solving</Badge>
                        <Badge variant="secondary" className="w-full justify-center">Team Collaboration</Badge>
                        <Badge variant="secondary" className="w-full justify-center">Process Optimization</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="card-gradient p-8 rounded-2xl border border-border inline-block">
              <h3 className="text-xl font-semibold mb-4 text-primary">Seeking New Opportunities</h3>
              <p className="text-muted-foreground max-w-2xl">
                I am actively seeking internship and placement opportunities where I can apply my skills, 
                gain hands-on experience, and contribute meaningfully to real-world projects.
              </p>
              <Badge 
                variant="default"
                className="mt-4 bg-primary hover:bg-primary/90 shadow-professional"
              >
                Available for Opportunities
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;