import { motion } from "framer-motion";
import { TrendingUp, Target, Users, Clock, Award, Star, BarChart3, CheckCircle } from "lucide-react";
import { Language } from "pro-meets-core";

const translations = {
  en: {
    title: "Proven Results That Speak for Themselves",
    subtitle: "Thousands of successful projects delivered through our AI-powered matching platform",
    metrics: [
      {
        icon: <TrendingUp className="w-8 h-8" />,
        value: "95%",
        label: "Client Satisfaction Rate",
        description: "Across all completed projects"
      },
      {
        icon: <Target className="w-8 h-8" />,
        value: "5x",
        label: "Faster Project Start",
        description: "Compared to traditional hiring"
      },
      {
        icon: <Users className="w-8 h-8" />,
        value: "40%",
        label: "Cost Reduction",
        description: "On average per project"
      },
      {
        icon: <Clock className="w-8 h-8" />,
        value: "48h",
        label: "Average Matching Time",
        description: "From brief to perfect match"
      }
    ],
    caseStudies: [
      {
        company: "TechStart Inc.",
        industry: "SaaS Startup",
        challenge: "Needed senior React developers in 2 weeks for product launch",
        solution: "Matched with 3 pre-vetted React experts within 72 hours",
        results: [
          "Product launched on time",
          "40% under budget",
          "Ongoing partnership established"
        ]
      },
      {
        company: "GlobalBank Corp.",
        industry: "Financial Services",
        challenge: "Complex cloud migration requiring specialized AWS experts",
        solution: "AI-matched team with exact AWS certification requirements",
        results: [
          "Migration completed 3 weeks ahead of schedule",
          "Zero downtime during transition",
          "99.8% compliance rating"
        ]
      },
      {
        company: "HealthInnovate",
        industry: "Healthcare Technology",
        challenge: "Urgent need for HIPAA-compliant developers",
        solution: "Instant matching with healthcare-experienced professionals",
        results: [
          "Compliance requirements fully met",
          "Project delivered 2x faster than expected",
          "Scaled team from 3 to 12 specialists"
        ]
      }
    ],
    awards: [
      {
        title: "Best AI Platform 2024",
        issuer: "Tech Innovation Awards",
        icon: <Award className="w-6 h-6" />
      },
      {
        title: "Top 10 Recruitment Tech",
        issuer: "Global HR Summit",
        icon: <Star className="w-6 h-6" />
      },
      {
        title: "Excellence in Matching",
        issuer: "AI & Machine Learning Association",
        icon: <CheckCircle className="w-6 h-6" />
      }
    ],
    ctaText: "View Full Case Studies",
    statsTitle: "Industry-Leading Performance Metrics",
    performanceStats: [
      { metric: "Projects Completed", value: "2,500+" },
      { metric: "Talent Matches", value: "15,000+" },
      { metric: "Countries Served", value: "45+" },
      { metric: "Repeat Clients", value: "82%" }
    ]
  },
  es: {
    title: "Resultados Comprobados Que Hablan por Sí Mismos",
    subtitle: "Miles de proyectos exitosos entregados through nuestra plataforma de matching con IA",
    metrics: [
      {
        icon: <TrendingUp className="w-8 h-8" />,
        value: "95%",
        label: "Tasa de Satisfacción de Clientes",
        description: "En todos los proyectos completados"
      },
      {
        icon: <Target className="w-8 h-8" />,
        value: "5x",
        label: "Inicio Más Rápido de Proyectos",
        description: "Comparado con contratación tradicional"
      },
      {
        icon: <Users className="w-8 h-8" />,
        value: "40%",
        label: "Reducción de Costos",
        description: "En promedio por proyecto"
      },
      {
        icon: <Clock className="w-8 h-8" />,
        value: "48h",
        label: "Tiempo Promedio de Matching",
        description: "Desde brief hasta match perfecto"
      }
    ],
    caseStudies: [
      {
        company: "TechStart Inc.",
        industry: "Startup SaaS",
        challenge: "Necesitaban desarrolladores senior React en 2 semanas para lanzamiento de producto",
        solution: "Match con 3 expertos React pre-evaluados en 72 horas",
        results: [
          "Producto lanzado a tiempo",
          "40% bajo presupuesto",
          "Asociación continua establecida"
        ]
      },
      {
        company: "GlobalBank Corp.",
        industry: "Servicios Financieros",
        challenge: "Migración cloud compleja requiriendo expertos AWS especializados",
        solution: "Equipo matchado por IA con requisitos exactos de certificación AWS",
        results: [
          "Migración completada 3 semanas antes de lo planeado",
          "Cero downtime durante transición",
          "Calificación de cumplimiento 99.8%"
        ]
      },
      {
        company: "HealthInnovate",
        industry: "Tecnología de Salud",
        challenge: "Necesidad urgente de desarrolladores compatibles con HIPAA",
        solution: "Matching instantáneo con profesionales con experiencia en healthcare",
        results: [
          "Requisitos de cumplimiento totalmente satisfechos",
          "Proyecto entregado 2x más rápido de lo esperado",
          "Equipo escalado de 3 a 12 especialistas"
        ]
      }
    ],
    awards: [
      {
        title: "Mejor Plataforma IA 2024",
        issuer: "Premios Innovación Tecnológica",
        icon: <Award className="w-6 h-6" />
      },
      {
        title: "Top 10 Tech de Reclutamiento",
        issuer: "Cumbre Global de HR",
        icon: <Star className="w-6 h-6" />
      },
      {
        title: "Excelencia en Matching",
        issuer: "Asociación de IA & Machine Learning",
        icon: <CheckCircle className="w-6 h-6" />
      }
    ],
    ctaText: "Ver Casos de Estudio Completos",
    statsTitle: "Métricas de Rendimiento Líderes de la Industria",
    performanceStats: [
      { metric: "Proyectos Completados", value: "2,500+" },
      { metric: "Matches de Talento", value: "15,000+" },
      { metric: "Países Servidos", value: "45+" },
      { metric: "Clientes Recurrentes", value: "82%" }
    ]
  },
  fr: {
    title: "Résultats Éprouvés Qui Parlent d'Eux-Mêmes",
    subtitle: "Des milliers de projets réussis livrés grâce à notre plateforme de matching alimentée par l'IA",
    metrics: [
      {
        icon: <TrendingUp className="w-8 h-8" />,
        value: "95%",
        label: "Taux de Satisfaction Client",
        description: "Sur tous les projets complétés"
      },
      {
        icon: <Target className="w-8 h-8" />,
        value: "5x",
        label: "Démarrage de Projet Plus Rapide",
        description: "Comparé au recrutement traditionnel"
      },
      {
        icon: <Users className="w-8 h-8" />,
        value: "40%",
        label: "Réduction des Coûts",
        description: "En moyenne par projet"
      },
      {
        icon: <Clock className="w-8 h-8" />,
        value: "48h",
        label: "Temps de Matching Moyen",
        description: "Du briefing au match parfait"
      }
    ],
    caseStudies: [
      {
        company: "TechStart Inc.",
        industry: "Startup SaaS",
        challenge: "Développeurs React seniors nécessaires en 2 semaines pour le lancement du produit",
        solution: "Match avec 3 experts React pré-vérifiés en 72 heures",
        results: [
          "Produit lancé à temps",
          "40% sous le budget",
          "Partenariat continu établi"
        ]
      },
      {
        company: "GlobalBank Corp.",
        industry: "Services Financiers",
        challenge: "Migration cloud complexe nécessitant des experts AWS spécialisés",
        solution: "Équipe matchée par IA avec exigences exactes de certification AWS",
        results: [
          "Migration terminée 3 semaines avant le planning",
          "Zéro interruption pendant la transition",
          "Note de conformité 99.8%"
        ]
      },
      {
        company: "HealthInnovate",
        industry: "Technologie de Santé",
        challenge: "Besoin urgent de développeurs conformes HIPAA",
        solution: "Matching instantané avec des professionnels expérimentés en santé",
        results: [
          "Exigences de conformité entièrement satisfaites",
          "Projet livré 2x plus vite que prévu",
          "Équipe passée de 3 à 12 spécialistes"
        ]
      }
    ],
    awards: [
      {
        title: "Meilleure Plateforme IA 2024",
        issuer: "Prix Innovation Technologique",
        icon: <Award className="w-6 h-6" />
      },
      {
        title: "Top 10 Tech de Recrutement",
        issuer: "Sommet Global des RH",
        icon: <Star className="w-6 h-6" />
      },
      {
        title: "Excellence en Matching",
        issuer: "Association IA & Machine Learning",
        icon: <CheckCircle className="w-6 h-6" />
      }
    ],
    ctaText: "Voir les Études de Cas Complètes",
    statsTitle: "Métriques de Performance Leaders de l'Industrie",
    performanceStats: [
      { metric: "Projets Complétés", value: "2,500+" },
      { metric: "Matches de Talent", value: "15,000+" },
      { metric: "Pays Desservis", value: "45+" },
      { metric: "Clients Récurrents", value: "82%" }
    ]
  },
  jp: {
    title: "実績が物語る証明された結果",
    subtitle: "AIを活用したマッチングプラットフォームを通じて提供された何千もの成功プロジェクト",
    metrics: [
      {
        icon: <TrendingUp className="w-8 h-8" />,
        value: "95%",
        label: "顧客満足度",
        description: "全完了プロジェクトにわたって"
      },
      {
        icon: <Target className="w-8 h-8" />,
        value: "5x",
        label: "プロジェクト開始の高速化",
        description: "従来の採用と比較"
      },
      {
        icon: <Users className="w-8 h-8" />,
        value: "40%",
        label: "コスト削減",
        description: "プロジェクト平均"
      },
      {
        icon: <Clock className="w-8 h-8" />,
        value: "48h",
        label: "平均マッチング時間",
        description: "ブリーフから完璧なマッチまで"
      }
    ],
    caseStudies: [
      {
        company: "TechStart Inc.",
        industry: "SaaSスタートアップ",
        challenge: "製品ローンチのため2週間以内にシニアReact開発者が必要",
        solution: "72時間以内に事前審査済みReactエキスパート3名とマッチング",
        results: [
          "製品を時間通りにローンチ",
          "予算より40%削減",
          "継続的パートナーシップ確立"
        ]
      },
      {
        company: "GlobalBank Corp.",
        industry: "金融サービス",
        challenge: "特殊なAWS専門家が必要な複雑なクラウド移行",
        solution: "正確なAWS認定要件を持つAIマッチングチーム",
        results: [
          "スケジュールより3週間早く移行完了",
          "移行中のダウンタイムゼロ",
          "コンプライアンス評価99.8%"
        ]
      },
      {
        company: "HealthInnovate",
        industry: "医療技術",
        challenge: "HIPAA準拠の開発者が緊急に必要",
        solution: "医療経験のあるプロフェッショナルと即時マッチング",
        results: [
          "コンプライアンス要件完全達成",
          "期待より2倍速くプロジェクト納品",
          "チームを3名から12名の専門家に拡大"
        ]
      }
    ],
    awards: [
      {
        title: "ベストAIプラットフォーム2024",
        issuer: "技術革新アワード",
        icon: <Award className="w-6 h-6" />
      },
      {
        title: "トップ10採用テクノロジー",
        issuer: "グローバルHRサミット",
        icon: <Star className="w-6 h-6" />
      },
      {
        title: "マッチング優秀賞",
        issuer: "AI＆機械学習協会",
        icon: <CheckCircle className="w-6 h-6" />
      }
    ],
    ctaText: "完全な事例研究を見る",
    statsTitle: "業界をリードするパフォーマンス指標",
    performanceStats: [
      { metric: "完了プロジェクト数", value: "2,500+" },
      { metric: "人材マッチ数", value: "15,000+" },
      { metric: "サービス提供国数", value: "45+" },
      { metric: "リピートクライアント", value: "82%" }
    ]
  },
  zh: {
    title: "不言自明的 proven 结果",
    subtitle: "通过我们AI驱动的匹配平台交付的数千个成功项目",
    metrics: [
      {
        icon: <TrendingUp className="w-8 h-8" />,
        value: "95%",
        label: "客户满意度",
        description: "所有已完成项目"
      },
      {
        icon: <Target className="w-8 h-8" />,
        value: "5x",
        label: "项目启动更快",
        description: "与传统招聘相比"
      },
      {
        icon: <Users className="w-8 h-8" />,
        value: "40%",
        label: "成本降低",
        description: "平均每个项目"
      },
      {
        icon: <Clock className="w-8 h-8" />,
        value: "48h",
        label: "平均匹配时间",
        description: "从需求到完美匹配"
      }
    ],
    caseStudies: [
      {
        company: "TechStart Inc.",
        industry: "SaaS初创公司",
        challenge: "需要在2周内为产品发布找到高级React开发人员",
        solution: "72小时内匹配3位经过预审的React专家",
        results: [
          "产品按时发布",
          "低于预算40%",
          "建立持续合作伙伴关系"
        ]
      },
      {
        company: "GlobalBank Corp.",
        industry: "金融服务",
        challenge: "需要专业AWS专家的复杂云迁移",
        solution: "AI匹配具有确切AWS认证要求的团队",
        results: [
          "迁移提前3周完成",
          "过渡期间零停机",
          "合规评级99.8%"
        ]
      },
      {
        company: "HealthInnovate",
        industry: "医疗技术",
        challenge: "紧急需要符合HIPAA的开发人员",
        solution: "即时匹配具有医疗保健经验的专业人士",
        results: [
          "完全满足合规要求",
          "项目交付速度比预期快2倍",
          "团队从3人扩展到12名专家"
        ]
      }
    ],
    awards: [
      {
        title: "2024最佳AI平台",
        issuer: "科技创新奖",
        icon: <Award className="w-6 h-6" />
      },
      {
        title: "十大招聘技术",
        issuer: "全球人力资源峰会",
        icon: <Star className="w-6 h-6" />
      },
      {
        title: "匹配卓越奖",
        issuer: "AI与机器学习协会",
        icon: <CheckCircle className="w-6 h-6" />
      }
    ],
    ctaText: "查看完整案例研究",
    statsTitle: "行业领先的性能指标",
    performanceStats: [
      { metric: "已完成项目", value: "2,500+" },
      { metric: "人才匹配", value: "15,000+" },
      { metric: "服务国家", value: "45+" },
      { metric: "回头客户", value: "82%" }
    ]
  }
};

interface SuccessMetricsProps {
  readonly language: Language;
}

export function SuccessMetrics({ language }: SuccessMetricsProps) {
  const t = translations[language] || translations.en;

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {t.metrics.map((metric) => (
            <motion.div
              key={metric.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{metric.label}</h3>
              <p className="text-gray-600 text-sm">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Performance Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {t.statsTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {t.performanceStats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.metric}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {t.caseStudies.map((study) => (
            <motion.div
              key={study.solution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900">{study.company}</h3>
                <p className="text-primary-600 font-medium">{study.industry}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Challenge</h4>
                <p className="text-gray-600 text-sm">{study.challenge}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Solution</h4>
                <p className="text-gray-600 text-sm">{study.solution}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Results</h4>
                <ul className="space-y-1">
                  {study.results.map((result) => (
                    <li key={result} className="flex items-start text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-primary-50 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Industry Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.awards.map((award) => (
              <div key={award.title} className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {award.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{award.title}</h4>
                <p className="text-gray-600 text-sm">{award.issuer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="/case-studies"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors"
          >
            <BarChart3 className="w-5 h-5 mr-2" />
            {t.ctaText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}