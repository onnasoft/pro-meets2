import { Check, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Language } from "pro-meets-core";

const PRICES = {
  FREE: "$0",
  PROFESSIONAL: "$29",
  ENTERPRISE: "$59",
};

const translations = {
  en: {
    title: "Simple per-user pricing",
    subtitle: "Pay only for what you need and scale with your team",
    plans: [
      {
        name: "Free",
        price: PRICES.FREE,
        userPrice: "forever free",
        description: "Perfect for trying out the platform",
        cta: "Sign up now",
        popular: false,
        features: [
          "1 user",
          "5 interviews/month",
          "Basic recording (40 min max)",
          "Simple scheduling",
          "Email support",
          "Community access",
        ],
        buttonVariant: "outline",
      },
      {
        name: "Professional",
        price: PRICES.PROFESSIONAL,
        userPrice: "per user/month",
        description: "For recruitment teams",
        cta: "Start free trial",
        popular: true,
        features: [
          "Unlimited users",
          "Unlimited interviews/user/month",
          "HD recording + transcription",
          "Collaborative evaluation",
          "ATS integrations",
          "Priority support",
          "Customizable templates",
        ],
        buttonVariant: "primary",
      },
      {
        name: "Enterprise",
        price: PRICES.ENTERPRISE,
        userPrice: "per user/month",
        description: "Advanced features for teams",
        cta: "View demo",
        popular: false,
        features: [
          "Everything in Professional +",
          "Unlimited interviews",
          "Advanced analytics",
          "SSO & enterprise security",
          "Dedicated onboarding",
          "Full API access",
          "99.9% uptime SLA",
        ],
        buttonVariant: "outline",
      },
    ],
    includes: "Includes:",
    popularBadge: "POPULAR",
  },
  es: {
    title: "Precios simples por usuario",
    subtitle: "Paga solo por lo que necesitas y escala con tu equipo",
    plans: [
      {
        name: "Gratis",
        price: PRICES.FREE,
        userPrice: "siempre gratis",
        description: "Perfecto para probar la plataforma",
        cta: "Regístrate ahora",
        popular: false,
        features: [
          "1 usuario",
          "5 entrevistas/mes",
          "Grabación básica (40 min máx)",
          "Agendamiento simple",
          "Soporte por email",
          "Acceso a la comunidad",
        ],
        buttonVariant: "outline",
      },
      {
        name: "Profesional",
        price: PRICES.PROFESSIONAL,
        userPrice: "por usuario/mes",
        description: "Para equipos de reclutamiento",
        cta: "Comenzar prueba gratis",
        popular: true,
        features: [
          "Usuarios ilimitados",
          "50 entrevistas/usuario/mes",
          "Grabación HD + transcripción",
          "Evaluación colaborativa",
          "Integraciones con ATS",
          "Soporte prioritario",
          "Plantillas personalizables",
        ],
        buttonVariant: "primary",
      },
      {
        name: "Empresa",
        price: PRICES.ENTERPRISE,
        userPrice: "por usuario/mes",
        description: "Funciones avanzadas para equipos",
        cta: "Ver demostración",
        popular: false,
        features: [
          "Todo en Profesional +",
          "Entrevistas ilimitadas",
          "Analíticas avanzadas",
          "SSO y seguridad empresarial",
          "Onboarding dedicado",
          "API completa",
          "SLA 99.9% uptime",
        ],
        buttonVariant: "outline",
      },
    ],
    includes: "Incluye:",
    popularBadge: "POPULAR",
  },
  fr: {
    title: "Tarification simple par utilisateur",
    subtitle:
      "Payez seulement ce dont vous avez besoin et évoluez avec votre équipe",
    plans: [
      {
        name: "Gratuit",
        price: PRICES.FREE,
        userPrice: "toujours gratuit",
        description: "Parfait pour essayer la plateforme",
        cta: "S'inscrire maintenant",
        popular: false,
        features: [
          "1 utilisateur",
          "5 entretiens/mois",
          "Enregistrement basique (40 min max)",
          "Planification simple",
          "Support par email",
          "Accès à la communauté",
        ],
        buttonVariant: "outline",
      },
      {
        name: "Professionnel",
        price: PRICES.PROFESSIONAL,
        userPrice: "par utilisateur/mois",
        description: "Pour les équipes de recrutement",
        cta: "Commencer l'essai gratuit",
        popular: true,
        features: [
          "Utilisateurs illimités",
          "50 entretiens/utilisateur/mois",
          "Enregistrement HD + transcription",
          "Évaluation collaborative",
          "Intégrations ATS",
          "Support prioritaire",
          "Modèles personnalisables",
        ],
        buttonVariant: "primary",
      },
      {
        name: "Entreprise",
        price: PRICES.ENTERPRISE,
        userPrice: "par utilisateur/mois",
        description: "Fonctionnalités avancées pour les équipes",
        cta: "Voir la démo",
        popular: false,
        features: [
          "Tout dans Professionnel +",
          "Entretiens illimités",
          "Analyses avancées",
          "SSO & sécurité entreprise",
          "Onboarding dédié",
          "Accès API complet",
          "SLA 99.9% de disponibilité",
        ],
        buttonVariant: "outline",
      },
    ],
    includes: "Inclus :",
    popularBadge: "POPULAIRE",
  },
  jp: {
    title: "シンプルな従量課金制",
    subtitle: "必要な分だけ支払い、チームとともにスケール",
    plans: [
      {
        name: "無料",
        price: PRICES.FREE,
        userPrice: "永久無料",
        description: "プラットフォームをお試しに最適",
        cta: "今すぐ登録",
        popular: false,
        features: [
          "1ユーザー",
          "月5回の面接",
          "基本録画（最大40分）",
          "簡単スケジューリング",
          "メールサポート",
          "コミュニティアクセス",
        ],
        buttonVariant: "outline",
      },
      {
        name: "プロフェッショナル",
        price: PRICES.PROFESSIONAL,
        userPrice: "ユーザー/月",
        description: "採用チーム向け",
        cta: "無料トライアルを開始",
        popular: true,
        features: [
          "無制限ユーザー",
          "月50回の面接/ユーザー",
          "HD録画 + 文字起こし",
          "共同評価",
          "ATS連携",
          "優先サポート",
          "カスタマイズ可能なテンプレート",
        ],
        buttonVariant: "primary",
      },
      {
        name: "エンタープライズ",
        price: PRICES.ENTERPRISE,
        userPrice: "ユーザー/月",
        description: "チーム向け高度な機能",
        cta: "デモを見る",
        popular: false,
        features: [
          "プロフェッショナルプランの全機能 +",
          "無制限の面接",
          "高度な分析",
          "SSO & 企業セキュリティ",
          "専任オンボーディング",
          "完全なAPIアクセス",
          "99.9% 稼働率SLA",
        ],
        buttonVariant: "outline",
      },
    ],
    includes: "含まれるもの:",
    popularBadge: "人気",
  },
  zh: {
    title: "简单的按用户定价",
    subtitle: "只为需要的功能付费，随团队规模扩展",
    plans: [
      {
        name: "免费",
        price: PRICES.FREE,
        userPrice: "永久免费",
        description: "适合试用平台",
        cta: "立即注册",
        popular: false,
        features: [
          "1个用户",
          "每月5次面试",
          "基础录制（最多40分钟）",
          "简单安排",
          "邮件支持",
          "社区访问",
        ],
        buttonVariant: "outline",
      },
      {
        name: "专业版",
        price: PRICES.PROFESSIONAL,
        userPrice: "每用户/月",
        description: "适合招聘团队",
        cta: "开始免费试用",
        popular: true,
        features: [
          "无限用户",
          "每月50次面试/用户",
          "高清录制+转录",
          "协作评估",
          "ATS集成",
          "优先支持",
          "可定制模板",
        ],
        buttonVariant: "primary",
      },
      {
        name: "企业版",
        price: PRICES.ENTERPRISE,
        userPrice: "每用户/月",
        description: "适合团队的高级功能",
        cta: "查看演示",
        popular: false,
        features: [
          "包含专业版所有功能 +",
          "无限次面试",
          "高级分析",
          "SSO和企业安全",
          "专属入职指导",
          "完整API访问",
          "99.9%正常运行时间SLA",
        ],
        buttonVariant: "outline",
      },
    ],
    includes: "包含:",
    popularBadge: "热门",
  },
};

