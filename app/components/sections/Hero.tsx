
import React, { useEffect, useMemo, useState } from "react";
import {
  CalendarCheck,
  Video,
  Users,
  Lightbulb,
  TrendingUp,
  ChevronRight,
  Rocket,
} from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Language } from "~/utils/language";

const translations = {
  es: {
    titlePrefix: "Transforma tu ",
    titleSuffix: "proceso de reclutamiento",
    subtitle:
      "La plataforma todo-en-uno para agendar entrevistas, realizar videollamadas, gestionar candidatos y grabar sesiones.",
    typing1: "Automatizado",
    typing2: "Inteligente",
    typing3: "Eficiente",
    typing4: "Colaborativo",
    ctaDemo: "Solicitar Demo",
    ctaFeatures: "Ver Funcionalidades",
    poweredBy: "Potenciado con tecnología avanzada:",
    newRecruitment: "✨ La nueva forma de reclutar",
    scheduledInterview: "Entrevista programada",
    frontendPosition:
      "Reunión con Carlos M. para puesto de Desarrollador Frontend",
    joinNow: "Unirse ahora",
    recruitmentPillars: {
      scheduling: "Agendamiento",
      videoCalls: "Videollamadas",
      collaboration: "Colaboración",
      intelligence: "Inteligencia",
      analytics: "Analíticas",
    },
  },
  en: {
    titlePrefix: "Transform your ",
    titleSuffix: "hiring process",
    subtitle:
      "The all-in-one platform to schedule interviews, conduct video calls, manage candidates and record sessions.",
    typing1: "Automated",
    typing2: "Smart",
    typing3: "Efficient",
    typing4: "Collaborative",
    ctaDemo: "Request Demo",
    ctaFeatures: "Explore Features",
    poweredBy: "Powered by advanced technology:",
    newRecruitment: "✨ The new way to recruit",
    scheduledInterview: "Scheduled interview",
    frontendPosition: "Meeting with Carlos M. for Frontend Developer position",
    joinNow: "Join now",
    recruitmentPillars: {
      scheduling: "Scheduling",
      videoCalls: "Video Calls",
      collaboration: "Collaboration",
      intelligence: "Intelligence",
      analytics: "Analytics",
    },
  },
  fr: {
    titlePrefix: "Transformez votre ",
    titleSuffix: "processus de recrutement",
    subtitle:
      "La plateforme tout-en-un pour planifier des entretiens, effectuer des appels vidéo, gérer les candidats et enregistrer des sessions.",
    typing1: "Automatisé",
    typing2: "Intelligent",
    typing3: "Efficace",
    typing4: "Collaboratif",
    ctaDemo: "Demander une démo",
    ctaFeatures: "Voir les fonctionnalités",
    poweredBy: "Propulsé par une technologie avancée :",
    newRecruitment: "✨ La nouvelle façon de recruter",
    scheduledInterview: "Entretien programmé",
    frontendPosition:
      "Réunion avec Carlos M. pour le poste de Développeur Frontend",
    joinNow: "Rejoindre maintenant",
    recruitmentPillars: {
      scheduling: "Planification",
      videoCalls: "Appels vidéo",
      collaboration: "Collaboration",
      intelligence: "Intelligence",
      analytics: "Analytique",
    },
  },
  jp: {
    titlePrefix: "あなたの",
    titleSuffix: "採用プロセスを変革",
    subtitle:
      "面接のスケジュール、ビデオ通話の実施、候補者の管理、セッションの記録ができるオールインワンプラットフォーム。",
    typing1: "自動化",
    typing2: "スマート",
    typing3: "効率的",
    typing4: "協力的",
    ctaDemo: "デモをリクエスト",
    ctaFeatures: "機能を見る",
    poweredBy: "高度な技術で構築:",
    newRecruitment: "✨ 新しい採用方法",
    scheduledInterview: "予定された面接",
    frontendPosition:
      "フロントエンド開発者ポジションについてのCarlos M.との面談",
    joinNow: "今すぐ参加",
    recruitmentPillars: {
      scheduling: "スケジューリング",
      videoCalls: "ビデオ通話",
      collaboration: "コラボレーション",
      intelligence: "インテリジェンス",
      analytics: "分析",
    },
  },
  zh: {
    titlePrefix: "改变你的",
    titleSuffix: "招聘流程",
    subtitle: "一体化平台，用于安排面试、进行视频通话、管理候选人和录制会话。",
    typing1: "自动化",
    typing2: "智能",
    typing3: "高效",
    typing4: "协作",
    ctaDemo: "请求演示",
    ctaFeatures: "查看功能",
    poweredBy: "由先进技术驱动：",
    newRecruitment: "✨ 新的招聘方式",
    scheduledInterview: "已安排的面试",
    frontendPosition: "与Carlos M.会面讨论前端开发职位",
    joinNow: "立即加入",
    recruitmentPillars: {
      scheduling: "日程安排",
      videoCalls: "视频通话",
      collaboration: "协作",
      intelligence: "智能",
      analytics: "分析",
    },
  },
};

