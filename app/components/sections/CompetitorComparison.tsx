import { Check, X, ChevronDown, Star, Zap, Users, Clock, Target } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Language } from "@onnasoft/pro-meets-core";


// Add the missing icon imports at the top
const Brain = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const ShieldCheck = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const BarChart3 = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const translations = {
  en: {
    title: "Why Choose Our AI Matching Platform?",
    subtitle: "Compare the most complete AI-powered talent matching solution for your projects",
    functionality: "Feature",
    complete: "Complete",
    partial: "Partial",
    notAvailable: "Not available",
    prosLabel: "+ {count} advanced features",
    competitors: [
      {
        name: "ProMeets AI",
        image: "/logos/promeets-ai.webp",
        tagline: "AI-Powered Talent Matching",
        pros: [
          "Specialized in project-based matching",
          "Advanced AI algorithms",
          "End-to-end project management",
        ],
      },
      {
        name: "Generic Freelance Platforms",
        image: "/logos/freelance-platforms.webp",
        tagline: "Basic matching",
        pros: ["Large talent pool", "Basic search filters", "Rating system"],
      },
      {
        name: "Traditional Job Boards",
        image: "/logos/job-boards.webp",
        tagline: "Manual search",
        pros: ["High visibility", "Established platforms", "Simple posting"],
      },
    ],
    features: [
      {
        name: "AI-Powered Matching",
        description: "Advanced algorithms that analyze project requirements and talent profiles for perfect matches",
        details: "Machine learning models trained on thousands of successful projects",
        icon: <Brain className="w-5 h-5" />
      },
      {
        name: "Skill Verification",
        description: "Automated testing and portfolio validation to ensure talent quality",
        details: "Technical assessments and code review integration",
        icon: <ShieldCheck className="w-5 h-5" />
      },
      {
        name: "Time Zone Optimization",
        description: "Smart matching based on availability and timezone compatibility",
        details: "Real-time availability tracking and overlap analysis",
        icon: <Clock className="w-5 h-5" />
      },
      {
        name: "Project Management Tools",
        description: "Integrated tools for project tracking, communication, and collaboration",
        details: "Milestones, time tracking, and file sharing in one platform",
        icon: <Target className="w-5 h-5" />
      },
      {
        name: "Quality Assurance",
        description: "Automated quality checks and performance monitoring throughout the project",
        details: "Code quality analysis, progress tracking, and client feedback integration",
        icon: <Star className="w-5 h-5" />
      },
      {
        name: "Smart Pricing",
        description: "AI-driven pricing recommendations based on project complexity and talent experience",
        details: "Market rate analysis and budget optimization algorithms",
        icon: <BarChart3 className="w-5 h-5" />
      },
    ],
  },
  es: {
    title: "¿Por Qué Elegir Nuestra Plataforma de Matching con IA?",
    subtitle: "Compara la solución más completa de matching de talento con IA para tus proyectos",
    functionality: "Funcionalidad",
    complete: "Completo",
    partial: "Parcial",
    notAvailable: "No disponible",
    prosLabel: "+ {count} funciones avanzadas",
    competitors: [
      {
        name: "ProMeets AI",
        image: "/logos/promeets-ai.webp",
        tagline: "Matching de Talento con IA",
        pros: [
          "Especializado en matching basado en proyectos",
          "Algoritmos de IA avanzados",
          "Gestión de proyectos integral",
        ],
      },
      {
        name: "Plataformas Freelance Genéricas",
        image: "/logos/freelance-platforms.webp",
        tagline: "Matching básico",
        pros: ["Gran pool de talento", "Filtros de búsqueda básicos", "Sistema de rating"],
      },
      {
        name: "Portales de Empleo Tradicionales",
        image: "/logos/job-boards.webp",
        tagline: "Búsqueda manual",
        pros: ["Alta visibilidad", "Plataformas establecidas", "Publicación simple"],
      },
    ],
    features: [
      {
        name: "Matching con IA",
        description: "Algoritmos avanzados que analizan requisitos de proyecto y perfiles de talento para matches perfectos",
        details: "Modelos de machine learning entrenados con miles de proyectos exitosos",
        icon: <Brain className="w-5 h-5" />
      },
      {
        name: "Verificación de Habilidades",
        description: "Pruebas automatizadas y validación de portafolio para garantizar calidad del talento",
        details: "Evaluaciones técnicas e integración con revisiones de código",
        icon: <ShieldCheck className="w-5 h-5" />
      },
      {
        name: "Optimización de Zona Horaria",
        description: "Matching inteligente basado en disponibilidad y compatibilidad de zonas horarias",
        details: "Seguimiento de disponibilidad en tiempo real y análisis de superposición",
        icon: <Clock className="w-5 h-5" />
      },
      {
        name: "Herramientas de Gestión",
        description: "Herramientas integradas para seguimiento, comunicación y colaboración de proyectos",
        details: "Hitos, control de tiempo y compartición de archivos en una plataforma",
        icon: <Target className="w-5 h-5" />
      },
      {
        name: "Control de Calidad",
        description: "Chequeos de calidad automatizados y monitoreo de performance durante el proyecto",
        details: "Análisis de calidad de código, seguimiento de progreso e integración de feedback",
        icon: <Star className="w-5 h-5" />
      },
      {
        name: "Precios Inteligentes",
        description: "Recomendaciones de precios basadas en IA según complejidad y experiencia del talento",
        details: "Análisis de tarifas de mercado y algoritmos de optimización de presupuesto",
        icon: <BarChart3 className="w-5 h-5" />
      },
    ],
  },
  fr: {
    title: "Pourquoi Choisir Notre Plateforme de Matching IA ?",
    subtitle: "Comparez la solution de matching de talent la plus complète alimentée par l'IA pour vos projets",
    functionality: "Fonctionnalité",
    complete: "Complet",
    partial: "Partiel",
    notAvailable: "Non disponible",
    prosLabel: "+ {count} fonctionnalités avancées",
    competitors: [
      {
        name: "ProMeets AI",
        image: "/logos/promeets-ai.webp",
        tagline: "Matching de Talent avec IA",
        pros: [
          "Spécialisé dans le matching par projet",
          "Algorithmes d'IA avancés",
          "Gestion de projet de bout en bout",
        ],
      },
      {
        name: "Plateformes Freelance Génériques",
        image: "/logos/freelance-platforms.webp",
        tagline: "Matching basique",
        pros: ["Grand pool de talent", "Filtres de recherche basiques", "Système de notation"],
      },
      {
        name: "Sites d'Emploi Traditionnels",
        image: "/logos/job-boards.webp",
        tagline: "Recherche manuelle",
        pros: ["Haute visibilité", "Plateformes établies", "Publication simple"],
      },
    ],
    features: [
      {
        name: "Matching par IA",
        description: "Algorithmes avancés analysant les exigences des projets et les profils de talent pour des matches parfaits",
        details: "Modèles de machine learning entraînés sur des milliers de projets réussis",
        icon: <Brain className="w-5 h-5" />
      },
      {
        name: "Vérification des Compétences",
        description: "Tests automatisés et validation de portfolio pour garantir la qualité des talents",
        details: "Évaluations techniques et intégration de revue de code",
        icon: <ShieldCheck className="w-5 h-5" />
      },
      {
        name: "Optimisation Fuseau Horaire",
        description: "Matching intelligent basé sur la disponibilité et la compatibilité des fuseaux horaires",
        details: "Suivi de disponibilité en temps réel et analyse de chevauchement",
        icon: <Clock className="w-5 h-5" />
      },
      {
        name: "Outils de Gestion de Projet",
        description: "Outils intégrés pour le suivi, la communication et la collaboration des projets",
        details: "Jalons, suivi du temps et partage de fichiers sur une plateforme",
        icon: <Target className="w-5 h-5" />
      },
      {
        name: "Assurance Qualité",
        description: "Contrôles de qualité automatisés et surveillance des performances tout au long du projet",
        details: "Analyse de qualité de code, suivi de progression et intégration des retours clients",
        icon: <Star className="w-5 h-5" />
      },
      {
        name: "Tarification Intelligente",
        description: "Recommandations de prix basées sur l'IA selon la complexité et l'expérience du talent",
        details: "Analyse des tarifs du marché et algorithmes d'optimisation de budget",
        icon: <BarChart3 className="w-5 h-5" />
      },
    ],
  },
  jp: {
    title: "当社のAIマッチングプラットフォームを選ぶ理由",
    subtitle: "プロジェクトのための最も完全なAI駆動の人材マッチングソリューションを比較",
    functionality: "機能",
    complete: "完全",
    partial: "部分的",
    notAvailable: "利用不可",
    prosLabel: "+ {count} の高度な機能",
    competitors: [
      {
        name: "ProMeets AI",
        image: "/logos/promeets-ai.webp",
        tagline: "AI駆動の人材マッチング",
        pros: [
          "プロジェクトベースのマッチングに特化",
          "高度なAIアルゴリズム",
          "エンドツーエンドのプロジェクト管理",
        ],
      },
      {
        name: "一般的なフリーランスプラットフォーム",
        image: "/logos/freelance-platforms.webp",
        tagline: "基本マッチング",
        pros: ["大人材プール", "基本検索フィルター", "評価システム"],
      },
      {
        name: "従来の求人サイト",
        image: "/logos/job-boards.webp",
        tagline: "手動検索",
        pros: ["高視認性", "確立されたプラットフォーム", "簡単な投稿"],
      },
    ],
    features: [
      {
        name: "AI駆動マッチング",
        description: "プロジェクト要件と人材プロファイルを分析して完璧なマッチを実現する高度なアルゴリズム",
        details: "何千もの成功プロジェクトで訓練された機械学習モデル",
        icon: <Brain className="w-5 h-5" />
      },
      {
        name: "スキル検証",
        description: "人材の品質を保証する自動テストとポートフォリオ検証",
        details: "技術的評価とコードレビュー統合",
        icon: <ShieldCheck className="w-5 h-5" />
      },
      {
        name: "タイムゾーン最適化",
        description: "可用性とタイムゾーン互換性に基づくスマートマッチング",
        details: "リアルタイム可用性追跡と重複分析",
        icon: <Clock className="w-5 h-5" />
      },
      {
        name: "プロジェクト管理ツール",
        description: "プロジェクト追跡、通信、コラボレーションのための統合ツール",
        details: "マイルストーン、時間追跡、ファイル共有を単一プラットフォームで",
        icon: <Target className="w-5 h-5" />
      },
      {
        name: "品質保証",
        description: "プロジェクト全体を通じた自動品質チェックとパフォーマンス監視",
        details: "コード品質分析、進捗追跡、クライアントフィードバック統合",
        icon: <Star className="w-5 h-5" />
      },
      {
        name: "スマート価格設定",
        description: "プロジェクト複雑性と人材経験に基づくAI駆動の価格推奨",
        details: "市場価格分析と予算最適化アルゴリズム",
        icon: <BarChart3 className="w-5 h-5" />
      },
    ],
  },
  zh: {
    title: "为什么选择我们的AI匹配平台？",
    subtitle: "比较最完整的AI驱动人才匹配解决方案为您的项目",
    functionality: "功能",
    complete: "完整",
    partial: "部分",
    notAvailable: "不可用",
    prosLabel: "+ {count} 项高级功能",
    competitors: [
      {
        name: "ProMeets AI",
        image: "/logos/promeets-ai.webp",
        tagline: "AI驱动人才匹配",
        pros: ["专注于项目匹配", "高级AI算法", "端到端项目管理"],
      },
      {
        name: "通用自由职业平台",
        image: "/logos/freelance-platforms.webp",
        tagline: "基本匹配",
        pros: ["庞大人才库", "基本搜索过滤器", "评分系统"],
      },
      {
        name: "传统招聘网站",
        image: "/logos/job-boards.webp",
        tagline: "手动搜索",
        pros: ["高可见性", "成熟平台", "简单发布"],
      },
    ],
    features: [
      {
        name: "AI驱动匹配",
        description: "分析项目需求和人才档案以实现完美匹配的高级算法",
        details: "基于数千个成功项目训练的机器学习模型",
        icon: <Brain className="w-5 h-5" />
      },
      {
        name: "技能验证",
        description: "自动化测试和作品集验证确保人才质量",
        details: "技术评估和代码审查集成",
        icon: <ShieldCheck className="w-5 h-5" />
      },
      {
        name: "时区优化",
        description: "基于可用性和时区兼容性的智能匹配",
        details: "实时可用性跟踪和重叠分析",
        icon: <Clock className="w-5 h-5" />
      },
      {
        name: "项目管理工具",
        description: "项目跟踪、沟通和协作的集成工具",
        details: "里程碑、时间跟踪和文件共享一体化平台",
        icon: <Target className="w-5 h-5" />
      },
      {
        name: "质量保证",
        description: "整个项目期间的自动化质量检查和性能监控",
        details: "代码质量分析、进度跟踪和客户反馈集成",
        icon: <Star className="w-5 h-5" />
      },
      {
        name: "智能定价",
        description: "基于项目复杂性和人才经验的AI驱动定价建议",
        details: "市场费率分析和预算优化算法",
        icon: <BarChart3 className="w-5 h-5" />
      },
    ],
  },
};