interface PricingProps {
  readonly language: Language;
}

export function Pricing({ language }: PricingProps) {
  const t = translations[language] || translations.en;

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular
                  ? "border-2 border-primary-500 shadow-lg"
                  : "border border-gray-200"
              } bg-white`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-4 py-1 transform translate-x-2 -translate-y-2 rotate-12 flex items-center">
                  <Star className="w-3 h-3 mr-1" />
                  {t.popularBadge}
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-end mb-1">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{plan.userPrice}</p>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors mb-6 ${
                    plan.buttonVariant === "primary"
                      ? "bg-gradient-to-r from-primary-600 to-primary-700 text-white hover:from-primary-700 hover:to-primary-800"
                      : "border border-primary-600 text-primary-600 hover:bg-primary-50"
                  }`}
                >
                  {plan.cta}
                  {plan.buttonVariant !== "primary" && (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </button>

                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    {t.includes}
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={feature} className="flex items-start">
                        <Check
                          className={`w-5 h-5 ${
                            plan.name === t.plans[0].name
                              ? "text-gray-400"
                              : "text-green-500"
                          } mt-0.5 mr-2 flex-shrink-0`}
                        />
                        <span
                          className={`${
                            plan.name === t.plans[0].name && index > 2
                              ? "text-gray-400"
                              : "text-gray-700"
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
