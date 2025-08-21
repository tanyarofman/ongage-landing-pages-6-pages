import { Shield, Users, Zap, BarChart3, Globe, Database } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Database,
      title: "Keep client data siloed and safe",
      description: "Spin up multiple lists under one account and assign unique domains, reporting, and permissions. No more cross‑contamination or accidental mix‑ups."
    },
    {
      icon: Users,
      title: "Assign roles with confidence",
      description: "Role‑based access ensures each team member only sees the brands they manage."
    },
    {
      icon: Zap,
      title: "Automate without coding",
      description: "Use visual workflows to build drip campaigns, onboarding series and transactional triggers. Free up your team to focus on creative strategy."
    },
    {
      icon: BarChart3,
      title: "Segment like a pro",
      description: "Leverage up to 150 custom fields per list and advanced segmentation to send laser‑targeted messages."
    },
    {
      icon: Globe,
      title: "Connect any ESP or SMTP",
      description: "Route emails through multiple vendors to optimize deliverability and costs."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Ongage Is the Right Fit for Agencies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage multiple brands professionally and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="bg-card rounded-xl p-8 shadow-feature border border-border/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-6">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {benefits.slice(3).map((benefit, index) => (
            <div key={index + 3} className="bg-card rounded-xl p-8 shadow-feature border border-border/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
              <div className="p-3 bg-primary/10 rounded-xl w-fit mb-6">
                <benefit.icon className="h-6 w-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;