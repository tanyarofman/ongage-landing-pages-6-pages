import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Main = () => {
  const landingPages = [
    {
      title: "Publishers",
      description: "Email marketing solutions for content creators and newsletter publishers",
      path: "/publishers",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Publishers AI",
      description: "AI-powered email marketing tools for modern content creators",
      path: "/publishers-ai", 
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Educators", 
      description: "Automated email campaigns for online courses and educational content",
      path: "/educators",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      title: "Agencies",
      description: "Multi-client email marketing management for digital agencies",
      path: "/agencies",
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      title: "Agencies Pro",
      description: "Advanced agency tools with enhanced client management features", 
      path: "/agencies-2",
      color: "from-red-500/20 to-red-600/20"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Ongage
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Landing Pages
          </p>
          <p className="text-lg text-muted-foreground">
            Email Marketing That Actually Works for Your Business
          </p>
        </div>
      </div>

      {/* Landing Page Cards */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landingPages.map((page, index) => (
            <Card 
              key={index}
              className="group hover:shadow-feature transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-full h-2 bg-gradient-to-r ${page.color} rounded-full mb-6`}></div>
                
                <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {page.title}
                </h2>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {page.description}
                </p>
                
                <Link to={page.path}>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    View Landing Page
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;