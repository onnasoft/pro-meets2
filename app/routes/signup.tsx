import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { CallToAction } from "~/components/sections/CallToAction";
import { MetaFunction, useLoaderData } from "@remix-run/react";
import { languageLoader } from "~/loaders/language";
import { motion } from "framer-motion";
import { Mail, User, Lock, Briefcase, ChevronRight } from "lucide-react";

export { languageLoader as loader };

const translations = {
  en: {
    title: "Create your account",
    subtitle: "Start streamlining your hiring process today",
    nameLabel: "Full name",
    emailLabel: "Email address",
    passwordLabel: "Password",
    companyLabel: "Company name",
    termsText: "I agree to the",
    termsLink: "Terms of Service",
    and: "and",
    privacyLink: "Privacy Policy",
    signupButton: "Create account",
    alreadyHaveAccount: "Already have an account?",
    loginLink: "Log in here",
    or: "Or sign up with",
    googleSignup: "Continue with Google",
    microsoftSignup: "Continue with Microsoft",
  },
  es: {
    title: "Crea tu cuenta",
    subtitle: "Comienza a optimizar tu proceso de contratación hoy",
    nameLabel: "Nombre completo",
    emailLabel: "Correo electrónico",
    passwordLabel: "Contraseña",
    companyLabel: "Nombre de la empresa",
    termsText: "Acepto los",
    termsLink: "Términos de Servicio",
    and: "y",
    privacyLink: "Política de Privacidad",
    signupButton: "Crear cuenta",
    alreadyHaveAccount: "¿Ya tienes una cuenta?",
    loginLink: "Inicia sesión aquí",
    or: "O regístrate con",
    googleSignup: "Continuar con Google",
    microsoftSignup: "Continuar con Microsoft",
  },
  fr: {
    title: "Créez votre compte",
    subtitle:
      "Commencez à rationaliser votre processus d'embauche dès aujourd'hui",
    nameLabel: "Nom complet",
    emailLabel: "Adresse e-mail",
    passwordLabel: "Mot de passe",
    companyLabel: "Nom de l'entreprise",
    termsText: "J'accepte les",
    termsLink: "Conditions d'utilisation",
    and: "et",
    privacyLink: "Politique de confidentialité",
    signupButton: "Créer un compte",
    alreadyHaveAccount: "Vous avez déjà un compte?",
    loginLink: "Connectez-vous ici",
    or: "Ou inscrivez-vous avec",
    googleSignup: "Continuer avec Google",
    microsoftSignup: "Continuer avec Microsoft",
  },
  ja: {
    title: "アカウントを作成",
    subtitle: "採用プロセスの効率化を今日から始めましょう",
    nameLabel: "氏名",
    emailLabel: "メールアドレス",
    passwordLabel: "パスワード",
    companyLabel: "会社名",
    termsText: "以下に同意します",
    termsLink: "利用規約",
    and: "および",
    privacyLink: "プライバシーポリシー",
    signupButton: "アカウントを作成",
    alreadyHaveAccount: "既にアカウントをお持ちですか？",
    loginLink: "こちらからログイン",
    or: "または以下で登録",
    googleSignup: "Googleで続行",
    microsoftSignup: "Microsoftで続行",
  },
  zh: {
    title: "创建您的账户",
    subtitle: "立即开始简化您的招聘流程",
    nameLabel: "全名",
    emailLabel: "电子邮件地址",
    passwordLabel: "密码",
    companyLabel: "公司名称",
    termsText: "我同意",
    termsLink: "服务条款",
    and: "和",
    privacyLink: "隐私政策",
    signupButton: "创建账户",
    alreadyHaveAccount: "已有账户？",
    loginLink: "在此登录",
    or: "或通过以下方式注册",
    googleSignup: "通过Google继续",
    microsoftSignup: "通过Microsoft继续",
  },
};

export const meta: MetaFunction<typeof languageLoader> = ({ data }) => {
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

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.nameLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="pl-10 block w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

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
                      autoComplete="new-password"
                      required
                      className="pl-10 block w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="••••••••"
                      minLength={8}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {t.companyLabel}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Briefcase className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="pl-10 block w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {t.termsText}{" "}
                    <a
                      href="/terms"
                      className="font-medium text-primary-600 hover:text-primary-500"
                    >
                      {t.termsLink}
                    </a>{" "}
                    {t.and}{" "}
                    <a
                      href="/privacy"
                      className="font-medium text-primary-600 hover:text-primary-500"
                    >
                      {t.privacyLink}
                    </a>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    {t.signupButton}
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
                    <span className="ml-2">{t.googleSignup}</span>
                  </button>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    {t.alreadyHaveAccount}{" "}
                    <a
                      href="/login"
                      className="font-medium text-primary-600 hover:text-primary-500"
                    >
                      {t.loginLink}
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <CallToAction language={language} />
      </main>
      <Footer />
    </>
  );
}
