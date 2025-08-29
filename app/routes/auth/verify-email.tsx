import { verifyEmail } from "pro-meets-core";
import { LoaderFunctionArgs, Link, useLoaderData } from "react-router";
import { languageLoader } from "~/loaders/language";

const translations = {
  en: {
    title: "Email Verified!",
    message: "Your email address has been successfully verified.",
    additionalText: "You can now access all features of ProMeets.",
    cta: "Go to Dashboard",
    errorTitle: "Verification Failed",
    errorMessage: "We couldn't verify your email address.",
    errorReason: "The verification link may be invalid or expired.",
    errorCta: "Request New Verification",
    supportText: "Need help? Contact our support team",
  },
  es: {
    title: "¡Email Verificado!",
    message: "Tu dirección de correo ha sido verificada exitosamente.",
    additionalText: "Ahora puedes acceder a todas las funciones de ProMeets.",
    cta: "Ir al Panel",
    errorTitle: "Verificación Fallida",
    errorMessage: "No pudimos verificar tu dirección de correo electrónico.",
    errorReason: "El enlace de verificación puede ser inválido o haber expirado.",
    errorCta: "Solicitar Nueva Verificación",
    supportText: "¿Necesitas ayuda? Contacta a nuestro equipo de soporte",
  },
  fr: {
    title: "Email Vérifié !",
    message: "Votre adresse email a été vérifiée avec succès.",
    additionalText:
      "Vous pouvez maintenant accéder à toutes les fonctionnalités de ProMeets.",
    cta: "Aller au Tableau de Bord",
    errorTitle: "Échec de la Vérification",
    errorMessage: "Nous n'avons pas pu vérifier votre adresse email.",
    errorReason: "Le lien de vérification est peut-être invalide ou expiré.",
    errorCta: "Demander une Nouvelle Vérification",
    supportText: "Besoin d'aide? Contactez notre équipe de support",
  },
  jp: {
    title: "メール認証完了！",
    message: "メールアドレスの確認が完了しました。",
    additionalText: "ProMeetsの全機能をご利用いただけます。",
    cta: "ダッシュボードへ",
    errorTitle: "認証失敗",
    errorMessage: "メールアドレスの確認ができませんでした。",
    errorReason: "確認リンクが無効か、期限切れの可能性があります。",
    errorCta: "新しい確認メールをリクエスト",
    supportText: "お困りですか？サポートチームまでお問い合わせください",
  },
  zh: {
    title: "邮箱已验证！",
    message: "您的电子邮件地址已成功验证。",
    additionalText: "您现在可以访问ProMeets的所有功能。",
    cta: "前往仪表板",
    errorTitle: "验证失败",
    errorMessage: "我们无法验证您的电子邮件地址。",
    errorReason: "验证链接可能无效或已过期。",
    errorCta: "请求新的验证",
    supportText: "需要帮助？联系我们的支持团队",
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
    return { success: false, language }
  }

  const isValid = await verifyEmail(token);

  return { success: isValid, language };
};

export default function EmailVerified() {
  const { language, success } = useLoaderData<typeof loader>();
  const t = translations[language] || translations.en;

  if (!success) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-red-100 flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6 text-center">
          {/* Icono de error */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          {/* Título y mensaje de error */}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-red-900">{t.errorTitle}</h1>
            <p className="text-gray-600">{t.errorMessage}</p>
            <p className="text-gray-600 font-medium">{t.errorReason}</p>
          </div>

          {/* Ilustración decorativa */}
          <div className="py-4">
            <svg
              className="w-32 h-32 mx-auto text-red-400"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9V11M12 15H12.01M5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Botones de acción */}
          <div className="space-y-3">
            <Link
              to="/resend-verification-email"
              className="inline-block w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
            >
              {t.errorCta}
            </Link>
            <Link
              to="/login"
              className="inline-block w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-6 rounded-lg transition duration-200"
            >
              {t.cta}
            </Link>
          </div>

          {/* Enlace de soporte */}
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              {t.supportText}{' '}
              <Link to="/support" className="text-red-600 hover:text-red-700 font-medium">
                support@example.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

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