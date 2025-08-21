import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Main = () => {
  const landingPages = [
    {
      title: "Publishers",
      description: "For content creators & newsletters",
      path: "/publishers",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Publishers AI",
      description: "AI-powered email tools",
      path: "/publishers-ai", 
      color: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Educators", 
      description: "Automated campaigns for courses",
      path: "/educators",
      color: "from-green-500/20 to-green-600/20"
    },
    {
      title: "Agencies",
      description: "Multi-client management",
      path: "/agencies",
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      title: "Agencies Pro",
      description: "Advanced agency features", 
      path: "/agencies-2",
      color: "from-red-500/20 to-red-600/20"
    },
    {
      title: "Professional Services",
      description: "Automated workflows for consultants", 
      path: "/professional-services",
      color: "from-indigo-500/20 to-indigo-600/20"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Ongage Landing Pages
          </h1>
          <p className="text-muted-foreground">
            Email Marketing That Actually Works
          </p>
        </div>
      </div>

      {/* Landing Page Cards */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {landingPages.map((page, index) => (
            <Card 
              key={index}
              className="group hover:shadow-feature transition-all duration-300 hover:-translate-y-1 animate-fade-in border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-4">
                <div className={`w-full h-1.5 bg-gradient-to-r ${page.color} rounded-full mb-3`}></div>
                
                <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {page.title}
                </h2>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {page.description}
                </p>
                
                <Link to={page.path}>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                  >
                    View
                    <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
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