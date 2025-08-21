import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Zap } from "lucide-react";
import aiDashboard from "@/assets/ai-dashboard.jpg";

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

      <div className="relative container mx-auto px-6 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content Section */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-sm font-medium text-primary border border-primary/20 hover-scale">
                <Zap className="h-4 w-4" />
                AI-Powered Email Creation Platform
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-white">
                Powerful Newsletter Creation
                <br />
                <span className="text-accent">That Drives</span>
                {" "}
                <span className="text-accent">Results</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
                Streamline newsletter operations, improve engagement, and reach your eureka moment faster with AI-powered email creation.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <Button variant="hero" size="lg" className="text-lg px-10 py-5 h-14 text-white bg-primary hover:bg-primary/90 shadow-glow hover-scale">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-10 py-4 h-12 border-2 border-white/20 text-white hover:bg-white/10 hover-scale">
                  Book a Demo
                </Button>
              </div>
            </div>

            {/* Dashboard preview */}
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-hero/20 blur-3xl rounded-3xl"></div>
                <img 
                  src={aiDashboard} 
                  alt="AI Newsletter Dashboard Interface" 
                  className="relative rounded-2xl shadow-2xl border border-white/10 hover-scale w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;