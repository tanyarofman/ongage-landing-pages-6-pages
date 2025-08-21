import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How many lists or clients can I manage?",
      answer: "Ongage's multi‑list feature is designed for scale. Plans support from two lists and two user roles for small teams up to 20 lists and twelve user roles for high‑volume plans. Custom enterprise plans allow even more lists and sub‑accounts."
    },
    {
      question: "Can I assign different permissions to team members?",
      answer: "Yes. You can control who has access to each list and define role‑based permissions so that users see only the brands they manage."
    },
    {
      question: "Will unsubscribes in one list affect other lists?",
      answer: "No. Each list maintains its own suppression rules and bounce management. Contacts who unsubscribe from one brand remain active on other lists."
    },  
    {
      question: "Do I need technical skills to integrate with CRMs and ESPs?",
      answer: "Not at all. Ongage offers a flexible API and plug‑and‑play integrations with popular CRMs and email delivery providers. Our interface is intuitive, and you can configure workflows, drip sequences and segmentation without writing code."
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Common Questions
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