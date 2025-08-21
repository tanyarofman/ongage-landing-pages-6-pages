import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is a drip campaign?",
      answer: "A drip campaign is a series of automated emails sent on a schedule or triggered by user actions. Ongage allows educators to set up drip campaigns based on enrollment dates or progress milestones."
    },
    {
      question: "Do I need technical expertise to use Ongage?",
      answer: "No. Ongage is designed for lean teams. You can build workflows with a visual interface, use predesigned templates and import your contact lists without writing code."
    },
    {
      question: "How do I integrate Ongage with my LMS?",
      answer: "Ongage provides a robust API and webhooks to sync data with your learning management system or registration forms in real time."
    },
    {
      question: "Can I try Ongage before committing?",
      answer: "Yes. You can start with a free trial to explore the platform's features or book a demo to see how it fits your workflow."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about automating your student communications
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 py-2 shadow-soft hover:shadow-feature transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;