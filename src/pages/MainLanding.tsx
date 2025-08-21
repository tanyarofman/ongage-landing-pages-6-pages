import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const MainLanding = () => {
  const audiences = [
    {
      icon: Users,
      title: "Digital Publishers & Newsletter Writers",
      description: "Power your newsletter growth with AI-assisted content creation, advanced segmentation, and automation workflows.",
      highlights: [
        "AI content agents that track thousands of sources",
        "Advanced segmentation up to 150 data points",
        "Drag-and-drop automation workflows"
      ],
      link: "/publishers",
      gradient: "from-primary/20 to-primary-glow/10"
    },
    {
      icon: BookOpen,
      title: "Online Courses & Educators",
      description: "Engage students from enrollment to graduation with automated course emails, drip campaigns, and progress tracking.",
      highlights: [
        "Automated drip campaigns for course progression",
        "Student segmentation by cohort and progress",
        "Easy integration with your LMS"
      ],
      link: "/educators", 
      gradient: "from-hero/20 to-primary/10"
    },
    {
      icon: Building2,
      title: "Agencies & Multi-Client Management",
      description: "Manage multiple clients from one dashboard with separate reputations, role-based access, and centralized control.",
      highlights: [
        "Separate lists and domains for each client",
        "Role-based permissions and access control",
        "Centralized reporting across all accounts"
      ],
      link: "/agencies",
      gradient: "from-primary-glow/20 to-hero/10"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-hero/20 via-transparent to-primary-glow/10"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-hero/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-hero-foreground mb-6 leading-tight">
            Email Marketing That{" "}
            <span className="bg-gradient-to-r from-hero-foreground via-primary-glow to-hero-foreground bg-clip-text text-transparent">
              Actually Works
            </span>{" "}
            for Your Business
          </h1>
          
          <p className="text-xl md:text-2xl text-hero-foreground/80 mb-16 max-w-4xl mx-auto leading-relaxed">
            Whether you're a publisher, educator, or agency, Ongage's AI-powered platform 
            automates your email marketing so you can focus on what matters most.
          </p>

          <div className="text-lg text-hero-foreground/70 mb-12">
            Choose your path to get started:
          </div>
        </div>
      </section>

      {/* Audience Selection */}
      <section className="py-24 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {audiences.map((audience, index) => (
              <Link key={index} to={audience.link} className="group">
                <div className={`bg-gradient-to-br ${audience.gradient} backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full hover:shadow-glow transition-all duration-300 hover:-translate-y-1`}>
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-white/10 rounded-xl mr-4">
                      <audience.icon className="h-8 w-8 text-hero-foreground" />
                    </div>
                    <h2 className="text-2xl font-bold text-hero-foreground group-hover:text-primary-glow transition-colors">
                      {audience.title}
                    </h2>
                  </div>
                  
                  <p className="text-hero-foreground/80 mb-6 text-lg leading-relaxed">
                    {audience.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {audience.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-glow rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-hero-foreground/90">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-primary-glow font-semibold group-hover:translate-x-2 transition-transform">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Universal CTA */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-hero-foreground mb-6">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-hero-foreground/80 mb-8">
            Start your free trial and discover how Ongage can automate and scale your communications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-10 py-4 h-14 bg-primary text-primary-foreground hover:bg-primary/90 shadow-glow">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 py-4 h-14 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Book a Demo
            </Button>
          </div>
          
          <div className="mt-8 text-hero-foreground/60 text-sm">
            14-day free trial • No credit card required • Cancel anytime
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainLanding;