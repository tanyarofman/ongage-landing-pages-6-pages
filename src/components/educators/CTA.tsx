import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Ready to automate your student communications and 
          <span className="text-primary">boost course completion rates?</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Start your free trial today and see how Ongage's drip campaigns, segmentation and 
          analytics can transform your online courses.
        </p>
        
        <Button 
          size="lg" 
          className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 h-14 font-semibold"
        >
          Start Free Trial
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        
        <div className="mt-8 text-muted-foreground text-sm">
          Free trial • No credit card required • Cancel anytime
        </div>
      </div>
    </section>
  );
};

export default CTA;