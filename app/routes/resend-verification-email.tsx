// app/routes/resend-verification-email.tsx
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { ActionFunction, redirect } from "react-router";
import { languageLoader } from "~/loaders/language";
import { Link } from "react-router";

export { languageLoader as loader } from "~/loaders/language";

const translations = {
  en: {
    title: "Resend verification email",
    description: "Enter your email to resend the verification link",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    submitButton: "Resend email",
    processing: "Processing...",
    invalidEmail: "Please enter a valid email address",
    noEmailReceived: "Didn't receive the email?",
    contactSupport: "Contact support",
  },
  es: {
    title: "Reenviar correo de verificación",
    description: "Ingresa tu email para reenviar el enlace de verificación",
    emailLabel: "Email",
    emailPlaceholder: "tu@email.com",
    submitButton: "Reenviar correo",
    processing: "Procesando...",
    invalidEmail: "Por favor ingresa un email válido",
    noEmailReceived: "¿No recibiste el correo?",
    contactSupport: "Contactar soporte",
  },
  fr: {
    title: "Renvoyer l'email de vérification",
    description: "Entrez votre email pour renvoyer le lien de vérification",
    emailLabel: "Email",
    emailPlaceholder: "votre@email.com",
    submitButton: "Renvoyer l'email",
    processing: "Traitement en cours...",
    invalidEmail: "Veuillez entrer une adresse email valide",
    noEmailReceived: "Vous n'avez pas reçu l'email?",
    contactSupport: "Contacter le support",
  },
  jp: {
    title: "確認メールを再送信",
    description: "確認リンクを再送信するにはメールアドレスを入力してください",
    emailLabel: "メールアドレス",
    emailPlaceholder: "your@email.com",
    submitButton: "メールを再送信",
    processing: "処理中...",
    invalidEmail: "有効なメールアドレスを入力してください",
    noEmailReceived: "メールが届かない場合",
    contactSupport: "サポートに連絡",
  },
  zh: {
    title: "重新发送验证邮件",
    description: "输入您的电子邮件以重新发送验证链接",
    emailLabel: "电子邮件",
    emailPlaceholder: "your@email.com",
    submitButton: "重新发送邮件",
    processing: "处理中...",
    invalidEmail: "请输入有效的电子邮件地址",
    noEmailReceived: "没有收到邮件？",
    contactSupport: "联系支持",
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
    return Response.json({ error: t.invalidEmail }, { status: 400 });
  }

  return redirect(`/resend-verification/${encodeURIComponent(email)}`);
};

export default function ResendVerificationEmail() {
  const { language } = useLoaderData<typeof languageLoader>();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = translations[language] || translations.en;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validación del cliente
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(t.invalidEmail);
      return;
    }

    setIsSubmitting(true);
    navigate(`/resend-verification/${encodeURIComponent(email)}`);
  };

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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-primary-900">{t.title}</h1>
          <p className="text-gray-600 mt-2">{t.description}</p>
        </div>

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

          {error && (
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
          {t.noEmailReceived}{" "}
          <Link
            to="/support"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            {t.contactSupport}
          </Link>
        </div>
      </div>
    </div>
  );
}
