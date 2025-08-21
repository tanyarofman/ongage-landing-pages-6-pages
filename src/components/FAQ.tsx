import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is email marketing automation?",
      answer: "Email marketing automation uses workflows and triggers to send personalized messages based on subscriber actions. With Ongage, you can build automation visually and integrate AI agents to generate and send content automatically."
    },
    {
      question: "How do I segment my email list?",
      answer: "Ongage lets you segment by up to 150 data points—including behavior, demographics and engagement—and create micro‑segments that update in real time."
    },
    {
      question: "Can I switch SMTP providers without downtime?",
      answer: "Yes. Ongage's multi‑ESP routing lets you connect to any SMTP relay or MTA and switch providers without disrupting your campaigns."
    },
    {
      question: "Is there a free trial?",
      answer: "Absolutely! You can start today with a 14‑day free trial or join the waitlist for Ongage Studio."
    }
  ];

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Common Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about getting started with Ongage
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 shadow-soft hover:shadow-feature transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-lg font-semibold py-6 hover:text-hero transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
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