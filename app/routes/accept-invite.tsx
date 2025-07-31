import { useState } from "react";
import { useLoaderData, Link, useActionData, useSubmit } from "@remix-run/react";
import { ActionFunction, json } from "@remix-run/node";
import { languageLoader } from "~/loaders/language";
import { CheckCircle, AlertCircle, User, Shield, Briefcase, XCircle } from "lucide-react";

export { languageLoader as loader } from "~/loaders/language";

const translations = {
  en: {
    title: "Organization Invitation",
    description: "You've been invited to join",
    roleLabel: "Role",
    acceptButton: "Accept Invitation",
    declineButton: "Decline",
    processing: "Processing...",
    successTitle: "Invitation Accepted!",
    successMessage: "You are now a member of",
    errorTitle: "Error",
    errorMessage: "There was a problem processing your request. Please try again.",
    loginRequired: "You need to be logged in to accept this invitation.",
    loginLink: "Log in",
    signupLink: "Create account",
    accountRequired: "Don't have an account?",
  },
  es: {
    title: "Invitación a Organización",
    description: "Has sido invitado a unirte a",
    roleLabel: "Rol",
    acceptButton: "Aceptar Invitación",
    declineButton: "Rechazar",
    processing: "Procesando...",
    successTitle: "¡Invitación Aceptada!",
    successMessage: "Ahora eres miembro de",
    errorTitle: "Error",
    errorMessage: "Hubo un problema al procesar tu solicitud. Por favor intenta nuevamente.",
    loginRequired: "Debes iniciar sesión para aceptar esta invitación.",
    loginLink: "Iniciar sesión",
    signupLink: "Crear cuenta",
    accountRequired: "¿No tienes una cuenta?",
  },
  fr: {
    title: "Invitation à une Organisation",
    description: "Vous avez été invité à rejoindre",
    roleLabel: "Rôle",
    acceptButton: "Accepter l'invitation",
    declineButton: "Refuser",
    processing: "Traitement en cours...",
    successTitle: "Invitation Acceptée !",
    successMessage: "Vous êtes maintenant membre de",
    errorTitle: "Erreur",
    errorMessage: "Un problème est survenu lors du traitement de votre demande. Veuillez réessayer.",
    loginRequired: "Vous devez être connecté pour accepter cette invitation.",
    loginLink: "Se connecter",
    signupLink: "Créer un compte",
    accountRequired: "Vous n'avez pas de compte ?",
  },
  jp: {
    title: "組織への招待",
    description: "次の組織に招待されています",
    roleLabel: "役割",
    acceptButton: "招待を受け入れる",
    declineButton: "拒否",
    processing: "処理中...",
    successTitle: "招待を受け入れました！",
    successMessage: "あなたは現在のメンバーです",
    errorTitle: "エラー",
    errorMessage: "リクエストの処理中に問題が発生しました。もう一度お試しください。",
    loginRequired: "この招待を受け入れるにはログインが必要です。",
    loginLink: "ログイン",
    signupLink: "アカウントを作成",
    accountRequired: "アカウントをお持ちではありませんか？",
  },
  zh: {
    title: "组织邀请",
    description: "您已被邀请加入",
    roleLabel: "角色",
    acceptButton: "接受邀请",
    declineButton: "拒绝",
    processing: "处理中...",
    successTitle: "邀请已接受！",
    successMessage: "您现在是的成员",
    errorTitle: "错误",
    errorMessage: "处理您的请求时出现问题。请再试一次。",
    loginRequired: "您需要登录才能接受此邀请。",
    loginLink: "登录",
    signupLink: "创建账户",
    accountRequired: "没有账户？",
  },
};

export const action: ActionFunction = async ({ request }) => {
  // Aquí iría la lógica para aceptar/rechazar la invitación
  // Por ahora simulamos una respuesta exitosa
  return json({ success: true });
};

