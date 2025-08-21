import { Quote, Star } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-24 bg-gradient-dark-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
            Real Results
          </h2>
          <p className="text-xl text-white/80">
            See how creators are transforming their newsletter workflow
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="relative bg-card/10 backdrop-blur-sm border border-white/10 rounded-3xl p-12 lg:p-16 shadow-feature">
            {/* Quote icon */}
            <div className="absolute -top-6 left-12">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-glow">
                <Quote className="h-6 w-6 text-white" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-8 justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>

            {/* Testimonial text */}
            <blockquote className="text-2xl lg:text-3xl font-medium text-white leading-relaxed text-center mb-10">
              "Since switching to Ongage's AI Email Editor, we cut our newsletter production time in half. 
              The AI drafts in our voice, suggests subject lines that improve open rates, and the 
              drag‑and‑drop workflows make scheduling a breeze."
            </blockquote>

            {/* Author */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/30 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">C</span>
              </div>
              <div className="font-bold text-xl text-white">Casey</div>
              <div className="text-white/70 text-lg">Creator of a popular tech newsletter</div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-6 right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-6 left-6 w-32 h-32 bg-hero/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;