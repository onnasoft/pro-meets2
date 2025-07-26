import { Check, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Language } from "~/utils/language";

const translations = {
  en: {
    title: "No more partial solutions",
    subtitle:
      "Compare how ProMeets offers everything you need in a single platform",
    functionality: "Feature",
    complete: "Complete",
    partial: "Partial",
    notAvailable: "Not available",
    prosLabel: "+ {count} integrated features",
    competitors: [
      {
        name: "ProMeets",
        image: "/logos/promeets.png",
        tagline: "All-in-one solution",
        pros: [
          "Specialized in recruitment",
          "Fully integrated workflow",
          "Designed for TA teams",
        ],
      },
      {
        name: "Zoom + Calendly",
        image: "/logos/zoom-calendly.png",
        tagline: "Separate solutions",
        pros: ["Known tools", "Basic functionalities"],
      },
      {
        name: "Traditional ATS",
        image: "/logos/traditional-ats.png",
        tagline: "Legacy system",
        pros: ["Candidate database", "Process tracking"],
      },
    ],
    features: [
      {
        name: "HD Video Calls",
        description:
          "Professional quality integrated directly into the platform",
        details: "No need for complex configurations or additional plugins",
      },
      {
        name: "Smart Scheduling",
        description: "Bi-directional calendar synchronization",
        details:
          "Candidates see only your real available times, with automatic buffers",
      },
      {
        name: "Interview Kit",
        description: "Templates, collaborative evaluation and recordings",
        details: "All interview context in one place with timestamping",
      },
      {
        name: "Candidate Onboarding",
        description: "Candidate self-service portal",
        details: "Document upload, digital signature and automated checklist",
      },
      {
        name: "Advanced Analytics",
        description: "Hiring process dashboards",
        details:
          "Time per stage, candidate quality and interviewer performance",
      },
    ],
  },
  es: {
    title: "No más soluciones parciales",
    subtitle:
      "Compara cómo ProMeets ofrece todo lo que necesitas en una sola plataforma",
    functionality: "Funcionalidad",
    complete: "Completo",
    partial: "Parcial",
    notAvailable: "No disponible",
    prosLabel: "+ {count} funcionalidades integradas",
    competitors: [
      {
        name: "ProMeets",
        image: "/logos/promeets.png",
        tagline: "Solución todo-en-uno",
        pros: [
          "Especializado en reclutamiento",
          "Flujo completamente integrado",
          "Diseñado para equipos de TA",
        ],
      },
      {
        name: "Zoom + Calendly",
        image: "/logos/zoom-calendly.png",
        tagline: "Soluciones separadas",
        pros: ["Herramientas conocidas", "Funcionalidades básicas"],
      },
      {
        name: "ATS Tradicional",
        image: "/logos/traditional-ats.png",
        tagline: "Sistema legacy",
        pros: ["Base de candidatos", "Seguimiento de procesos"],
      },
    ],
    features: [
      {
        name: "Videollamadas HD",
        description:
          "Calidad profesional integrada directamente en la plataforma",
        details:
          "Sin necesidad de configuraciones complejas o plugins adicionales",
      },
      {
        name: "Agendamiento inteligente",
        description: "Sincronización bidireccional con calendarios",
        details:
          "Los candidatos ven solo tus horarios disponibles reales, con buffers automáticos",
      },
      {
        name: "Kit de entrevistas",
        description: "Plantillas, evaluación colaborativa y grabaciones",
        details:
          "Todo el contexto de la entrevista en un solo lugar con timestamping",
      },
      {
        name: "Onboarding candidatos",
        description: "Portal autogestionado por candidatos",
        details: "Subida de documentos, firma digital y checklist automatizado",
      },
      {
        name: "Analíticas avanzadas",
        description: "Dashboards de proceso de contratación",
        details:
          "Tiempos por etapa, calidad de candidatos y desempeño de entrevistadores",
      },
    ],
  },
  fr: {
    title: "Plus de solutions partielles",
    subtitle:
      "Comparez comment ProMeets offre tout ce dont vous avez besoin dans une seule plateforme",
    functionality: "Fonctionnalité",
    complete: "Complet",
    partial: "Partiel",
    notAvailable: "Non disponible",
    prosLabel: "+ {count} fonctionnalités intégrées",
    competitors: [
      {
        name: "ProMeets",
        image: "/logos/promeets.png",
        tagline: "Solution tout-en-un",
        pros: [
          "Spécialisé dans le recrutement",
          "Flux entièrement intégré",
          "Conçu pour les équipes de TA",
        ],
      },
      {
        name: "Zoom + Calendly",
        image: "/logos/zoom-calendly.png",
        tagline: "Solutions séparées",
        pros: ["Outils connus", "Fonctionnalités de base"],
      },
      {
        name: "ATS Traditionnel",
        image: "/logos/traditional-ats.png",
        tagline: "Système legacy",
        pros: ["Base de candidats", "Suivi des processus"],
      },
    ],
    features: [
      {
        name: "Appels vidéo HD",
        description:
          "Qualité professionnelle intégrée directement dans la plateforme",
        details:
          "Pas besoin de configurations complexes ou de plugins supplémentaires",
      },
      {
        name: "Planification intelligente",
        description: "Synchronisation bidirectionnelle avec les calendriers",
        details:
          "Les candidats voient seulement vos créneaux disponibles réels, avec tampons automatiques",
      },
      {
        name: "Kit d'entretien",
        description: "Modèles, évaluation collaborative et enregistrements",
        details:
          "Tout le contexte de l'entretien au même endroit avec horodatage",
      },
      {
        name: "Onboarding candidats",
        description: "Portail libre-service pour candidats",
        details:
          "Téléchargement de documents, signature numérique et checklist automatisée",
      },
      {
        name: "Analyses avancées",
        description: "Tableaux de bord du processus d'embauche",
        details:
          "Temps par étape, qualité des candidats et performance des intervieweurs",
      },
    ],
  },
  ja: {
    title: "部分的なソリューションはもう不要",
    subtitle: "ProMeetsが1つのプラットフォームで全てを提供する方法を比較",
    functionality: "機能",
    complete: "完全",
    partial: "部分的",
    notAvailable: "利用不可",
    prosLabel: "+ {count} の統合機能",
    competitors: [
      {
        name: "ProMeets",
        image: "/logos/promeets.png",
        tagline: "オールインワンソリューション",
        pros: [
          "採用に特化",
          "完全に統合されたワークフロー",
          "TAチーム向けに設計",
        ],
      },
      {
        name: "Zoom + Calendly",
        image: "/logos/zoom-calendly.png",
        tagline: "分離されたソリューション",
        pros: ["既知のツール", "基本機能"],
      },
      {
        name: "従来のATS",
        image: "/logos/traditional-ats.png",
        tagline: "レガシーシステム",
        pros: ["候補者データベース", "プロセス追跡"],
      },
    ],
    features: [
      {
        name: "HDビデオ通話",
        description: "プラットフォームに直接統合されたプロ品質",
        details: "複雑な設定や追加プラグインは不要",
      },
      {
        name: "スマートスケジューリング",
        description: "カレンダーとの双方向同期",
        details: "候補者は実際の空き時間のみを確認、自動バッファ付き",
      },
      {
        name: "面接キット",
        description: "テンプレート、共同評価と録画",
        details: "タイムスタンプ付きで全ての面接コンテキストを一元管理",
      },
      {
        name: "候補者オンボーディング",
        description: "候補者セルフサービスポータル",
        details:
          "ドキュメントアップロード、電子署名と自動化されたチェックリスト",
      },
      {
        name: "高度な分析",
        description: "採用プロセスダッシュボード",
        details: "ステージ別時間、候補者品質と面接官のパフォーマンス",
      },
    ],
  },
  zh: {
    title: "不再需要部分解决方案",
    subtitle: "比较ProMeets如何在一个平台中提供您所需的一切",
    functionality: "功能",
    complete: "完整",
    partial: "部分",
    notAvailable: "不可用",
    prosLabel: "+ {count} 项集成功能",
    competitors: [
      {
        name: "ProMeets",
        image: "/logos/promeets.png",
        tagline: "一体化解决方案",
        pros: ["专注于招聘", "完全集成的工作流程", "为TA团队设计"],
      },
      {
        name: "Zoom + Calendly",
        image: "/logos/zoom-calendly.png",
        tagline: "分离的解决方案",
        pros: ["知名工具", "基本功能"],
      },
      {
        name: "传统ATS",
        image: "/logos/traditional-ats.png",
        tagline: "遗留系统",
        pros: ["候选人数据库", "流程跟踪"],
      },
    ],
    features: [
      {
        name: "高清视频通话",
        description: "直接集成到平台中的专业质量",
        details: "无需复杂配置或额外插件",
      },
      {
        name: "智能调度",
        description: "与日历双向同步",
        details: "候选人只看到您真实的可用时间，带有自动缓冲",
      },
      {
        name: "面试套件",
        description: "模板、协作评估和录制",
        details: "所有面试上下文集中一处并带时间戳",
      },
      {
        name: "候选人入职",
        description: "候选人自助门户",
        details: "文档上传、数字签名和自动化清单",
      },
      {
        name: "高级分析",
        description: "招聘流程仪表板",
        details: "各阶段时间、候选人质量和面试官表现",
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
    // ProMeets has all features
    if (competitorIndex === 0) return 2; // 2 = complete check

    // Zoom + Calendly
    if (competitorIndex === 1) {
      return [0, 1].includes(featureIndex) ? 1 : 0; // 1 = partial check, 0 = cross
    }

    // Traditional ATS
    return featureIndex === 4 ? 1 : 0; // Only has basic analytics
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
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left pb-6 font-semibold text-gray-900 w-1/4">
                  {t.functionality}
                </th>
                {t.competitors.map((competitor) => (
                  <th
                    key={competitor.name}
                    className="text-center pb-6 font-semibold text-gray-900"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={competitor.image}
                        alt={competitor.name}
                        className="h-12 mb-2 object-contain"
                      />
                      <span className="block font-bold">{competitor.name}</span>
                      <span className="block text-sm text-gray-500">
                        {competitor.tagline}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {t.features.map((feature, featureIndex) => (
                <motion.tr
                  key={feature.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: featureIndex * 0.05 }}
                  viewport={{ once: true }}
                  className="group hover:bg-white cursor-pointer"
                  onClick={() =>
                    setExpandedFeature(
                      expandedFeature === featureIndex ? null : featureIndex
                    )
                  }
                >
                  <td className="py-4 pr-4 font-medium text-gray-900">
                    <div className="flex items-center">
                      <span>{feature.name}</span>
                      <ChevronDown
                        className={`ml-2 w-4 h-4 transition-transform ${
                          expandedFeature === featureIndex ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {expandedFeature === featureIndex && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-gray-500 mt-2">
                            {feature.description}
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
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
                          <Check className="w-6 h-6 text-green-500 p-1 bg-green-100 rounded-full" />
                          <span className="text-xs text-green-600 mt-1">
                            {t.complete}
                          </span>
                        </div>
                      );
                    } else if (featureStatus === 1) {
                      featureContent = (
                        <div className="flex flex-col items-center">
                          <Check className="w-6 h-6 text-yellow-500 p-1 bg-yellow-100 rounded-full" />
                          <span className="text-xs text-yellow-600 mt-1">
                            {t.partial}
                          </span>
                        </div>
                      );
                    } else {
                      featureContent = (
                        <div className="flex flex-col items-center">
                          <X className="w-6 h-6 text-red-500 p-1 bg-red-100 rounded-full" />
                          <span className="text-xs text-red-600 mt-1">
                            {t.notAvailable}
                          </span>
                        </div>
                      );
                    }

                    return (
                      <td
                        key={`${featureIndex}-${competitorIndex}`}
                        className="py-4 px-4 text-center"
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

        {/* Key notes */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.competitors.map((competitor, index) => (
            <div
              key={competitor.name}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
            >
              <h3 className="font-bold text-lg mb-3 flex items-center">
                <img
                  src={competitor.image}
                  alt={competitor.name}
                  className="h-6 mr-3 object-contain"
                />
                {competitor.name}
              </h3>
              <ul className="space-y-2">
                {competitor.pros.map((pro) => (
                  <li key={pro} className="flex items-start">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{pro}</span>
                  </li>
                ))}
                {index === 0 && (
                  <li className="flex items-start pt-2 mt-2 border-t border-gray-100">
                    <span className="text-sm text-gray-500">
                      {t.prosLabel.replace(
                        "{count}",
                        t.features.length.toString()
                      )}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
