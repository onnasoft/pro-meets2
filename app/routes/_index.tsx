import Header from "~/components/Header";
import Hero from "~/components/sections/Hero";
import Footer from "~/components/Footer";
import { CallToAction } from "~/components/sections/CallToAction";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { KeyBenefits } from "~/components/sections/KeyBenefits";
import { ProductShowcase } from "~/components/sections/ProductShowcase";
import { CompetitorComparison } from "~/components/sections/CompetitorComparison";
import { WorkflowIntegration } from "~/components/sections/WorkflowIntegration";
import { WhoBenefits } from "~/components/sections/WhoBenefits";
import { FrequentAskedQuestions } from "~/components/sections/FrequentAskedQuestions";
import { Pricing } from "~/components/sections/Pricing";
import { LoaderFunctionArgs } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

interface LoaderData {
  language: string;
}

export async function loader({
  request,
}: LoaderFunctionArgs): Promise<LoaderData> {
  const language =
    request.headers.get("Accept-Language")?.split(",")[0] || "es";
  return { language };
}

export default function IndexPage() {
  const { language } = useLoaderData<typeof loader>();

  return (
    <>
      <Header />
      <main>
        <Hero language={language} />
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
