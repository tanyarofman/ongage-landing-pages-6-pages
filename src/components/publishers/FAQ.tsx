import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do I need design skills to use the AI Email Editor?",
      answer: "No. Prebuilt templates and auto‑complete functionality handle the design for you. You can customize layouts with your brand colours and fonts but never have to start from a blank page."
    },
    {
      question: "Can I personalize content for different subscriber segments?",
      answer: "Yes. The AI tailors content for specific audiences and integrates with Ongage's segmentation tools to deliver targeted messages."
    },
    {
      question: "Will AI-generated emails sound like a robot?",
      answer: "Not at all. Ongage's Humanizer feature scans and adjusts the text so it reads naturally and matches your tone."
    },
    {
      question: "How does pricing work?",
      answer: "Ongage uses a transparent, token‑based pricing model. You pay only for what you use—no hidden fees."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about our AI Email Editor
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-feature">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/30 rounded-lg px-6 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;