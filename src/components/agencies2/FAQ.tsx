import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How many clients or lists can I manage?",
      answer: "Depending on your plan, you can manage anywhere from a handful of lists to dozens; our enterprise plans offer even more flexibility."
    },
    {
      question: "Will unsubscribes in one list affect others?",
      answer: "No. Each list maintains its own suppression rules, so complaints or unsubscribes don't spill over to other client lists."
    },
    {
      question: "Do I need technical expertise to set this up?",
      answer: "Not at all. Ongage is built for lean teams, offering no‑code automations and plug‑and‑play integrations that anyone can use."
    },
    {
      question: "Can I customize permissions for different team members?",
      answer: "Yes. You can set role-based access controls so each team member only sees and manages the client accounts they're responsible for."
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about managing multiple clients with Ongage.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;