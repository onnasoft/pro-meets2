import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { CallToAction } from "~/components/sections/CallToAction";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { languageLoader } from "~/loaders/language";
import SignUpForm from "~/components/signup/SignUpForm";
import { GoogleOAuthProvider } from "@react-oauth/google";
import config from "~/config";
import { LoaderFunctionArgs } from "@remix-run/node";

const translations = {
  en: {
    title: "Sign Up",
    subtitle: "Create your account to start using ProMeets",
  },
  es: {
    title: "Regístrate",
    subtitle: "Crea tu cuenta para comenzar a usar ProMeets",
  },
  fr: {
    title: "Inscription",
    subtitle: "Créez votre compte pour commencer à utiliser ProMeets",
  },
  jp: {
    title: "サインアップ",
    subtitle: "ProMeetsの使用を開始するためにアカウントを作成してください",
  },
  zh: {
    title: "注册",
    subtitle: "创建您的帐户以开始使用ProMeets",
  },
};

export async function loader(args: LoaderFunctionArgs) {
  const url = new URL(args.request.url);
  const redirectUrl = url.searchParams.get("redirect") || "/dashboard";
  const { language } = await languageLoader(args);

  return { redirectUrl, language };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const language = data?.language || "en";
  const t = translations[language] || translations.en;

  return [
    { title: `${t.title} | ProMeets` },
    { name: "description", content: t.subtitle },
    // Open Graph / Facebook
    { property: "og:title", content: t.title },
    { property: "og:description", content: t.subtitle },
    // Twitter
    { property: "twitter:title", content: t.title },
    { property: "twitter:description", content: t.subtitle },
  ];
};

export default function SignUpPage() {
  const { language, redirectUrl } = useLoaderData<typeof loader>();

  return (
    <>
      <Header language={language} />
      <main>
        <div className="pt-28" />

        <section className="container mx-auto px-6 py-12">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
            <GoogleOAuthProvider clientId={config.googleClientId}>
              <SignUpForm language={language} redirectUrl={redirectUrl} />
            </GoogleOAuthProvider>
          </div>
        </section>

        <CallToAction language={language} />
      </main>
      <Footer language={language} />
    </>
  );
}
