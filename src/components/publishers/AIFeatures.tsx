import { Bot, Palette, Users, FileText } from "lucide-react";

const AIFeatures = () => {
  const features = [
    {
      icon: Bot,
      title: "Smart Draft Generator",
      description: "Our AI Content Agents scan thousands of sources to generate human‑like copy and adapt it in real time. Simply tell the editor your topic, and it drafts a complete newsletter on your behalf, matching your tone and style.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Palette,
      title: "Brand Kit & Voice Control",
      description: "Upload your brand colours, fonts, and guidelines. The editor ensures every template and section aligns with your visual identity and writing style.",
      gradient: "from-hero to-primary"
    },
    {
      icon: Users,
      title: "Personalization Suggestions",
      description: "The AI tailors content for different audience segments, using real‑time data and intent signals to recommend headlines and calls to action that boost engagement.",
      gradient: "from-secondary to-hero"
    },
    {
      icon: FileText,
      title: "Time‑Saving Templates",
      description: "Start with professionally designed templates; the editor's auto‑complete functionality fills in placeholders and adapts layouts to your content. With the AI doing 95% of the work, you can spend more time creating and less time formatting.",
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            How the AI Email Editor Helps
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your newsletter creation process with intelligent automation 
            that understands your brand and audience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-feature transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Hover effect */}
              <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;