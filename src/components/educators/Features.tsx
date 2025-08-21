import { 
  Mail, 
  Users, 
  Shield, 
  Workflow, 
  PaintBucket, 
  FileText, 
  BarChart3, 
  MessageSquare, 
  CheckCircle 
} from "lucide-react";

const Features = () => {
  const painPoints = [
    {
      struggle: "Keeping learners engaged over weeks or months",
      solutions: [
        {
          icon: Mail,
          title: "Automated drip campaigns",
          description: "Educators often send course confirmations, module reminders and progress nudges manually. Ongage's automation engine enables transactional emails triggered by students' actions and drip campaigns based on dates such as enrolment anniversaries or course milestones. This keeps students on track without manual follow‑ups."
        },
        {
          icon: Users,
          title: "Limited segmentation needs",
          description: "Most educators segment by course type, cohort or progress stage. Ongage lets you group contacts by specific list fields like enrollment date or course version and view engagement metrics per segment. Real‑time updates ensure that students move through segments automatically as they progress."
        },
        {
          icon: Shield,
          title: "Reliable deliverability",
          description: "Course reminders must arrive on time. Ongage's flexible architecture allows you to switch between SMTP relays or MTAs, maintaining sender reputation and ensuring your emails land in the inbox. Integrated email validation reduces bounces and complaints."
        }
      ]
    },
    {
      struggle: "Small teams and technical constraints", 
      solutions: [
        {
          icon: Workflow,
          title: "Drag‑and‑drop workflow builder",
          description: "You don't need a developer to build multi‑step journeys. Create welcome sequences, course‑module reminders and completion certificates visually using our intuitive automation builder."
        },
        {
          icon: PaintBucket,
          title: "Easy template editing",
          description: "Design your course emails with a WYSIWYG or HTML editor, or start from a predesigned template library. You can even A/B test subject lines or message formats to improve open rates."
        },
        {
          icon: FileText,
          title: "Simplified list management",
          description: "Import contact lists from CSV or Excel and use sign‑up forms to collect new registrations directly from your website. Set up auto‑responders to welcome students as soon as they sign up."
        }
      ]
    },
    {
      struggle: "Measuring success and adapting quickly",
      solutions: [
        {
          icon: BarChart3,
          title: "Actionable analytics",
          description: "Evaluate engagement by cohort, module or date. Ongage's analytics suite lets you group data by list fields, review per‑contact activity and even view metrics by ISP or device."
        },
        {
          icon: MessageSquare,
          title: "Real‑time insights via AI chat",
          description: "Ask natural‑language questions like 'Which module's reminder has the highest open rate?' and get immediate answers—thanks to Ongage's AI analytics interface."
        },
        {
          icon: CheckCircle,
          title: "Always‑on deliverability checks",
          description: "Use built‑in tools like Mail‑Tester and Litmus to ensure your emails render properly and avoid spam filters."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Pain points & benefits for educators
          </h2>
        </div>
        
        <div className="space-y-16">
          {painPoints.map((painPoint, index) => (
            <div key={index} className="animate-fade-in">
              <div className="mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-destructive mb-8">
                  Struggle: {painPoint.struggle}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {painPoint.solutions.map((solution, solutionIndex) => (
                  <div 
                    key={solutionIndex} 
                    className="bg-card rounded-xl p-6 shadow-soft border border-border hover:shadow-feature transition-all duration-300"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg inline-flex mb-4">
                      <solution.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-foreground">
                      {solution.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {solution.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;