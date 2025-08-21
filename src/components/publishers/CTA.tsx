import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-dark-hero relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-hero/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight hover-scale">
            Ready to grow your newsletter 
            <br />
            <span className="text-accent">without limits?</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Start your free trial today and let AI handle the heavy lifting, or contact us to explore 
            how the AI Email Editor can transform your content workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" className="text-lg px-12 py-5 h-14 bg-primary hover:bg-primary/90 text-white shadow-glow hover:shadow-xl hover-scale">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-4 h-12 border-2 border-white/20 text-white hover:bg-white/10 hover-scale">
              Book a Demo
            </Button>
          </div>
          
          <div className="mt-12 grid sm:grid-cols-3 gap-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="space-y-2 hover-scale">
              <div className="text-3xl lg:text-4xl font-bold text-accent">14-day</div>
              <div className="text-white/70">Free trial</div>
            </div>
            <div className="space-y-2 hover-scale">
              <div className="text-3xl lg:text-4xl font-bold text-accent">95%</div>
              <div className="text-white/70">Work automated</div>
            </div>
            <div className="space-y-2 hover-scale">
              <div className="text-3xl lg:text-4xl font-bold text-accent">50%</div>
              <div className="text-white/70">Time saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;