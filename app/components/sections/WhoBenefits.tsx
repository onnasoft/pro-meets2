import { Building, UserCheck, Users, Clock, BarChart2 } from "lucide-react";
import { motion } from "framer-motion";
import { Language } from "~/utils/language";

const translations = {
  en: {
    title: "Who benefits from ProMeets?",
    subtitle:
      "Designed specifically for the needs of technical and high-growth teams",
    beneficiaries: [
      {
        title: "Tech Companies",
        description:
          "Hire developers and technical profiles 3x faster with our specialized workflow.",
        stats: "65% reduction in time-to-hire",
      },
      {
        title: "TA Teams",
        description:
          "Automate 80% of repetitive tasks and focus on strategy and candidate experience.",
        stats: "40+ hours saved monthly",
      },
      {
        title: "Hiring Teams",
        description:
          "Make collaborative decisions with standardized evaluation and side-by-side comparison.",
        stats: "60% fewer follow-up meetings",
      },
      {
        title: "Growing Startups",
        description:
          "Scale your hiring process without increasing your People Ops team.",
        stats: "2x more hires with same team",
      },
      {
        title: "HR Leaders",
        description:
          "Access real-time dashboards with key metrics from the entire hiring funnel.",
        stats: "30% improvement in hiring quality",
      },
    ],
    ctaTitle: "Don't see your use case?",
    ctaDescription:
      "We've helped more than 20 different industries optimize their recruitment.",
    ctaButton: "Talk to a specialist",
  },
  es: {
    title: "¿Quién se beneficia con ProMeets?",
    subtitle:
      "Diseñado específicamente para las necesidades de equipos técnicos y de alto crecimiento",
    beneficiaries: [
      {
        title: "Empresas de Tecnología",
        description:
          "Contrata desarrolladores y perfiles técnicos 3x más rápido con nuestro flujo especializado.",
        stats: "Reducción de 65% en time-to-hire",
      },
      {
        title: "Equipos de TA",
        description:
          "Automatiza el 80% de tareas repetitivas y enfócate en la estrategia y experiencia del candidato.",
        stats: "40+ horas ahorradas mensualmente",
      },
      {
        title: "Equipos de Contratación",
        description:
          "Toma decisiones colaborativas con evaluación estandarizada y comparación lado a lado.",
        stats: "60% menos reuniones de seguimiento",
      },
      {
        title: "Startups en Crecimiento",
        description:
          "Escala tu proceso de contratación sin aumentar tu equipo de People Ops.",
        stats: "2x más contrataciones con mismo equipo",
      },
      {
        title: "Líderes de RH",
        description:
          "Acceso a dashboards en tiempo real con métricas clave de todo el funnel de contratación.",
        stats: "30% mejora en calidad de contratación",
      },
    ],
    ctaTitle: "¿No ves tu caso de uso?",
    ctaDescription:
      "Hemos ayudado a más de 20 industrias diferentes a optimizar su reclutamiento.",
    ctaButton: "Hablar con un especialista",
  },
  fr: {
    title: "Qui bénéficie de ProMeets ?",
    subtitle:
      "Conçu spécifiquement pour les besoins des équipes techniques et à croissance rapide",
    beneficiaries: [
      {
        title: "Entreprises Technologiques",
        description:
          "Embauchez des développeurs et profils techniques 3x plus vite avec notre flux spécialisé.",
        stats: "Réduction de 65% du délai d'embauche",
      },
      {
        title: "Équipes de Recrutement",
        description:
          "Automatisez 80% des tâches répétitives et concentrez-vous sur la stratégie et l'expérience candidat.",
        stats: "40+ heures économisées mensuellement",
      },
      {
        title: "Équipes d'Embauche",
        description:
          "Prenez des décisions collaboratives avec évaluation standardisée et comparaison côte à côte.",
        stats: "60% moins de réunions de suivi",
      },
      {
        title: "Startups en Croissance",
        description:
          "Étendez votre processus d'embauche sans augmenter votre équipe People Ops.",
        stats: "2x plus d'embauches avec la même équipe",
      },
      {
        title: "Responsables RH",
        description:
          "Accédez à des tableaux de bord en temps réel avec les métriques clés de tout l'entonnoir de recrutement.",
        stats: "30% d'amélioration de la qualité d'embauche",
      },
    ],
    ctaTitle: "Vous ne voyez pas votre cas d'utilisation ?",
    ctaDescription:
      "Nous avons aidé plus de 20 industries différentes à optimiser leur recrutement.",
    ctaButton: "Parler à un spécialiste",
  },
  ja: {
    title: "ProMeetsの恩恵を受けるのは誰？",
    subtitle: "技術チームと急成長チームのニーズに特化して設計",
    beneficiaries: [
      {
        title: "テクノロジー企業",
        description:
          "専門化されたワークフローで開発者や技術プロファイルを3倍速く採用。",
        stats: "採用時間65%削減",
      },
      {
        title: "TAチーム",
        description: "反復タスクの80%を自動化し、戦略と候補者体験に集中。",
        stats: "月40時間以上節約",
      },
      {
        title: "採用チーム",
        description: "標準化された評価と並列比較で共同意思決定を実現。",
        stats: "フォローアップ会議60%削減",
      },
      {
        title: "成長中のスタートアップ",
        description: "People Opsチームを増やすことなく採用プロセスを拡張。",
        stats: "同じチームで2倍の採用",
      },
      {
        title: "HRリーダー",
        description:
          "採用ファネル全体の主要メトリクスをリアルタイムでダッシュボード確認。",
        stats: "採用品質30%向上",
      },
    ],
    ctaTitle: "該当するユースケースが見つかりませんか？",
    ctaDescription: "20以上の異なる業界の採用最適化を支援してきました。",
    ctaButton: "専門家と話す",
  },
  zh: {
    title: "谁从ProMeets中受益？",
    subtitle: "专为技术团队和高速增长团队的需求设计",
    beneficiaries: [
      {
        title: "科技公司",
        description:
          "通过我们的专业工作流程，以3倍速度招聘开发人员和技术人才。",
        stats: "减少65%的招聘时间",
      },
      {
        title: "招聘团队",
        description: "自动化80%重复性任务，专注于策略和候选人体验。",
        stats: "每月节省40+小时",
      },
      {
        title: "招聘小组",
        description: "通过标准化评估和并列比较做出协作决策。",
        stats: "减少60%的跟进会议",
      },
      {
        title: "成长中的初创公司",
        description: "无需增加人事团队即可扩展招聘流程。",
        stats: "相同团队实现2倍招聘量",
      },
      {
        title: "人力资源主管",
        description: "访问实时仪表板，查看整个招聘漏斗的关键指标。",
        stats: "招聘质量提高30%",
      },
    ],
    ctaTitle: "没有看到您的用例？",
    ctaDescription: "我们已经帮助20多个不同行业优化了招聘流程。",
    ctaButton: "与专家交流",
  },
};

interface WhoBenefitsProps {
  readonly language: Language;
}

export function WhoBenefits({ language }: WhoBenefitsProps) {
  const t = translations[language] || translations.en;
  const icons = [
    <Building key="building" className="w-8 h-8" />,
    <UserCheck key="usercheck" className="w-8 h-8" />,
    <Users key="users" className="w-8 h-8" />,
    <Clock key="clock" className="w-8 h-8" />,
    <BarChart2 key="barchart2" className="w-8 h-8" />,
  ];

  return (
    <section id="who-benefits" className="py-20 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.beneficiaries.map((beneficiary, index) => (
            <motion.div
              key={beneficiary.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-lg flex items-center justify-center mb-6 text-primary-600">
                {icons[index]}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {beneficiary.title}
              </h3>
              <p className="text-gray-600 mb-4">{beneficiary.description}</p>
              <div className="px-4 py-2 bg-gray-100 rounded-lg inline-block">
                <p className="text-sm font-medium text-gray-700">
                  {beneficiary.stats}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