interface HeroProps {
  readonly language: Language;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language] || translations.es;

  const words = useMemo(
    () => [t.typing1, t.typing2, t.typing3, t.typing4],
    [t]
  );

  const [typingText, setTypingText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeWriter = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setTypingText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setTypingText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const speed = isDeleting ? 100 : 150;
    const timer = setTimeout(typeWriter, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  // Traducir los pilares de reclutamiento
  const recruitmentPillars = useMemo(
    () => [
      {
        icon: <CalendarCheck className="w-6 h-6" />,
        title: t.recruitmentPillars.scheduling,
      },
      {
        icon: <Video className="w-6 h-6" />,
        title: t.recruitmentPillars.videoCalls,
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: t.recruitmentPillars.collaboration,
      },
      {
        icon: <Lightbulb className="w-6 h-6" />,
        title: t.recruitmentPillars.intelligence,
      },
      {
        icon: <TrendingUp className="w-6 h-6" />,
        title: t.recruitmentPillars.analytics,
      },
    ],
    [language]
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-primary-50 min-h-[90vh] flex items-center pt-8 lg:pt-0">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-200 blur-3xl" />
          <motion.div className="absolute top-2/3 left-2/3 w-64 h-64 rounded-full bg-secondary-700 blur-3xl" />
          <motion.div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary-300 blur-3xl" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 md:py-24 lg:py-32">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div className="mb-8">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800 mb-4">
                {t.newRecruitment}
              </span>
            </motion.div>

            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t.titlePrefix}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">
                {t.titleSuffix}
              </span>
            </motion.h1>

            <motion.div className="h-12 mb-6">
              <span className="text-2xl md:text-3xl font-medium text-primary-600">
                {typingText}
                <span className="animate-pulse">|</span>
              </span>
            </motion.div>

            <motion.p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              {t.subtitle}
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/demo"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg shadow-primary hover:shadow-primary-md transition-all hover:scale-[1.02]"
              >
                <Rocket className="w-5 h-5" />
                {t.ctaDemo}
              </Link>
              <Link
                to="#features"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
              >
                {t.ctaFeatures}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div className="mt-12">
              <p className="text-sm text-gray-500 mb-4">{t.poweredBy}</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {recruitmentPillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-primary-200 transition-colors"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.5 + index * 0.1 },
                    }}
                  >
                    <div className="text-primary-500">{pillar.icon}</div>
                    <span className="text-sm font-medium">{pillar.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mockup image */}
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <motion.div
              className="relative floating"
              data-offset="0"
              animate="float"
            >
              <motion.div
                className="absolute -top-10 -left-10 w-64 h-64 rounded-2xl bg-primary-100/50 border border-primary-200/50"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 }}
              />
              <motion.div
                className="absolute -bottom-10 -right-10 w-64 h-64 rounded-2xl bg-primary-200/50 border border-primary-300/50"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 }}
              />
              <motion.div
                className="relative z-10 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="p-4 bg-gradient-to-br from-primary-50 to-primary-100 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center text-white"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                    >
                      <Video className="w-8 h-8" />
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-2">
                      {t.scheduledInterview}
                    </h3>
                    <p className="text-gray-600 text-sm max-w-xs mx-auto">
                      {t.frontendPosition}
                    </p>
                    <br />
                    <Link
                      to="/signup"
                      className="mt-6 px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg text-sm font-medium hover:from-primary-600 hover:to-primary-700 transition-colors"
                    >
                      {t.joinNow}
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
