import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Target } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "B.Tech ECE",
      subtitle: "89% - Pre-final Year",
      description: "Electronics and Communication Engineering"
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "Diploma ECE",
      subtitle: "82% Academic Excellence",
      description: "Electronics Communication and Engineering"
    },
    {
      icon: <Target className="h-6 w-6 text-primary" />,
      title: "Secondary Education",
      subtitle: "100% Perfect Score",
      description: "Outstanding academic performance"
    }
  ];

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-6">
        <div className="animate-section space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate Electronics and Communication Engineering student with a strong academic foundation 
              and growing expertise in modern technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="card-gradient p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am a pre-final year Electronics and Communication Engineering student with a strong academic record 
                  and a passion for technology. With expertise in Python, SQL, HTML, and CSS, I'm actively exploring 
                  Machine Learning to bridge my electronics background with cutting-edge technologies.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Beyond academics, I'm a creative thinker who enjoys drawing and sketching, which enhances my 
                  innovative approach to problem-solving. My strong soft skills in communication, adaptability, 
                  teamwork, and time management enable effective collaboration and continuous learning.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I am actively seeking internship and placement opportunities where I can apply my skills, 
                  gain hands-on experience, and contribute meaningfully to real-world projects.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Academic Excellence</h3>
              <div className="grid gap-4">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="project-card">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg">{achievement.title}</h4>
                          <p className="text-primary font-medium">{achievement.subtitle}</p>
                          <p className="text-muted-foreground text-sm mt-1">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-gradient p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Languages</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>English</span>
                  <span className="text-muted-foreground">Working Proficiency</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Telugu</span>
                  <span className="text-muted-foreground">Native/Bilingual</span>
                </div>
              </div>
            </div>

            <div className="card-gradient p-8 rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-4 text-primary">Interests</h3>
              <div className="space-y-2">
                <div>Drawing & Sketching</div>
                <div>Machine Learning</div>
                <div>Problem Solving</div>
                <div>Technology Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;