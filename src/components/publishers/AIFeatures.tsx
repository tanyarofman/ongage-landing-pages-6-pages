import { Bot, Palette, Users, FileText } from "lucide-react";

const AIFeatures = () => {
  const features = [
    {
      icon: Bot,
      title: "Smart Draft Generator",
      description: "Our AI Content Agents scan thousands of sources to generate human‑like copy and adapt it in real time. Simply tell the editor your topic, and it drafts a complete newsletter on your behalf, matching your tone and style."
    },
    {
      icon: Palette,
      title: "Brand Kit & Voice Control",
      description: "Upload your brand colours, fonts, and guidelines. The editor ensures every template and section aligns with your visual identity and writing style."
    },
    {
      icon: Users,
      title: "Personalization Suggestions",
      description: "The AI tailors content for different audience segments, using real‑time data and intent signals to recommend headlines and calls to action that boost engagement."
    },
    {
      icon: FileText,
      title: "Time‑Saving Templates",
      description: "Start with professionally designed templates; the editor's auto‑complete functionality fills in placeholders and adapts layouts to your content. With the AI doing 95% of the work, you can spend more time creating and less time formatting."
    }
  ];

  return (
    <section className="py-12 bg-gradient-dark-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 hover-scale">
            How the AI Email Editor Helps
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Transform your newsletter creation process with intelligent automation 
            that understands your brand and audience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="relative group p-6 rounded-2xl bg-card/10 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-glow animate-fade-in hover-scale"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/80 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
                
                {/* Background decoration */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;