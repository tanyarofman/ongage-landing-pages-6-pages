import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero/20 via-transparent to-primary-glow/10"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-hero/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-hero-foreground mb-6 leading-tight">
          Power Your Newsletter Growth —{" "}
          <span className="bg-gradient-to-r from-hero-foreground via-primary-glow to-hero-foreground bg-clip-text text-transparent">
            Automate and Personalize
          </span>{" "}
          Every Send
        </h1>
        
        <p className="text-xl md:text-2xl text-hero-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed">
          Whether you run a growing Substack newsletter, a podcast mailing list, or a digital magazine, 
          Ongage lets you focus on creating compelling stories while our platform handles the rest. 
          Our email marketing platform combines AI‑assisted content creation, drag‑and‑drop automation 
          workflows and best‑in‑class deliverability so you can build deeper relationships with your 
          readers without hiring a tech team.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-14">
            Start Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="heroSecondary" size="lg" className="text-lg px-8 py-4 h-14">
            <Play className="mr-2 h-5 w-5" />
            Book a Demo
          </Button>
        </div>
        
        <div className="mt-16 text-hero-foreground/60 text-sm">
          Start your 14-day free trial • No credit card required • Cancel anytime
        </div>
      </div>
    </section>
  );
};

export default Hero;