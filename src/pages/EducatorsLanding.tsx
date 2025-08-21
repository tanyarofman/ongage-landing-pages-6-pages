import Hero from "@/components/educators/Hero";
import Features from "@/components/educators/Features";
import Testimonial from "@/components/educators/Testimonial";
import FAQ from "@/components/educators/FAQ";
import CTA from "@/components/educators/CTA";
import EducatorsTheme from "@/components/educators/EducatorsTheme";

const EducatorsLanding = () => {
  return (
    <EducatorsTheme>
      <main>
        <Hero />
        <Features />
        <Testimonial />
        <FAQ />
        <CTA />
      </main>
    </EducatorsTheme>
  );
};

export default EducatorsLanding;