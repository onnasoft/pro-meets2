"use client";

import { motion } from "framer-motion";
import { Rocket, ChevronRight } from "lucide-react";
import { Language } from "~/utils/language";

const translations = {
  en: {
    title: "Ready to transform your hiring process?",
    subtitle: "Join hundreds of companies already hiring better and faster with ProMeets",
    primaryButton: "Start free trial",
    secondaryButton: "View live demo",
    features: [
      "No credit card required",
      "14 days free",
      "Cancel anytime"
    ]
  },
  es: {
    title: "¿Listo para transformar tu proceso de reclutamiento?",
    subtitle: "Únete a cientos de empresas que ya están contratando mejor y más rápido con ProMeets",
    primaryButton: "Comenzar prueba gratuita",
    secondaryButton: "Ver demo en vivo",
    features: [
      "Sin tarjeta de crédito requerida",
      "14 días gratis",
      "Cancelación en cualquier momento"
    ]
  },
  fr: {
    title: "Prêt à transformer votre processus de recrutement?",
    subtitle: "Rejoignez des centaines d'entreprises qui recrutent déjà mieux et plus vite avec ProMeets",
    primaryButton: "Commencer l'essai gratuit",
    secondaryButton: "Voir la démo en direct",
    features: [
      "Aucune carte de crédit requise",
      "14 jours gratuits",
      "Annulation à tout moment"
    ]
  },
  jp: {
    title: "採用プロセスの変革を始めましょう",
    subtitle: "ProMeetsでより良い、より速い採用を実現している何百もの企業に参加しましょう",
    primaryButton: "無料トライアルを開始",
    secondaryButton: "ライブデモを見る",
    features: [
      "クレジットカード不要",
      "14日間無料",
      "いつでもキャンセル可能"
    ]
  },
  zh: {
    title: "准备好改变您的招聘流程了吗？",
    subtitle: "加入数百家已经使用ProMeets更好更快招聘的公司",
    primaryButton: "开始免费试用",
    secondaryButton: "查看实时演示",
    features: [
      "无需信用卡",
      "14天免费试用",
      "随时取消"
    ]
  }
};

interface CallToActionProps {
  readonly language: Language;
}

export function CallToAction({ language }: CallToActionProps) {
  const t = translations[language] || translations.en;

  return (
    <section className="py-20 bg-gradient-to-br from-primary-900 to-primary-700 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/signup"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
            >
              <Rocket className="w-5 h-5" />
              {t.primaryButton}
            </a>

            <a
              href="/demo"
              className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all hover:scale-[1.02]"
            >
              {t.secondaryButton}
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/80"
          >
            {t.features.map((feature) => (
              <div key={feature} className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                {feature}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}