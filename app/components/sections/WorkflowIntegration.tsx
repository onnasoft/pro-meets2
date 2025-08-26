import {
  BadgeCheck,
  Zap,
  RefreshCw,
  Users,
  FileText,
  Calendar,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";
import { Language } from "pro-meets-core";

const translations = {
  en: {
    title: "Complete Automated Recruitment Workflow",
    subtitle: "From job posting to hiring, without switching platforms",
    steps: [
      {
        title: "Job Posting",
        description:
          "Create and publish job postings to multiple boards directly from the platform with optimized templates.",
        automation: "Auto-distribution to job boards",
      },
      {
        title: "Candidate Management",
        description:
          "Receive, organize and filter candidates automatically with AI and customizable criteria.",
        automation: "Automatic ranking by relevance",
      },
      {
        title: "Smart Scheduling",
        description:
          "Candidates select times based on your real availability without email exchanges.",
        automation: "Calendar synchronization",
      },
      {
        title: "Integrated Interviews",
        description:
          "Conduct video calls with automatic recording, transcription and real-time evaluation.",
        automation: "Position-specific interview kits",
      },
      {
        title: "Collaborative Decision",
        description:
          "Unified feedback system with scorecards and side-by-side candidate comparison.",
        automation: "Compatibility analysis",
      },
      {
        title: "Automated Onboarding",
        description:
          "Send offers, hire and integrate new employees with self-service digital flows.",
        automation: "Integrated e-signature",
      },
    ],
    ctaTitle: "Tired of using 5 different tools?",
    ctaSubtitle:
      "ProMeets unifies the entire process in a single platform designed specifically for technical recruitment",
    ctaButton: "View full demo",
  },
  es: {
    title: "Flujo Completo de Reclutamiento Automatizado",
    subtitle:
      "Desde la publicación hasta la contratación, sin cambiar de plataforma",
    steps: [
      {
        title: "Publicación de Vacantes",
        description:
          "Crea y publica vacantes en múltiples portales directamente desde la plataforma con plantillas optimizadas.",
        automation: "Auto-distribución a portales laborales",
      },
      {
        title: "Gestión de Candidatos",
        description:
          "Recibe, organiza y filtra candidatos automáticamente con IA y criterios personalizables.",
        automation: "Clasificación automática por relevancia",
      },
      {
        title: "Programación Inteligente",
        description:
          "Los candidatos seleccionan horarios basados en tu disponibilidad real sin intercambios de correos.",
        automation: "Sincronización con calendarios",
      },
      {
        title: "Entrevistas Integradas",
        description:
          "Realiza videollamadas con grabación automática, transcripción y evaluación en tiempo real.",
        automation: "Kits de entrevista por puesto",
      },
      {
        title: "Decisión Colaborativa",
        description:
          "Sistema unificado de feedback con scorecards y comparación lado a lado de candidatos.",
        automation: "Análisis de compatibilidad",
      },
      {
        title: "Onboarding Automatizado",
        description:
          "Envía ofertas, contrata e integra nuevos empleados con flujos digitales autogestionados.",
        automation: "Firma electrónica integrada",
      },
    ],
    ctaTitle: "¿Cansado de usar 5 herramientas diferentes?",
    ctaSubtitle:
      "ProMeets unifica todo el proceso en una sola plataforma diseñada específicamente para reclutamiento técnico",
    ctaButton: "Ver demostración completa",
  },
  fr: {
    title: "Processus de Recrutement Automatisé Complet",
    subtitle:
      "De la publication d'offre à l'embauche, sans changer de plateforme",
    steps: [
      {
        title: "Publication d'Offres",
        description:
          "Créez et publiez des offres d'emploi sur plusieurs plateformes directement depuis la plateforme avec des modèles optimisés.",
        automation: "Distribution automatique aux plateformes d'emploi",
      },
      {
        title: "Gestion des Candidats",
        description:
          "Recevez, organisez et filtrez les candidats automatiquement avec l'IA et des critères personnalisables.",
        automation: "Classement automatique par pertinence",
      },
      {
        title: "Planification Intelligente",
        description:
          "Les candidats sélectionnent des créneaux basés sur votre réelle disponibilité sans échanges d'emails.",
        automation: "Synchronisation avec les calendriers",
      },
      {
        title: "Entretiens Intégrés",
        description:
          "Effectuez des appels vidéo avec enregistrement automatique, transcription et évaluation en temps réel.",
        automation: "Kits d'entretien par poste",
      },
      {
        title: "Décision Collaborative",
        description:
          "Système unifié de feedback avec grilles d'évaluation et comparaison côte à côte des candidats.",
        automation: "Analyse de compatibilité",
      },
      {
        title: "Onboarding Automatisé",
        description:
          "Envoyez des offres, embauchez et intégrez de nouveaux employés avec des flux numériques en libre-service.",
        automation: "Signature électronique intégrée",
      },
    ],
    ctaTitle: "Fatigué d'utiliser 5 outils différents ?",
    ctaSubtitle:
      "ProMeets unifie l'ensemble du processus dans une seule plateforme conçue spécifiquement pour le recrutement technique",
    ctaButton: "Voir la démo complète",
  },
  jp: {
    title: "完全自動化された採用ワークフロー",
    subtitle: "求人掲載から採用まで、プラットフォームを切り替える必要なく",
    steps: [
      {
        title: "求人掲載",
        description:
          "最適化されたテンプレートでプラットフォームから直接複数の求人サイトに掲載を作成・公開。",
        automation: "求人サイトへの自動配信",
      },
      {
        title: "候補者管理",
        description:
          "AIとカスタマイズ可能な基準で候補者を自動的に受信、整理、フィルタリング。",
        automation: "関連性による自動ランキング",
      },
      {
        title: "スマートスケジューリング",
        description:
          "候補者がメールのやり取りなしで実際の空き時間に基づいて時間を選択。",
        automation: "カレンダー同期",
      },
      {
        title: "統合面接",
        description:
          "自動録画、文字起こし、リアルタイム評価付きのビデオ通話を実施。",
        automation: "職種別面接キット",
      },
      {
        title: "共同意思決定",
        description:
          "スコアカードと候補者の並列比較を備えた統一フィードバックシステム。",
        automation: "互換性分析",
      },
      {
        title: "自動化されたオンボーディング",
        description:
          "セルフサービスデジタルフローでオファー送信、採用、新入社員統合。",
        automation: "統合電子署名",
      },
    ],
    ctaTitle: "5つの異なるツールを使うのに疲れていませんか？",
    ctaSubtitle:
      "ProMeetsは技術採用に特化して設計された単一プラットフォームでプロセス全体を統合",
    ctaButton: "完全なデモを見る",
  },
  zh: {
    title: "完整的自动化招聘流程",
    subtitle: "从职位发布到招聘，无需切换平台",
    steps: [
      {
        title: "职位发布",
        description: "使用优化模板直接从平台创建并发布职位到多个招聘网站。",
        automation: "自动分发到招聘网站",
      },
      {
        title: "候选人管理",
        description: "通过AI和可自定义标准自动接收、组织和筛选候选人。",
        automation: "按相关性自动排名",
      },
      {
        title: "智能调度",
        description: "候选人根据您真实的可用时间选择时间，无需邮件往来。",
        automation: "日历同步",
      },
      {
        title: "集成面试",
        description: "进行视频通话，自动录制、转录和实时评估。",
        automation: "职位特定面试套件",
      },
      {
        title: "协作决策",
        description: "统一的反馈系统，带有评分卡和候选人并列比较。",
        automation: "兼容性分析",
      },
      {
        title: "自动化入职",
        description: "通过自助数字流程发送offer、招聘和整合新员工。",
        automation: "集成电子签名",
      },
    ],
    ctaTitle: "厌倦使用5种不同的工具？",
    ctaSubtitle: "ProMeets将整个流程统一在一个专为技术招聘设计的单一平台中",
    ctaButton: "查看完整演示",
  },
};

interface WorkflowIntegrationProps {
  readonly language: Language;
}

export function WorkflowIntegration({ language }: WorkflowIntegrationProps) {
  const t = translations[language] || translations.en;
  const icons = [
    <FileText key="filetext" className="w-8 h-8" />,
    <Users key="users" className="w-8 h-8" />,
    <Calendar key="calendar" className="w-8 h-8" />,
    <MessageSquare key="messagesquare" className="w-8 h-8" />,
    <BadgeCheck key="badgecheck" className="w-8 h-8" />,
    <Zap key="zap" className="w-8 h-8" />,
  ];

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

        <div className="relative">
          {/* Timeline decoration */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary-500 to-primary-300 transform -translate-x-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {t.steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${
                  index % 2 === 0
                    ? "lg:pr-8 lg:text-right"
                    : "lg:pl-8 lg:text-left"
                } ${index === 0 ? "lg:mt-0" : ""}`}
              >
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-full">
                  <div
                    className={`flex ${
                      index % 2 === 0 ? "lg:justify-end" : ""
                    } mb-4`}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-600">
                      {icons[index]}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
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

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {t.ctaTitle}
            </h3>
            <p className="text-xl mb-6">{t.ctaSubtitle}</p>
            <button className="px-8 py-3 bg-white text-primary-700 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
              {t.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
