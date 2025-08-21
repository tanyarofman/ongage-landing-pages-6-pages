import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 to-primary-glow/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6 animate-fade-in">
          Ready to Streamline Your Agency's Email Marketing?
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Stop juggling multiple platforms and complicated workarounds. Onboard new clients quickly, 
          keep their data separate and secure, and deliver personalized journeys at scale.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button variant="default" size="lg" className="text-lg px-10 py-4 h-14">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-10 py-4 h-14">
            Book a Demo
          </Button>
        </div>
        
        <div className="mt-8 text-muted-foreground text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
          14-day free trial • No credit card required • Cancel anytime
        </div>
      </div>
    </section>
  );
};

export default CTA;