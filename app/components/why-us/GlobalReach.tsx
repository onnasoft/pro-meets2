import { motion } from "framer-motion";
import { Globe, Users, MapPin, MessageCircle, Star, ArrowRight } from "lucide-react";
import { Language } from "pro-meets-core";

const translations = {
  en: {
    title: "Global Reach with Local Understanding",
    subtitle: "International expertise with deep cultural insights for meaningful connections across borders",
    features: [
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Worldwide Network",
        description: "Access to top talent from every corner of the globe"
      },
      {
        icon: <MapPin className="w-6 h-6" />,
        title: "Local Expertise",
        description: "Cultural understanding that ensures perfect matches in any market"
      },
      {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "Multilingual Support",
        description: "Seamless communication in over 20 languages"
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Diverse Talent Pool",
        description: "Connecting you with professionals from diverse backgrounds and cultures"
      }
    ],
    stats: [
      { value: "50+", label: "Countries" },
      { value: "20+", label: "Languages" },
      { value: "10k+", label: "Global Matches" }
    ],
    ctaText: "Expand Your Global Reach",
    testimonial: {
      text: "ProMeets understood our needs in both the US and Japanese markets, finding perfect candidates who fit not just the role but also our company culture in both regions.",
      author: "Sarah Johnson",
      position: "Global Talent Director, TechCorp International"
    }
  },
  es: {
    title: "Alcance Internacional con Conocimiento Local",
    subtitle: "Experiencia internacional con profundos conocimientos culturales para conexiones significativas sin fronteras",
    features: [
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Red Mundial",
        description: "Acceso al mejor talento de todos los rincones del mundo"
      },
      {
        icon: <MapPin className="w-6 h-6" />,
        title: "Experiencia Local",
        description: "Comprensión cultural que garantiza matches perfectos en cualquier mercado"
      },
      {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "Soporte Multilingüe",
        description: "Comunicación fluida en más de 20 idiomas"
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Diversidad de Talento",
        description: "Conectándote con profesionales de diversos orígenes y culturas"
      }
    ],
    stats: [
      { value: "50+", label: "Países" },
      { value: "20+", label: "Idiomas" },
      { value: "10k+", label: "Matches Globales" }
    ],
    ctaText: "Expande Tu Alcance Global",
    testimonial: {
      text: "ProMeets entendió nuestras necesidades tanto en los mercados de EE. UU. como de Japón, encontrando candidatos perfectos que se ajustan no solo al rol sino también a nuestra cultura empresarial en ambas regiones.",
      author: "Sarah Johnson",
      position: "Directora Global de Talento, TechCorp International"
    }
  },
  fr: {
    title: "Portée Mondiale avec Compréhension Locale",
    subtitle: "Expertise internationale avec des insights culturels profonds pour des connexions significatives au-delà des frontières",
    features: [
      {
        icon: <Globe className="w-6 h-6" />,
        title: "Réseau Mondial",
        description: "Accès aux meilleurs talents de tous les coins du monde"
      },
      {
        icon: <MapPin className="w-6 h-6" />,
        title: "Expertise Locale",
        description: "Compréhension culturelle qui assure des correspondances parfaites sur tous les marchés"
      },
      {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "Support Multilingue",
        description: "Communication transparente dans plus de 20 langues"
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "Diversité des Talents",
        description: "Vous connecter avec des professionnels de divers horizons et cultures"
      }
    ],
    stats: [
      { value: "50+", label: "Pays" },
      { value: "20+", label: "Langues" },
      { value: "10k+", label: "Matches Globaux" }
    ],
    ctaText: "Étendez Votre Portée Mondiale",
    testimonial: {
      text: "ProMeets a compris nos besoins sur les marchés américain et japonais, trouvant des candidats parfaits qui correspondent non seulement au poste mais aussi à notre culture d'entreprise dans les deux régions.",
      author: "Sarah Johnson",
      position: "Directrice Mondiale des Talents, TechCorp International"
    }
  },
  jp: {
    title: "ローカル理解を備えたグローバルリーチ",
    subtitle: "国境を越えた意味のあるつながりのための深い文化的洞察を備えた国際的な専門知識",
    features: [
      {
        icon: <Globe className="w-6 h-6" />,
        title: "世界規模のネットワーク",
        description: "世界のあらゆる地域からトップ人材へのアクセス"
      },
      {
        icon: <MapPin className="w-6 h-6" />,
        title: "現地の専門知識",
        description: "あらゆる市場で完璧なマッチを保証する文化的理解"
      },
      {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "多言語サポート",
        description: "20以上の言語でのシームレスなコミュニケーション"
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "多様な人材プール",
        description: "多様な背景や文化を持つプロフェッショナルとのつながり"
      }
    ],
    stats: [
      { value: "50+", label: "国" },
      { value: "20+", label: "言語" },
      { value: "10k+", label: "グローバルマッチ" }
    ],
    ctaText: "グローバルリーチを拡大",
    testimonial: {
      text: "ProMeetsは、米国と日本市場の両方で当社のニーズを理解し、両地域で役割に適合するだけでなく、企業文化にも適合する完璧な候補者を見つけてくれました。",
      author: "Sarah Johnson",
      position: "グローバルタレントディレクター、TechCorp International"
    }
  },
  zh: {
    title: "全球覆盖与本地理解",
    subtitle: "具有深厚文化洞察力的国际专业知识，实现跨越国界的有意义联系",
    features: [
      {
        icon: <Globe className="w-6 h-6" />,
        title: "全球网络",
        description: "接触来自世界各地的顶尖人才"
      },
      {
        icon: <MapPin className="w-6 h-6" />,
        title: "本地专业知识",
        description: "文化理解确保在任何市场都能完美匹配"
      },
      {
        icon: <MessageCircle className="w-6 h-6" />,
        title: "多语言支持",
        description: "超过20种语言的无缝沟通"
      },
      {
        icon: <Users className="w-6 h-6" />,
        title: "多元化人才库",
        description: "连接来自不同背景和文化的专业人士"
      }
    ],
    stats: [
      { value: "50+", label: "国家" },
      { value: "20+", label: "语言" },
      { value: "10k+", label: "全球匹配" }
    ],
    ctaText: "扩展您的全球覆盖",
    testimonial: {
      text: "ProMeets了解我们在美国和日本市场的需求，找到了不仅适合职位而且适合我们在这两个地区公司文化的完美候选人。",
      author: "Sarah Johnson",
      position: "全球人才总监，TechCorp International"
    }
  }
};

