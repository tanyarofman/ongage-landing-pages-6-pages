import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <div className="bg-card rounded-xl p-8 shadow-feature border border-border/50">
          <Quote className="h-8 w-8 text-primary mx-auto mb-6" />
          
          <blockquote className="text-xl font-medium text-foreground mb-6 leading-relaxed">
            "Ongage's advanced segmentation tools, performance analytics and A/B testing 
            have been invaluable as we push toward an even more personalized and dynamic offering."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AD</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Alec Dobbie</div>
              <div className="text-muted-foreground text-sm">CEO & Co‑Founder @ FanFinders</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;