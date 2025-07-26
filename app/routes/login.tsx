import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { CallToAction } from "~/components/sections/CallToAction";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { languageLoader } from "~/loaders/language";
import { Lock, Mail } from "lucide-react";
import { motion } from "framer-motion";

export { languageLoader as loader };

const translations = {
  en: {
    title: "Welcome back",
    subtitle: "Log in to your account to continue",
    emailLabel: "Email address",
    passwordLabel: "Password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    loginButton: "Log in",
    noAccount: "Don't have an account?",
    signupLink: "Sign up now",
    or: "Or continue with",
    googleLogin: "Continue with Google",
    microsoftLogin: "Continue with Microsoft",
  },
  es: {
    title: "Bienvenido de nuevo",
    subtitle: "Inicia sesión para continuar",
    emailLabel: "Correo electrónico",
    passwordLabel: "Contraseña",
    rememberMe: "Recordarme",
    forgotPassword: "¿Olvidaste tu contraseña?",
    loginButton: "Iniciar sesión",
    noAccount: "¿No tienes una cuenta?",
    signupLink: "Regístrate ahora",
    or: "O continúa con",
    googleLogin: "Continuar con Google",
    microsoftLogin: "Continuar con Microsoft",
  },
  fr: {
    title: "Content de vous revoir",
    subtitle: "Connectez-vous pour continuer",
    emailLabel: "Adresse e-mail",
    passwordLabel: "Mot de passe",
    rememberMe: "Se souvenir de moi",
    forgotPassword: "Mot de passe oublié ?",
    loginButton: "Se connecter",
    noAccount: "Vous n'avez pas de compte ?",
    signupLink: "S'inscrire maintenant",
    or: "Ou continuer avec",
    googleLogin: "Continuer avec Google",
    microsoftLogin: "Continuer avec Microsoft",
  },
  ja: {
    title: "おかえりなさい",
    subtitle: "続けるにはログインしてください",
    emailLabel: "メールアドレス",
    passwordLabel: "パスワード",
    rememberMe: "ログイン状態を保持",
    forgotPassword: "パスワードをお忘れですか？",
    loginButton: "ログイン",
    noAccount: "アカウントをお持ちでない場合",
    signupLink: "今すぐ登録",
    or: "または以下で続行",
    googleLogin: "Googleで続行",
    microsoftLogin: "Microsoftで続行",
  },
  zh: {
    title: "欢迎回来",
    subtitle: "登录您的账户继续",
    emailLabel: "电子邮件地址",
    passwordLabel: "密码",
    rememberMe: "记住我",
    forgotPassword: "忘记密码？",
    loginButton: "登录",
    noAccount: "没有账户？",
    signupLink: "立即注册",
    or: "或通过以下方式继续",
    googleLogin: "通过Google继续",
    microsoftLogin: "通过Microsoft继续",
  },
};

export const meta: MetaFunction<typeof languageLoader> = ({ data }) => {
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
  const { language } = useLoaderData<typeof languageLoader>();
  const t = translations[language] || translations.en;

  return (
    <>
      <Header language={language} />
      <main>
        <div className="pt-28" />

        <section className="container mx-auto px-6 py-12">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {t.title}
                </h1>
                <p className="text-gray-600">{t.subtitle}</p>
              </div>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.emailLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="pl-10 block w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.passwordLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="pl-10 block w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      {t.rememberMe}
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="/forgot-password"
                      className="font-medium text-primary-600 hover:text-primary-500"
                    >
                      {t.forgotPassword}
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    {t.loginButton}
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">{t.or}</span>
                  </div>
                </div>

                <div className="mt-6 gap-3">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.784-1.667-4.166-2.685-6.735-2.685-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.524 10-10 0-0.67-0.069-1.325-0.189-1.955h-9.811z" />
                    </svg>
                    <span className="ml-2">{t.googleLogin}</span>
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    {t.noAccount}{" "}
                    <a
                      href="/signup"
                      className="font-medium text-primary-600 hover:text-primary-500"
                    >
                      {t.signupLink}
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <CallToAction language={language} />
      </main>
      <Footer language={language} />
    </>
  );
}
