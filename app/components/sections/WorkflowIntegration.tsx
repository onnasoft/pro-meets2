import {
  Brain,
  Zap,
  RefreshCw,
  Target,
  CheckCircle,
  Rocket,
  BarChart3,
  ShieldCheck,
  Clock,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { Language } from "pro-meets-core";

const translations = {
  en: {
    title: "AI-Powered Project Matching Workflow",
    subtitle: "From project definition to perfect talent match, all in one intelligent platform",
    steps: [
      {
        title: "Project Definition",
        description: "Define your project requirements, skills needed, timeline, and budget using our intelligent templates.",
        automation: "AI-assisted requirement analysis",
        icon: <Target className="w-12 h-12" />
      },
      {
        title: "AI Talent Matching",
        description: "Our advanced algorithms analyze thousands of profiles to find the perfect match for your project.",
        automation: "95% match accuracy guarantee",
        icon: <Brain className="w-12 h-12" />
      },
      {
        title: "Skill Verification",
        description: "Automated technical assessments and portfolio review to ensure candidate quality and relevance.",
        automation: "Automated technical testing",
        icon: <ShieldCheck className="w-12 h-12" />
      },
      {
        title: "Availability Matching",
        description: "Smart scheduling that considers time zones, availability, and project deadlines for optimal collaboration.",
        automation: "Time zone optimization",
        icon: <Clock className="w-12 h-12" />
      },
      {
        title: "Project Kickoff",
        description: "Seamless onboarding with automated contract signing, project setup, and team introduction.",
        automation: "Automated onboarding workflow",
        icon: <Rocket className="w-12 h-12" />
      },
      {
        title: "Ongoing Management",
        description: "Integrated project tracking, communication tools, and quality assurance throughout the project lifecycle.",
        automation: "Real-time progress monitoring",
        icon: <BarChart3 className="w-12 h-12" />
      },
    ],
    benefits: [
      {
        title: "5x Faster Matching",
        description: "Find perfect talent in days instead of weeks",
        icon: <Zap className="w-5 h-5" />
      },
      {
        title: "40% Cost Reduction",
        description: "Optimized pricing and reduced recruitment overhead",
        icon: <CheckCircle className="w-5 h-5" />
      },
      {
        title: "98% Satisfaction",
        description: "Higher quality matches and successful project outcomes",
        icon: <Star className="w-5 h-5" />
      }
    ],
    ctaTitle: "Ready to Transform Your Project Recruitment?",
    ctaSubtitle: "Join thousands of companies that have found perfect talent matches through our AI-powered platform",
    ctaButton: "Start Your Project Now",
    ctaSecondary: "Watch Platform Demo"
  },
  es: {
    title: "Flujo de Matching con IA para Proyectos",
    subtitle: "Desde la definición del proyecto hasta el talento perfecto, todo en una plataforma inteligente",
    steps: [
      {
        title: "Definición del Proyecto",
        description: "Define los requisitos de tu proyecto, habilidades necesarias, timeline y presupuesto usando nuestras plantillas inteligentes.",
        automation: "Análisis de requisitos asistido por IA",
        icon: <Target className="w-6 h-6" />
      },
      {
        title: "Matching de Talento con IA",
        description: "Nuestros algoritmos avanzados analizan miles de perfiles para encontrar el match perfecto para tu proyecto.",
        automation: "95% de precisión en matching garantizada",
        icon: <Brain className="w-6 h-6" />
      },
      {
        title: "Verificación de Habilidades",
        description: "Evaluaciones técnicas automatizadas y revisión de portafolio para garantizar calidad y relevancia del candidato.",
        automation: "Pruebas técnicas automatizadas",
        icon: <ShieldCheck className="w-6 h-6" />
      },
      {
        title: "Matching de Disponibilidad",
        description: "Programación inteligente que considera zonas horarias, disponibilidad y deadlines para colaboración óptima.",
        automation: "Optimización de zona horaria",
        icon: <Clock className="w-6 h-6" />
      },
      {
        title: "Inicio del Proyecto",
        description: "Onboarding seamless con firma automatizada de contratos, configuración del proyecto e introducción al equipo.",
        automation: "Flujo de onboarding automatizado",
        icon: <Rocket className="w-6 h-6" />
      },
      {
        title: "Gestión Continua",
        description: "Seguimiento integrado del proyecto, herramientas de comunicación y control de calidad durante todo el ciclo de vida.",
        automation: "Monitoreo de progreso en tiempo real",
        icon: <BarChart3 className="w-6 h-6" />
      },
    ],
    benefits: [
      {
        title: "5x Más Rápido",
        description: "Encuentra talento perfecto en días en lugar de semanas",
        icon: <Zap className="w-5 h-5" />
      },
      {
        title: "40% Reducción de Costos",
        description: "Precios optimizados y reducción de gastos de reclutamiento",
        icon: <CheckCircle className="w-5 h-5" />
      },
      {
        title: "98% Satisfacción",
        description: "Matches de mayor calidad y resultados exitosos de proyectos",
        icon: <Star className="w-5 h-5" />
      }
    ],
    ctaTitle: "¿Listo para Transformar tu Reclutamiento de Proyectos?",
    ctaSubtitle: "Únete a miles de empresas que han encontrado matches perfectos de talento through nuestra plataforma con IA",
    ctaButton: "Comenzar Proyecto Ahora",
    ctaSecondary: "Ver Demo de la Plataforma"
  },
  fr: {
    title: "Workflow de Matching IA pour Projets",
    subtitle: "De la définition du projet au talent parfait, le tout dans une plateforme intelligente",
    steps: [
      {
        title: "Définition du Projet",
        description: "Définissez vos exigences de projet, compétences nécessaires, calendrier et budget grâce à nos modèles intelligents.",
        automation: "Analyse des exigences assistée par IA",
        icon: <Target className="w-6 h-6" />
      },
      {
        title: "Matching de Talent par IA",
        description: "Nos algorithmes avancés analysent des milliers de profils pour trouver le match parfait pour votre projet.",
        automation: "95% de précision de matching garantie",
        icon: <Brain className="w-6 h-6" />
      },
      {
        title: "Vérification des Compétences",
        description: "Évaluations techniques automatisées et revue de portfolio pour garantir qualité et pertinence des candidats.",
        automation: "Tests techniques automatisés",
        icon: <ShieldCheck className="w-6 h-6" />
      },
      {
        title: "Matching de Disponibilité",
        description: "Planification intelligente prenant en compte fuseaux horaires, disponibilité et délais pour une collaboration optimale.",
        automation: "Optimisation des fuseaux horaires",
        icon: <Clock className="w-6 h-6" />
      },
      {
        title: "Lancement du Projet",
        description: "Onboarding transparent avec signature automatisée de contrats, configuration du projet et présentation de l'équipe.",
        automation: "Workflow d'onboarding automatisé",
        icon: <Rocket className="w-6 h-6" />
      },
      {
        title: "Gestion Continue",
        description: "Suivi intégré de projet, outils de communication et contrôle qualité tout au long du cycle de vie.",
        automation: "Surveillance en temps réel des progrès",
        icon: <BarChart3 className="w-6 h-6" />
      },
    ],
    benefits: [
      {
        title: "5x Plus Rapide",
        description: "Trouvez des talents parfaits en jours au lieu de semaines",
        icon: <Zap className="w-5 h-5" />
      },
      {
        title: "40% Réduction de Coûts",
        description: "Tarification optimisée et frais de recrutement réduits",
        icon: <CheckCircle className="w-5 h-5" />
      },
      {
        title: "98% Satisfaction",
        description: "Matches de meilleure qualité et résultats de projet réussis",
        icon: <Star className="w-5 h-5" />
      }
    ],
    ctaTitle: "Prêt à Transformer Votre Recrutement de Projets ?",
    ctaSubtitle: "Rejoignez des milliers d'entreprises qui ont trouvé des matches de talent parfaits grâce à notre plateforme IA",
    ctaButton: "Commencer un Projet Maintenant",
    ctaSecondary: "Voir la Démo de la Plateforme"
  },
  jp: {
    title: "AIを活用したプロジェクトマッチングワークフロー",
    subtitle: "プロジェクト定義から完璧な人材マッチまで、すべてが智能プラットフォームで",
    steps: [
      {
        title: "プロジェクト定義",
        description: "智能テンプレートを使用して、プロジェクト要件、必要なスキル、タイムライン、予算を定義します。",
        automation: "AIを活用した要件分析",
        icon: <Target className="w-6 h-6" />
      },
      {
        title: "AI人材マッチング",
        description: "高度なアルゴリズムが数千のプロファイルを分析し、プロジェクトに最適なマッチを見つけます。",
        automation: "95%のマッチ精度保証",
        icon: <Brain className="w-6 h-6" />
      },
      {
        title: "スキル検証",
        description: "候補者の品質と関連性を確保するための自動化された技術評価とポートフォリオレビュー。",
        automation: "自動化された技術テスト",
        icon: <ShieldCheck className="w-6 h-6" />
      },
      {
        title: "可用性マッチング",
        description: "最適なコラボレーションのためのタイムゾーン、可用性、プロジェクト締切を考慮したスマートスケジューリング。",
        automation: "タイムゾーン最適化",
        icon: <Clock className="w-6 h-6" />
      },
      {
        title: "プロジェクトキックオフ",
        description: "自動化された契約締結、プロジェクト設定、チーム紹介によるシームレスなオンボーディング。",
        automation: "自動化されたオンボーディングワークフロー",
        icon: <Rocket className="w-6 h-6" />
      },
      {
        title: "継続的管理",
        description: "プロジェクトライフサイクル全体を通じた統合プロジェクト追跡、通信ツール、品質保証。",
        automation: "リアルタイム進捗監視",
        icon: <BarChart3 className="w-6 h-6" />
      },
    ],
    benefits: [
      {
        title: "5倍高速なマッチング",
        description: "数週間ではなく数日で完璧な人材を見つけます",
        icon: <Zap className="w-5 h-5" />
      },
      {
        title: "40%コスト削減",
        description: "最適化された価格設定と削減された採用経費",
        icon: <CheckCircle className="w-5 h-5" />
      },
      {
        title: "98%満足度",
        description: "より高い品質のマッチと成功したプロジェクト成果",
        icon: <Star className="w-5 h-5" />
      }
    ],
    ctaTitle: "プロジェクト採用を変える準備はできていますか？",
    ctaSubtitle: "当社のAI駆動プラットフォームを通じて完璧な人材マッチを見つけた何千もの企業に参加しましょう",
    ctaButton: "今すぐプロジェクトを開始",
    ctaSecondary: "プラットフォームデモを見る"
  },
  zh: {
    title: "AI驱动的项目匹配工作流程",
    subtitle: "从项目定义到完美人才匹配，全部在一个智能平台中完成",
    steps: [
      {
        title: "项目定义",
        description: "使用我们的智能模板定义项目需求、所需技能、时间表和预算。",
        automation: "AI辅助的需求分析",
        icon: <Target className="w-6 h-6" />
      },
      {
        title: "AI人才匹配",
        description: "我们的高级算法分析数千个档案，为您的项目找到完美匹配。",
        automation: "95%匹配准确率保证",
        icon: <Brain className="w-6 h-6" />
      },
      {
        title: "技能验证",
        description: "自动化技术评估和作品集审查，确保候选人质量和相关性。",
        automation: "自动化技术测试",
        icon: <ShieldCheck className="w-6 h-6" />
      },
      {
        title: "可用性匹配",
        description: "智能调度，考虑时区、可用性和项目截止日期，实现最佳协作。",
        automation: "时区优化",
        icon: <Clock className="w-6 h-6" />
      },
      {
        title: "项目启动",
        description: "无缝入职，包括自动化合同签署、项目设置和团队介绍。",
        automation: "自动化入职工作流程",
        icon: <Rocket className="w-6 h-6" />
      },
      {
        title: "持续管理",
        description: "集成项目跟踪、沟通工具和整个项目生命周期的质量保证。",
        automation: "实时进度监控",
        icon: <BarChart3 className="w-6 h-6" />
      },
    ],
    benefits: [
      {
        title: "5倍更快匹配",
        description: "在几天而不是几周内找到完美人才",
        icon: <Zap className="w-5 h-5" />
      },
      {
        title: "40%成本降低",
        description: "优化定价和减少招聘开销",
        icon: <CheckCircle className="w-5 h-5" />
      },
      {
        title: "98%满意度",
        description: "更高质量的匹配和成功的项目成果",
        icon: <Star className="w-5 h-5" />
      }
    ],
    ctaTitle: "准备好改变您的项目招聘了吗？",
    ctaSubtitle: "加入通过我们AI驱动平台找到完美人才匹配的数千家公司",
    ctaButton: "立即开始项目",
    ctaSecondary: "观看平台演示"
  },
};

interface WorkflowIntegrationProps {
  readonly language: Language;
}

export function WorkflowIntegration({ language }: WorkflowIntegrationProps) {
  const t = translations[language] || translations.en;

  return (
    <section id="workflow-integration" className="py-20 bg-gray-50">
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

        {/* Workflow Steps */}
        <div className="relative mb-16">
          {/* Connecting line */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all h-full group">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-lg text-primary-600 mb-4 transition-colors">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{step.description}</p>

                  <div className="flex items-center text-sm text-primary-600 font-medium">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    <span>{step.automation}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.benefits.map((benefit, index) => (
              <div key={benefit.title} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-600 mb-4">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}