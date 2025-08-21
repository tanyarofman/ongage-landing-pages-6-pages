import { BarChart3, Shield, Zap, Target, Plug, Monitor } from "lucide-react";

const BenefitsTable = () => {
  const benefits = [
    {
      icon: Monitor,
      feature: "Centralized dashboard",
      benefit: "View performance across all clients without logging into multiple tools."
    },
    {
      icon: Shield,
      feature: "Separate reputations",
      benefit: "Each brand's sender reputation remains intact with dedicated domains and IPs."
    },
    {
      icon: Zap,
      feature: "Effortless automation",
      benefit: "Build drip and transactional campaigns using drag‑and‑drop workflows."
    },
    {
      icon: Target,
      feature: "Hyper‑segmentation",
      benefit: "Create micro‑segments using behavioural, demographic and custom data fields."
    },
    {
      icon: Plug,
      feature: "Flexible integrations",
      benefit: "Plug into CRMs and choose the best delivery provider for each audience."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Benefits at a Glance
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you get with Ongage's Multi-Client Management
          </p>
        </div>

        <div className="bg-card rounded-2xl overflow-hidden shadow-feature border border-border/50">
          <div className="bg-primary/5 px-8 py-6 border-b border-border/50">
            <div className="grid grid-cols-2 gap-8">
              <h3 className="text-lg font-semibold text-foreground">What You Get</h3>
              <h3 className="text-lg font-semibold text-foreground">Why It Matters</h3>
            </div>
          </div>
          
          <div className="divide-y divide-border/50">
            {benefits.map((benefit, index) => (
              <div key={index} className="px-8 py-6 hover:bg-muted/30 transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <benefit.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{benefit.feature}</h4>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsTable;