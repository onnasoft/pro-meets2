import { motion } from "framer-motion";
import { ArrowRight, Users, Globe, Heart } from "lucide-react";
import { Language } from "@onnasoft/pro-meets-core";

const translations = {
  en: {
    title: "Reimagining how the world connects talent with opportunity",
    subtitle: "We're building the most human-centric AI platform for meaningful professional connections across borders",
    ctaPrimary: "Meet Our Team",
    ctaSecondary: "See Our Story",
    stats: [
      { value: "2025", label: "Founded in", icon: <Heart className="w-5 h-5" /> },
      { value: "2+", label: "Team Members", icon: <Users className="w-5 h-5" /> },
      { value: "90+", label: "Countries Served", icon: <Globe className="w-5 h-5" /> },
    ]
  },
  es: {
    title: "Reimaginando cómo el mundo conecta talento con oportunidades",
    subtitle: "Estamos construyendo la plataforma de IA más centrada en lo humano para conexiones profesionales significativas sin fronteras",
    ctaPrimary: "Conoce Nuestro Equipo",
    ctaSecondary: "Conoce Nuestra Historia",
    stats: [
      { value: "2025", label: "Fundada en", icon: <Heart className="w-5 h-5" /> },
      { value: "2+", label: "Miembros del equipo", icon: <Users className="w-5 h-5" /> },
      { value: "90+", label: "Países atendidos", icon: <Globe className="w-5 h-5" /> },
    ]
  },
  fr: {
    title: "Réinventer la façon dont le monde connecte les talents aux opportunités",
    subtitle: "Nous construisons la plateforme IA la plus centrée sur l'humain pour des connexions professionnelles significatives sans frontières",
    ctaPrimary: "Rencontrez Notre Équipe",
    ctaSecondary: "Voir Notre Histoire",
    stats: [
      { value: "2025", label: "Fondée en", icon: <Heart className="w-5 h-5" /> },
      { value: "2+", label: "Membres de l'équipe", icon: <Users className="w-5 h-5" /> },
      { value: "90+", label: "Pays desservis", icon: <Globe className="w-5 h-5" /> },
    ]
  },
  jp: {
    title: "世界がどのように人材と機会をつなぐかを再構築する",
    subtitle: "国境を越えた意味のある専門的なつながりのために、人間中心のAIプラットフォームを構築しています",
    ctaPrimary: "チームを紹介",
    ctaSecondary: "私たちのストーリー",
    stats: [
      { value: "2025", label: "設立年", icon: <Heart className="w-5 h-5" /> },
      { value: "2+", label: "チームメンバー", icon: <Users className="w-5 h-5" /> },
      { value: "90+", label: "サービスの提供国", icon: <Globe className="w-5 h-5" /> },
    ]
  },
  zh: {
    title: "重新构想世界如何连接人才与机遇",
    subtitle: "我们正在构建最以人为中心的人工智能平台，实现跨越国界的有意义的专业联系",
    ctaPrimary: "认识我们的团队",
    ctaSecondary: "了解我们的故事",
    stats: [
      { value: "2025", label: "成立于", icon: <Heart className="w-5 h-5" /> },
      { value: "2+", label: "团队成员", icon: <Users className="w-5 h-5" /> },
      { value: "90+", label: "服务国家", icon: <Globe className="w-5 h-5" /> },
    ]
  }
};

interface AboutHeroProps {
  readonly language: Language;
}

export function AboutHero({ language }: AboutHeroProps) {
  const t = translations[language] || translations.en;

  return (
    <section className="relative py-16 md:py-24 bg-primary-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100 rounded-full filter blur-3xl opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left content - Text */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 text-sm font-medium rounded-full bg-primary-100 text-primary-700">
                  About ProMeets
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
              >
                {t.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-gray-700 mb-10 leading-relaxed"
              >
                {t.subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a
                  href="#team"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg shadow-primary hover:shadow-primary-md transition-all hover:scale-[1.02]"
                >
                  {t.ctaPrimary}
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#story"
                  className="flex items-center justify-center px-8 py-4 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 shadow-xs hover:shadow-md transition-all hover:scale-[1.02]"
                >
                  {t.ctaSecondary}
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {t.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex justify-center mb-2 text-primary-600">
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right content - Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                {/* Main team image placeholder */}
                <div className="relative z-10 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-linear-to-r from-primary-500 to-primary-600 flex items-center justify-center text-white">
                      <Users className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Global Team</h3>
                    <p className="text-gray-700">Diverse talents united by a common mission</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-32 h-32 rounded-xl bg-primary-200/50 border border-primary-300/30"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-secondary-200/50 border border-secondary-300/30"></div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100 flex items-center gap-2"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Global</span>
                </motion.div>
                
                <motion.div
                  className="absolute bottom-8 -left-6 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100 flex items-center gap-2"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                >
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Innovation</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}