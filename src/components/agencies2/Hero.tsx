import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Building2, Users, BarChart3, Database, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero/20 via-transparent to-primary-glow/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-hero/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="relative z-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-hero-foreground mb-6 leading-tight">
            One Platform, Multiple Brands —{" "}
            <span className="bg-gradient-to-r from-hero-foreground via-primary-glow to-hero-foreground bg-clip-text text-transparent">
              One Login, Endless Clients
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-hero-foreground/80 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Manage every brand's email marketing from a single, intuitive platform. Keep clients' data separate, 
            streamline workflows, and scale your agency without adding complexity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-14 border-2 border-hero-foreground/30 bg-white/10 text-hero-foreground hover:bg-white/20 hover:text-hero-foreground backdrop-blur-sm">
              <Play className="mr-2 h-5 w-5" />
              Book a Demo
            </Button>
          </div>
          
          <div className="text-hero-foreground/60 text-sm animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Start your 14-day free trial • No credit card required • Cancel anytime
          </div>
        </div>

        {/* Right Visual Representation */}
        <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="relative">
            {/* Main Dashboard */}
            <div className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary-glow/30 rounded-lg flex items-center justify-center">
                    <Building2 className="h-4 w-4 text-hero-foreground" />
                  </div>
                  <h3 className="text-hero-foreground font-semibold">Multi-Client Dashboard</h3>
                </div>
                <div className="w-3 h-3 bg-primary-glow/60 rounded-full animate-pulse"></div>
              </div>
              
              {/* Client Cards */}
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Users className="h-4 w-4 text-hero-foreground/70" />
                      <div>
                        <div className="h-2 bg-hero-foreground/40 rounded w-16 mb-1"></div>
                        <div className="h-1.5 bg-hero-foreground/30 rounded w-12"></div>
                      </div>
                    </div>
                    <BarChart3 className="h-4 w-4 text-primary-glow/70" />
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Database className="h-4 w-4 text-hero-foreground/70" />
                      <div>
                        <div className="h-2 bg-hero-foreground/40 rounded w-20 mb-1"></div>
                        <div className="h-1.5 bg-hero-foreground/30 rounded w-14"></div>
                      </div>
                    </div>
                    <Globe className="h-4 w-4 text-primary-glow/70" />
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Building2 className="h-4 w-4 text-hero-foreground/70" />
                      <div>
                        <div className="h-2 bg-hero-foreground/40 rounded w-18 mb-1"></div>
                        <div className="h-1.5 bg-hero-foreground/30 rounded w-10"></div>
                      </div>
                    </div>
                    <BarChart3 className="h-4 w-4 text-primary-glow/70" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary/20 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <div className="text-xs text-hero-foreground/80 mb-1">Active Clients</div>
              <div className="text-2xl font-bold text-hero-foreground">12</div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-primary-glow/20 backdrop-blur-sm rounded-xl p-3 border border-white/20">
              <div className="text-xs text-hero-foreground/80 mb-1">Total Campaigns</div>
              <div className="text-2xl font-bold text-hero-foreground">847</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;