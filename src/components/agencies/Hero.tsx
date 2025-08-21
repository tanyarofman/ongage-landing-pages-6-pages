import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Building2, Users, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero/20 via-transparent to-primary-glow/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-hero/10 rounded-full blur-3xl"></div>
      
      {/* Floating Dashboard Visual */}
      <div className="absolute top-24 right-20 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 shadow-lg">
          <div className="flex items-center gap-2 mb-3">
            <Building2 className="h-4 w-4 text-hero-foreground/70" />
            <div className="h-2 bg-hero-foreground/30 rounded w-16"></div>
          </div>
          <div className="space-y-2">
            <div className="h-1.5 bg-primary-glow/60 rounded w-20"></div>
            <div className="h-1.5 bg-hero-foreground/40 rounded w-14"></div>
            <div className="h-1.5 bg-hero-foreground/40 rounded w-18"></div>
          </div>
        </div>
      </div>

      {/* Client Cards Visual */}
      <div className="absolute bottom-32 left-16 hidden lg:block">
        <div className="space-y-3">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg flex items-center gap-2">
            <Users className="h-3 w-3 text-hero-foreground/70" />
            <div className="h-1.5 bg-hero-foreground/30 rounded w-12"></div>
            <BarChart3 className="h-3 w-3 text-primary-glow/70" />
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg flex items-center gap-2">
            <Users className="h-3 w-3 text-hero-foreground/70" />
            <div className="h-1.5 bg-hero-foreground/30 rounded w-10"></div>
            <BarChart3 className="h-3 w-3 text-primary-glow/70" />
          </div>
        </div>
      </div>

      {/* Geometric Pattern */}
      <div className="absolute top-1/4 left-1/4 opacity-10">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className={`w-3 h-3 rounded-full ${i % 3 === 0 ? 'bg-primary-glow' : 'bg-hero-foreground'}`}></div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-hero-foreground mb-6 leading-tight animate-fade-in">
          One Dashboard for Every Client —{" "}
          <span className="bg-gradient-to-r from-hero-foreground via-primary-glow to-hero-foreground bg-clip-text text-transparent">
            Multi‑Client Management
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-hero-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in [animation-delay:0.2s]">
          Stop juggling multiple platforms. Manage all your clients' email marketing from one dashboard 
          while keeping their data separate, secure, and compliant.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in [animation-delay:0.4s]">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-14 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Play className="mr-2 h-5 w-5" />
            Book a Demo
          </Button>
        </div>
        
        <div className="mt-16 text-hero-foreground/60 text-sm animate-fade-in [animation-delay:0.6s]">
          Start your 14-day free trial • No credit card required • Cancel anytime
        </div>
      </div>
    </section>
  );
};

export default Hero;