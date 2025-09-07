import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, GitBranch, Cpu, Palette } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Programming",
      skills: ["Python", "HTML", "CSS", "JavaScript"]
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Database",
      skills: ["SQL", "Database Design", "Data Analysis"]
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Web Technologies",
      skills: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"]
    },
    {
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      title: "Tools & Version Control",
      skills: ["Git", "GitHub", "VS Code", "Version Control"]
    },
    {
      icon: <Cpu className="h-6 w-6 text-primary" />,
      title: "Electronics & Communication",
      skills: ["Circuit Design", "Digital Systems", "Communication Systems", "Signal Processing"]
    },
    {
      icon: <Palette className="h-6 w-6 text-primary" />,
      title: "Creative Skills",
      skills: ["Drawing", "Sketching", "Creative Problem Solving", "Design Thinking"]
    }
  ];

  const softSkills = [
    "Communication",
    "Adaptability", 
    "Teamwork",
    "Problem Solving",
    "Time Management",
    "Leadership",
    "Critical Thinking",
    "Continuous Learning"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="animate-section space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">Skills & Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive blend of technical proficiency and soft skills, spanning electronics, 
              programming, and creative problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="skill-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="card-gradient p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-semibold mb-6 text-primary text-center">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="outline"
                  className="text-base py-2 px-4 border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="card-gradient p-8 rounded-2xl border border-border inline-block">
              <h3 className="text-xl font-semibold mb-4 text-primary">Currently Exploring</h3>
              <div className="flex justify-center">
                <Badge 
                  variant="default"
                  className="text-lg py-2 px-6 bg-primary hover:bg-primary/90 shadow-glow animate-glow"
                >
                  Machine Learning
                </Badge>
              </div>
              <p className="text-muted-foreground mt-3 text-sm">
                Bridging electronics expertise with AI/ML technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;