import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Geometric background elements - Labguru style */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-hero/15 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-accent/10 rounded-full blur-xl"></div>
        
        {/* Purple geometric shapes */}
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-primary/30 rounded-3xl rotate-45"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-hero/25 rounded-full"></div>
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/20 rounded-full text-sm font-medium text-primary border border-primary/20">
              <Zap className="h-4 w-4" />
              AI-Powered Email Creation Platform
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              Powerful Newsletter Creation
              <br />
              <span className="text-accent">That Drives</span>
              {" "}
              <span className="text-accent">Results</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto">
              Streamline newsletter operations, improve engagement, and reach your eureka moment faster with AI-powered email creation.
            </p>

            <div className="pt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="lg" className="text-lg px-12 py-6 h-16 text-white bg-primary hover:bg-primary/90 shadow-glow">
                Book a Demo
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Company logos section - Labguru style */}
          <div className="mt-24 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center opacity-60">
              <div className="bg-white/10 rounded-lg p-6 h-16 flex items-center justify-center">
                <Mail className="h-8 w-8 text-white/60" />
              </div>
              <div className="bg-white/10 rounded-lg p-6 h-16 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white/60" />
              </div>
              <div className="bg-white/10 rounded-lg p-6 h-16 flex items-center justify-center">
                <Mail className="h-8 w-8 text-white/60" />
              </div>
              <div className="bg-white/10 rounded-lg p-6 h-16 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white/60" />
              </div>
              <div className="bg-white/10 rounded-lg p-6 h-16 flex items-center justify-center">
                <Mail className="h-8 w-8 text-white/60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;