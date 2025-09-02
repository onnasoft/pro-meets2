import { motion } from "framer-motion";
import { Target, Zap, Star, ArrowRight } from "lucide-react";
import { Language } from "pro-meets-core";

const translations = {
  en: {
    title: "Why Choose Our AI Talent Matching Platform?",
    subtitle: "We're not just another recruiting tool—we're your strategic partner in finding the perfect talent for your most important projects",
    mainStats: [
      { value: "95%", label: "Match Accuracy Rate" },
      { value: "5x", label: "Faster Than Traditional Methods" },
      { value: "48h", label: "Average Time to Perfect Match" }
    ],
    valueProps: [
      {
        icon: <Target className="w-6 h-6" />,
        title: "Precision Matching",
        description: "AI algorithms that understand both your project requirements and talent capabilities"
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Lightning Fast",
        description: "From project brief to perfect match in days, not weeks"
      },
      {
        icon: <Star className="w-6 h-6" />,
        title: "Quality Guaranteed",
        description: "Rigorous vetting process ensures only top-tier professionals"
      }
    ],
    ctaPrimary: "See How It Works",
    ctaSecondary: "View Case Studies"
  },
  es: {
    title: "¿Por Qué Elegir Nuestra Plataforma de Matching de Talento con IA?",
    subtitle: "No somos solo otra herramienta de reclutamiento—somos tu partner estratégico para encontrar el talento perfecto para tus proyectos más importantes",
    mainStats: [
      { value: "95%", label: "Tasa de Precisión en Matching" },
      { value: "5x", label: "Más Rápido Que Métodos Tradicionales" },
      { value: "48h", label: "Tiempo Promedio para Match Perfecto" }
    ],
    valueProps: [
      {
        icon: <Target className="w-6 h-6" />,
        title: "Matching de Precisión",
        description: "Algoritmos de IA que entienden tanto tus requisitos de proyecto como las capacidades del talento"
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Velocidad Relámpago",
        description: "Desde el brief del proyecto hasta el match perfecto en días, no semanas"
      },
      {
        icon: <Star className="w-6 h-6" />,
        title: "Calidad Garantizada",
        description: "Proceso de selección riguroso que asegura solo profesionales de primer nivel"
      }
    ],
    ctaPrimary: "Ver Cómo Funciona",
    ctaSecondary: "Ver Casos de Estudio"
  },
  fr: {
    title: "Pourquoi Choisir Notre Plateforme de Matching de Talent avec IA ?",
    subtitle: "Nous ne sommes pas juste un autre outil de recrutement—nous sommes votre partenaire stratégique pour trouver les talents parfaits pour vos projets les plus importants",
    mainStats: [
      { value: "95%", label: "Taux de Précision de Matching" },
      { value: "5x", label: "Plus Rapide Que les Méthodes Traditionnelles" },
      { value: "48h", label: "Temps Moyen pour un Match Parfait" }
    ],
    valueProps: [
      {
        icon: <Target className="w-6 h-6" />,
        title: "Matching de Précision",
        description: "Algorithmes d'IA qui comprennent vos exigences de projet et les capacités des talents"
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "Rapidité Éclair",
        description: "Du briefing projet au match parfait en jours, pas en semaines"
      },
      {
        icon: <Star className="w-6 h-6" />,
        title: "Qualité Garantie",
        description: "Processus de sélection rigoureux garantissant des professionnels de premier ordre"
      }
    ],
    ctaPrimary: "Voir Comment Ça Marche",
    ctaSecondary: "Voir les Études de Cas"
  },
  jp: {
    title: "なぜ当社のAI人材マッチングプラットフォームを選ぶのか？",
    subtitle: "私たちは単なる採用ツールではなく、最も重要なプロジェクトに完璧な人材を見つけるための戦略的パートナーです",
    mainStats: [
      { value: "95%", label: "マッチ精度率" },
      { value: "5x", label: "従来手法より高速" },
      { value: "48h", label: "完璧なマッチまでの平均時間" }
    ],
    valueProps: [
      {
        icon: <Target className="w-6 h-6" />,
        title: "精密マッチング",
        description: "プロジェクト要件と人材能力の両方を理解するAIアルゴリズム"
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "高速処理",
        description: "プロジェクトの概要から完璧なマッチまで数日で実現"
      },
      {
        icon: <Star className="w-6 h-6" />,
        title: "品質保証",
        description: "厳格な審査プロセスで最高級のプロフェッショナルのみを確保"
      }
    ],
    ctaPrimary: "仕組みを見る",
    ctaSecondary: "事例研究を見る"
  },
  zh: {
    title: "为什么选择我们的人工智能人才匹配平台？",
    subtitle: "我们不仅仅是另一种招聘工具——我们是您为最重要项目寻找完美人才的战略合作伙伴",
    mainStats: [
      { value: "95%", label: "匹配准确率" },
      { value: "5x", label: "比传统方法更快" },
      { value: "48h", label: "平均完美匹配时间" }
    ],
    valueProps: [
      {
        icon: <Target className="w-6 h-6" />,
        title: "精准匹配",
        description: "AI算法同时理解您的项目需求和人才能力"
      },
      {
        icon: <Zap className="w-6 h-6" />,
        title: "闪电速度",
        description: "从项目简介到完美匹配只需数天而非数周"
      },
      {
        icon: <Star className="w-6 h-6" />,
        title: "质量保证",
        description: "严格的筛选过程确保只有顶级专业人士"
      }
    ],
    ctaPrimary: "查看工作原理",
    ctaSecondary: "查看案例研究"
  }
};

interface WhyUsHeroProps {
  readonly language: Language;
}

export function WhyUsHero({ language }: WhyUsHeroProps) {
  const t = translations[language] || translations.en;

  return (
    <section className="relative py-20 bg-primary-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          initial="hidden"
          animate="visible"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-200 blur-3xl opacity-70"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-primary-100 blur-3xl opacity-50"></div>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left content */}
            <div className="lg:w-1/2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
              >
                {t.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl mb-8 text-gray-700 leading-relaxed"
              >
                {t.subtitle}
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-3 gap-6 mb-8"
              >
                {t.mainStats.map((stat) => (
                  <div key={stat.value} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-1 text-primary-600">{stat.value}</div>
                    <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="/how-it-works"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg shadow-primary hover:shadow-primary-md transition-all hover:scale-[1.02]"
                >
                  {t.ctaPrimary}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/case-studies"
                  className="flex items-center justify-center px-8 py-4 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 shadow-xs hover:shadow-md transition-all hover:scale-[1.02]"
                >
                  {t.ctaSecondary}
                </a>
              </motion.div>
            </div>

            {/* Right content - Value propositions */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="space-y-6"
              >
                {t.valueProps.map((prop, index) => (
                  <motion.div
                    key={prop.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-start p-6 bg-white rounded-lg shadow-xs border border-gray-100 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-primary-600">
                      {prop.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{prop.title}</h3>
                      <p className="text-gray-700">{prop.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}