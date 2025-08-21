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
    <section className="py-16 bg-gradient-feature">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            The Challenge
          </h2>
          <p className="text-xl text-white/80 leading-relaxed">
            Running a newsletter isn't just about writing; it's about making every email feel personal, 
            staying on schedule, and keeping your audience engaged. Many creators waste time on formatting 
            or worry that their content doesn't match their brand's voice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-card/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-card/20 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-primary/30 rounded-2xl flex items-center justify-center">
                <challenge.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">
                {challenge.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
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