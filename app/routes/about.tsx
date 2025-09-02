import { useLoaderData } from "react-router-dom";
import { AboutHero } from "~/components/about-us/AboutHero";
import { MissionVisionValues } from "~/components/about-us/MissionVisionValues";
import { OurSolution } from "~/components/about-us/OurSolution";
import { OurStory } from "~/components/about-us/OurStory";
import { OurTeam } from "~/components/about-us/OurTeam";
import { ProblemWeSolve } from "~/components/about-us/ProblemWeSolve";
import { languageLoader } from "~/loaders/language";

export { languageLoader as loader } from "~/loaders/language";

export default function AboutPage() {
  const { language } = useLoaderData<typeof languageLoader>();

  return (
    <>
      <AboutHero language={language} />
      <MissionVisionValues language={language} />
      <ProblemWeSolve language={language} />
      <OurSolution language={language} />
      <OurStory language={language} />
      <OurTeam language={language} />
    </>
  );
}
