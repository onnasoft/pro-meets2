import {
  Link,
  useOutletContext,
  useLoaderData,
  LoaderFunctionArgs,
} from "react-router";

import { User, Shield, Briefcase } from "lucide-react";
import { getAvatarUrl } from "~/utils/gravatar";
import { getOrganizationsMembers, Language, MemberRole } from "pro-meets-core";

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
    errorMessage:
      "There was a problem processing your request. Please try again.",
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
    errorMessage:
      "Hubo un problema al procesar tu solicitud. Por favor intenta nuevamente.",
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
    errorMessage:
      "Un problème est survenu lors du traitement de votre demande. Veuillez réessayer.",
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
    errorMessage:
      "リクエストの処理中に問題が発生しました。もう一度お試しください。",
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

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token") ?? "";

  if (!token) {
    throw new Response("Token is required", { status: 400 });
  }

  const organizationsMembers = await getOrganizationsMembers({
    where: { invitationToken: token },
    relations: ["organization", "organization.owner"],
    take: 1,
  });

  if (!organizationsMembers.length || !organizationsMembers?.[0].organization) {
    throw new Response("Invalid or expired invitation token", { status: 404 });
  }

  return {
    token,
    organization: organizationsMembers[0].organization,
    role: organizationsMembers[0].role,
  };
}

const redirectTo = "/dashboard/invitations";

export default function AcceptInvite() {
  const { language } = useOutletContext<{ language: Language }>();
  const { token, organization, role } = useLoaderData<typeof loader>();

  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-linear-to-b from-primary-50 to-primary-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 mb-4">
            <User className="h-6 w-6 text-primary-600" />
          </div>
          <h1 className="text-2xl font-bold text-primary-900">{t.title}</h1>
          <p className="text-gray-600 mt-2">{t.loginRequired}</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center mb-3">
            <img
              src={organization.logoUrl ?? getAvatarUrl(organization.owner)}
              alt={organization.name}
              className="h-10 w-10 rounded-md mr-3"
            />
            <div>
              <h3 className="font-medium">{organization.name}</h3>
              <p className="text-sm text-gray-500">
                {t.description}{" "}
                <span className="font-medium">{organization.name}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <User className="h-4 w-4 mr-1" />
            <span>
              Invited by: {organization.owner.name} ({organization.owner.email})
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            {role === MemberRole.ADMIN ? (
              <Shield className="h-4 w-4 mr-1" />
            ) : (
              <Briefcase className="h-4 w-4 mr-1" />
            )}
            <span>
              {t.roleLabel}: {role}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <Link
            to={`/login?redirect=${redirectTo}?token=${token}`}
            className="block w-full text-center py-2 px-4 border border-transparent rounded-lg shadow-xs text-sm font-medium text-white bg-primary-600 hover:bg-primary-700"
          >
            {t.loginLink}
          </Link>
          <div className="text-center text-sm text-gray-500">
            {t.accountRequired}{" "}
            <Link
              to={`/signup?redirect=${redirectTo}?token=${token}`}
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
