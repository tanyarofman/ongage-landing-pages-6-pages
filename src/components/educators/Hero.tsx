import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import educatorDashboard from "@/assets/educator-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="lg:pr-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Engage Students from Enrollment to 
              <span className="text-primary"> Graduation</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-muted-foreground">
              Automate Your Course Emails
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Keep students engaged from enrollment to graduation with automated drip campaigns 
              and personalized reminders. Focus on teaching—we handle the rest.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 h-14 font-semibold hover-scale"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="text-lg px-8 py-4 h-14 font-medium border-2 hover-scale"
              >
                Book a Demo
              </Button>
            </div>
          </div>
          
          {/* Right Column - Dashboard Preview (50% smaller) */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-border max-w-md mx-auto">
              <img 
                src={educatorDashboard} 
                alt="Ongage educator dashboard showing student progress and analytics"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;