import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Code, Database, Brain } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Python Certification",
      provider: "HackerRank",
      description: "Demonstrated proficiency in Python programming, including data structures, algorithms, and object-oriented programming concepts.",
      color: "bg-yellow-500/10 border-yellow-500/20"
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "SQL Certification", 
      provider: "HackerRank",
      description: "Validated expertise in database management, complex queries, joins, and data manipulation using SQL.",
      color: "bg-blue-500/10 border-blue-500/20"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Generative AI Certification",
      provider: "GUVI & HCL",
      description: "Comprehensive understanding of generative AI technologies, machine learning concepts, and their practical applications.",
      color: "bg-purple-500/10 border-purple-500/20"
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="animate-section space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry-recognized certifications that validate my technical expertise 
              and commitment to continuous learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="project-card group">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-center">
                      <div className={`p-4 rounded-2xl ${cert.color} group-hover:scale-110 transition-transform duration-300`}>
                        {cert.icon}
                      </div>
                    </div>
                    
                    <div className="text-center space-y-3">
                      <h3 className="text-xl font-bold">{cert.title}</h3>
                      <Badge 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {cert.provider}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground text-center leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="flex justify-center">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <div className="card-gradient p-8 rounded-2xl border border-border inline-block">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-semibold text-primary">Continuous Learning</h3>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                I am committed to staying current with industry trends and continuously expanding 
                my skill set through professional certifications and hands-on learning.
              </p>
              <div className="flex justify-center mt-4">
                <Badge 
                  variant="outline"
                  className="border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  Always Learning & Growing
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;