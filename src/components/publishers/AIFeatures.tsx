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
    <section className="py-16 bg-gradient-dark-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            How the AI Email Editor Helps
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Transform your newsletter creation process with intelligent automation 
            that understands your brand and audience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-card/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-xl transition-all duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;