import Header from "../components/Header";
import Hero from "../components/sections/Hero";
import ProblemSolution from "../components/sections/ProblemSolution";
import Features from "../components/sections/Features";
import Benefits from "../components/sections/Benefits";
import Testimonials from "../components/sections/Testimonials";
import Integrations from "../components/sections/Integrations";
import Pricing from "../components/sections/Pricing";
import Footer from "../components/Footer";
import FrequentAskedQuestions from "../components/sections/FrequentAskedQuestions";
import CallToAction from "../components/sections/CallToAction";
import { MetaFunction } from "@remix-run/react";

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
        <ProblemSolution />
        <Features />
        <Benefits />
        <Testimonials />
        <Integrations />
        <Pricing />
        <FrequentAskedQuestions />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
