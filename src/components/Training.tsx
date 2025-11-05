import { GraduationCap, Award, BookOpen, Target, Code, Shield, Brain } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Training = () => {
  const trainings = [
    // VA and marketing-related trainings
    {
      icon: Award,
      title: "Facebook Ads Training",
      description: "Social Media Strategies & Campaign Setup",
      skills: ["Ad Campaign Creation", "Audience Targeting", "Budget Management", "Analytics"],
    },
    {
      icon: BookOpen,
      title: "Shopify Basics",
      description: "Product Management & Store Setup",
      skills: ["Store Configuration", "Product Uploads", "Theme Customization", "Order Processing"],
    },
    {
      icon: Target,
      title: "WordPress Management",
      description: "Site Creation & Maintenance",
      skills: ["Site Setup", "Content Management", "Plugin Integration", "SEO Basics"],
    },
    {
      icon: GraduationCap,
      title: "Social Media Management",
      description: "Content Planning & Scheduling",
      skills: ["Content Strategy", "Platform Best Practices", "Engagement Tactics", "Analytics"],
    },

    // Developer certifications and technical training
    {
      icon: Code,
      title: "CS50x: Introduction to Computer Science",
      description: "Harvard University (2024)",
      skills: ["C Programming", "Python", "SQL", "Web Development (HTML, CSS, JS)", "Algorithms"],
    },
    {
      icon: Shield,
      title: "Google Cybersecurity Professional Certificate",
      description: "Google (2024)",
      skills: ["Cybersecurity", "Risk Management", "Linux", "SIEM", "Network Security"],
    },
    {
      icon: Brain,
      title: "Kaggle: Machine Learning Fundamentals",
      description: "Kaggle (2024)",
      skills: ["Machine Learning", "Data Science", "Model Building", "Random Forests", "Data Analysis"],
    },
    {
      icon: Code,
      title: "Web Development Fundamentals",
      description: "HTML, CSS, and JavaScript Training (2023)",
      skills: ["Responsive Web Design", "Front-End Development", "JavaScript Interactivity", "Version Control (GitHub)"],
    },
  ];

  return (
    <section id="training" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Training & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development across virtual assistance and technical fields
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {trainings.map((training, index) => (
            <Card
              key={index}
              className="glass-effect border-border/50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <training.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{training.title}</CardTitle>
                <CardDescription className="text-base">
                  {training.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground mb-3">Key Skills:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {training.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-sm text-foreground/80">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