interface GlobalReachProps {
  readonly language: Language;
}

export function GlobalReach({ language }: GlobalReachProps) {
  const t = translations[language] || translations.en;

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-primary-100 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
            >
              {t.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              {t.subtitle}
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left content - Features */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.features.map((feature) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-primary-50 rounded-lg border border-primary-100 hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 text-primary-600">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-6 mt-10"
              >
                {t.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-1 text-primary-600">{stat.value}</div>
                    <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-10"
              >
                <a
                  href="/global-expansion"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg shadow-primary hover:shadow-primary-md transition-all hover:scale-[1.02]"
                >
                  {t.ctaText}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Right content - Testimonial & Map visualization */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl border border-primary-200"
              >
                {/* Testimonial */}
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={"star-" + i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg italic text-gray-800 mb-6">"{t.testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{t.testimonial.author}</p>
                    <p className="text-sm text-gray-700">{t.testimonial.position}</p>
                  </div>
                </div>

                {/* Map visualization */}
                <div className="relative">
                  <div className="w-full h-64 bg-linear-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 overflow-hidden">
                    {/* Simplified map dots representing global presence */}
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary-500 rounded-full"></div>
                    <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary-500 rounded-full"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary-500 rounded-full"></div>
                    <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-primary-500 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary-600 rounded-full animate-pulse"></div>

                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      <line x1="25" y1="25" x2="50" y2="50" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
                      <line x1="75" y1="33" x2="50" y2="50" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
                      <line x1="33" y1="66" x2="50" y2="50" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
                      <line x1="66" y1="75" x2="50" y2="50" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" />
                    </svg>
                  </div>

                  <div className="absolute -bottom-3 -right-3 bg-white px-4 py-2 rounded-lg shadow-xs border border-gray-200">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">Global connections</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}