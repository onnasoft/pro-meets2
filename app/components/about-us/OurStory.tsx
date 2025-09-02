import { motion } from "framer-motion";
import { Code, Brain, Zap, Heart, Sparkles } from "lucide-react";
import { Language } from "pro-meets-core";

const translations = {
  en: {
    title: "Our Story",
    subtitle: "Born from a developer's frustration, built with modern technology",
    origin: {
      title: "The Origin",
      description: "As a developer, I was tired of manually filling out the same information across multiple job platforms when most of what recruiters needed was already publicly available on my GitHub, LinkedIn, and other professional networks."
    },
    insight: {
      title: "The Insight",
      description: "With recent advances in AI, MCP (Model Context Protocol), and data integration technologies, I realized we could create a simple solution that automatically aggregates professional information while respecting privacy and giving control back to users."
    },
    solution: {
      title: "Our Approach",
      description: "We're building a platform that connects to your existing professional profiles, analyzes your skills and experience intelligently, and presents your complete professional story to opportunities that truly match your capabilities—without the repetitive data entry."
    },
    philosophy: {
      title: "Our Philosophy",
      items: [
        "No more repetitive forms or redundant data entry",
        "Your existing online presence should work for you",
        "AI should simplify processes, not complicate them",
        "Technology should serve people, not the other way around"
      ]
    }
  },
  es: {
    title: "Nuestra Historia",
    subtitle: "Nacida de la frustración de un desarrollador, construida con tecnología moderna",
    origin: {
      title: "El Origen",
      description: "Como desarrollador, estaba cansado de completar manualmente la misma información en múltiples plataformas de empleo cuando la mayoría de lo que los reclutadores necesitaban ya estaba disponible públicamente en mi GitHub, LinkedIn y otras redes profesionales."
    },
    insight: {
      title: "La Insight",
      description: "Con los recientes avances en IA, MCP (Model Context Protocol) y tecnologías de integración de datos, me di cuenta de que podíamos crear una solución simple que agregara automáticamente información profesional mientras respeta la privacidad y devuelve el control a los usuarios."
    },
    solution: {
      title: "Nuestro Enfoque",
      description: "Estamos construyendo una plataforma que se conecta a tus perfiles profesionales existentes, analiza tus habilidades y experiencia inteligentemente, y presenta tu historia profesional completa a oportunidades que realmente coinciden con tus capacidades—sin la entrada de datos repetitiva."
    },
    philosophy: {
      title: "Nuestra Filosofía",
      items: [
        "No más formularios repetitivos o entrada de datos redundante",
        "Tu presencia online existente debería trabajar para ti",
        "La IA debería simplificar procesos, no complicarlos",
        "La tecnología debería servir a las personas, no al revés"
      ]
    }
  },
  fr: {
    title: "Notre Histoire",
    subtitle: "Née de la frustration d'un développeur, construite avec une technologie moderne",
    origin: {
      title: "L'Origine",
      description: "En tant que développeur, j'étais fatigué de remplir manuellement les mêmes informations sur plusieurs plateformes d'emploi alors que la plupart de ce dont les recruteurs avaient besoin était déjà disponible publiquement sur mon GitHub, LinkedIn et d'autres réseaux professionnels."
    },
    insight: {
      title: "L'Insight",
      description: "Avec les récentes avancées en IA, MCP (Model Context Protocol) et les technologies d'intégration de données, j'ai réalisé que nous pouvions créer une solution simple qui agrège automatiquement les informations professionnelles tout en respectant la vie privée et en redonnant le contrôle aux utilisateurs."
    },
    solution: {
      title: "Notre Approche",
      description: "Nous construisons une plateforme qui se connecte à vos profils professionnels existants, analyse intelligemment vos compétences et votre expérience, et présente votre histoire professionnelle complète à des opportunités qui correspondent vraiment à vos capacités—saisie de données répétitive."
    },
    philosophy: {
      title: "Notre Philosophie",
      items: [
        "Plus de formulaires répétitifs ou de saisie de données redondante",
        "Votre présence en ligne existante devrait travailler pour vous",
        "L'IA devrait simplifier les processus, pas les compliquer",
        "La technologie devrait servir les gens, pas l'inverse"
      ]
    }
  },
  jp: {
    title: "私たちのストーリー",
    subtitle: "開発者のフラストレーションから生まれ、現代技術で構築",
    origin: {
      title: "起源",
      description: "開発者として、GitHub、LinkedIn、その他の専門ネットワークにすでに公開されている情報のほとんどを採用担当者が必要としているのに、複数の求人プラットフォームで同じ情報を手動で入力することにうんざりしていました。"
    },
    insight: {
      title: "洞察",
      description: "AI、MCP（Model Context Protocol）、データ統合技術の最近の進歩により、プライバシーを尊重し、ユーザーにコントロールを戻しながら、専門情報を自動的に集約するシンプルなソリューションを作成できることに気づきました。"
    },
    solution: {
      title: "私たちのアプローチ",
      description: "既存の専門プロファイルに接続し、スキルと経験を智能的に分析し、反復的なデータ入力をすることなく、あなたの能力に真に一致する機会に完全な専門的なストーリーを提示するプラットフォームを構築しています。"
    },
    philosophy: {
      title: "私たちの哲学",
      items: [
        "反復的なフォームや冗長なデータ入力はもう不要",
        "既存のオンライン存在はあなたのために働くべき",
        "AIはプロセスを簡素化すべきで、複雑にしない",
        "技術は人々に奉仕すべきで、その逆ではない"
      ]
    }
  },
  zh: {
    title: "我们的故事",
    subtitle: "诞生于开发者的挫折，用现代技术构建",
    origin: {
      title: "起源",
      description: "作为一名开发者，我厌倦了在多个招聘平台上手动填写相同的信息，因为招聘人员需要的大部分信息已经在我的GitHub、LinkedIn和其他专业网络上公开可用。"
    },
    insight: {
      title: "洞察",
      description: "随着AI、MCP（模型上下文协议）和数据集成技术的最新进展，我意识到我们可以创建一个简单的解决方案，自动聚合专业信息，同时尊重隐私并将控制权交还给用户。"
    },
    solution: {
      title: "我们的方法",
      description: "我们正在构建一个连接到您现有专业档案的平台，智能分析您的技能和经验，并将您的完整职业故事呈现给真正匹配您能力的机会——无需重复数据输入。"
    },
    philosophy: {
      title: "我们的理念",
      items: [
        "不再有重复的表格或冗余的数据输入",
        "您现有的在线存在应该为您工作",
        "AI应该简化流程，而不是复杂化",
        "技术应该服务人民，而不是反过来"
      ]
    }
  }
};

interface OurStoryProps {
  readonly language: Language;
}

export function OurStory({ language }: OurStoryProps) {
  const t = translations[language] || translations.en;

  return (
    <section id="story" className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t.title}
            </h2>
            <p className="text-xl text-gray-700">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Origin Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xs border border-gray-200 mb-12"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                <Code className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t.origin.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.origin.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Insight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xs border border-gray-200 mb-12"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
                <Brain className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t.insight.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.insight.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xs border border-gray-200 mb-12"
          >
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                <Zap className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t.solution.title}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t.solution.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl border border-primary-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center text-white">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">
                {t.philosophy.title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {t.philosophy.items.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 bg-white/80 backdrop-blur-sm p-4 rounded-lg"
                >
                  <Sparkles className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}