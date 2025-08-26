import { verifyEmail } from "pro-meets-core";
import { LoaderFunctionArgs, Link, useLoaderData } from "react-router";
import { languageLoader } from "~/loaders/language";

const translations = {
  en: {
    title: "Email Verified!",
    message: "Your email address has been successfully verified.",
    additionalText: "You can now access all features of ProMeets.",
    cta: "Go to Dashboard",
  },
  es: {
    title: "¡Email Verificado!",
    message: "Tu dirección de correo ha sido verificada exitosamente.",
    additionalText: "Ahora puedes acceder a todas las funciones de ProMeets.",
    cta: "Ir al Panel",
  },
  fr: {
    title: "Email Vérifié !",
    message: "Votre adresse email a été vérifiée avec succès.",
    additionalText:
      "Vous pouvez maintenant accéder à toutes les fonctionnalités de ProMeets.",
    cta: "Aller au Tableau de Bord",
  },
  jp: {
    title: "メール認証完了！",
    message: "メールアドレスの確認が完了しました。",
    additionalText: "ProMeetsの全機能をご利用いただけます。",
    cta: "ダッシュボードへ",
  },
  zh: {
    title: "邮箱已验证！",
    message: "您的电子邮件地址已成功验证。",
    additionalText: "您现在可以访问ProMeets的所有功能。",
    cta: "前往仪表板",
  },
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { language } = await languageLoader({
    request,
    context: {},
    params: {},
  });
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  if (!token) {
    throw new Response("Token inválido", { status: 400 });
  }

  const isValid = await verifyEmail(token);

  return { success: isValid, language };
};

export default function EmailVerified() {
  const { language } = useLoaderData<typeof languageLoader>();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6 text-center">
        {/* Icono de verificación exitosa */}
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Título y mensaje */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-primary-900">{t.title}</h1>
          <p className="text-gray-600">{t.message}</p>
          <p className="text-gray-600 font-medium">{t.additionalText}</p>
        </div>

        {/* Ilustración decorativa */}
        <div className="py-4">
          <svg
            className="w-32 h-32 mx-auto text-green-400"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Botón de acción */}
        <Link
          to="/login"
          className="inline-block w-full md:w-auto bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
        >
          {t.cta}
        </Link>
      </div>
    </div>
  );
}
