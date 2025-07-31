import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { CallToAction } from "~/components/sections/CallToAction";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import LoginForm from "~/components/login/LoginForm";
import { GoogleOAuthProvider } from "@react-oauth/google";
import config from "~/config";
import { LoaderFunctionArgs } from "@remix-run/node";
import { languageLoader } from "~/loaders/language";

const translations = {
  en: {
    title: "Login",
    subtitle: "Access your ProMeets account",
  },
  es: {
    title: "Iniciar sesión",
    subtitle: "Accede a tu cuenta de ProMeets",
  },
  fr: {
    title: "Connexion",
    subtitle: "Accédez à votre compte ProMeets",
  },
  jp: {
    title: "ログイン",
    subtitle: "ProMeetsアカウントにアクセスする",
  },
  zh: {
    title: "登录",
    subtitle: "访问您的ProMeets帐户",
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
    { title: "Login | ProMeets" },
    { name: "description", content: "Access your ProMeets account" },
    // Open Graph / Facebook
    { property: "og:title", content: t.title },
    { property: "og:description", content: t.subtitle },
    // Twitter
    { property: "twitter:title", content: t.title },
    { property: "twitter:description", content: t.subtitle },
  ];
};

export default function LoginPage() {
  const { language, redirectUrl } = useLoaderData<typeof loader>();

  return (
    <>
      <Header language={language} />
      <main>
        <div className="pt-28" />

        <section className="container mx-auto px-6 py-12">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
            <GoogleOAuthProvider clientId={config.googleClientId}>
              <LoginForm language={language} redirectUrl={redirectUrl} />
            </GoogleOAuthProvider>
          </div>
        </section>

        <CallToAction language={language} />
      </main>
      <Footer language={language} />
    </>
  );
}
