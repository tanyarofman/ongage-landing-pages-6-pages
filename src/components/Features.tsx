import { Bot, Workflow, Users, BarChart3, Globe, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Content Creation",
      highlights: [
        "AI agents that track thousands of sources",
        "Automated publishing workflows", 
        "Built-in personalization for every reader"
      ]
    },
    {
      icon: Users,
      title: "Audience Growth Tools",
      highlights: [
        "Advanced segmentation up to 150 data points",
        "Data-driven send-time optimization",
        "Advanced email validation and deliverability"
      ]
    },
    {
      icon: Workflow,
      title: "Unified Platform", 
      highlights: [
        "Visual automation builder - no coding required",
        "Single dashboard for insights and reporting",
        "API & integrations with CRM, CMS & more"
      ]
    },
    {
      icon: Zap,
      title: "Built for Scale",
      highlights: [
        "Contact-based pricing that scales with you",
        "Self-service dashboards for lean teams", 
        "Manage multiple brands under one login"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-feature">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why digital publishers choose{" "}
            <span className="text-primary">Ongage</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-card p-8 rounded-2xl shadow-feature hover:shadow-glow transition-all duration-300 border border-border/50">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-xl mr-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {feature.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;