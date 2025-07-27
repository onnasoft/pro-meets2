import { useState } from "react";
import { useLoaderData, Link } from "@remix-run/react";
import { ActionFunction } from "@remix-run/node";
import { languageLoader } from "~/loaders/language";
import { forgotPassword } from "~/services/auth";
import { CheckCircle, AlertCircle } from "lucide-react";

export { languageLoader as loader } from "~/loaders/language";

const translations = {
  en: {
    title: "Reset your password",
    description: "Enter your email to receive a password reset link",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    submitButton: "Send reset link",
    processing: "Processing...",
    invalidEmail: "Please enter a valid email address",
    rememberPassword: "Remember your password?",
    loginLink: "Log in",
    successTitle: "Reset link sent!",
    successMessage: "We've sent a password reset link to your email.",
    errorTitle: "Error",
    errorMessage:
      "There was a problem sending the reset link. Please try again.",
  },
  es: {
    title: "Restablecer contraseña",
    description: "Ingresa tu email para recibir un enlace de restablecimiento",
    emailLabel: "Email",
    emailPlaceholder: "tu@email.com",
    submitButton: "Enviar enlace",
    processing: "Procesando...",
    invalidEmail: "Por favor ingresa un email válido",
    rememberPassword: "¿Recuerdas tu contraseña?",
    loginLink: "Iniciar sesión",
    successTitle: "¡Enlace enviado!",
    successMessage:
      "Hemos enviado un enlace para restablecer tu contraseña a tu correo.",
    errorTitle: "Error",
    errorMessage:
      "Hubo un problema al enviar el enlace. Por favor intenta nuevamente.",
  },
  fr: {
    title: "Réinitialiser votre mot de passe",
    description: "Entrez votre email pour recevoir un lien de réinitialisation",
    emailLabel: "Email",
    emailPlaceholder: "votre@email.com",
    submitButton: "Envoyer le lien",
    processing: "Traitement en cours...",
    invalidEmail: "Veuillez entrer une adresse email valide",
    rememberPassword: "Vous souvenez-vous de votre mot de passe?",
    loginLink: "Se connecter",
    successTitle: "Lien envoyé !",
    successMessage:
      "Nous avons envoyé un lien de réinitialisation à votre email.",
    errorTitle: "Erreur",
    errorMessage:
      "Un problème est survenu lors de l'envoi du lien. Veuillez réessayer.",
  },
  ja: {
    title: "パスワードをリセット",
    description:
      "パスワードリセットリンクを受け取るにはメールアドレスを入力してください",
    emailLabel: "メールアドレス",
    emailPlaceholder: "your@email.com",
    submitButton: "リンクを送信",
    processing: "処理中...",
    invalidEmail: "有効なメールアドレスを入力してください",
    rememberPassword: "パスワードを思い出しましたか？",
    loginLink: "ログイン",
    successTitle: "リンクを送信しました！",
    successMessage: "パスワードリセットリンクをメールで送信しました。",
    errorTitle: "エラー",
    errorMessage:
      "リンクの送信中に問題が発生しました。もう一度お試しください。",
  },
  zh: {
    title: "重置密码",
    description: "输入您的电子邮件以接收密码重置链接",
    emailLabel: "电子邮件",
    emailPlaceholder: "your@email.com",
    submitButton: "发送重置链接",
    processing: "处理中...",
    invalidEmail: "请输入有效的电子邮件地址",
    rememberPassword: "记得密码？",
    loginLink: "登录",
    successTitle: "重置链接已发送！",
    successMessage: "我们已向您的电子邮件发送了密码重置链接。",
    errorTitle: "错误",
    errorMessage: "发送重置链接时出现问题。请再试一次。",
  },
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;

  // Validación básica del email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    const language = (
      await languageLoader({ request, context: {}, params: {} })
    ).language;
    const t = translations[language] || translations.en;
    return new Response(JSON.stringify({ error: t.invalidEmail }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    await forgotPassword(email);
    return { success: true };
  } catch {
    const language = (
      await languageLoader({ request, context: {}, params: {} })
    ).language;
    const t = translations[language] || translations.en;
    return new Response(
      JSON.stringify({
        error: t.errorMessage,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

export default function ForgotPassword() {
  const { language } = useLoaderData<typeof languageLoader>();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const t = translations[language] || translations.en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setStatus("idle");

    // Validación del cliente
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(t.invalidEmail);
      return;
    }

    setIsSubmitting(true);
    try {
      await forgotPassword(email);
      setStatus("success");
    } catch {
      setStatus("error");
      setError(t.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-primary-900">
            {t.successTitle}
          </h1>
          <p className="text-gray-600">{t.successMessage}</p>
          <div className="pt-4">
            <Link
              to="/login"
              className="inline-block w-full md:w-auto bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
            >
              {t.loginLink}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-primary-900">{t.title}</h1>
          <p className="text-gray-600 mt-2">{t.description}</p>
        </div>

        {status === "error" && (
          <div className="p-4 bg-red-50 rounded-lg flex items-start">
            <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
              placeholder={t.emailPlaceholder}
              required
            />
          </div>

          {error && status !== "error" && (
            <div className="text-sm text-error-600 bg-error-50 p-2 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                {t.processing}
              </>
            ) : (
              t.submitButton
            )}
          </button>
        </form>

        <div className="text-center text-sm text-gray-500">
          {t.rememberPassword}{" "}
          <Link
            to="/login"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            {t.loginLink}
          </Link>
        </div>
      </div>
    </div>
  );
}
