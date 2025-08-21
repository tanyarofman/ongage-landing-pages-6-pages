import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Ready to boost your 
          <br />
          course completion rates?
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Join thousands of educators using Ongage to engage students, automate communications, 
          and build successful online learning businesses.
        </p>
        
        <Button 
          size="lg" 
          className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-4 h-14 font-medium"
        >
          Try Ongage completely free for 14 days
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        
        <div className="mt-8 text-muted-foreground text-sm">
          No credit card required • Cancel anytime
        </div>
      </div>
    </section>
  );
};

export default CTA;