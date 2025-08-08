import { useState } from "react";
import { useLoaderData, Link, useSearchParams } from "react-router";
import { ActionFunction } from "react-router";
import { languageLoader } from "~/loaders/language";
import { resetPassword } from "~/services/auth";
import { CheckCircle, AlertCircle, Lock } from "lucide-react";

export { languageLoader as loader } from "~/loaders/language";

const translations = {
  en: {
    title: "Reset your password",
    description: "Create a new password for your account",
    passwordLabel: "New Password",
    confirmPasswordLabel: "Confirm New Password",
    passwordPlaceholder: "Enter your new password",
    confirmPasswordPlaceholder: "Re-enter your new password",
    submitButton: "Reset Password",
    processing: "Processing...",
    passwordRequirements: "Password must be at least 8 characters long",
    passwordsDontMatch: "Passwords don't match",
    invalidToken: "Invalid or expired reset token",
    successTitle: "Password reset!",
    successMessage: "Your password has been successfully updated.",
    errorTitle: "Error",
    errorMessage:
      "There was a problem resetting your password. Please try again.",
    loginLink: "Return to login",
  },
  es: {
    title: "Restablecer contraseña",
    description: "Crea una nueva contraseña para tu cuenta",
    passwordLabel: "Nueva Contraseña",
    confirmPasswordLabel: "Confirmar Nueva Contraseña",
    passwordPlaceholder: "Ingresa tu nueva contraseña",
    confirmPasswordPlaceholder: "Vuelve a ingresar tu nueva contraseña",
    submitButton: "Restablecer Contraseña",
    processing: "Procesando...",
    passwordRequirements: "La contraseña debe tener al menos 8 caracteres",
    passwordsDontMatch: "Las contraseñas no coinciden",
    invalidToken: "Token de restablecimiento inválido o expirado",
    successTitle: "¡Contraseña restablecida!",
    successMessage: "Tu contraseña ha sido actualizada exitosamente.",
    errorTitle: "Error",
    errorMessage:
      "Hubo un problema al restablecer tu contraseña. Por favor intenta nuevamente.",
    loginLink: "Volver al inicio de sesión",
  },
  fr: {
    title: "Réinitialiser votre mot de passe",
    description: "Créez un nouveau mot de passe pour votre compte",
    passwordLabel: "Nouveau mot de passe",
    confirmPasswordLabel: "Confirmer le nouveau mot de passe",
    passwordPlaceholder: "Entrez votre nouveau mot de passe",
    confirmPasswordPlaceholder: "Entrez à nouveau votre nouveau mot de passe",
    submitButton: "Réinitialiser le mot de passe",
    processing: "Traitement en cours...",
    passwordRequirements: "Le mot de passe doit contenir au moins 8 caractères",
    passwordsDontMatch: "Les mots de passe ne correspondent pas",
    invalidToken: "Jeton de réinitialisation invalide ou expiré",
    successTitle: "Mot de passe réinitialisé !",
    successMessage: "Votre mot de passe a été mis à jour avec succès.",
    errorTitle: "Erreur",
    errorMessage:
      "Un problème est survenu lors de la réinitialisation de votre mot de passe. Veuillez réessayer.",
    loginLink: "Retour à la connexion",
  },
  jp: {
    title: "パスワードをリセット",
    description: "アカウントの新しいパスワードを作成してください",
    passwordLabel: "新しいパスワード",
    confirmPasswordLabel: "新しいパスワードを確認",
    passwordPlaceholder: "新しいパスワードを入力してください",
    confirmPasswordPlaceholder: "新しいパスワードを再入力してください",
    submitButton: "パスワードをリセット",
    processing: "処理中...",
    passwordRequirements: "パスワードは8文字以上である必要があります",
    passwordsDontMatch: "パスワードが一致しません",
    invalidToken: "無効または期限切れのリセットトークン",
    successTitle: "パスワードがリセットされました！",
    successMessage: "パスワードが正常に更新されました。",
    errorTitle: "エラー",
    errorMessage:
      "パスワードのリセット中に問題が発生しました。もう一度お試しください。",
    loginLink: "ログインに戻る",
  },
  zh: {
    title: "重置密码",
    description: "为您的帐户创建新密码",
    passwordLabel: "新密码",
    confirmPasswordLabel: "确认新密码",
    passwordPlaceholder: "输入您的新密码",
    confirmPasswordPlaceholder: "再次输入您的新密码",
    submitButton: "重置密码",
    processing: "处理中...",
    passwordRequirements: "密码长度至少为8个字符",
    passwordsDontMatch: "密码不匹配",
    invalidToken: "无效或过期的重置令牌",
    successTitle: "密码已重置！",
    successMessage: "您的密码已成功更新。",
    errorTitle: "错误",
    errorMessage: "重置密码时出现问题。请再试一次。",
    loginLink: "返回登录",
  },
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const token = formData.get("token") as string;

  // Get language for error messages
  const language = (await languageLoader({ request, context: {}, params: {} }))
    .language;
  const t = translations[language] || translations.en;

  // Validate token exists
  if (!token) {
    return new Response(JSON.stringify({ error: t.invalidToken }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Validate passwords match
  if (password !== confirmPassword) {
    return new Response(JSON.stringify({ error: t.passwordsDontMatch }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Validate password length
  if (password.length < 8) {
    return new Response(JSON.stringify({ error: t.passwordRequirements }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    await resetPassword(token, password);
    return { success: true };
  } catch {
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

export default function ResetPassword() {
  const { language } = useLoaderData<typeof languageLoader>();
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const t = translations[language] || translations.en;
  const token = searchParams.get("token");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setStatus("idle");

    // Client-side validation
    if (!token) {
      setError(t.invalidToken);
      return;
    }

    if (password !== confirmPassword) {
      setError(t.passwordsDontMatch);
      return;
    }

    if (password.length < 8) {
      setError(t.passwordRequirements);
      return;
    }

    setIsSubmitting(true);
    try {
      await resetPassword(token, password);
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
            <Lock className="h-6 w-6 text-primary-600" />
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

        {!token && (
          <div className="p-4 bg-red-50 rounded-lg flex items-start">
            <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
            <p className="text-sm text-red-700">{t.invalidToken}</p>
          </div>
        )}

        {token && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.passwordLabel}
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder={t.passwordPlaceholder}
                required
                minLength={8}
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.confirmPasswordLabel}
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                placeholder={t.confirmPasswordPlaceholder}
                required
                minLength={8}
              />
            </div>

            {error && status !== "error" && (
              <div className="text-sm text-error-600 bg-error-50 p-2 rounded-lg">
                {error}
              </div>
            )}

            <input type="hidden" name="token" value={token || ""} />

            <button
              type="submit"
              disabled={isSubmitting || !token}
              className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                isSubmitting || !token ? "opacity-75 cursor-not-allowed" : ""
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
        )}

        <div className="text-center text-sm text-gray-500">
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
