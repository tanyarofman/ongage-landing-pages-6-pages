import { Shield, Users, Zap, Target } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
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
      icon: Target,
      title: "Segment like a pro",
      description: "Leverage up to 150 custom fields per list and advanced segmentation to send laser‑targeted messages."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Casual background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-12 left-12 text-6xl">✨</div>
        <div className="absolute top-32 right-16 text-4xl">🚀</div>
        <div className="absolute bottom-24 left-20 text-5xl">💼</div>
        <div className="absolute bottom-12 right-12 text-3xl">🎉</div>
        <div className="absolute top-1/2 left-1/4 text-2xl">⭐</div>
        <div className="absolute top-1/3 right-1/3 text-3xl">💡</div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Ongage Is the Right Fit for Agencies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to manage multiple brands professionally and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="relative bg-card rounded-2xl p-8 shadow-feature border border-border/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Subtle pattern */}
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5">
                <div className="grid grid-cols-4 gap-1 p-2">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-current rounded-full"></div>
                  ))}
                </div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Fun stats section */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-3xl p-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-muted-foreground">Custom fields per list</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-muted-foreground">SMTP/ESP integrations</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">∞</div>
              <div className="text-muted-foreground">Client scalability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;