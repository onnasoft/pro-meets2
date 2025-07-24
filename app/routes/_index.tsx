import Header from "~/components/Header";
import Hero from "~/components/sections/Hero";
import Footer from "~/components/Footer";
import { CallToAction } from "~/components/sections/CallToAction";
import { MetaFunction } from "@remix-run/react";
import { KeyBenefits } from "~/components/sections/KeyBenefits";
import { ProductShowcase } from "~/components/sections/ProductShowcase";
import { CompetitorComparison } from "~/components/sections/CompetitorComparison";
import { WorkflowIntegration } from "~/components/sections/WorkflowIntegration";
import { WhoBenefits } from "~/components/sections/WhoBenefits";
import { FrequentAskedQuestions } from "~/components/sections/FrequentAskedQuestions";
import { Pricing } from "~/components/sections/Pricing";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function IndexPage() {
  return (
    <>
      <Header />
      <main>
        <Hero language="es" />
        <KeyBenefits />
        <ProductShowcase />
        <CompetitorComparison />
        <WorkflowIntegration />
        <WhoBenefits />
        <FrequentAskedQuestions />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
