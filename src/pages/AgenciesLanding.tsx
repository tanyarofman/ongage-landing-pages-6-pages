import Hero from "@/components/agencies/Hero";
import Features from "@/components/agencies/Features";
import FAQ from "@/components/agencies/FAQ";
import CTA from "@/components/agencies/CTA";
import Testimonial from "@/components/Testimonial";

const AgenciesLanding = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Testimonial />
      <FAQ />
      <CTA />
    </main>
  );
};

export default AgenciesLanding;