import { Bot, Palette, Users, FileText } from "lucide-react";
import aiWorkflow from "@/assets/ai-workflow.jpg";

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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="relative group p-8 rounded-3xl bg-card/10 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-white/80 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                
                {/* Background decoration */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          
          {/* AI Workflow Visualization */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-hero/20 blur-3xl rounded-3xl"></div>
            <img 
              src={aiWorkflow} 
              alt="AI Email Creation Workflow" 
              className="relative rounded-2xl shadow-2xl border border-white/10 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;