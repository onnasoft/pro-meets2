import { motion } from "framer-motion";
import { Target, Eye, Heart, Users, Shield, Zap, Star, } from "lucide-react";
import { Language } from "@onnasoft/pro-meets-core";

const translations = {
  en: {
    title: "Our Guiding Principles",
    mission: {
      title: "Our Mission",
      description: "To revolutionize talent acquisition by connecting companies with the perfect professionals through intelligent, ethical AI matching—making recruitment faster, more accurate, and truly human-centric.",
      icon: <Target className="w-8 h-8" />
    },
    vision: {
      title: "Our Vision",
      description: "A world where every professional finds meaningful work and every organization discovers the talent needed to thrive, eliminating barriers and creating global opportunities through technology.",
      icon: <Eye className="w-8 h-8" />
    },
    values: {
      title: "Our Values",
      items: [
        {
          title: "Excellence",
          description: "We pursue exceptional quality in everything we do, from our algorithms to our customer support.",
          icon: <Star className="w-8 h-8" />
        },
        {
          title: "Innovation",
          description: "We continuously push boundaries to develop cutting-edge solutions that transform talent matching.",
          icon: <Zap className="w-8 h-8" />
        },
        {
          title: "Integrity",
          description: "We operate with transparency, honesty, and ethical practices in all our interactions.",
          icon: <Shield className="w-8 h-8" />
        },
        {
          title: "Inclusion",
          description: "We celebrate diversity and create equal opportunities for professionals across all backgrounds.",
          icon: <Users className="w-8 h-8" />
        },
        {
          title: "Impact",
          description: "We measure success by the positive change we create in people's careers and organizations.",
          icon: <Heart className="w-8 h-8" />
        }
      ]
    }
  },
  es: {
    title: "Nuestros Principios Rectores",
    mission: {
      title: "Nuestra Misión",
      description: "Revolucionar la adquisición de talento conectando empresas con los profesionales perfectos a través de matching con IA inteligente y ética—haciendo el reclutamiento más rápido, preciso y verdaderamente centrado en las personas.",
      icon: <Target className="w-8 h-8" />
    },
    vision: {
      title: "Nuestra Visión",
      description: "Un mundo donde cada profesional encuentra trabajo significativo y cada organización descubre el talento necesario para prosperar, eliminando barreras y creando oportunidades globales through la tecnología.",
      icon: <Eye className="w-8 h-8" />
    },
    values: {
      title: "Nuestros Valores",
      items: [
        {
          title: "Excelencia",
          description: "Buscamos calidad excepcional en todo lo que hacemos, desde nuestros algoritmos hasta nuestro soporte al cliente.",
          icon: <Star className="w-8 h-8" />
        },
        {
          title: "Innovación",
          description: "Empujamos continuamente los límites para desarrollar soluciones vanguardistas que transformen la búsqueda de talento.",
          icon: <Zap className="w-8 h-8" />
        },
        {
          title: "Integridad",
          description: "Operamos con transparencia, honestidad y prácticas éticas en todas nuestras interacciones.",
          icon: <Shield className="w-8 h-8" />
        },
        {
          title: "Inclusión",
          description: "Celebramos la diversidad y creamos oportunidades iguales para profesionales de todos los orígenes.",
          icon: <Users className="w-8 h-8" />
        },
        {
          title: "Impacto",
          description: "Medimos el éxito por el cambio positivo que creamos en las carreras de las personas y las organizaciones.",
          icon: <Heart className="w-8 h-8" />
        }
      ]
    }
  },
  fr: {
    title: "Nos Principes Directeurs",
    mission: {
      title: "Notre Mission",
      description: "Révolutionner l'acquisition de talents en connectant les entreprises avec les professionnels parfaits grâce à un matching IA intelligent et éthique—rendant le recrutement plus rapide, plus précis et véritablement centré sur l'humain.",
      icon: <Target className="w-8 h-8" />
    },
    vision: {
      title: "Notre Vision",
      description: "Un monde où chaque professionnel trouve un travail significatif et chaque organisation découvre les talents nécessaires pour prospérer, éliminant les barrières et créant des opportunités mondiales grâce à la technologie.",
      icon: <Eye className="w-8 h-8" />
    },
    values: {
      title: "Nos Valeurs",
      items: [
        {
          title: "Excellence",
          description: "Nous poursuivons une qualité exceptionnelle dans tout ce que nous faisons, de nos algorithmes à notre support client.",
          icon: <Star className="w-8 h-8" />
        },
        {
          title: "Innovation",
          description: "Nous repoussons continuellement les limites pour développer des solutions de pointe qui transforment la mise en relation des talents.",
          icon: <Zap className="w-8 h-8" />
        },
        {
          title: "Intégrité",
          description: "Nous opérons avec transparence, honnêteté et pratiques éthiques dans toutes nos interactions.",
          icon: <Shield className="w-8 h-8" />
        },
        {
          title: "Inclusion",
          description: "Nous célébrons la diversité et créons des opportunités égales pour les professionnels de tous horizons.",
          icon: <Users className="w-8 h-8" />
        },
        {
          title: "Impact",
          description: "Nous mesurons le succès par le changement positif que nous créons dans les carrières des personnes et des organisations.",
          icon: <Heart className="w-8 h-8" />
        }
      ]
    }
  },
  jp: {
    title: "私たちの指針となる原則",
    mission: {
      title: "私たちの使命",
      description: "インテリジェントで倫理的なAIマッチングを通じて、企業と完璧なプロフェッショナルをつなぐことで人材獲得を革新し、採用をより迅速、正確、そして真に人間中心のものにします。",
      icon: <Target className="w-8 h-8" />
    },
    vision: {
      title: "私たちのビジョン",
      description: "すべてのプロフェッショナルが意味のある仕事を見つけ、すべての組織が繁栄に必要な人材を発見する世界。テクノロジーを通じて障壁を排除し、グローバルな機会を創出します。",
      icon: <Eye className="w-8 h-8" />
    },
    values: {
      title: "私たちの価値観",
      items: [
        {
          title: "卓越性",
          description: "アルゴリズムからカスタマーサポートまで、私たちのするすべてのことにおいて卓越した品質を追求します。",
          icon: <Star className="w-8 h-8" />
        },
        {
          title: "革新",
          description: "人材マッチングを変革する最先端のソリューションを開発するために、常に限界に挑戦します。",
          icon: <Zap className="w-8 h-8" />
        },
        {
          title: "誠実さ",
          description: "すべてのやり取りにおいて、透明性、誠実さ、倫理的な実践で運営します。",
          icon: <Shield className="w-8 h-8" />
        },
        {
          title: "包括性",
          description: "多様性を称賛し、あらゆる背景を持つプロフェッショナルのための平等な機会を創出します。",
          icon: <Users className="w-8 h-8" />
        },
        {
          title: "影響力",
          description: "人々のキャリアと組織に生み出すポジティブな変化によって成功を測定します。",
          icon: <Heart className="w-8 h-8" />
        }
      ]
    }
  },
  zh: {
    title: "我们的指导原则",
    mission: {
      title: "我们的使命",
      description: "通过智能、道德的AI匹配将公司与完美专业人士联系起来，彻底改变人才获取方式——使招聘更快、更准确、真正以人为中心。",
      icon: <Target className="w-8 h-8" />
    },
    vision: {
      title: "我们的愿景",
      description: "一个每个专业人士都能找到有意义的工作，每个组织都能发现茁壮成长所需人才的世界，通过技术消除障碍并创造全球机会。",
      icon: <Eye className="w-8 h-8" />
    },
    values: {
      title: "我们的价值观",
      items: [
        {
          title: "卓越",
          description: "从我们的算法到客户支持，我们在所做的一切中追求卓越品质。",
          icon: <Star className="w-8 h-8" />
        },
        {
          title: "创新",
          description: "我们不断突破界限，开发改变人才匹配的尖端解决方案。",
          icon: <Zap className="w-8 h-8" />
        },
        {
          title: "诚信",
          description: "我们在所有互动中以透明、诚实和道德的方式运营。",
          icon: <Shield className="w-8 h-8" />
        },
        {
          title: "包容",
          description: "我们庆祝多样性并为所有背景的专业人士创造平等机会。",
          icon: <Users className="w-8 h-8" />
        },
        {
          title: "影响",
          description: "我们通过为人们的职业和组织创造的积极变化来衡量成功。",
          icon: <Heart className="w-8 h-8" />
        }
      ]
    }
  }
};

interface MissionVisionValuesProps {
  readonly language: Language;
}

export function MissionVisionValues({ language }: MissionVisionValuesProps) {
  const t = translations[language] || translations.en;

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-50 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-50 rounded-full filter blur-3xl opacity-30"></div>
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
            <div className="w-24 h-1 bg-linear-to-r from-primary-500 to-secondary-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl border border-primary-200"
            >
              <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center text-white mb-6">
                {t.mission.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.mission.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.mission.description}
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl border border-secondary-200"
            >
              <div className="w-16 h-16 bg-secondary-500 rounded-xl flex items-center justify-center text-white mb-6">
                {t.vision.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t.vision.title}
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t.vision.description}
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
              {t.values.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {t.values.items.map((value) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs hover:shadow-md transition-all h-full flex flex-col items-center text-center group-hover:border-primary-200">
                    <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                      {value.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 flex-grow">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}