import { Outlet, useLoaderData } from "react-router";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { CallToAction } from "~/components/sections/CallToAction";
import { languageLoader } from "~/loaders/language";

export const loader = languageLoader;

export default function Layout() {
  const { language } = useLoaderData<typeof languageLoader>();

  return (
    <>
      <Header language={language} />
      <main>
        <div className="pt-20" />
        <Outlet />
        <CallToAction language={language} />
      </main>
      <Footer language={language} />
    </>
  );
}