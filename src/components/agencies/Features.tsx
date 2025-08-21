import { Shield, Users, BarChart3, Settings, Zap, Globe, Building2, Database, Lock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Centralized Control",
      description: "View all clients' performance in one dashboard while keeping their data completely separate.",
      pattern: "clients"
    },
    {
      icon: Shield,
      title: "Separate Reputations", 
      description: "Each list has its own sender domain and IP, protecting every brand's reputation from others.",
      pattern: "shield"
    },
    {
      icon: Settings,
      title: "Role‑Based Access",
      description: "Assign permissions so team members only see the accounts they manage.",
      pattern: "access"
    },
    {
      icon: BarChart3,
      title: "Scalable Segmentation",
      description: "Use up to 150 fields per list to create micro‑segments and hyper‑personalized campaigns.",
      pattern: "segments"
    },
    {
      icon: Zap,
      title: "Automation Workflows",
      description: "Build onboarding series, lifecycle nurtures and triggered messages using no‑code workflows.",
      pattern: "workflow"
    },
    {
      icon: Globe,
      title: "API & Integrations",
      description: "Plug into your CRM or pick from over 15 SMTP/ESP providers for optimal delivery.",
      pattern: "integrations"
    }
  ];

  const PatternBackground = ({ pattern }: { pattern: string }) => {
    switch (pattern) {
      case "clients":
        return (
          <div className="absolute top-4 right-4 opacity-5">
            <div className="flex gap-1">
              <Building2 className="h-4 w-4" />
              <Building2 className="h-4 w-4" />
            </div>
            <div className="flex gap-1 mt-1">
              <Building2 className="h-4 w-4" />
              <Building2 className="h-4 w-4" />
            </div>
          </div>
        );
      case "shield":
        return (
          <div className="absolute top-4 right-4 opacity-5">
            <div className="grid grid-cols-2 gap-1">
              <Lock className="h-3 w-3" />
              <Lock className="h-3 w-3" />
              <Lock className="h-3 w-3" />
              <Lock className="h-3 w-3" />
            </div>
          </div>
        );
      case "segments":
        return (
          <div className="absolute top-4 right-4 opacity-5">
            <div className="space-y-1">
              <div className="h-1 w-8 bg-current rounded"></div>
              <div className="h-1 w-6 bg-current rounded"></div>
              <div className="h-1 w-10 bg-current rounded"></div>
              <div className="h-1 w-4 bg-current rounded"></div>
            </div>
          </div>
        );
      default:
        return (
          <div className="absolute top-4 right-4 opacity-5">
            <div className="grid grid-cols-3 gap-0.5">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-current rounded-full"></div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary/20 rounded-full"></div>
        <div className="absolute bottom-40 right-16 w-24 h-24 border border-primary-glow/20 rounded-square rotate-45"></div>
        <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-primary/10 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Agencies Choose Ongage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for agencies, franchises, and marketplaces managing multiple brands and client databases.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`relative bg-card rounded-xl p-8 shadow-feature border border-border/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
              <PatternBackground pattern={feature.pattern} />
              
              <div className="relative z-10">
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
            </div>
          ))}
        </div>

        {/* Visual Multi-Client Management Section */}
        <div className="mt-24 relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-to-br from-primary/5 to-primary-glow/5 rounded-3xl p-12 relative overflow-hidden">
            {/* Background Visualization */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8">
                <div className="flex items-center gap-2">
                  <Database className="h-6 w-6" />
                  <div className="space-y-1">
                    <div className="h-2 w-16 bg-current rounded"></div>
                    <div className="h-1 w-12 bg-current rounded"></div>
                  </div>
                </div>
              </div>
              <div className="absolute top-8 right-8">
                <div className="flex items-center gap-2">
                  <Database className="h-6 w-6" />
                  <div className="space-y-1">
                    <div className="h-2 w-16 bg-current rounded"></div>
                    <div className="h-1 w-12 bg-current rounded"></div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <BarChart3 className="h-12 w-12" />
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
                How Multi‑Client Management Works
              </h3>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="bg-white/50 dark:bg-black/20 rounded-xl p-6 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '1s' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Database className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">Separate Lists & Databases</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Create dedicated databases for each client with their own sender domains, 
                      IPs, and suppression rules. Unsubscribes from one brand don't affect others.
                    </p>
                  </div>
                  
                  <div className="bg-white/50 dark:bg-black/20 rounded-xl p-6 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '1.2s' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <BarChart3 className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">Advanced Segmentation</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Use up to 150 custom fields per list to capture every data point needed 
                      for personalization and precise targeting.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-8">
                  <div className="bg-white/50 dark:bg-black/20 rounded-xl p-6 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '1.4s' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">Team Permissions</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Define role‑based access ensuring account managers only see the brands 
                      they're responsible for managing.
                    </p>
                  </div>
                  
                  <div className="bg-white/50 dark:bg-black/20 rounded-xl p-6 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '1.6s' }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">Flexible Integrations</h4>
                    </div>
                    <p className="text-muted-foreground">
                      Connect to your CRM or data warehouse with our API, and choose the best 
                      delivery provider per segment to improve deliverability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;