export default function AcceptInvite() {
  const { language } = useLoaderData<typeof languageLoader>();
  const actionData = useActionData<typeof action>();
  const submit = useSubmit();
  const [isSubmitting, setIsSubmitting] = useState<"accept" | "decline" | null>(null);
  const [error, setError] = useState("");

  // Datos de ejemplo - reemplazar con datos reales de la invitación
  const inviteData = {
    organization: {
      name: "Tech Solutions Inc.",
      logo: "https://via.placeholder.com/150",
    },
    inviter: {
      name: "María García",
      email: "maria.garcia@example.com",
    },
    role: "Administrator",
    isAuthenticated: false, // Cambiar según el estado de autenticación
  };

  const t = translations[language] || translations.en;

  const handleAccept = async () => {
    setIsSubmitting("accept");
    setError("");
    
    const formData = new FormData();
    formData.append("action", "accept");
    
    submit(formData, { method: "post" });
  };

  const handleDecline = async () => {
    setIsSubmitting("decline");
    setError("");
    
    const formData = new FormData();
    formData.append("action", "decline");
    
    submit(formData, { method: "post" });
  };

  if (actionData?.success) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-primary-900">
            {t.successTitle}
          </h1>
          <p className="text-gray-600">
            {t.successMessage} <span className="font-semibold">{inviteData.organization.name}</span>
          </p>
          <div className="pt-4">
            <Link
              to="/dashboard"
              className="inline-block w-full md:w-auto bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
            >
              {t.loginLink}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!inviteData.isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-100 flex flex-col items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 mb-4">
              <User className="h-6 w-6 text-primary-600" />
            </div>
            <h1 className="text-2xl font-bold text-primary-900">{t.title}</h1>
            <p className="text-gray-600 mt-2">
              {t.loginRequired}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-3">
              <img 
                src={inviteData.organization.logo} 
                alt={inviteData.organization.name}
                className="h-10 w-10 rounded-md mr-3"
              />
              <div>
                <h3 className="font-medium">{inviteData.organization.name}</h3>
                <p className="text-sm text-gray-500">
                  {t.description} <span className="font-medium">{inviteData.organization.name}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <User className="h-4 w-4 mr-1" />
              <span>Invited by: {inviteData.inviter.name} ({inviteData.inviter.email})</span>
            </div>
            <div className="flex items-center text-sm text-gray-600 mt-1">
              {inviteData.role === "Administrator" ? (
                <Shield className="h-4 w-4 mr-1" />
              ) : (
                <Briefcase className="h-4 w-4 mr-1" />
              )}
              <span>{t.roleLabel}: {inviteData.role}</span>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              to={`/login?redirect=/accept-invite?token=FAKE_TOKEN`}
              className="block w-full text-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
            >
              {t.loginLink}
            </Link>
            <div className="text-center text-sm text-gray-500">
              {t.accountRequired}{" "}
              <Link
                to={`/signup?redirect=/invite?token=FAKE_TOKEN`}
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                {t.signupLink}
              </Link>
            </div>
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
            <User className="h-6 w-6 text-primary-600" />
          </div>
          <h1 className="text-2xl font-bold text-primary-900">{t.title}</h1>
          <p className="text-gray-600 mt-2">
            {t.description} <span className="font-semibold">{inviteData.organization.name}</span>
          </p>
        </div>

        {error && (
          <div className="p-4 bg-red-50 rounded-lg flex items-start">
            <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <img 
              src={inviteData.organization.logo} 
              alt={inviteData.organization.name}
              className="h-10 w-10 rounded-md mr-3"
            />
            <div>
              <h3 className="font-medium">{inviteData.organization.name}</h3>
              <p className="text-sm text-gray-500">Invited by: {inviteData.inviter.name}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-3 rounded-md border border-gray-200">
              <div className="flex items-center text-sm text-gray-600">
                <User className="h-4 w-4 mr-1" />
                <span>Inviter</span>
              </div>
              <p className="font-medium mt-1">{inviteData.inviter.name}</p>
              <p className="text-sm text-gray-500">{inviteData.inviter.email}</p>
            </div>
            
            <div className="bg-white p-3 rounded-md border border-gray-200">
              <div className="flex items-center text-sm text-gray-600">
                {inviteData.role === "Administrator" ? (
                  <Shield className="h-4 w-4 mr-1" />
                ) : (
                  <Briefcase className="h-4 w-4 mr-1" />
                )}
                <span>{t.roleLabel}</span>
              </div>
              <p className="font-medium mt-1">{inviteData.role}</p>
              <p className="text-sm text-gray-500">
                {inviteData.role === "Administrator" 
                  ? "Full access" 
                  : "Limited access"}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleDecline}
            disabled={!!isSubmitting}
            className={`flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting === "decline" ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-700"
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
              <>
                <XCircle className="h-4 w-4 mr-2" />
                {t.declineButton}
              </>
            )}
          </button>

          <button
            onClick={handleAccept}
            disabled={!!isSubmitting}
            className={`flex items-center justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 ${
              isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting === "accept" ? (
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
              <>
                <CheckCircle className="h-4 w-4 mr-2" />
                {t.acceptButton}
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}