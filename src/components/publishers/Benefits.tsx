import { CheckCircle } from "lucide-react";
import analyticsImage from "@/assets/analytics-dashboard.jpg";
import templatesImage from "@/assets/templates-library.jpg";

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
    <section className="py-24 bg-gradient-dark-feature">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Why Creators Love Ongage
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Real benefits that transform how you create and send newsletters.
          </p>
        </div>

        <div className="space-y-24">
          {/* Benefits Table */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-card/10 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden shadow-feature animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {/* Header */}
              <div className="bg-primary/20 px-10 py-8 border-b border-white/10">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="font-bold text-2xl text-white">Benefit</div>
                  <div className="font-bold text-2xl text-white">What it means</div>
                </div>
              </div>

              {/* Benefits */}
              <div className="divide-y divide-white/10">
                {benefits.map((item, index) => (
                  <div 
                    key={index}
                    className="px-10 py-8 hover:bg-card/10 transition-colors duration-200 animate-fade-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div className="grid md:grid-cols-2 gap-8 items-start">
                      <div className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 text-accent mt-0.5 flex-shrink-0" />
                        <span className="font-semibold text-white text-lg">
                          {item.benefit}
                        </span>
                      </div>
                      <div className="text-white/70 leading-relaxed text-lg">
                        {item.meaning}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Visual Examples */}
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-hero/20 blur-3xl rounded-3xl"></div>
              <img 
                src={analyticsImage} 
                alt="Newsletter Analytics Dashboard" 
                className="relative rounded-2xl shadow-2xl border border-white/10 w-full"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-white text-sm font-medium">Real-time Performance Analytics</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-hero/20 to-primary/20 blur-3xl rounded-3xl"></div>
              <img 
                src={templatesImage} 
                alt="AI Email Templates Library" 
                className="relative rounded-2xl shadow-2xl border border-white/10 w-full"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-white text-sm font-medium">Smart Template Suggestions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;