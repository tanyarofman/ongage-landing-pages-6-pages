import { BookOpen, Target, Users, Mail, Calendar, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Easy course design",
      description: "Complete control over your course structure and content delivery.",
      details: "Build engaging courses with multimedia content, quizzes, and assignments. Customize the learning path to match your teaching style and student needs."
    },
    {
      icon: Target,
      title: "Student engagement tools",
      description: "Keep students motivated and on track throughout their learning journey.",
      details: "Automated progress tracking, personalized reminders, and milestone celebrations to maintain high engagement and completion rates."
    },
    {
      icon: Users,
      title: "Smart segmentation",
      description: "Target the right message to the right student at the right time.",
      details: "Segment students by progress, engagement level, or course type to deliver personalized communications that drive results."
    },
    {
      icon: Mail,
      title: "Automated workflows",
      description: "Set up drip campaigns and triggered emails that run on autopilot.",
      details: "Create sophisticated email workflows that respond to student behavior, course progress, and engagement patterns automatically."
    },
    {
      icon: Calendar,
      title: "Progress tracking",
      description: "Monitor student advancement and identify those who need support.",
      details: "Real-time dashboards show completion rates, engagement metrics, and early warning signs for students at risk of dropping out."
    },
    {
      icon: TrendingUp,
      title: "Powerful analytics",
      description: "Understand what's working and optimize your courses for better outcomes.",
      details: "Detailed insights into email performance, student behavior, and course effectiveness help you continuously improve results."
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="mb-6">
                <div className="p-3 bg-muted rounded-xl inline-flex mb-4">
                  <feature.icon className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <p className="text-sm text-muted-foreground/80 leading-relaxed">
                  {feature.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;