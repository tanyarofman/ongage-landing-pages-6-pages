import Hero from "@/components/agencies2/Hero";
import Story from "@/components/agencies2/Story";
import Benefits from "@/components/agencies2/Benefits";
import BenefitsTable from "@/components/agencies2/BenefitsTable";
import Testimonial from "@/components/agencies2/Testimonial";
import FAQ from "@/components/agencies2/FAQ";
import CTA from "@/components/agencies2/CTA";

const Agencies2Landing = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Story />
      <Benefits />
      <BenefitsTable />
      <Testimonial />
      <FAQ />
      <CTA />
    </main>
  );
};

export default Agencies2Landing;