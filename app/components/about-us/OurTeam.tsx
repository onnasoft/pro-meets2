  import { motion } from "framer-motion";
import { Code, Scale, Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Language } from "pro-meets-core";

const translations = {
  en: {
    title: "Our Team",
    subtitle: "The passionate minds behind ProMeets",
    members: [
      {
        name: "Julio Cesar Jr Torres Moreno",
        role: "Co-Founder & CTO",
        description: "Software Developer with a Master's in AI and 10+ years of experience. Passionate about creating solutions that simplify developers' lives through intelligent technology.",
        expertise: ["Artificial Intelligence", "Software Architecture", "Machine Learning", "Cloud Computing"],
        image: "/team/julio-cesar.jpg", // Placeholder path
        linkedin: "https://linkedin.com/in/julio-cesar",
        github: "https://github.com/julio-cesar",
        email: "julio@promeets.com"
      },
      {
        name: "Leonardo de los Angeles Torres Moreno",
        role: "Co-Founder & Legal Advisor",
        description: "Experienced lawyer specializing in technology law and business regulations. Ensures our platform operates with the highest standards of compliance and user protection.",
        expertise: ["Technology Law", "Business Compliance", "Data Protection", "Contract Law"],
        image: "/team/leonardo.jpg", // Placeholder path
        linkedin: "https://linkedin.com/in/leonardo-torres",
        email: "leonardo@promeets.com"
      }
    ],
    values: {
      title: "Our Shared Values",
      items: [
        {
          title: "Innovation with Purpose",
          description: "We build technology that solves real problems for real people"
        },
        {
          title: "User-Centric Design",
          description: "Every decision starts with what's best for our users"
        },
        {
          title: "Transparency",
          description: "We believe in open communication and clear processes"
        },
        {
          title: "Colombian Excellence",
          description: "Proudly building world-class technology from Colombia"
        }
      ]
    }
  },
  es: {
    title: "Nuestro Equipo",
    subtitle: "Las mentes apasionadas detrás de ProMeets",
    members: [
      {
        name: "Julio Cesar Jr Torres Moreno",
        role: "Co-Fundador & CTO",
        description: "Desarrollador de Software con Maestría en IA y más de 10 años de experiencia. Apasionado por crear soluciones que simplifiquen la vida de los desarrolladores through tecnología inteligente.",
        expertise: ["Inteligencia Artificial", "Arquitectura de Software", "Machine Learning", "Cloud Computing"],
        image: "/team/julio-cesar.jpg",
        linkedin: "https://linkedin.com/in/julio-cesar",
        github: "https://github.com/julio-cesar",
        email: "julio@promeets.com"
      },
      {
        name: "Leonardo de los Angeles Torres Moreno",
        role: "Co-Fundador & Asesor Legal",
        description: "Abogado experto especializado en derecho tecnológico y regulaciones empresariales. Asegura que nuestra plataforma opere con los más altos estándares de cumplimiento y protección al usuario.",
        expertise: ["Derecho Tecnológico", "Cumplimiento Empresarial", "Protección de Datos", "Derecho Contractual"],
        image: "/team/leonardo.jpg",
        linkedin: "https://linkedin.com/in/leonardo-torres",
        email: "leonardo@promeets.com"
      }
    ],
    values: {
      title: "Nuestros Valores Compartidos",
      items: [
        {
          title: "Innovación con Propósito",
          description: "Construimos tecnología que resuelve problemas reales para personas reales"
        },
        {
          title: "Diseño Centrado en el Usuario",
          description: "Cada decisión comienza con lo que es mejor para nuestros usuarios"
        },
        {
          title: "Transparencia",
          description: "Creemos en la comunicación abierta y procesos claros"
        },
        {
          title: "Excelencia Colombiana",
          description: "Construyendo con orgullo tecnología de clase mundial desde Colombia"
        }
      ]
    }
  },
  fr: {
    title: "Notre Équipe",
    subtitle: "Les esprits passionnés derrière ProMeets",
    members: [
      {
        name: "Julio Cesar Jr Torres Moreno",
        role: "Co-Fondateur & CTO",
        description: "Développeur Software avec un Master en IA et 10+ ans d'expérience. Passionné par la création de solutions qui simplifient la vie des développeurs through technologie intelligente.",
        expertise: ["Intelligence Artificielle", "Architecture Software", "Machine Learning", "Cloud Computing"],
        image: "/team/julio-cesar.jpg",
        linkedin: "https://linkedin.com/in/julio-cesar",
        github: "https://github.com/julio-cesar",
        email: "julio@promeets.com"
      },
      {
        name: "Leonardo de los Angeles Torres Moreno",
        role: "Co-Fondateur & Conseiller Juridique",
        description: "Avocat expérimenté spécialisé en droit technologique et régulations commerciales. Garantit que notre plateforme opère avec les standards de conformité et protection utilisateur les plus élevés.",
        expertise: ["Droit Technologique", "Conformité Commerciale", "Protection des Données", "Droit Contractuel"],
        image: "/team/leonardo.jpg",
        linkedin: "https://linkedin.com/in/leonardo-torres",
        email: "leonardo@promeets.com"
      }
    ],
    values: {
      title: "Nos Valeurs Partagées",
      items: [
        {
          title: "Innovation avec But",
          description: "Nous construisons une technologie qui résout des problèmes réels pour des personnes réelles"
        },
        {
          title: "Design Centré Utilisateur",
          description: "Chaque décision commence par ce qui est meilleur pour nos utilisateurs"
        },
        {
          title: "Transparence",
          description: "Nous croyons en la communication ouverte et processus clairs"
        },
        {
          title: "Excellence Colombienne",
          description: "Construisant fièrement une technologie de classe mondiale depuis la Colombie"
        }
      ]
    }
  },
  jp: {
    title: "私たちのチーム",
    subtitle: "ProMeetsを支える情熱的な minds",
    members: [
      {
        name: "Julio Cesar Jr Torres Moreno",
        role: "共同創業者 & CTO",
        description: "AIの修士号を持つソフトウェア開発者で、10年以上の経験。インテリジェントなテクノロジーを通じて開発者の生活を簡素化するソリューションの作成に情熱を注いでいます。",
        expertise: ["人工知能", "ソフトウェアアーキテクチャ", "機械学習", "クラウドコンピューティング"],
        image: "/team/julio-cesar.jpg",
        linkedin: "https://linkedin.com/in/julio-cesar",
        github: "https://github.com/julio-cesar",
        email: "julio@promeets.com"
      },
      {
        name: "Leonardo de los Angeles Torres Moreno",
        role: "共同創業者 & 法律顧問",
        description: "テクノロジー法と事業規制を専門とする経験豊富な弁護士。当社のプラットフォームが最高水準のコンプライアンスとユーザー保護で運用されることを保証します。",
        expertise: ["テクノロジー法", "事業コンプライアンス", "データ保護", "契約法"],
        image: "/team/leonardo.jpg",
        linkedin: "https://linkedin.com/in/leonardo-torres",
        email: "leonardo@promeets.com"
      }
    ],
    values: {
      title: "私たちの共有価値観",
      items: [
        {
          title: "目的を持った革新",
          description: "現実の人々の現実の問題を解決するテクノロジーを構築します"
        },
        {
          title: "ユーザー中心設計",
          description: "すべての決定はユーザーにとって最善のことから始まります"
        },
        {
          title: "透明性",
          description: "オープンなコミュニケーションと明確なプロセスを信じています"
        },
        {
          title: "コロンビアの卓越性",
          description: "コロンビアから世界クラスのテクノロジーを誇りを持って構築しています"
        }
      ]
    }
  },
  zh: {
    title: "我们的团队",
    subtitle: "ProMeets背后的热情 minds",
    members: [
      {
        name: "Julio Cesar Jr Torres Moreno",
        role: "联合创始人 & CTO",
        description: "拥有AI硕士学位的软件开发人员，10年以上经验。热衷于通过智能技术创建简化开发人员生活的解决方案。",
        expertise: ["人工智能", "软件架构", "机器学习", "云计算"],
        image: "/team/julio-cesar.jpg",
        linkedin: "https://linkedin.com/in/julio-cesar",
        github: "https://github.com/julio-cesar",
        email: "julio@promeets.com"
      },
      {
        name: "Leonardo de los Angeles Torres Moreno",
        role: "联合创始人 & 法律顾问",
        description: "专注于技术法和商业法规的经验丰富律师。确保我们的平台以最高标准的合规性和用户保护运营。",
        expertise: ["技术法", "商业合规", "数据保护", "合同法"],
        image: "/team/leonardo.jpg",
        linkedin: "https://linkedin.com/in/leonardo-torres",
        email: "leonardo@promeets.com"
      }
    ],
    values: {
      title: "我们的共享价值观",
      items: [
        {
          title: "有目的的创新",
          description: "我们构建解决真实人群真实问题的技术"
        },
        {
          title: "以用户为中心的设计",
          description: "每个决策都从对用户最有利开始"
        },
        {
          title: "透明度",
          description: "我们相信开放的沟通和清晰的流程"
        },
        {
          title: "哥伦比亚卓越",
          description: "自豪地从哥伦比亚构建世界级技术"
        }
      ]
    }
  }
};

interface OurTeamProps {
  readonly language: Language;
}

export function OurTeam({ language }: OurTeamProps) {
  const t = translations[language] || translations.en;

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-50 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-50 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
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

          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {t.members.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                {/* Avatar Placeholder */}
                <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                  {member.role.includes('CTO') ? (
                    <Code className="w-12 h-12 text-primary-600" />
                  ) : (
                    <Scale className="w-12 h-12 text-primary-600" />
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                
                <div className="flex items-center justify-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">Colombia</span>
                </div>
                
                <p className="text-lg text-primary-600 font-semibold mb-4">
                  {member.role}
                </p>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {member.description}
                </p>
                
                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
              {t.values.title}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.values.items.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-b from-white to-gray-50 p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                    {index === 0 && <Code className="w-6 h-6" />}
                    {index === 1 && <Scale className="w-6 h-6" />}
                    {index === 2 && <Mail className="w-6 h-6" />}
                    {index === 3 && <MapPin className="w-6 h-6" />}
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}