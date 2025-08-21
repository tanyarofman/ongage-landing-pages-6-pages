import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-hero/5 to-primary-glow/10 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-hero/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 rounded-full text-primary font-medium mb-8">
            <Zap className="h-5 w-5" />
            Ready to Transform Your Newsletter?
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Ready to grow your newsletter 
            <span className="bg-gradient-to-r from-primary to-hero bg-clip-text text-transparent">
              {" "}without burnout?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Start your free trial today and let AI handle the heavy lifting, or contact us to explore 
            how the AI Email Editor can transform your content workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" className="text-lg px-10 py-4 h-14 shadow-glow hover:shadow-xl">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-4 h-14 border-2 hover:bg-primary/5">
              Contact Us
            </Button>
          </div>
          
          <div className="mt-12 grid sm:grid-cols-3 gap-8 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">14-day</div>
              <div className="text-sm text-muted-foreground">Free trial</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-hero">95%</div>
              <div className="text-sm text-muted-foreground">Work automated</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50%</div>
              <div className="text-sm text-muted-foreground">Time saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;