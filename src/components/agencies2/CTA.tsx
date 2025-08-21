import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 to-primary-glow/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6">
          Ready to Streamline Your Agency's Email Marketing?
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Are you ready to streamline your agency's email marketing and scale without limits? 
          Transform your workflow and manage all clients from one powerful platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="default" size="lg" className="text-lg px-10 py-4 h-14">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-10 py-4 h-14">
            Book a Demo
          </Button>
        </div>
        
        <div className="mt-8 text-muted-foreground text-sm">
          14-day free trial • No credit card required • Cancel anytime
        </div>
      </div>
    </section>
  );
};

export default CTA;