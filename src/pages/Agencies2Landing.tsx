import Hero from "@/components/agencies2/Hero";
import Benefits from "@/components/agencies2/Benefits";
import BenefitsTable from "@/components/agencies2/BenefitsTable";
import FAQ from "@/components/agencies2/FAQ";
import CTA from "@/components/agencies2/CTA";

const Agencies2Landing = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <BenefitsTable />
      <FAQ />
      <CTA />
    </main>
  );
};

export default Agencies2Landing;