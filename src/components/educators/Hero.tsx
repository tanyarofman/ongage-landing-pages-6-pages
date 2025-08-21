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
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight max-w-4xl mx-auto">
              Turn your students into 
              <br />
              <span className="text-foreground">success stories.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Ongage is a powerful platform for educators to create, manage, and grow successful 
              online courses. It comes with modern tools to engage students, track progress, 
              and automate communications throughout their learning journey.
            </p>
            
            <Button 
              size="lg" 
              className="bg-foreground text-background hover:bg-foreground/90 text-lg px-8 py-4 h-14 font-medium"
            >
              Try Ongage completely free for 14 days
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Dashboard Preview */}
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
      </section>
    </div>
  );
};

export default Hero;