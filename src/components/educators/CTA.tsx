import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-primary-glow/5 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Ready to automate your student communications and 
            <span className="text-primary"> boost course completion rates?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Start your free trial today and see how Ongage's drip campaigns, segmentation 
            and analytics can transform your online courses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-5 h-14 font-semibold shadow-feature hover:shadow-glow hover-scale"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-10 py-4 h-12 border-2 border-primary/20 text-foreground hover:bg-primary/5 hover-scale"
            >
              Book a Demo
            </Button>
          </div>
          
          <div className="mt-12 grid sm:grid-cols-3 gap-8 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="space-y-2 hover-scale">
              <div className="text-3xl font-bold text-primary">14-day</div>
              <div className="text-muted-foreground">Free trial</div>
            </div>
            <div className="space-y-2 hover-scale">
              <div className="text-3xl font-bold text-primary">95%</div>
              <div className="text-muted-foreground">Work automated</div>
            </div>
            <div className="space-y-2 hover-scale">
              <div className="text-3xl font-bold text-primary">50%</div>
              <div className="text-muted-foreground">Time saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;