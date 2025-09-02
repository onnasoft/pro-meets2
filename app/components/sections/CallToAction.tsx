"use client";

import { motion } from "framer-motion";
import { Rocket, ChevronRight, Brain, Zap, Star } from "lucide-react";
import { Language } from "pro-meets-core";

const translations = {
  en: {
    title: "Ready to Find Perfect Talent for Your Projects?",
    subtitle: "Join thousands of companies using AI to match with top professionals and complete projects faster",
    primaryButton: "Start Your Project",
    secondaryButton: "See AI in Action",
    features: [
      "AI-powered matching",
      "No upfront costs",
      "14-day risk-free trial"
    ],
    stats: [
      { value: "5x", label: "Faster matching" },
      { value: "95%", label: "Match accuracy" },
      { value: "48h", label: "Average start time" }
    ]
  },
  es: {
    title: "¿Listo para Encontrar Talento Perfecto para Tus Proyectos?",
    subtitle: "Únete a miles de empresas usando IA para conectar con profesionales top y completar proyectos más rápido",
    primaryButton: "Comenzar Proyecto",
    secondaryButton: "Ver IA en Acción",
    features: [
      "Matching con IA",
      "Sin costos iniciales",
      "Prueba de 14 días sin riesgo"
    ],
    stats: [
      { value: "5x", label: "Más rápido matching" },
      { value: "95%", label: "Precisión de match" },
      { value: "48h", label: "Tiempo inicio promedio" }
    ]
  },
  fr: {
    title: "Prêt à Trouver les Talents Parfaits pour Vos Projets ?",
    subtitle: "Rejoignez des milliers d'entreprises utilisant l'IA pour matcher avec des professionnels top et compléter des projets plus rapidement",
    primaryButton: "Commencer un Projet",
    secondaryButton: "Voir l'IA en Action",
    features: [
      "Matching par IA",
      "Aucun coût initial",
      "Essai de 14 jours sans risque"
    ],
    stats: [
      { value: "5x", label: "Matching plus rapide" },
      { value: "95%", label: "Précision de matching" },
      { value: "48h", label: "Temps de départ moyen" }
    ]
  },
  jp: {
    title: "プロジェクトに最適な人材を見つける準備はできていますか？",
    subtitle: "AIを活用してトッププロフェッショナルとつながり、プロジェクトをより速く完了する何千もの企業に参加しましょう",
    primaryButton: "プロジェクトを開始",
    secondaryButton: "AIの実演を見る",
    features: [
      "AI駆動のマッチング",
      "初期費用なし",
      "14日間無リスクトライアル"
    ],
    stats: [
      { value: "5x", label: "より速いマッチング" },
      { value: "95%", label: "マッチ精度" },
      { value: "48h", label: "平均開始時間" }
    ]
  },
  zh: {
    title: "准备好为您的项目找到完美人才了吗？",
    subtitle: "加入数千家使用AI连接顶级专业人士并更快完成项目的公司",
    primaryButton: "开始项目",
    secondaryButton: "查看AI实战",
    features: [
      "AI驱动的匹配",
      "无前期成本",
      "14天无风险试用"
    ],
    stats: [
      { value: "5x", label: "更快匹配" },
      { value: "95%", label: "匹配准确率" },
      { value: "48h", label: "平均启动时间" }
    ]
  }
};

interface CallToActionProps {
  readonly language: Language;
}

export function CallToAction({ language }: CallToActionProps) {
  const t = translations[language] || translations.en;

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {t.stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Main Content */}
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              {t.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl mb-8 max-w-3xl mx-auto text-white/90"
            >
              {t.subtitle}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <a
                href="/start-project"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] group"
              >
                <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                {t.primaryButton}
              </a>

              <a
                href="/demo"
                className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all hover:scale-[1.02] group"
              >
                {t.secondaryButton}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 text-sm"
            >
              {t.features.map((feature, index) => {
                let Icon;
                if (index === 0) {
                  Icon = Brain;
                } else if (index === 1) {
                  Icon = Zap;
                } else {
                  Icon = Star;
                }
                return (
                  <div key={feature} className="flex items-center text-white/80">
                    <div className="w-5 h-5 mr-2 bg-white/20 rounded-full flex items-center justify-center">
                      <Icon className="w-3 h-3 text-white" />
                    </div>
                    {feature}
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}