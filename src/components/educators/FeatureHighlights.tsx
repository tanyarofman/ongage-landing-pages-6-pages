import { CheckCircle } from "lucide-react";

const FeatureHighlights = () => {
  const features = [
    {
      feature: "Drip campaign builder",
      description: "Schedule course reminders, assignment deadlines and progress check‑ins based on students' enrollment dates or actions",
      evidence: "Ongage supports drip campaigns triggered by data points like birthdays, anniversaries and conversions"
    },
    {
      feature: "Transactional triggers",
      description: "Send enrollment confirmations and password resets immediately when a student takes an action",
      evidence: "The platform enables transactional communications triggered by customer actions"
    },
    {
      feature: "Segmentation by list field",
      description: "Organize students into cohorts (e.g., Spring vs. Fall intake) and target emails accordingly",
      evidence: "Ongage lets you group data by each list field for detailed analysis"
    },
    {
      feature: "Template library & editor",
      description: "Create professional course emails using predesigned templates and a drag‑and‑drop editor—no coding required",
      evidence: "The platform provides a library of templates and a real‑time email editor"
    },
    {
      feature: "Signup forms & auto‑responders",
      description: "Collect leads via custom forms and automatically welcome them into your course",
      evidence: "Ongage supports sign‑up forms and auto‑responders"
    },
    {
      feature: "Deliverability & multi‑ESP routing",
      description: "Ensure that course notifications reach the inbox, with the option to switch SMTP relays or MTAs",
      evidence: "Ongage allows sending through its own SMTP or any SMTP/MTA and makes it easy to switch providers"
    },
    {
      feature: "API & webhooks",
      description: "Sync enrollment data from your LMS or registration forms and update student status in real time",
      evidence: "The platform's API and webhooks enable data movement between Ongage and external systems"
    },
    {
      feature: "Actionable analytics",
      description: "Monitor open rates, click‑throughs and course progression across segments",
      evidence: "Ongage's analytics suite offers per‑list field, per‑contact and per‑ISP insights"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Feature highlights
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-xl shadow-feature border border-border">
            <thead>
              <tr className="bg-muted/50">
                <th className="text-left p-6 font-semibold text-foreground border-b border-border">Feature</th>
                <th className="text-left p-6 font-semibold text-foreground border-b border-border">How it helps educators</th>
                <th className="text-left p-6 font-semibold text-foreground border-b border-border">Evidence</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                  <td className="p-6 font-medium text-foreground">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      {feature.feature}
                    </div>
                  </td>
                  <td className="p-6 text-muted-foreground leading-relaxed">
                    {feature.description}
                  </td>
                  <td className="p-6 text-sm text-muted-foreground leading-relaxed">
                    {feature.evidence}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;