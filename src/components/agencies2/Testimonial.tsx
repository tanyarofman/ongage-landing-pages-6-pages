import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-card rounded-xl p-8 shadow-feature border border-border/50">
          <Quote className="h-8 w-8 text-primary mx-auto mb-6" />
          
          <blockquote className="text-xl font-medium text-foreground mb-6 leading-relaxed">
            "Where do I begin? The integration with our backend delivery is seamless, 
            and the segmentation is the best I've seen. We've been with Ongage for four years 
            and still haven't explored everything."
          </blockquote>
          
          <div className="flex items-center justify-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">HG</span>
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">Harold Gross</div>
              <div className="text-muted-foreground text-sm">Owner @ CreateYourCruise</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;