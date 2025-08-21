import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-hero/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-hero/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
                <Zap className="h-4 w-4" />
                AI-Powered Email Creation
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Create Stunning
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-hero bg-clip-text text-transparent">
                  Newsletters at Speed
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Let AI Do the Heavy Lifting. With Ongage's AI Email Editor, bloggers and digital creators can draft on‑brand emails, personalize each send, and automate campaigns—no design or coding skills required.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-14">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-14 border-2">
                Contact Us
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <span>✓ 14-day free trial</span>
              <span>✓ No credit card required</span>
              <span>✓ Cancel anytime</span>
            </div>
          </div>

          {/* Right content - Interactive visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-feature">
              {/* Email editor mockup */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-border/30">
                  <Mail className="h-6 w-6 text-primary" />
                  <span className="font-semibold">AI Email Editor</span>
                  <div className="ml-auto px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">Live</div>
                </div>
                
                <div className="space-y-3">
                  <div className="h-4 bg-gradient-to-r from-primary/30 to-transparent rounded"></div>
                  <div className="h-4 bg-gradient-to-r from-primary/20 to-transparent rounded w-3/4"></div>
                  <div className="h-4 bg-gradient-to-r from-primary/25 to-transparent rounded w-5/6"></div>
                </div>

                <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">AI Suggestion</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    "Your audience loves actionable tips. Try: '3 Quick Ways to...' for higher open rates."
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div className="h-8 bg-secondary/30 rounded"></div>
                  <div className="h-8 bg-hero/20 rounded"></div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-glow animate-bounce">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-hero rounded-full shadow-soft animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;