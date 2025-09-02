import { Check, ChevronRight, Star, Zap, Users, Target, Building } from "lucide-react";
import { motion } from "framer-motion";
import { Language } from "@onnasoft/pro-meets-core";

const translations = {
  en: {
    title: "Flexible Pricing for Every Project Need",
    subtitle: "Pay for results, not just features. Scale as you grow with our AI-powered talent matching",
    plans: [
      {
        name: "Starter",
        icon: <Zap className="w-6 h-6" />,
        price: "Free",
        priceDescription: "Start with no commitment",
        description: "Perfect for testing our AI matching with small projects",
        cta: "Start Matching",
        popular: false,
        features: [
          "1 active project at a time",
          "Up to 3 talent matches per project",
          "Basic AI matching algorithm",
          "Standard skill verification",
          "Email support",
          "14-day premium feature trial"
        ],
        buttonVariant: "outline",
        bestFor: "Individual projects & testing"
      },
      {
        name: "Professional",
        icon: <Users className="w-6 h-6" />,
        price: "$299",
        priceDescription: "per project",
        description: "Ideal for growing businesses and multiple projects",
        cta: "Start Project",
        popular: true,
        features: [
          "3 active projects simultaneously",
          "Unlimited talent matches",
          "Advanced AI matching with ML",
          "Comprehensive skill verification",
          "Priority support & matching",
          "Project management tools",
          "Time zone optimization",
          "Quality assurance included"
        ],
        buttonVariant: "primary",
        bestFor: "Growing teams & agencies"
      },
      {
        name: "Enterprise",
        icon: <Building className="w-6 h-6" />,
        price: "Custom",
        priceDescription: "tailored solution",
        description: "Advanced features for large organizations and complex needs",
        cta: "Contact Sales",
        popular: false,
        features: [
          "Unlimited active projects",
          "Dedicated AI matching engine",
          "Enterprise-grade security & compliance",
          "Custom skill assessment pipelines",
          "Dedicated account manager",
          "SLA & performance guarantees",
          "Full API access & integrations",
          "Custom onboarding & training",
          "Advanced analytics & reporting"
        ],
        buttonVariant: "outline",
        bestFor: "Large enterprises & high-volume"
      },
    ],
    featuresTitle: "All plans include:",
    globalFeatures: [
      "AI-powered talent matching",
      "Secure platform with encryption",
      "Multi-language support",
      "Basic analytics dashboard",
      "Mobile accessibility"
    ],
    popularBadge: "MOST POPULAR",
    projectBased: "Project-based pricing",
    noHiddenFees: "No hidden fees · Cancel anytime",
    enterpriseNote: "Custom pricing for high-volume projects and special requirements"
  },
  es: {
    title: "Precios Flexibles para Cada Necesidad de Proyecto",
    subtitle: "Paga por resultados, no solo por características. Escala según creces con nuestro matching de talento con IA",
    plans: [
      {
        name: "Starter",
        icon: <Zap className="w-6 h-6" />,
        price: "Gratis",
        priceDescription: "Comienza sin compromiso",
        description: "Perfecto para probar nuestro matching con IA en proyectos pequeños",
        cta: "Comenzar Matching",
        popular: false,
        features: [
          "1 proyecto activo a la vez",
          "Hasta 3 matches de talento por proyecto",
          "Algoritmo básico de matching con IA",
          "Verificación estándar de habilidades",
          "Soporte por email",
          "Prueba de 14 días de features premium"
        ],
        buttonVariant: "outline",
        bestFor: "Proyectos individuales & testing"
      },
      {
        name: "Professional",
        icon: <Users className="w-6 h-6" />,
        price: "$299",
        priceDescription: "por proyecto",
        description: "Ideal para negocios en crecimiento y múltiples proyectos",
        cta: "Comenzar Proyecto",
        popular: true,
        features: [
          "3 proyectos activos simultáneamente",
          "Matches de talento ilimitados",
          "Matching avanzado con IA y ML",
          "Verificación comprehensiva de habilidades",
          "Soporte prioritario & matching",
          "Herramientas de gestión de proyectos",
          "Optimización de zona horaria",
          "Control de calidad incluido"
        ],
        buttonVariant: "primary",
        bestFor: "Equipos en crecimiento & agencias"
      },
      {
        name: "Enterprise",
        icon: <Building className="w-6 h-6" />,
        price: "Personalizado",
        priceDescription: "solución a medida",
        description: "Funciones avanzadas para grandes organizaciones y necesidades complejas",
        cta: "Contactar Ventas",
        popular: false,
        features: [
          "Proyectos activos ilimitados",
          "Motor de matching con IA dedicado",
          "Seguridad empresarial & cumplimiento",
          "Pipelines personalizados de evaluación",
          "Gerente de cuenta dedicado",
          "SLA & garantías de performance",
          "Acceso completo a API & integraciones",
          "Onboarding & entrenamiento personalizado",
          "Analíticas & reporting avanzados"
        ],
        buttonVariant: "outline",
        bestFor: "Grandes empresas & alto volumen"
      },
    ],
    featuresTitle: "Todos los planes incluyen:",
    globalFeatures: [
      "Matching de talento con IA",
      "Plataforma segura con encriptación",
      "Soporte multi-lenguaje",
      "Dashboard básico de analíticas",
      "Accesibilidad mobile"
    ],
    popularBadge: "MÁS POPULAR",
    projectBased: "Precios basados en proyectos",
    noHiddenFees: "Sin costos ocultos · Cancela cuando quieras",
    enterpriseNote: "Precios personalizados para proyectos de alto volumen y requisitos especiales"
  },
  fr: {
    title: "Tarification Flexible pour Chaque Besoin de Projet",
    subtitle: "Payez pour les résultats, pas seulement pour les fonctionnalités. Évoluez avec notre matching de talent alimenté par l'IA",
    plans: [
      {
        name: "Starter",
        icon: <Zap className="w-6 h-6" />,
        price: "Gratuit",
        priceDescription: "Commencez sans engagement",
        description: "Parfait pour tester notre matching IA avec de petits projets",
        cta: "Commencer le Matching",
        popular: false,
        features: [
          "1 projet actif à la fois",
          "Jusqu'à 3 matches de talent par projet",
          "Algorithme de matching IA de base",
          "Vérification standard des compétences",
          "Support par email",
          "Essai de 14 jours des fonctionnalités premium"
        ],
        buttonVariant: "outline",
        bestFor: "Projets individuels & tests"
      },
      {
        name: "Professional",
        icon: <Users className="w-6 h-6" />,
        price: "299€",
        priceDescription: "par projet",
        description: "Idéal pour les entreprises en croissance et les projets multiples",
        cta: "Commencer un Projet",
        popular: true,
        features: [
          "3 projets actifs simultanément",
          "Matches de talent illimités",
          "Matching avancé avec IA et ML",
          "Vérification complète des compétences",
          "Support prioritaire & matching",
          "Outils de gestion de projet",
          "Optimisation fuseau horaire",
          "Assurance qualité incluse"
        ],
        buttonVariant: "primary",
        bestFor: "Équipes en croissance & agences"
      },
      {
        name: "Enterprise",
        icon: <Building className="w-6 h-6" />,
        price: "Personnalisé",
        priceDescription: "solution sur mesure",
        description: "Fonctionnalités avancées pour les grandes organisations et besoins complexes",
        cta: "Contacter les Ventes",
        popular: false,
        features: [
          "Projets actifs illimités",
          "Moteur de matching IA dédié",
          "Sécurité entreprise & conformité",
          "Pipelines d'évaluation personnalisés",
          "Account manager dédié",
          "SLA & garanties de performance",
          "Accès API complet & intégrations",
          "Onboarding & formation personnalisés",
          "Analyses & reporting avancés"
        ],
        buttonVariant: "outline",
        bestFor: "Grandes entreprises & volume élevé"
      },
    ],
    featuresTitle: "Tous les plans incluent :",
    globalFeatures: [
      "Matching de talent par IA",
      "Plateforme sécurisée avec chiffrement",
      "Support multilingue",
      "Tableau de bord d'analyses de base",
      "Accessibilité mobile"
    ],
    popularBadge: "LE PLUS POPULAIRE",
    projectBased: "Tarification par projet",
    noHiddenFees: "Pas de frais cachés · Annulez à tout moment",
    enterpriseNote: "Tarification personnalisée pour projets volume élevé et exigences spéciales"
  },
  jp: {
    title: "あらゆるプロジェクトニーズに対応した柔軟な価格設定",
    subtitle: "機能だけでなく結果に対してお支払いください。AIを活用した人材マッチングで成長に合わせて拡張",
    plans: [
      {
        name: "スターター",
        icon: <Zap className="w-6 h-6" />,
        price: "無料",
        priceDescription: "コミットメントなしで開始",
        description: "小さなプロジェクトでAIマッチングをテストするのに最適",
        cta: "マッチングを開始",
        popular: false,
        features: [
          "同時に1つのアクティブプロジェクト",
          "プロジェクトごとに最大3つの人材マッチ",
          "基本AIマッチングアルゴリズム",
          "標準スキル検証",
          "メールサポート",
          "14日間プレミアム機能トライアル"
        ],
        buttonVariant: "outline",
        bestFor: "個人プロジェクト＆テスト"
      },
      {
        name: "プロフェッショナル",
        icon: <Users className="w-6 h-6" />,
        price: "¥35,000",
        priceDescription: "プロジェクトごと",
        description: "成長中のビジネスと複数プロジェクトに最適",
        cta: "プロジェクトを開始",
        popular: true,
        features: [
          "同時に3つのアクティブプロジェクト",
          "無制限の人材マッチ",
          "機械学習を活用した高度なAIマッチング",
          "包括的なスキル検証",
          "優先サポート＆マッチング",
          "プロジェクト管理ツール",
          "タイムゾーン最適化",
          "品質保証を含む"
        ],
        buttonVariant: "primary",
        bestFor: "成長中のチーム＆エージェンシー"
      },
      {
        name: "エンタープライズ",
        icon: <Building className="w-6 h-6" />,
        price: "カスタム",
        priceDescription: "カスタマイズソリューション",
        description: "大規模組織と複雑なニーズのための高度な機能",
        cta: "営業に連絡",
        popular: false,
        features: [
          "無制限のアクティブプロジェクト",
          "専用AIマッチングエンジン",
          "企業級セキュリティ＆コンプライアンス",
          "カスタムスキル評価パイプライン",
          "専任アカウントマネージャー",
          "SLA＆パフォーマンス保証",
          "完全なAPIアクセス＆統合",
          "カスタムオンボーディング＆トレーニング",
          "高度な分析＆レポート"
        ],
        buttonVariant: "outline",
        bestFor: "大企業＆高ボリューム"
      },
    ],
    featuresTitle: "すべてのプランに含まれるもの:",
    globalFeatures: [
      "AIを活用した人材マッチング",
      "暗号化による安全なプラットフォーム",
      "多言語サポート",
      "基本分析ダッシュボード",
      "モバイルアクセシビリティ"
    ],
    popularBadge: "最も人気",
    projectBased: "プロジェクトベースの価格設定",
    noHiddenFees: "隠れた費用なし · いつでもキャンセル可能",
    enterpriseNote: "高ボリュームプロジェクトと特別な要件のためのカスタム価格設定"
  },
  zh: {
    title: "满足每个项目需求的灵活定价",
    subtitle: "为结果付费，而不仅仅是功能。通过我们AI驱动的人才匹配随发展扩展",
    plans: [
      {
        name: "入门版",
        icon: <Zap className="w-6 h-6" />,
        price: "免费",
        priceDescription: "无承诺开始",
        description: "适合在小项目中测试我们的AI匹配",
        cta: "开始匹配",
        popular: false,
        features: [
          "同时1个活跃项目",
          "每个项目最多3个人才匹配",
          "基础AI匹配算法",
          "标准技能验证",
          "邮件支持",
          "14天高级功能试用"
        ],
        buttonVariant: "outline",
        bestFor: "个人项目 & 测试"
      },
      {
        name: "专业版",
        icon: <Users className="w-6 h-6" />,
        price: "¥1,999",
        priceDescription: "每个项目",
        description: "适合成长中的企业和多个项目",
        cta: "开始项目",
        popular: true,
        features: [
          "同时3个活跃项目",
          "无限人才匹配",
          "机器学习的先进AI匹配",
          "全面技能验证",
          "优先支持与匹配",
          "项目管理工具",
          "时区优化",
          "包含质量保证"
        ],
        buttonVariant: "primary",
        bestFor: "成长中的团队 & 机构"
      },
      {
        name: "企业版",
        icon: <Building className="w-6 h-6" />,
        price: "定制",
        priceDescription: "量身定制解决方案",
        description: "适合大型组织和复杂需求的高级功能",
        cta: "联系销售",
        popular: false,
        features: [
          "无限活跃项目",
          "专用AI匹配引擎",
          "企业级安全与合规",
          "定制技能评估流程",
          "专属客户经理",
          "SLA与性能保证",
          "完整API访问与集成",
          "定制入职与培训",
          "高级分析与报告"
        ],
        buttonVariant: "outline",
        bestFor: "大型企业 & 高量需求"
      },
    ],
    featuresTitle: "所有计划包含:",
    globalFeatures: [
      "AI驱动的人才匹配",
      "加密安全平台",
      "多语言支持",
      "基础分析仪表板",
      "移动可访问性"
    ],
    popularBadge: "最受欢迎",
    projectBased: "基于项目的定价",
    noHiddenFees: "无隐藏费用 · 随时取消",
    enterpriseNote: "高量项目和特殊需求的定制定价"
  },
};

