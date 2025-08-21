import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import educatorDashboard from "@/assets/educator-dashboard.jpg";

const Hero = () => {
  return (
    <div className="bg-background">
      {/* Announcement Banner */}
      <div className="bg-yellow-400 text-black text-center py-2 px-4">
        <span className="text-sm font-medium">
          Just launched: Advanced Student Analytics →
        </span>
      </div>
      
      {/* Main Hero Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Copy */}
            <div className="lg:pr-8">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Engage Students from Enrollment to 
                <span className="text-primary"> Graduation</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-foreground">
                Automate Your Course Emails
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                You create courses. We ensure students stay engaged from sign‑up through graduation. 
                Ongage's AI‑powered email marketing platform lets educators and bootcamps build drip 
                campaigns, deliver personalized reminders and collect feedback with minimal effort. 
                Focus on teaching; we'll handle the rest.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 h-14 font-semibold"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg" 
                  className="text-lg px-8 py-4 h-14 font-medium border-2"
                >
                  Book a Demo
                </Button>
              </div>
            </div>
            
            {/* Right Column - Dashboard Preview */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
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
    </div>
  );
};

export default Hero;