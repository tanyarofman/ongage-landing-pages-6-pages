import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-24 bg-hero/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-card rounded-3xl p-12 shadow-feature border border-border/50">
          <Quote className="h-12 w-12 text-hero mx-auto mb-8" />
          
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
            "Ongage's advanced segmentation tools, performance analytics and A/B testing 
            have been invaluable as we push toward an even more personalized and dynamic offering."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
              <span className="text-hero-foreground font-bold text-lg">AD</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-lg text-foreground">Alec Dobbie</div>
              <div className="text-muted-foreground">CEO & Co‑Founder @ FanFinders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;