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
    <section className="py-16 bg-gradient-dark-feature">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 hover-scale">
            Why Creators Love Ongage
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real benefits that transform how you create and send newsletters.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-card/10 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-feature animate-fade-in hover-scale" style={{ animationDelay: '0.2s' }}>
            {/* Header */}
            <div className="bg-primary/20 px-8 py-6 border-b border-white/10">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="font-bold text-xl text-white">Benefit</div>
                <div className="font-bold text-xl text-white">What it means</div>
              </div>
            </div>

            {/* Benefits */}
            <div className="divide-y divide-white/10">
              {benefits.map((item, index) => (
                <div 
                  key={index}
                  className="px-8 py-6 hover:bg-card/10 transition-all duration-300 animate-fade-in hover-scale"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="grid md:grid-cols-2 gap-6 items-start">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-semibold text-white">
                        {item.benefit}
                      </span>
                    </div>
                    <div className="text-white/70 leading-relaxed">
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