import React, { useEffect, useMemo, useState } from "react";
import {
  Video,
  Users,
  Lightbulb,
  TrendingUp,
  ChevronRight,
  Building2,
  UserCheck,
  Handshake,
  Target,
} from "lucide-react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Language } from "@onnasoft/pro-meets-core";

const translations = {
  es: {
    titlePrefix: "Conectamos ",
    titleSuffix: "talento con oportunidades",
    subtitle:
      "La plataforma donde reclutadores y candidatos se encuentran para crear conexiones profesionales significativas.",
    typing1: "Inteligente",
    typing2: "Eficiente",
    typing3: "Colaborativo",
    typing4: "Transparente",
    ctaJoin: "Unirse Ahora",
    ctaFeatures: "Ver Funcionalidades",
    poweredBy: "Potenciado con tecnología avanzada:",
    newPlatform: "✨ La nueva forma de conectar talento",
    scheduledMeeting: "Reunión programada",
    interviewExample:
      "Entrevista con TechCorp para puesto de Desarrollador Senior",
    joinNow: "Unirse ahora",
    platformPillars: {
      matching: "Emparejamiento",
      videoCalls: "Entrevistas",
      collaboration: "Colaboración",
      intelligence: "Inteligencia",
      analytics: "Analíticas",
    },
    forRecruiters: "Para Reclutadores",
    forCandidates: "Para Candidatos",
    recruitersBenefit: "Encuentra el talento perfecto para tu equipo",
    candidatesBenefit: "Descubre oportunidades que se ajustan a tu perfil",
  },
  en: {
    titlePrefix: "Connecting ",
    titleSuffix: "talent with opportunities",
    subtitle:
      "The platform where recruiters and candidates meet to create meaningful professional connections.",
    typing1: "Smart",
    typing2: "Efficient",
    typing3: "Collaborative",
    typing4: "Transparent",
    ctaJoin: "Join Now",
    ctaFeatures: "Explore Features",
    poweredBy: "Powered by advanced technology:",
    newPlatform: "✨ The new way to connect talent",
    scheduledMeeting: "Scheduled meeting",
    interviewExample: "Interview with TechCorp for Senior Developer position",
    joinNow: "Join now",
    platformPillars: {
      matching: "Matching",
      videoCalls: "Interviews",
      collaboration: "Collaboration",
      intelligence: "Intelligence",
      analytics: "Analytics",
    },
    forRecruiters: "For Recruiters",
    forCandidates: "For Candidates",
    recruitersBenefit: "Find the perfect talent for your team",
    candidatesBenefit: "Discover opportunities that match your profile",
  },
  fr: {
    titlePrefix: "Connecter ",
    titleSuffix: "les talents aux opportunités",
    subtitle:
      "La plateforme où recruteurs et candidats se rencontrent pour créer des connexions professionnelles significatives.",
    typing1: "Intelligent",
    typing2: "Efficace",
    typing3: "Collaboratif",
    typing4: "Transparent",
    ctaJoin: "Rejoindre Maintenant",
    ctaFeatures: "Voir les fonctionnalités",
    poweredBy: "Propulsé par une technologie avancée :",
    newPlatform: "✨ La nouvelle façon de connecter les talents",
    scheduledMeeting: "Réunion programmée",
    interviewExample: "Entretien avec TechCorp pour un poste de Développeur Senior",
    joinNow: "Rejoindre maintenant",
    platformPillars: {
      matching: "Appariement",
      videoCalls: "Entretiens",
      collaboration: "Collaboration",
      intelligence: "Intelligence",
      analytics: "Analytique",
    },
    forRecruiters: "Pour Recruteurs",
    forCandidates: "Pour Candidats",
    recruitersBenefit: "Trouvez le talent parfait pour votre équipe",
    candidatesBenefit: "Découvrez des opportunités qui correspondent à votre profil",
  },
  jp: {
    titlePrefix: "機会と人材を",
    titleSuffix: "つなぐプラットフォーム",
    subtitle:
      "採用担当者と候補者が出会い、意味のある専門的なつながりを作るプラットフォーム。",
    typing1: "スマート",
    typing2: "効率的",
    typing3: "協力的",
    typing4: "透明",
    ctaJoin: "今すぐ参加",
    ctaFeatures: "機能を見る",
    poweredBy: "高度な技術で構築:",
    newPlatform: "✨ 新しい人材コネクション",
    scheduledMeeting: "予定された面接",
    interviewExample: "TechCorpとのシニア開発者ポジションについての面談",
    joinNow: "今すぐ参加",
    platformPillars: {
      matching: "マッチング",
      videoCalls: "面接",
      collaboration: "コラボレーション",
      intelligence: "インテリジェンス",
      analytics: "分析",
    },
    forRecruiters: "採用担当者向け",
    forCandidates: "候補者向け",
    recruitersBenefit: "あなたのチームにぴったりの人材を見つけましょう",
    candidatesBenefit: "あなたのプロファイルに合った機会を見つけましょう",
  },
  zh: {
    titlePrefix: "连接人才与",
    titleSuffix: "机遇的平台",
    subtitle: "招聘人员和候选人见面的平台，创造有意义的专业联系。",
    typing1: "智能",
    typing2: "高效",
    typing3: "协作",
    typing4: "透明",
    ctaJoin: "立即加入",
    ctaFeatures: "查看功能",
    poweredBy: "由先进技术驱动：",
    newPlatform: "✨ 连接人才的新方式",
    scheduledMeeting: "安排的会议",
    interviewExample: "与TechCorp面试高级开发职位",
    joinNow: "立即加入",
    platformPillars: {
      matching: "匹配",
      videoCalls: "面试",
      collaboration: "协作",
      intelligence: "智能",
      analytics: "分析",
    },
    forRecruiters: "招聘人员",
    forCandidates: "候选人",
    recruitersBenefit: "为您的团队找到完美人才",
    candidatesBenefit: "发现与您资料匹配的机会",
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

  // Pilares de la plataforma
  const platformPillars = useMemo(
    () => [
      {
        icon: <Target className="w-6 h-6" />,
        title: t.platformPillars.matching,
      },
      {
        icon: <Video className="w-6 h-6" />,
        title: t.platformPillars.videoCalls,
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: t.platformPillars.collaboration,
      },
      {
        icon: <Lightbulb className="w-6 h-6" />,
        title: t.platformPillars.intelligence,
      },
      {
        icon: <TrendingUp className="w-6 h-6" />,
        title: t.platformPillars.analytics,
      },
    ],
    [language]
  );

  return (
    <section className="relative overflow-hidden bg-primary-50 min-h-[90vh] flex items-center lg:pt-0">
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
      <div className="relative container mx-auto px-6">
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
                {t.newPlatform}
              </span>
            </motion.div>

            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t.titlePrefix}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-600 to-primary-700">
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

            {/* Dual audience benefits */}
            <motion.div className="flex flex-col sm:flex-row gap-6 mb-10">
              <div className="flex-1 bg-white p-4 rounded-lg shadow-xs border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <Building2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{t.forRecruiters}</h3>
                </div>
                <p className="text-sm text-gray-600">{t.recruitersBenefit}</p>
              </div>
              <div className="flex-1 bg-white p-4 rounded-lg shadow-xs border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <UserCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">{t.forCandidates}</h3>
                </div>
                <p className="text-sm text-gray-600">{t.candidatesBenefit}</p>
              </div>
            </motion.div>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/signup"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg shadow-primary hover:shadow-primary-md transition-all hover:scale-[1.02]"
              >
                <Handshake className="w-5 h-5" />
                {t.ctaJoin}
              </Link>
              <Link
                to="#features"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 shadow-xs hover:shadow-md transition-all hover:scale-[1.02]"
              >
                {t.ctaFeatures}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div className="mt-12">
              <p className="text-sm text-gray-500 mb-4">{t.poweredBy}</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {platformPillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-xs border border-gray-100 hover:border-primary-200 transition-colors"
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
                <div className="p-4 bg-linear-to-br from-primary-50 to-primary-100 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-r from-primary-500 to-primary-600 flex items-center justify-center text-white"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                    >
                      <Handshake className="w-8 h-8" />
                    </motion.div>
                    <h3 className="font-semibold text-lg mb-2">
                      {t.scheduledMeeting}
                    </h3>
                    <p className="text-gray-600 text-sm max-w-xs mx-auto">
                      {t.interviewExample}
                    </p>
                    <br />
                    <Link
                      to="/signup"
                      className="mt-6 px-6 py-2 bg-linear-to-r from-primary-500 to-primary-600 text-white rounded-lg text-sm font-medium hover:from-primary-600 hover:to-primary-700 transition-colors"
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