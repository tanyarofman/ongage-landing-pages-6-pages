import { CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      benefit: "Faster content creation",
      meaning: "AI drafts your newsletters and social posts, saving hours every week."
    },
    {
      benefit: "On‑brand every time",
      meaning: "The editor applies your brand tone and design rules consistently, so your emails always look and sound professional."
    },
    {
      benefit: "Engagement‑boosting personalization",
      meaning: "AI tailors messages for each subscriber based on their preferences and behaviour."
    },
    {
      benefit: "Seamless publishing & automation",
      meaning: "Once your copy is ready, schedule drip campaigns or transactional emails using drag‑and‑drop workflows."
    },
    {
      benefit: "Improved deliverability",
      meaning: "Multi‑ESP routing ensures your emails reach the inbox, protecting your reputation and subscriber trust."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-hero/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Why Creators Love Ongage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real benefits that transform how you create and send newsletters.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-feature animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Header */}
            <div className="bg-gradient-to-r from-primary/10 to-hero/10 px-8 py-6 border-b border-border/30">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="font-semibold text-lg text-foreground">Benefit</div>
                <div className="font-semibold text-lg text-foreground">What it means</div>
              </div>
            </div>

            {/* Benefits */}
            <div className="divide-y divide-border/30">
              {benefits.map((item, index) => (
                <div 
                  key={index}
                  className="px-8 py-6 hover:bg-muted/20 transition-colors duration-200 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="grid md:grid-cols-2 gap-6 items-start">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="font-medium text-foreground">
                        {item.benefit}
                      </span>
                    </div>
                    <div className="text-muted-foreground leading-relaxed">
                      {item.meaning}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;