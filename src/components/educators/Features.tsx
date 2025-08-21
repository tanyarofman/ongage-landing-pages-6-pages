import { BookOpen, Target, Settings, BarChart3 } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Student Engagement",
      highlights: [
        "Automated drip campaigns based on enrollment dates",
        "Course milestone reminders and progress nudges",
        "Welcome sequences for new students"
      ]
    },
    {
      icon: Target,
      title: "Smart Segmentation",
      highlights: [
        "Group students by course type and cohort",
        "Track progress stages automatically",
        "Real-time segment updates as students advance"
      ]
    },
    {
      icon: Settings,
      title: "Easy Setup",
      highlights: [
        "Drag-and-drop workflow builder - no coding required",
        "Template library with course-specific designs",
        "Simple CSV/Excel contact imports"
      ]
    },
    {
      icon: BarChart3,
      title: "Course Analytics",
      highlights: [
        "Track engagement by cohort and module",
        "AI-powered insights with natural language queries",
        "Deliverability monitoring and optimization"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-feature">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for{" "}
            <span className="text-primary">Educators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Keep students engaged throughout their learning journey with automated, personalized communications
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-card p-8 rounded-2xl shadow-feature hover:shadow-glow transition-all duration-300 border border-border/50">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-xl mr-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {feature.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;