import { Cog, User, Shield, Bell, CreditCard, Globe } from "lucide-react";
import { useLoaderData } from "@remix-run/react";
import { languageLoader } from "~/loaders/language";

const translations = {
  en: {
    title: "Dashboard Settings",
    subtitle: "User settings and preferences",
    sections: {
      profile: "Profile",
      profileDescription: "Manage your personal information",
      security: "Security",
      securityDescription: "Password, 2FA and security settings",
      notifications: "Notifications",
      notificationsDescription: "Configure alerts and emails",
      billing: "Billing",
      billingDescription: "Payment methods and subscriptions",
      language: "Language",
      languageDescription: "Change interface language",
    },
  },
  es: {
    title: "Configuración del Dashboard",
    subtitle: "Ajustes y preferencias del usuario",
    sections: {
      profile: "Perfil",
      profileDescription: "Administra tu información personal",
      security: "Seguridad",
      securityDescription: "Contraseña, 2FA y ajustes de seguridad",
      notifications: "Notificaciones",
      notificationsDescription: "Configura alertas y correos",
      billing: "Facturación",
      billingDescription: "Métodos de pago y suscripciones",
      language: "Idioma",
      languageDescription: "Cambiar idioma de la interfaz",
    },
  },
  fr: {
    title: "Paramètres du Tableau de Bord",
    subtitle: "Préférences et paramètres utilisateur",
    sections: {
      profile: "Profil",
      profileDescription: "Gérez vos informations personnelles",
      security: "Sécurité",
      securityDescription: "Mot de passe, 2FA et paramètres de sécurité",
      notifications: "Notifications",
      notificationsDescription: "Configurer les alertes et e-mails",
      billing: "Facturation",
      billingDescription: "Moyens de paiement et abonnements",
      language: "Langue",
      languageDescription: "Changer la langue de l'interface",
    },
  },
  ja: {
    title: "ダッシュボード設定",
    subtitle: "ユーザー設定とプリファレンス",
    sections: {
      profile: "プロフィール",
      profileDescription: "個人情報の管理",
      security: "セキュリティ",
      securityDescription: "パスワード、2FAとセキュリティ設定",
      notifications: "通知",
      notificationsDescription: "アラートとメールの設定",
      billing: "請求",
      billingDescription: "支払い方法とサブスクリプション",
      language: "言語",
      languageDescription: "インターフェース言語の変更",
    },
  },
  zh: {
    title: "仪表板设置",
    subtitle: "用户设置和偏好",
    sections: {
      profile: "个人资料",
      profileDescription: "管理您的个人信息",
      security: "安全",
      securityDescription: "密码、双重认证和安全设置",
      notifications: "通知",
      notificationsDescription: "配置提醒和电子邮件",
      billing: "账单",
      billingDescription: "付款方式和订阅",
      language: "语言",
      languageDescription: "更改界面语言",
    },
  },
};

export { languageLoader as loader } from "~/loaders/language";

export default function SettingsPage() {
  const { language } = useLoaderData<typeof languageLoader>();
  const t = translations[language] || translations.en;

  const settingsSections = [
    {
      id: "profile",
      title: t.sections.profile,
      icon: <User className="h-5 w-5 text-primary-600" />,
      description: t.sections.profileDescription,
    },
    {
      id: "security",
      title: t.sections.security,
      icon: <Shield className="h-5 w-5 text-primary-600" />,
      description: t.sections.securityDescription,
    },
    {
      id: "notifications",
      title: t.sections.notifications,
      icon: <Bell className="h-5 w-5 text-primary-600" />,
      description: t.sections.notificationsDescription,
    },
    {
      id: "billing",
      title: t.sections.billing,
      icon: <CreditCard className="h-5 w-5 text-primary-600" />,
      description: t.sections.billingDescription,
    },
    {
      id: "language",
      title: t.sections.language,
      icon: <Globe className="h-5 w-5 text-primary-600" />,
      description: t.sections.languageDescription,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Cog className="h-8 w-8 text-primary-600" />
          <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
        </div>
        <p className="text-gray-600 mt-2">{t.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settingsSections.map((section) => (
          <a
            key={section.id}
            href={`/settings/${section.id}`}
            className="group block p-6 bg-white rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors duration-200">
                {section.icon}
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-primary-700 transition-colors duration-200">
                  {section.title}
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  {section.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
