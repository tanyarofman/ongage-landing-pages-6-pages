import Hero from "@/components/educators/Hero";
import Features from "@/components/educators/Features";
import FeatureHighlights from "@/components/educators/FeatureHighlights";
import FAQ from "@/components/educators/FAQ";
import CTA from "@/components/educators/CTA";
import EducatorsTheme from "@/components/educators/EducatorsTheme";

const EducatorsLanding = () => {
  return (
    <EducatorsTheme>
      <main>
        <Hero />
        <Features />
        <FeatureHighlights />
        <FAQ />
        <CTA />
      </main>
    </EducatorsTheme>
  );
};

export default EducatorsLanding;