interface PricingProps {
  readonly language: Language;
}

export function Pricing({ language }: PricingProps) {
  const t = translations[language] || translations.en;

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
          
          {/* Project-based pricing badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-4 inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
          >
            <Target className="w-4 h-4 mr-2" />
            {t.projectBased}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {t.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular
                  ? "border-2 border-primary-500 shadow-xl scale-105"
                  : "border border-gray-200 shadow-lg"
              } bg-white transition-all duration-300 hover:shadow-2xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-4 py-2 transform translate-x-2 -translate-y-2 rotate-12 flex items-center z-10">
                  <Star className="w-3 h-3 mr-1" />
                  {t.popularBadge}
                </div>
              )}

              <div className="p-8">
                {/* Plan Icon and Name */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mr-3">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{plan.priceDescription}</p>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm">{plan.description}</p>

                {/* Best For */}
                <div className="mb-6">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    Best for:
                  </span>
                  <p className="text-sm text-gray-700">{plan.bestFor}</p>
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors mb-6 ${
                    plan.buttonVariant === "primary"
                      ? "bg-primary-600 text-white hover:bg-primary-700 shadow-lg"
                      : "border border-primary-600 text-primary-600 hover:bg-primary-50"
                  }`}
                >
                  {plan.cta}
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Features List */}
                <div className="pt-6 border-t border-gray-200">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={feature} className="flex items-start">
                        <Check
                          className={`w-5 h-5 ${
                            plan.name === "Starter" && index > 2
                              ? "text-gray-400"
                              : "text-green-500"
                          } mt-0.5 mr-2 shrink-0`}
                        />
                        <span
                          className={`text-sm ${
                            plan.name === "Starter" && index > 2
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

        {/* Global Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            {t.featuresTitle}
          </h4>
          <div className="flex flex-wrap justify-center gap-4">
            {t.globalFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center px-4 py-2 bg-gray-100 rounded-lg text-gray-700 text-sm"
              >
                <Check className="w-4 h-4 text-green-500 mr-2" />
                {feature}
              </div>
            ))}
          </div>
          
          {/* Footer Notes */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-2">
              {t.noHiddenFees}
            </p>
            <p className="text-gray-400 text-xs">
              {t.enterpriseNote}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}