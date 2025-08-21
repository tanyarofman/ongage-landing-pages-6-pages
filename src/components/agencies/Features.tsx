import { Shield, Users, BarChart3, Settings, Zap, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Centralized Control",
      description: "View all clients' performance in one dashboard while keeping their data completely separate."
    },
    {
      icon: Shield,
      title: "Separate Reputations", 
      description: "Each list has its own sender domain and IP, protecting every brand's reputation from others."
    },
    {
      icon: Settings,
      title: "Role‑Based Access",
      description: "Assign permissions so team members only see the accounts they manage."
    },
    {
      icon: BarChart3,
      title: "Scalable Segmentation",
      description: "Use up to 150 fields per list to create micro‑segments and hyper‑personalized campaigns."
    },
    {
      icon: Zap,
      title: "Automation Workflows",
      description: "Build onboarding series, lifecycle nurtures and triggered messages using no‑code workflows."
    },
    {
      icon: Globe,
      title: "API & Integrations",
      description: "Plug into your CRM or pick from over 15 SMTP/ESP providers for optimal delivery."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Agencies Choose Ongage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for agencies, franchises, and marketplaces managing multiple brands and client databases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-feature border border-border/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-6">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-24 bg-primary/5 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            How Multi‑Client Management Works
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Separate Lists & Databases</h4>
              <p className="text-muted-foreground mb-6">
                Create dedicated databases for each client with their own sender domains, 
                IPs, and suppression rules. Unsubscribes from one brand don't affect others.
              </p>
              
              <h4 className="text-lg font-semibold text-foreground mb-4">Advanced Segmentation</h4>
              <p className="text-muted-foreground">
                Use up to 150 custom fields per list to capture every data point needed 
                for personalization and precise targeting.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Team Permissions</h4>
              <p className="text-muted-foreground mb-6">
                Define role‑based access ensuring account managers only see the brands 
                they're responsible for managing.
              </p>
              
              <h4 className="text-lg font-semibold text-foreground mb-4">Flexible Integrations</h4>
              <p className="text-muted-foreground">
                Connect to your CRM or data warehouse with our API, and choose the best 
                delivery provider per segment to improve deliverability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;