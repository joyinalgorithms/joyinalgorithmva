import {
  Laptop,
  Palette,
  Globe,
  TrendingUp,
  FolderOpen,
  MessageSquare
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
  {
    icon: MessageSquare,
    title: "Productivity & Communication",
    tools: [
      "Google Workspace",
      "Slack",
      "Zoom",
      "Telegram",
      "Discord",
      "Microsoft Teams",
    ],
  },
  {
    icon: Palette,
    title: "Design & Content",
    tools: [
      "Canva",
      "Grammarly",
      "ChatGPT",
      "CapCut",
    ],
  },
  {
    icon: Globe,
    title: "Website & E-commerce",
    tools: [
      "WordPress",
      "Shopify",
      "Wix",
      "Basic SEO",
      "Website Updates",
      "Content Uploads",
    ],
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    tools: [
      "Facebook Ads",
      "Google Analytics",
      "Social Media Scheduling",
      "Content Strategy",
      "Hashtag Research",
    ],
  },
  {
    icon: FolderOpen,
    title: "Admin & Organization",
    tools: [
      "MS Office",
      "Google Sheets",
      "Calendar Management",
      "File Organization",
      "Data Entry & Research",
      "Time Management",
    ],
  },
  {
    icon: Laptop,
    title: "Technical Skills",
    tools: [
      "Website Development (E-commerce, Blog, and Business Sites)",
      "HTML, CSS, JavaScript",
      "Basic Backend Development",
      "API Integration & Automation",
      "Database & CMS Familiarity",
      "CRM Systems & Data Management",
      "Version Control (Git, GitHub)",
      "Problem-Solving & Debugging",
    ],
  },
];


  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tools & <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tech-savvy expertise across multiple platforms and tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-effect p-6 rounded-xl border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-3">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-background border border-border rounded-full text-sm text-foreground/80 hover:bg-accent/10 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
