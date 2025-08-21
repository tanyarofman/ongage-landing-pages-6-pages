import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-card rounded-2xl p-12 shadow-feature border border-border animate-fade-in">
          <Quote className="h-10 w-10 text-primary mx-auto mb-8" />
          
          <blockquote className="text-2xl font-medium text-foreground mb-8 leading-relaxed">
            "The functionality offered by Ongage—including advanced segmentation tools, 
            performance analytics and A/B testing—has been valuable as we push toward 
            even more personalized and dynamic offerings."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-14 h-14 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold">AD</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground text-lg">Alec Dobbie</div>
              <div className="text-muted-foreground">CEO & Co‑Founder, FanFinders</div>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6 italic">
            Though this testimonial refers to a media brand, the same segmentation and 
            testing capabilities enable educators to refine their email flows and improve student engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;