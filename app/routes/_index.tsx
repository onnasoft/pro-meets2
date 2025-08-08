import Header from "~/components/Header";
import Hero from "~/components/sections/Hero";
import Footer from "~/components/Footer";
import { CallToAction } from "~/components/sections/CallToAction";
import { MetaFunction, useLoaderData } from "react-router";
import { KeyBenefits } from "~/components/sections/KeyBenefits";
import { ProductShowcase } from "~/components/sections/ProductShowcase";
import { CompetitorComparison } from "~/components/sections/CompetitorComparison";
import { WorkflowIntegration } from "~/components/sections/WorkflowIntegration";
import { WhoBenefits } from "~/components/sections/WhoBenefits";
import { FrequentAskedQuestions } from "~/components/sections/FrequentAskedQuestions";
import { Pricing } from "~/components/sections/Pricing";
import { languageLoader } from "~/loaders/language";

export { languageLoader as loader } from "~/loaders/language";

const metaTranslations = {
  en: {
    title: "ProMeets | Modern Video Interview Platform for Recruiters",
    description:
      "Streamline your hiring process with AI-powered video interviews. Reduce time-to-hire by 50% with our end-to-end recruitment platform.",
    keywords:
      "video interviews, hiring platform, recruitment software, AI recruiting, talent acquisition",
    ogTitle: "Transform Your Hiring Process with ProMeets",
    ogDescription:
      "Discover how ProMeets can help you conduct better interviews faster with our AI-powered platform.",
    ogImage: "https://www.promeets.com/images/og-image-en.jpg",
  },
  es: {
    title:
      "ProMeets | Plataforma Moderna de Entrevistas por Video para Reclutadores",
    description:
      "Optimiza tu proceso de contratación con entrevistas por video potenciadas por IA. Reduce el tiempo de contratación en un 50% con nuestra plataforma integral.",
    keywords:
      "entrevistas por video, plataforma de contratación, software de reclutamiento, IA para reclutamiento, adquisición de talento",
    ogTitle: "Transforma Tu Proceso de Contratación con ProMeets",
    ogDescription:
      "Descubre cómo ProMeets puede ayudarte a realizar mejores entrevistas más rápido con nuestra plataforma con IA.",
    ogImage: "https://www.promeets.com/images/og-image-es.jpg",
  },
  fr: {
    title: "ProMeets | Plateforme Moderne d'Entretiens Vidéo pour Recruteurs",
    description:
      "Rationalisez votre processus d'embauche avec des entretiens vidéo alimentés par l'IA. Réduisez le délai d'embauche de 50% avec notre plateforme de recrutement complète.",
    keywords:
      "entretiens vidéo, plateforme d'embauche, logiciel de recrutement, IA pour le recrutement, acquisition de talents",
    ogTitle: "Transformez Votre Processus de Recrutement avec ProMeets",
    ogDescription:
      "Découvrez comment ProMeets peut vous aider à mener de meilleurs entretiens plus rapidement avec notre plateforme alimentée par l'IA.",
    ogImage: "https://www.promeets.com/images/og-image-fr.jpg",
  },
  jp: {
    title: "ProMeets | 採用担当者のための近代的なビデオ面接プラットフォーム",
    description:
      "AI搭載のビデオ面接で採用プロセスを効率化。エンドツーエンドの採用プラットフォームで採用までの時間を50%短縮。",
    keywords:
      "ビデオ面接, 採用プラットフォーム, 採用ソフトウェア, AI採用, 人材獲得",
    ogTitle: "ProMeetsで採用プロセスを変革",
    ogDescription:
      "AI搭載のプラットフォームで、より良い面接をより速く実施する方法をご覧ください。",
    ogImage: "https://www.promeets.com/images/og-image-ja.jpg",
  },
  zh: {
    title: "ProMeets | 现代视频面试平台，为招聘人员打造",
    description:
      "通过AI驱动的视频面试简化您的招聘流程。使用我们的端到端招聘平台，将招聘时间缩短50%。",
    keywords: "视频面试, 招聘平台, 招聘软件, AI招聘, 人才获取",
    ogTitle: "用ProMeets改变您的招聘流程",
    ogDescription:
      "了解ProMeets如何通过我们的AI驱动平台帮助您更快地进行更好的面试。",
    ogImage: "https://www.promeets.com/images/og-image-zh.jpg",
  },
};

export const meta: MetaFunction<typeof languageLoader> = ({ loaderData }) => {
  const language = loaderData?.language || "en";
  const t = metaTranslations[language] || metaTranslations.en;

  return [
    { title: t.title },
    { name: "description", content: t.description },
    { name: "keywords", content: t.keywords },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://promeets.com/" },
    { property: "og:title", content: t.ogTitle },
    { property: "og:description", content: t.ogDescription },

    // Twitter
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://promeets.com/" },
    { property: "twitter:title", content: t.ogTitle },
    { property: "twitter:description", content: t.ogDescription },

    // Canonical URL
    { rel: "canonical", href: "https://promeets.com/" },

    // Favicon
    { link: { rel: "icon", type: "image/x-icon", href: "/favicon.ico" } },
    { link: { rel: "manifest", href: "/site.webmanifest" } },
  ];
};

export default function IndexPage() {
  const { language } = useLoaderData<typeof languageLoader>();

  return (
    <>
      <Header language={language} />
      <main>
        <Hero language={language} />
        <KeyBenefits language={language} />
        <ProductShowcase language={language} />
        <CompetitorComparison language={language} />
        <WorkflowIntegration language={language} />
        <WhoBenefits language={language} />
        <FrequentAskedQuestions language={language} />
        <Pricing language={language} />
        <CallToAction language={language} />
      </main>
      <Footer language={language} />
    </>
  );
}
