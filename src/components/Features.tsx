import { Bot, Workflow, Users, BarChart3, Globe, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "Produce more content without burning out",
      description: "AI content agents track publications, craft newsletters, and maintain your tone of voice while you focus on creating.",
      highlights: [
        "AI agents that track thousands of sources",
        "Automated publishing workflows", 
        "Built-in personalization for every reader"
      ]
    },
    {
      icon: Users,
      title: "Grow your audience and revenue",
      description: "Advanced segmentation with 150+ data points and real-time optimization to reach readers when they're most engaged.",
      highlights: [
        "Advanced segmentation up to 150 data points",
        "Data-driven send-time optimization",
        "Multi-ESP routing for better deliverability"
      ]
    },
    {
      icon: Workflow,
      title: "Stop juggling tools and platforms", 
      description: "Drag-and-drop automation, single dashboard for everything, and seamless integrations with your existing tools.",
      highlights: [
        "Visual automation builder - no coding required",
        "Single dashboard for templates, tests & reporting",
        "API & integrations with CRM, CMS & more"
      ]
    },
    {
      icon: Zap,
      title: "Built for small teams and big ambitions",
      description: "Cost-effective pricing that scales with you. No dev-ops required, everything designed for lean teams.",
      highlights: [
        "Token-based pricing - pay for what you use",
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
            <span className="text-hero">Ongage</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-card p-8 rounded-2xl shadow-feature hover:shadow-glow transition-all duration-300 border border-border/50">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-hero/10 rounded-xl mr-4">
                  <feature.icon className="h-8 w-8 text-hero" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                {feature.description}
              </p>
              
              <ul className="space-y-3">
                {feature.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-hero rounded-full mt-2 mr-3 flex-shrink-0"></div>
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