interface CompetitorComparisonProps {
  readonly language: Language;
}

export function CompetitorComparison({ language }: CompetitorComparisonProps) {
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const t = translations[language] || translations.en;

  const hasFeature = (competitorIndex: number, featureIndex: number) => {
    // ProMeets AI has all features
    if (competitorIndex === 0) return 2; // 2 = complete check

    // Generic Freelance Platforms
    if (competitorIndex === 1) {
      return [0, 1].includes(featureIndex) ? 1 : 0; // 1 = partial check, 0 = cross
    }

    // Traditional Job Boards
    return 0; // No advanced features
  };

  return (
    <section id="competitor-comparison" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Comparison table */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow-lg border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-6 font-semibold text-gray-900 w-1/3">
                  <div className="flex items-center">
                    <Target className="w-6 h-6 mr-2 text-primary-600" />
                    {t.functionality}
                  </div>
                </th>
                {t.competitors.map((competitor) => {
                  let CompetitorIcon;
                  if (competitor.name.includes("AI")) {
                    CompetitorIcon = <Brain className="w-6 h-6" />;
                  } else if (competitor.name.includes("Freelance")) {
                    CompetitorIcon = <Users className="w-6 h-6" />;
                  } else {
                    CompetitorIcon = <Zap className="w-6 h-6" />;
                  }
                  return (
                    <th
                      key={competitor.name}
                      className="text-center p-6 font-semibold text-gray-900"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 mb-3 bg-white rounded-full shadow-md flex items-center justify-center">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white">
                            {CompetitorIcon}
                          </div>
                        </div>
                        <span className="block font-bold text-lg">{competitor.name}</span>
                        <span className="block text-sm text-gray-500 mt-1">
                          {competitor.tagline}
                        </span>
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {t.features.map((feature, featureIndex) => (
                <motion.tr
                  key={feature.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="group hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() =>
                    setExpandedFeature(
                      expandedFeature === featureIndex ? null : featureIndex
                    )
                  }
                >
                  <td className="p-6 font-medium text-gray-900">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mr-3">
                        {feature.icon}
                      </div>
                      <span className="text-lg">{feature.name}</span>
                      <ChevronDown
                        className={`ml-2 w-4 h-4 transition-transform ${expandedFeature === featureIndex ? "rotate-180" : ""
                          }`}
                      />
                    </div>
                    <AnimatePresence>
                      {expandedFeature === featureIndex && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden mt-3"
                        >
                          <p className="text-gray-600">
                            {feature.description}
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            {feature.details}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </td>

                  {t.competitors.map((_, competitorIndex) => {
                    const featureStatus = hasFeature(
                      competitorIndex,
                      featureIndex
                    );

                    let featureContent;
                    if (featureStatus === 2) {
                      featureContent = (
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <Check className="w-6 h-6 text-green-600" />
                          </div>
                          <span className="text-sm text-green-600 mt-2 font-medium">
                            {t.complete}
                          </span>
                        </div>
                      );
                    } else if (featureStatus === 1) {
                      featureContent = (
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                            <div className="w-4 h-0.5 bg-yellow-600"></div>
                          </div>
                          <span className="text-sm text-yellow-600 mt-2 font-medium">
                            {t.partial}
                          </span>
                        </div>
                      );
                    } else {
                      featureContent = (
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                            <X className="w-6 h-6 text-red-600" />
                          </div>
                          <span className="text-sm text-red-600 mt-2 font-medium">
                            {t.notAvailable}
                          </span>
                        </div>
                      );
                    }

                    return (
                      <td
                        key={`${featureIndex}-${competitorIndex}`}
                        className="p-6 text-center"
                      >
                        {featureContent}
                      </td>
                    );
                  })}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Key advantages */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.competitors.map((competitor, index) => (
            <motion.div
              key={competitor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white p-8 rounded-2xl shadow-lg border-2 ${index === 0
                  ? "border-primary-500 border-2 shadow-xl"
                  : "border-gray-200"
                }`}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {competitor.name}
                </h3>
                <p className="text-gray-500">{competitor.tagline}</p>
              </div>

              <ul className="space-y-4">
                {competitor.pros.map((pro) => (
                  <li key={pro} className="flex items-start">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 ${index === 0 ? "bg-primary-100" : "bg-gray-100"
                      }`}>
                      <Check className={`w-4 h-4 ${index === 0 ? "text-primary-600" : "text-gray-600"
                        }`} />
                    </div>
                    <span className="text-gray-700">{pro}</span>
                  </li>
                ))}

                {index === 0 && (
                  <li className="flex items-start pt-4 mt-4 border-t border-gray-100">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                      <Star className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="text-sm text-primary-600 font-medium">
                      {t.prosLabel.replace(
                        "{count}",
                        t.features.length.toString()
                      )}
                    </span>
                  </li>
                )}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
