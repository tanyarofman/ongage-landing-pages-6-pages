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
    }
  ];

  return (
    <section className="py-16 bg-gradient-dark-feature">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 hover-scale">
            Have Questions?
          </h2>
          <p className="text-lg text-white/80">
            Everything you need to know about our AI Email Editor
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="bg-card/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 shadow-feature hover-scale">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-white/10 rounded-xl px-6 py-1 animate-fade-in hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-accent transition-colors py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 leading-relaxed pb-4">
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