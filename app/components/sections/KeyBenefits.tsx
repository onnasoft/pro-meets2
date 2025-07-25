import {
  CalendarCheck,
  Video,
  Users,
  Zap,
  ShieldCheck,
  BarChart2,
  Clock,
  Mail,
} from "lucide-react";
import { motion } from "framer-motion";
import { Language } from "~/utils/language";

const translations = {
  en: {
    title: "Revolutionize Your Recruitment Process",
    description:
      "Discover how ProMeets transforms every stage of recruitment with smart technology",
    benefits: [
      {
        icon: <CalendarCheck className="w-10 h-10 text-primary-600" />,
        title: "Smart Scheduling",
        description:
          "Automatic syncing with calendars and interviewer availability.",
        stats: "Save 5+ hours weekly",
      },
      {
        icon: <Video className="w-10 h-10 text-primary-600" />,
        title: "Integrated Video Calls",
        description:
          "All-in-one platform with virtual rooms, automatic recording, and transcription.",
        stats: "100% interviews without technical issues",
      },
      {
        icon: <Users className="w-10 h-10 text-primary-600" />,
        title: "Team Collaboration",
        description:
          "Collaborative evaluation system with real-time comments and standardized scoring.",
        stats: "Feedback 3x faster",
      },
      {
        icon: <Zap className="w-10 h-10 text-primary-600" />,
        title: "3x Faster Process",
        description: "Workflow automation and smart notifications.",
        stats: "Reduce time-to-hire by 65%",
      },
      {
        icon: <ShieldCheck className="w-10 h-10 text-primary-600" />,
        title: "Regulatory Compliance",
        description:
          "Complete record of all interactions for audits and policy compliance.",
        stats: "Data protection guaranteed",
      },
      {
        icon: <BarChart2 className="w-10 h-10 text-primary-600" />,
        title: "Advanced Analytics",
        description:
          "Dashboard with key recruitment process metrics for decision-making.",
        stats: "20+ key metrics",
      },
      {
        icon: <Clock className="w-10 h-10 text-primary-600" />,
        title: "24/7 Availability",
        description: "Platform accessible from any device, anytime.",
        stats: "99.9% uptime guaranteed",
      },
      {
        icon: <Mail className="w-10 h-10 text-primary-600" />,
        title: "Centralized Communication",
        description:
          "Integrated messaging and automatic notifications for candidates and teams.",
        stats: "Improves candidate experience",
      },
    ],
  },
  es: {
    title: "Revoluciona tu proceso de reclutamiento",
    description:
      "Descubre cómo ProMeets transforma cada etapa del reclutamiento con tecnología inteligente",
    benefits: [
      {
        icon: <CalendarCheck className="w-10 h-10 text-primary-600" />,
        title: "Agendamiento Inteligente",
        description:
          "Sincronización automática con calendarios y disponibilidad de entrevistadores.",
        stats: "Ahorra 5+ horas semanales",
      },
      {
        icon: <Video className="w-10 h-10 text-primary-600" />,
        title: "Videollamadas Integradas",
        description:
          "Plataforma todo-en-uno con salas virtuales, grabación automática y transcripción.",
        stats: "100% de entrevistas sin problemas técnicos",
      },
      {
        icon: <Users className="w-10 h-10 text-primary-600" />,
        title: "Colaboración en Equipo",
        description:
          "Sistema de evaluación colaborativa con comentarios en tiempo real y puntuación estandarizada.",
        stats: "Feedback 3x más rápido",
      },
      {
        icon: <Zap className="w-10 h-10 text-primary-600" />,
        title: "Proceso 3x Más Rápido",
        description:
          "Automatización de flujos de trabajo y notificaciones inteligentes.",
        stats: "Reduce el time-to-hire en un 65%",
      },
      {
        icon: <ShieldCheck className="w-10 h-10 text-primary-600" />,
        title: "Cumplimiento Normativo",
        description:
          "Registro completo de todas las interacciones para auditorías y cumplimiento de políticas.",
        stats: "Protección de datos garantizada",
      },
      {
        icon: <BarChart2 className="w-10 h-10 text-primary-600" />,
        title: "Analíticas Avanzadas",
        description:
          "Dashboard con métricas clave del proceso de reclutamiento y toma de decisiones.",
        stats: "20+ métricas clave",
      },
      {
        icon: <Clock className="w-10 h-10 text-primary-600" />,
        title: "Disponibilidad 24/7",
        description:
          "Plataforma accesible desde cualquier dispositivo, en cualquier momento.",
        stats: "99.9% uptime garantizado",
      },
      {
        icon: <Mail className="w-10 h-10 text-primary-600" />,
        title: "Comunicación Centralizada",
        description:
          "Mensajería integrada y notificaciones automáticas para candidatos y equipos.",
        stats: "Mejora la experiencia del candidato",
      },
    ],
  },
  fr: {
    title: "Révolutionnez votre processus de recrutement",
    description:
      "Découvrez comment ProMeets transforme chaque étape du recrutement avec une technologie intelligente",
    benefits: [
      {
        icon: <CalendarCheck className="w-10 h-10 text-primary-600" />,
        title: "Planification Intelligente",
        description:
          "Synchronisation automatique avec les calendriers et la disponibilité des intervieweurs.",
        stats: "Économisez 5+ heures par semaine",
      },
      {
        icon: <Video className="w-10 h-10 text-primary-600" />,
        title: "Appels Vidéo Intégrés",
        description:
          "Plateforme tout-en-un avec salles virtuelles, enregistrement automatique et transcription.",
        stats: "100% d'entretiens sans problèmes techniques",
      },
      {
        icon: <Users className="w-10 h-10 text-primary-600" />,
        title: "Collaboration d'Équipe",
        description:
          "Système d'évaluation collaborative avec commentaires en temps réel et notation standardisée.",
        stats: "Feedback 3x plus rapide",
      },
      {
        icon: <Zap className="w-10 h-10 text-primary-600" />,
        title: "Processus 3x Plus Rapide",
        description:
          "Automatisation des flux de travail et notifications intelligentes.",
        stats: "Réduit le time-to-hire de 65%",
      },
      {
        icon: <ShieldCheck className="w-10 h-10 text-primary-600" />,
        title: "Conformité Réglementaire",
        description:
          "Enregistrement complet de toutes les interactions pour audits et conformité aux politiques.",
        stats: "Protection des données garantie",
      },
      {
        icon: <BarChart2 className="w-10 h-10 text-primary-600" />,
        title: "Analytique Avancée",
        description:
          "Tableau de bord avec des métriques clés du processus de recrutement pour la prise de décision.",
        stats: "20+ métriques clés",
      },
      {
        icon: <Clock className="w-10 h-10 text-primary-600" />,
        title: "Disponibilité 24/7",
        description:
          "Plateforme accessible depuis n'importe quel appareil, à tout moment.",
        stats: "Uptime garanti de 99.9%",
      },
      {
        icon: <Mail className="w-10 h-10 text-primary-600" />,
        title: "Communication Centralisée",
        description:
          "Messagerie intégrée et notifications automatiques pour les candidats et les équipes.",
        stats: "Améliore l'expérience candidat",
      },
    ],
  },
  ja: {
    title: "採用プロセスを革新する",
    description: "ProMeetsが採用の各段階をスマートな技術で変革する方法を発見",
    benefits: [
      {
        icon: <CalendarCheck className="w-10 h-10 text-primary-600" />,
        title: "スマートスケジューリング",
        description: "カレンダーと面接官の空き時間を自動同期。",
        stats: "週に5時間以上節約",
      },
      {
        icon: <Video className="w-10 h-10 text-primary-600" />,
        title: "統合ビデオ通話",
        description:
          "バーチャルルーム、録画、自動文字起こしを備えたオールインワンプラットフォーム。",
        stats: "技術的な問題なしで100%の面接",
      },
      {
        icon: <Users className="w-10 h-10 text-primary-600" />,
        title: "チームコラボレーション",
        description:
          "リアルタイムのコメントと標準化されたスコアリングを備えた共同評価システム。",
        stats: "フィードバックが3倍速く",
      },
      {
        icon: <Zap className="w-10 h-10 text-primary-600" />,
        title: "プロセスが3倍速く",
        description: "ワークフローの自動化とスマート通知。",
        stats: "採用までの時間を65%短縮",
      },
      {
        icon: <ShieldCheck className="w-10 h-10 text-primary-600" />,
        title: "規制遵守",
        description:
          "監査とポリシー遵守のためのすべてのインタラクションの完全な記録。",
        stats: "データ保護が保証される",
      },
      {
        icon: <BarChart2 className="w-10 h-10 text-primary-600" />,
        title: "高度な分析",
        description:
          "意思決定のための主要な採用プロセスメトリを備えたダッシュボード。",
        stats: "20以上の主要メトリック",
      },
      {
        icon: <Clock className="w-10 h-10 text-primary-600" />,
        title: "24/7利用可能",
        description:
          "どのデバイスからでも、いつでもアクセス可能なプラットフォーム。",
        stats: "99.9%の稼働時間が保証される",
      },
      {
        icon: <Mail className="w-10 h-10 text-primary-600" />,
        title: "中央集中的なコミュニケーション",
        description: "候補者とチームのための統合メッセージングと自動通知。",
        stats: "候補者の体験を向上させる",
      },
    ],
  },
  zh: {
    title: "革新您的招聘流程",
    description: "了解ProMeets如何通过智能技术改变招聘的每个阶段",
    benefits: [
      {
        icon: <CalendarCheck className="w-10 h-10 text-primary-600" />,
        title: "智能调度",
        description: "自动与日历和面试官的可用性同步。",
        stats: "每周节省5小时以上",
      },
      {
        icon: <Video className="w-10 h-10 text-primary-600" />,
        title: "集成视频通话",
        description: "一体化平台，提供虚拟房间、自动录制和转录。",
        stats: "100%的面试无技术问题",
      },
      {
        icon: <Users className="w-10 h-10 text-primary-600" />,
        title: "团队协作",
        description: "具有实时评论和标准化评分的协作评估系统。",
        stats: "反馈速度提高3倍",
      },
      {
        icon: <Zap className="w-10 h-10 text-primary-600" />,
        title: "流程速度提高3倍",
        description: "工作流自动化和智能通知。",
        stats: "将招聘时间缩短65%",
      },
      {
        icon: <ShieldCheck className="w-10 h-10 text-primary-600" />,
        title: "合规性",
        description: "为审计和政策合规提供所有交互的完整记录。",
        stats: "数据保护有保障",
      },
      {
        icon: <BarChart2 className="w-10 h-10 text-primary-600" />,
        title: "高级分析",
        description: "提供关键招聘流程指标的仪表盘，以支持决策。",
        stats: "20+关键指标",
      },
      {
        icon: <Clock className="w-10 h-10 text-primary-600" />,
        title: "24/7可用性",
        description: "随时随地可从任何设备访问的平台。",
        stats: "99.9%的正常运行时间保证",
      },
      {
        icon: <Mail className="w-10 h-10 text-primary-600" />,
        title: "集中通信",
        description: "为候选人和团队提供集成消息和自动通知。",
        stats: "改善候选人体验",
      },
    ],
  },
};

interface KeyBenefitsProps {
  readonly language: Language;
}

export function KeyBenefits({ language }: KeyBenefitsProps) {
  const t = translations[language] || translations.en;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto"
          >
            {t.description}
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {t.benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-sm font-medium text-primary-600">
                  {benefit.stats}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sección adicional de estadísticas */}
        <div className="mt-24 bg-white rounded-2xl shadow-sm p-8 md:p-12 border border-gray-100 hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">
                300+
              </div>
              <p className="text-gray-600">Empresas confían en nosotros</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">
                50K+
              </div>
              <p className="text-gray-600">Entrevistas mensuales</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">
                65%
              </div>
              <p className="text-gray-600">
                Reducción en tiempo de contratación
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
