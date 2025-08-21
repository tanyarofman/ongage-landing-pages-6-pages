import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-hero/20 via-transparent to-primary-glow/10"></div>
      <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-hero/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center justify-center p-2 bg-hero-foreground/10 rounded-full mb-6">
          <Sparkles className="h-6 w-6 text-hero-foreground mr-2" />
          <span className="text-hero-foreground font-medium">Ready to boost course completion rates?</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-hero-foreground mb-6 leading-tight">
          Automate Student{" "}
          <span className="bg-gradient-to-r from-hero-foreground via-primary-glow to-hero-foreground bg-clip-text text-transparent">
            Communications
          </span>{" "}
          Today
        </h2>
        
        <p className="text-xl text-hero-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Start your free trial and see how Ongage's drip campaigns, segmentation 
          and analytics can transform your online courses.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-10 py-4 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-10 py-4 h-14 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Book a Demo
          </Button>
        </div>
        
        <div className="mt-12 text-hero-foreground/60 text-sm">
          14-day free trial • No credit card required • Cancel anytime • Join thousands of educators
        </div>
      </div>
    </section>
  );
};

export default CTA;