import { Briefcase, ShoppingBag, Users, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Portfolio = () => {
  const experiences = [
    {
      icon: ShoppingBag,
      title: "Sales Assistant",
      company: "Dripnjury",
      year: "2020–2021",
      description:
        "Assisted customers with inquiries, managed product listings, and handled online orders for a fashion accessories brand.",
      tags: ["Customer Service", "Product Management", "Social Media Handling", "E-Commerce"],
    },
    {
      icon: ShoppingBag,
      title: "Sales Assistant",
      company: "House of Jwlry",
      year: "2020–2021",
      description:
        "Supported daily sales operations, maintained store visuals, and assisted in social media promotions to boost engagement.",
      tags: ["Sales Support", "Content Posting", "Product Uploads", "Team Collaboration"],
    },
    {
      icon: Users,
      title: "Brand Manager & Sales Assistant",
      company: "Fashlada & Espoir London",
      year: "2021–2022",
      description:
        "Managed product branding and online presence for two UK-based fashion brands. Assisted in marketing campaigns, influencer outreach, and client coordination.",
      tags: ["Brand Management", "Social Media", "Marketing", "Client Communication"],
    },
    {
      icon: Target,
      title: "Freelance Web Developer",
      company: "Personal & Academic Projects",
      year: "2022–Present",
      description:
        "Designed and developed responsive e-commerce and business websites using WordPress and custom code. Integrated APIs, automated tasks, and optimized SEO.",
      tags: ["WordPress", "HTML/CSS/JS", "E-Commerce", "SEO", "Website Optimization"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A combination of sales, brand management, and technical web experience built over the years
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="glass-effect border-border/50 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <exp.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl">{exp.title}</CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  {exp.company} • {exp.year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
