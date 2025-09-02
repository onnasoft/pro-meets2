import { useLoaderData } from "react-router";
import { AIAdvantage } from "~/components/why-us/AIAdvantage";
import { GlobalReach } from "~/components/why-us/GlobalReach";
import { IndustryExpertise } from "~/components/why-us/IndustryExpertise";
import { WhyUsHero } from "~/components/why-us/WhyUsHero";
import { languageLoader } from "~/loaders/language";

export { languageLoader as loader } from "~/loaders/language";

export default function DemoPage() {
  const { language } = useLoaderData<typeof languageLoader>();

  return (
    <>
      <WhyUsHero language={language} />
      <AIAdvantage language={language} />
      <IndustryExpertise language={language} />
      <GlobalReach language={language} />
    </>
  );
}