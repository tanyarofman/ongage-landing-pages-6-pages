import { Clock, Users, Zap, Target } from "lucide-react";

const Challenge = () => {
  const challenges = [
    {
      icon: Clock,
      title: "Time-Consuming",
      description: "Juggling multiple tools for drafting, designing, and sending"
    },
    {
      icon: Users,
      title: "Personal Touch",
      description: "Making every email feel personal and engaging"
    },
    {
      icon: Zap,
      title: "Formatting Hassles",
      description: "Wasting time on formatting instead of creating content"
    },
    {
      icon: Target,
      title: "Brand Consistency",
      description: "Worrying that content doesn't match your brand's voice"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            The Challenge
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Running a newsletter isn't just about writing; it's about making every email feel personal, 
            staying on schedule, and keeping your audience engaged. Many creators juggle multiple tools 
            for drafting, designing, and sending. It's easy to waste time on formatting or worry that 
            your content doesn't match your brand's voice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 text-center hover:shadow-feature transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-hero/20 rounded-full flex items-center justify-center">
                <challenge.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {challenge.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenge;