import { Mail, Globe, Share2, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Mail,
      title: "General Virtual Assistance",
      description: "I help manage your online store so you can focus on growing your brand",
      items: [
        "Email & Calendar Management",
        "Data Entry & Research",
        "File Organization (Google Drive, Dropbox)",
        "Document Preparation (MS Word, Excel, Google Sheets)",
      ],
    },
     {
    icon: Globe,
    title: "Website & E-Commerce Support",
    description:
      "Assisting with website and online store tasks, with a strong interest in learning platforms like WordPress and Shopify.",
    items: [
      "Content Uploads (blogs, images, product listings)",
      "Basic Website Maintenance & Updates",
      "Learning and adapting to new tools and systems",
      "Collaborating closely with clients to ensure accuracy",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Support",
    description:
      "Helping you stay consistent online through content organization, scheduling, and engagement.",
    items: [
      "Content Scheduling (Facebook, Instagram, TikTok)",
      "Caption Writing & Hashtag Research",
      "Engagement (replying to comments/messages)",
      "Canva Graphics & Simple Post Design",
    ],
  },
  {
    icon: TrendingUp,
    title: "Marketing Assistance",
    description:
      "Eager to assist with digital marketing and advertising tasks while continuously learning new tools and strategies.",
    items: [
      "Basic Research for Target Audience or Hashtags",
      "Tracking Simple Analytics Reports",
      "Supporting marketing team operations",
      "Open to learning Facebook Ads and similar platforms",
    ],
  },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive virtual assistance to help your business thrive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="glass-effect border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
