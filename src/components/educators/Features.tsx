import { 
  Mail, 
  Users, 
  PaintBucket, 
  BarChart3, 
  Webhook
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Mail,
      title: "Drip campaign builder",
      description: "Schedule course reminders, assignment deadlines and progress check‑ins based on students' enrollment dates or actions. Automated sequences keep students engaged without manual follow‑ups."
    },
    {
      icon: Users,
      title: "Segmentation by list field",
      description: "Organize students into cohorts (e.g., Spring vs. Fall intake) and target emails accordingly. Group contacts by enrollment date, course version, or progress stage for precise targeting."
    },
    {
      icon: PaintBucket,
      title: "Template library & editor",
      description: "Create professional course emails using predesigned templates and a drag‑and‑drop editor—no coding required. A/B test subject lines and formats to improve engagement."
    },
    {
      icon: BarChart3,
      title: "Actionable analytics",
      description: "Monitor open rates, click‑throughs and course progression across segments. Evaluate engagement by cohort, module or date with detailed per‑contact activity insights."
    },
    {
      icon: Webhook,
      title: "API & webhooks",
      description: "Sync enrollment data from your LMS or registration forms and update student status in real time. Seamless integration with your existing educational technology stack."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Key Features for Educators
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to automate student communications and boost course completion rates
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-8 shadow-soft border border-border hover:shadow-feature transition-all duration-300 hover-scale animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 bg-primary/10 rounded-xl inline-flex mb-6">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;