import { motion } from "framer-motion";
import { Brain, Target, Zap, Shield, BarChart3, Clock, Sparkles } from "lucide-react";
import { Language } from "@onnasoft/pro-meets-core";

const translations = {
  en: {
    title: "The AI Advantage: Smarter Matching, Better Results",
    subtitle: "Our proprietary AI algorithms go beyond keyword matching to understand the nuances of both projects and talent",
    features: [
      {
        icon: <Brain className="w-8 h-8" />,
        title: "Intelligent Context Understanding",
        description: "Our AI analyzes project requirements, team dynamics, and cultural fit factors that humans often miss",
        stats: "Context-aware matching improves success rates by 40%"
      },
      {
        icon: <Target className="w-8 h-8" />,
        title: "Multi-Dimensional Skill Analysis",
        description: "We evaluate 50+ data points including technical skills, soft skills, and domain expertise",
        stats: "95% accuracy in skill proficiency assessment"
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "Real-Time Availability Matching",
        description: "Dynamic matching that considers current availability, time zones, and project timelines",
        stats: "Reduce matching time from weeks to hours"
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: "Quality Prediction Algorithm",
        description: "Predict project success probability based on historical performance data and compatibility factors",
        stats: "87% accurate project outcome prediction"
      },
      {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Continuous Learning System",
        description: "Our AI improves with every match, learning from successful projects and client feedback",
        stats: "Algorithm improves 15% monthly through machine learning"
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: "Time Optimization Engine",
        description: "Smart scheduling that maximizes productive overlap and minimizes time zone challenges",
        stats: "68% better time utilization than traditional matching"
      }
    ],
    technicalTitle: "How Our AI Matching Works",
    technicalSteps: [
      {
        step: "1",
        title: "Project Analysis",
        description: "Deep understanding of your requirements, constraints, and success metrics"
      },
      {
        step: "2",
        title: "Talent Profiling",
        description: "Comprehensive assessment of skills, experience, and working preferences"
      },
      {
        step: "3",
        title: "Pattern Recognition",
        description: "Identification of success patterns from thousands of completed projects"
      },
      {
        step: "4",
        title: "Optimal Matching",
        description: "AI-driven selection of the perfect talent-profit combination"
      }
    ],
    ctaText: "See AI Matching in Action",
    comparisonTitle: "Traditional vs AI-Powered Matching",
    comparison: [
      {
        aspect: "Matching Time",
        traditional: "2-3 weeks",
        ai: "24-48 hours",
        improvement: "5x faster"
      },
      {
        aspect: "Success Rate", 
        traditional: "60-70%",
        ai: "92-95%",
        improvement: "35% better"
      },
      {
        aspect: "Quality Consistency",
        traditional: "Variable",
        ai: "Consistently High", 
        improvement: "Reliable outcomes"
      }
    ]
  },
  es: {
    title: "La Ventaja de la IA: Matching Más Inteligente, Mejores Resultados",
    subtitle: "Nuestros algoritmos de IA propietarios van beyond del matching de palabras clave para entender los matices de proyectos y talento",
    features: [
      {
        icon: <Brain className="w-8 h-8" />,
        title: "Comprensión Inteligente de Contexto",
        description: "Nuestra IA analiza requisitos de proyecto, dinámicas de equipo y factores de fit cultural que los humanos suelen pasar por alto",
        stats: "Matching consciente del contexto mejora tasas de éxito en 40%"
      },
      {
        icon: <Target className="w-8 h-8" />,
        title: "Análisis Multidimensional de Habilidades",
        description: "Evaluamos 50+ puntos de datos incluyendo habilidades técnicas, soft skills y expertise de dominio",
        stats: "95% de precisión en evaluación de competencias"
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "Matching de Disponibilidad en Tiempo Real",
        description: "Matching dinámico que considera disponibilidad actual, zonas horarias y timelines de proyecto",
        stats: "Reduce tiempo de matching de semanas a horas"
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: "Algoritmo de Predicción de Calidad",
        description: "Predice probabilidad de éxito de proyecto basado en datos históricos y factores de compatibilidad",
        stats: "87% de precisión en predicción de resultados"
      },
      {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Sistema de Aprendizaje Continuo",
        description: "Nuestra IA mejora con cada match, aprendiendo de proyectos exitosos y feedback de clientes",
        stats: "Algoritmo mejora 15% mensualmente mediante machine learning"
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: "Motor de Optimización de Tiempo",
        description: "Scheduling inteligente que maximiza overlap productivo y minimiza desafíos de zona horaria",
        stats: "68% mejor utilización de tiempo que matching tradicional"
      }
    ],
    technicalTitle: "Cómo Funciona Nuestro Matching con IA",
    technicalSteps: [
      {
        step: "1",
        title: "Análisis de Proyecto",
        description: "Comprensión profunda de tus requisitos, constraints y métricas de éxito"
      },
      {
        step: "2",
        title: "Profileado de Talento",
        description: "Evaluación comprehensiva de habilidades, experiencia y preferencias de trabajo"
      },
      {
        step: "3",
        title: "Reconocimiento de Patrones",
        description: "Identificación de patrones de éxito de miles de proyectos completados"
      },
      {
        step: "4",
        title: "Matching Óptimo",
        description: "Selección driven por IA de la combinación perfecta talento-proyecto"
      }
    ],
    ctaText: "Ver IA Matching en Acción",
    comparisonTitle: "Matching Tradicional vs con IA",
    comparison: [
      {
        aspect: "Tiempo de Matching",
        traditional: "2-3 semanas",
        ai: "24-48 horas",
        improvement: "5x más rápido"
      },
      {
        aspect: "Tasa de Éxito",
        traditional: "60-70%",
        ai: "92-95%", 
        improvement: "35% mejor"
      },
      {
        aspect: "Consistencia de Calidad",
        traditional: "Variable",
        ai: "Consistentemente Alta",
        improvement: "Resultados confiables"
      }
    ]
  },
  fr: {
    title: "L'Avantage IA : Matching Plus Intelligent, Meilleurs Résultats",
    subtitle: "Nos algorithmes IA propriétaires vont au-delà du matching par mots-clés pour comprendre les nuances des projets et des talents",
    features: [
      {
        icon: <Brain className="w-8 h-8" />,
        title: "Compréhension Intelligente du Contexte",
        description: "Notre IA analyse les exigences des projets, les dynamiques d'équipe et les facteurs de fit culturel que les humains manquent souvent",
        stats: "Matching conscient du contexte améliore les taux de réussite de 40%"
      },
      {
        icon: <Target className="w-8 h-8" />,
        title: "Analyse Multidimensionnelle des Compétences",
        description: "Nous évaluons 50+ points de données incluant compétences techniques, soft skills et expertise domaine",
        stats: "95% de précision dans l'évaluation des compétences"
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "Matching de Disponibilité en Temps Réel",
        description: "Matching dynamique considérant disponibilité actuelle, fuseaux horaires et délais projet",
        stats: "Réduit le temps de matching de semaines à heures"
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: "Algorithme de Prédiction de Qualité",
        description: "Prédit la probabilité de succès des projets basée sur données historiques et facteurs compatibilité",
        stats: "87% de précision dans la prédiction des résultats"
      },
      {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "Système d'Apprentissage Continu",
        description: "Notre IA s'améliore avec chaque match, apprenant des projets réussis et retours clients",
        stats: "Algorithme s'améliore de 15% mensuellement via machine learning"
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: "Moteur d'Optimisation du Temps",
        description: "Planification intelligente maximisant le chevauchement productif et minimisant les défis fuseaux horaires",
        stats: "68% meilleure utilisation du temps que le matching traditionnel"
      }
    ],
    technicalTitle: "Comment Fonctionne Notre Matching IA",
    technicalSteps: [
      {
        step: "1",
        title: "Analyse de Projet",
        description: "Compréhension profonde de vos exigences, contraintes et métriques de succès"
      },
      {
        step: "2",
        title: "Profilage de Talent", 
        description: "Évaluation complète des compétences, expérience et préférences de travail"
      },
      {
        step: "3",
        title: "Reconnaissance de Motifs",
        description: "Identification des motifs de succès parmi des milliers de projets complétés"
      },
      {
        step: "4",
        title: "Matching Optimal",
        description: "Sélection driven par IA de la combinaison parfaite talent-projet"
      }
    ],
    ctaText: "Voir le Matching IA en Action",
    comparisonTitle: "Matching Traditionnel vs IA",
    comparison: [
      {
        aspect: "Temps de Matching",
        traditional: "2-3 semaines",
        ai: "24-48 heures",
        improvement: "5x plus rapide"
      },
      {
        aspect: "Taux de Réussite",
        traditional: "60-70%",
        ai: "92-95%",
        improvement: "35% mieux"
      },
      {
        aspect: "Cohérence Qualité",
        traditional: "Variable", 
        ai: "Constamment Élevée",
        improvement: "Résultats fiables"
      }
    ]
  },
  jp: {
    title: "AIの優位性：よりスマートなマッチング、より良い結果",
    subtitle: "当社の独自AIアルゴリズムはキーワードマッチングを超え、プロジェクトと人材のニュアンスを理解します",
    features: [
      {
        icon: <Brain className="w-8 h-8" />,
        title: "インテリジェントなコンテキスト理解",
        description: "当社のAIは、人間が見落としがちなプロジェクト要件、チームダイナミクス、文化的適合要因を分析します",
        stats: "コンテキストを考慮したマッチングで成功率が40%向上"
      },
      {
        icon: <Target className="w-8 h-8" />,
        title: "多次元スキル分析",
        description: "技術スキル、ソフトスキル、ドメイン知識を含む50以上のデータポイントを評価",
        stats: "スキル習熟度評価で95%の精度"
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "リアルタイム可用性マッチング",
        description: "現在の可用性、タイムゾーン、プロジェクトタイムラインを考慮した動的マッチング",
        stats: "マッチング時間を数週間から数時間に短縮"
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: "品質予測アルゴリズム",
        description: "過去の実績データと互換性要因に基づいてプロジェクト成功確率を予測",
        stats: "プロジェクト結果予測で87%の精度"
      },
      {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "継続的学習システム",
        description: "当社のAIはマッチングごとに改善し、成功したプロジェクトとクライアントフィードバックから学習",
        stats: "機械学習によりアルゴリズムが月間15%改善"
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: "時間最適化エンジン",
        description: "生産的な重複を最大化し、タイムゾーンの課題を最小化するスマートスケジューリング",
        stats: "従来のマッチングより68%優れた時間活用"
      }
    ],
    technicalTitle: "AIマッチングの仕組み",
    technicalSteps: [
      {
        step: "1",
        title: "プロジェクト分析",
        description: "要件、制約、成功指標の深い理解"
      },
      {
        step: "2",
        title: "人材プロファイリング",
        description: "スキル、経験、作業偏好の包括的評価"
      },
      {
        step: "3",
        title: "パターン認識",
        description: "数千の完了プロジェクトからの成功パターンの特定"
      },
      {
        step: "4",
        title: "最適マッチング",
        description: "完璧な人材とプロジェクトの組み合わせのAI駆動選択"
      }
    ],
    ctaText: "AIマッチングの実演を見る",
    comparisonTitle: "従来型 vs AI駆動マッチング",
    comparison: [
      {
        aspect: "マッチング時間",
        traditional: "2-3週間",
        ai: "24-48時間",
        improvement: "5倍高速"
      },
      {
        aspect: "成功率",
        traditional: "60-70%",
        ai: "92-95%",
        improvement: "35%向上"
      },
      {
        aspect: "品質一貫性",
        traditional: "変動",
        ai: "一貫して高品質",
        improvement: "信頼できる結果"
      }
    ]
  },
  zh: {
    title: "AI优势：更智能的匹配，更好的结果",
    subtitle: "我们的专有AI算法超越关键词匹配，深入理解项目和人才的细微差别",
    features: [
      {
        icon: <Brain className="w-8 h-8" />,
        title: "智能上下文理解",
        description: "我们的AI分析项目需求、团队动态和人类经常忽略的文化契合因素",
        stats: "上下文感知匹配将成功率提高40%"
      },
      {
        icon: <Target className="w-8 h-8" />,
        title: "多维技能分析",
        description: "我们评估50多个数据点，包括技术技能、软技能和领域专业知识",
        stats: "技能熟练度评估准确率95%"
      },
      {
        icon: <Zap className="w-8 h-8" />,
        title: "实时可用性匹配",
        description: "动态匹配考虑当前可用性、时区和项目时间表",
        stats: "将匹配时间从数周缩短到数小时"
      },
      {
        icon: <Shield className="w-8 h-8" />,
        title: "质量预测算法",
        description: "基于历史性能数据和兼容性因素预测项目成功概率",
        stats: "项目结果预测准确率87%"
      },
      {
        icon: <BarChart3 className="w-8 h-8" />,
        title: "持续学习系统",
        description: "我们的AI随着每次匹配而改进，从成功项目和客户反馈中学习",
        stats: "通过机器学习算法每月改进15%"
      },
      {
        icon: <Clock className="w-8 h-8" />,
        title: "时间优化引擎",
        description: "智能调度最大化生产性重叠并最小化时区挑战",
        stats: "时间利用率比传统匹配提高68%"
      }
    ],
    technicalTitle: "我们的AI匹配如何工作",
    technicalSteps: [
      {
        step: "1",
        title: "项目分析",
        description: "深入理解您的需求、约束和成功指标"
      },
      {
        step: "2",
        title: "人才分析",
        description: "全面评估技能、经验和工作偏好"
      },
      {
        step: "3",
        title: "模式识别",
        description: "从数千个已完成项目中识别成功模式"
      },
      {
        step: "4",
        title: "最优匹配",
        description: "AI驱动选择完美的人才项目组合"
      }
    ],
    ctaText: "查看AI匹配实战",
    comparisonTitle: "传统匹配 vs AI驱动匹配",
    comparison: [
      {
        aspect: "匹配时间",
        traditional: "2-3周",
        ai: "24-48小时",
        improvement: "快5倍"
      },
      {
        aspect: "成功率",
        traditional: "60-70%",
        ai: "92-95%",
        improvement: "提高35%"
      },
      {
        aspect: "质量一致性",
        traditional: "波动",
        ai: "持续高质量",
        improvement: "可靠结果"
      }
    ]
  }
};

interface AIAdvantageProps {
  readonly language: Language;
}

export function AIAdvantage({ language }: AIAdvantageProps) {
  const t = translations[language] || translations.en;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
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

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {t.features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <div className="bg-primary-50 px-3 py-2 rounded-lg">
                <p className="text-sm font-medium text-primary-700">
                  {feature.stats}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Process */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {t.technicalTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {t.technicalSteps.map((step) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Comparison Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {t.comparisonTitle}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.comparison.map((item) => (
              <motion.div
                key={item.aspect}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <h4 className="font-semibold text-gray-900 mb-4">{item.aspect}</h4>
                <div className="mb-3">
                  <p className="text-gray-500 text-sm mb-1">Traditional</p>
                  <p className="text-gray-700 font-medium">{item.traditional}</p>
                </div>
                <div className="mb-3">
                  <p className="text-primary-600 text-sm mb-1">AI-Powered</p>
                  <p className="text-primary-700 font-bold">{item.ai}</p>
                </div>
                <div className="bg-green-100 px-3 py-1 rounded-full">
                  <p className="text-green-700 text-sm font-medium">{item.improvement}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/demo"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            {t.ctaText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}