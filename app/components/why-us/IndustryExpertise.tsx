import { motion } from "framer-motion";
import { HeartPulse, Shield, Smartphone, Car, GraduationCap, Globe, Code2 } from "lucide-react";
import { Language } from "pro-meets-core";

const translations = {
  en: {
    title: "Industry-Specific Expertise That Delivers Results",
    subtitle: "We understand the unique challenges and requirements of different sectors, with tailored AI matching for each industry",
    industries: [
      {
        icon: <Code2 className="w-8 h-8" />,
        name: "Technology & SaaS",
        description: "Matching for software development, cloud infrastructure, and digital transformation projects",
        expertise: [
          "Full-stack developers",
          "DevOps & Cloud specialists",
          "AI/ML engineers",
          "Cybersecurity experts",
          "Product managers"
        ],
        stats: "95% success rate in tech projects",
        projects: "1,200+ completed"
      },
      {
        icon: <HeartPulse className="w-8 h-8" />,
        name: "Healthcare & Life Sciences",
        description: "Specialized matching for healthcare technology, compliance, and medical innovation",
        expertise: [
          "HIPAA-compliant developers",
          "Health informatics specialists",
          "Medical device software engineers",
          "Bioinformatics experts",
          "Healthcare data scientists"
        ],
        stats: "100% compliance success",
        projects: "450+ completed"
      },
      {
        icon: <Shield className="w-8 h-8" />,
        name: "Finance & FinTech",
        description: "Secure matching for financial services, banking, and regulatory technology",
        expertise: [
          "Financial software developers",
          "Blockchain & crypto experts",
          "Quantitative analysts",
          "Regulatory compliance specialists",
          "Payment systems engineers"
        ],
        stats: "99.8% security rating",
        projects: "680+ completed"
      },
      {
        icon: <Smartphone className="w-8 h-8" />,
        name: "E-commerce & Retail",
        description: "AI matching for digital commerce, supply chain, and customer experience",
        expertise: [
          "E-commerce platform developers",
          "UX/UI designers for retail",
          "Supply chain software engineers",
          "Data analytics specialists",
          "Mobile commerce experts"
        ],
        stats: "40% average cost reduction",
        projects: "890+ completed"
      },
      {
        icon: <Car className="w-8 h-8" />,
        name: "Manufacturing & IoT",
        description: "Industrial expertise for smart manufacturing and connected devices",
        expertise: [
          "IoT and embedded systems engineers",
          "Industrial automation specialists",
          "Supply chain software developers",
          "Quality control systems experts",
          "Robotics programmers"
        ],
        stats: "30% faster time-to-market",
        projects: "520+ completed"
      },
      {
        icon: <GraduationCap className="w-8 h-8" />,
        name: "Education & EdTech",
        description: "Matching for educational technology and digital learning platforms",
        expertise: [
          "Learning management system developers",
          "Educational content specialists",
          "Accessibility compliance experts",
          "Student data analytics engineers",
          "VR/AR education developers"
        ],
        stats: "2M+ students impacted",
        projects: "310+ completed"
      }
    ],
    approach: {
      title: "Our Industry-Specific Approach",
      steps: [
        {
          step: "Industry Analysis",
          description: "Deep dive into your sector's specific requirements and challenges"
        },
        {
          step: "Specialized Matching",
          description: "AI algorithms trained on industry-specific success patterns"
        },
        {
          step: "Compliance Assurance",
          description: "Automatic verification of required certifications and standards"
        },
        {
          step: "Quality Validation",
          description: "Industry-specific testing and quality assurance processes"
        }
      ]
    },
    ctaText: "Find Experts for Your Industry",
    statsTitle: "Cross-Industry Success",
    overallStats: [
      { value: "15+", label: "Industries Served" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "45+", label: "Countries" },
      { value: "2.5x", label: "Faster Scaling" }
    ]
  },
  es: {
    title: "Experiencia Específica por Industria Que Entrega Resultados",
    subtitle: "Entendemos los desafíos y requisitos únicos de diferentes sectores, con matching de IA personalizado para cada industria",
    industries: [
      {
        icon: <Code2 className="w-8 h-8" />,
        name: "Tecnología & SaaS",
        description: "Matching para desarrollo de software, infraestructura cloud y proyectos de transformación digital",
        expertise: [
          "Desarrolladores full-stack",
          "Especialistas DevOps & Cloud",
          "Ingenieros AI/ML",
          "Expertos en cybersecurity",
          "Product managers"
        ],
        stats: "95% tasa de éxito en proyectos tech",
        projects: "1,200+ completados"
      },
      {
        icon: <HeartPulse className="w-8 h-8" />,
        name: "Salud & Ciencias de la Vida",
        description: "Matching especializado para tecnología de salud, cumplimiento e innovación médica",
        expertise: [
          "Desarrolladores compatibles con HIPAA",
          "Especialistas en informática de salud",
          "Ingenieros de software para dispositivos médicos",
          "Expertos en bioinformática",
          "Científicos de datos en salud"
        ],
        stats: "100% éxito en cumplimiento",
        projects: "450+ completados"
      },
      {
        icon: <Shield className="w-8 h-8" />,
        name: "Finanzas & FinTech",
        description: "Matching seguro para servicios financieros, banca y tecnología regulatoria",
        expertise: [
          "Desarrolladores de software financiero",
          "Expertos en blockchain & crypto",
          "Analistas cuantitativos",
          "Especialistas en cumplimiento regulatorio",
          "Ingenieros de sistemas de pago"
        ],
        stats: "99.8% rating de seguridad",
        projects: "680+ completados"
      },
      {
        icon: <Smartphone className="w-8 h-8" />,
        name: "E-commerce & Retail",
        description: "Matching con IA para comercio digital, cadena de suministro y experiencia de cliente",
        expertise: [
          "Desarrolladores de plataformas e-commerce",
          "Diseñadores UX/UI para retail",
          "Ingenieros de software para supply chain",
          "Especialistas en análisis de datos",
          "Expertos en comercio móvil"
        ],
        stats: "40% reducción de costos promedio",
        projects: "890+ completados"
      },
      {
        icon: <Car className="w-8 h-8" />,
        name: "Manufactura & IoT",
        description: "Experiencia industrial para manufactura inteligente y dispositivos conectados",
        expertise: [
          "Ingenieros de sistemas embebidos e IoT",
          "Especialistas en automatización industrial",
          "Desarrolladores de software para supply chain",
          "Expertos en sistemas de control de calidad",
          "Programadores de robótica"
        ],
        stats: "30% más rápido time-to-market",
        projects: "520+ completados"
      },
      {
        icon: <GraduationCap className="w-8 h-8" />,
        name: "Educación & EdTech",
        description: "Matching para tecnología educativa y plataformas de aprendizaje digital",
        expertise: [
          "Desarrolladores de sistemas de gestión de aprendizaje",
          "Especialistas en contenido educativo",
          "Expertos en cumplimiento de accesibilidad",
          "Ingenieros de análisis de datos estudiantiles",
          "Desarrolladores de VR/AR para educación"
        ],
        stats: "2M+ estudiantes impactados",
        projects: "310+ completados"
      }
    ],
    approach: {
      title: "Nuestro Enfoque Específico por Industria",
      steps: [
        {
          step: "Análisis de Industria",
          description: "Inmersión profunda en requisitos y desafíos específicos de tu sector"
        },
        {
          step: "Matching Especializado",
          description: "Algoritmos de IA entrenados en patrones de éxito específicos por industria"
        },
        {
          step: "Garantía de Cumplimiento",
          description: "Verificación automática de certificaciones y estándares requeridos"
        },
        {
          step: "Validación de Calidad",
          description: "Procesos de testing y assurance de calidad específicos por industria"
        }
      ]
    },
    ctaText: "Encontrar Expertos para Tu Industria",
    statsTitle: "Éxito Transversal por Industrias",
    overallStats: [
      { value: "15+", label: "Industrias Servidas" },
      { value: "98%", label: "Satisfacción de Clientes" },
      { value: "45+", label: "Países" },
      { value: "2.5x", label: "Escalamiento Más Rápido" }
    ]
  },
  fr: {
    title: "Expertise Spécifique par Industrie Qui Livre des Résultats",
    subtitle: "Nous comprenons les défis et exigences uniques de différents secteurs, avec un matching IA sur mesure pour chaque industrie",
    industries: [
      {
        icon: <Code2 className="w-8 h-8" />,
        name: "Technologie & SaaS",
        description: "Matching pour développement logiciel, infrastructure cloud et projets de transformation digitale",
        expertise: [
          "Développeurs full-stack",
          "Spécialistes DevOps & Cloud",
          "Ingénieurs IA/ML",
          "Experts en cybersécurité",
          "Product managers"
        ],
        stats: "95% taux de réussite projets tech",
        projects: "1,200+ complétés"
      },
      {
        icon: <HeartPulse className="w-8 h-8" />,
        name: "Santé & Sciences de la Vie",
        description: "Matching spécialisé pour technologie santé, conformité et innovation médicale",
        expertise: [
          "Développeurs conformes HIPAA",
          "Spécialistes en informatique santé",
          "Ingénieurs logiciel dispositifs médicaux",
          "Experts en bioinformatique",
          "Scientifiques de données santé"
        ],
        stats: "100% réussite conformité",
        projects: "450+ complétés"
      },
      {
        icon: <Shield className="w-8 h-8" />,
        name: "Finance & FinTech",
        description: "Matching sécurisé pour services financiers, banque et technologie réglementaire",
        expertise: [
          "Développeurs logiciel financier",
          "Experts blockchain & crypto",
          "Analystes quantitatifs",
          "Spécialistes conformité réglementaire",
          "Ingénieurs systèmes paiement"
        ],
        stats: "99.8% rating sécurité",
        projects: "680+ complétés"
      },
      {
        icon: <Smartphone className="w-8 h-8" />,
        name: "E-commerce & Retail",
        description: "Matching IA pour commerce digital, chaîne logistique et expérience client",
        expertise: [
          "Développeurs plateformes e-commerce",
          "Designers UX/UI pour retail",
          "Ingénieurs logiciel supply chain",
          "Spécialistes analyse données",
          "Experts commerce mobile"
        ],
        stats: "40% réduction coûts moyenne",
        projects: "890+ complétés"
      },
      {
        icon: <Car className="w-8 h-8" />,
        name: "Manufacturing & IoT",
        description: "Expertise industrielle pour manufacturing intelligent et devices connectés",
        expertise: [
          "Ingénieurs systèmes embarqués et IoT",
          "Spécialistes automatisation industrielle",
          "Développeurs logiciel supply chain",
          "Experts systèmes contrôle qualité",
          "Programmateurs robotique"
        ],
        stats: "30% plus rapide time-to-market",
        projects: "520+ complétés"
      },
      {
        icon: <GraduationCap className="w-8 h-8" />,
        name: "Éducation & EdTech",
        description: "Matching pour technologie éducative et plateformes apprentissage digital",
        expertise: [
          "Développeurs systèmes gestion apprentissage",
          "Spécialistes contenu éducatif",
          "Experts conformité accessibilité",
          "Ingénieurs analyse données étudiantes",
          "Développeurs VR/AR pour éducation"
        ],
        stats: "2M+ étudiants impactés",
        projects: "310+ complétés"
      }
    ],
    approach: {
      title: "Notre Approche Spécifique par Industrie",
      steps: [
        {
          step: "Analyse d'Industrie",
          description: "Plongée profonde dans les exigences et défis spécifiques de votre secteur"
        },
        {
          step: "Matching Spécialisé",
          description: "Algorithmes IA entraînés sur patterns de succès spécifiques par industrie"
        },
        {
          step: "Assurance Conformité",
          description: "Vérification automatique des certifications et standards requis"
        },
        {
          step: "Validation Qualité",
          description: "Processus testing et assurance qualité spécifiques par industrie"
        }
      ]
    },
    ctaText: "Trouver des Experts pour Votre Industrie",
    statsTitle: "Succès Transversal par Industries",
    overallStats: [
      { value: "15+", label: "Industries Servies" },
      { value: "98%", label: "Satisfaction Clients" },
      { value: "45+", label: "Pays" },
      { value: "2.5x", label: "Scale Plus Rapide" }
    ]
  },
  jp: {
    title: "業界特有の専門知識が結果を生む",
    subtitle: "各業界に合わせたAIマッチングで、異なるセクターの独自の課題と要件を理解しています",
    industries: [
      {
        icon: <Code2 className="w-8 h-8" />,
        name: "テクノロジー & SaaS",
        description: "ソフトウェア開発、クラウドインフラ、デジタル変革プロジェクトのためのマッチング",
        expertise: [
          "フルスタック開発者",
          "DevOps & クラウド専門家",
          "AI/MLエンジニア",
          "サイバーセキュリティ専門家",
          "プロダクトマネージャー"
        ],
        stats: " techプロジェクトで95%の成功率",
        projects: "1,200+ 完了"
      },
      {
        icon: <HeartPulse className="w-8 h-8" />,
        name: "医療 & ライフサイエンス",
        description: "医療技術、コンプライアンス、医療革新のための専門マッチング",
        expertise: [
          "HIPAA準拠開発者",
          "医療情報学専門家",
          "医療機器ソフトウェアエンジニア",
          "バイオインフォマティクス専門家",
          "医療データサイエンティスト"
        ],
        stats: "100% コンプライアンス成功",
        projects: "450+ 完了"
      },
      {
        icon: <Shield className="w-8 h-8" />,
        name: "金融 & FinTech",
        description: "金融サービス、銀行、規制技術のための安全なマッチング",
        expertise: [
          "金融ソフトウェア開発者",
          "ブロックチェーン & 暗号専門家",
          "定量アナリスト",
          "規制コンプライアンス専門家",
          "決済システムエンジニア"
        ],
        stats: "99.8% セキュリティ評価",
        projects: "680+ 完了"
      },
      {
        icon: <Smartphone className="w-8 h-8" />,
        name: "Eコマース & 小売",
        description: "デジタルコマース、サプライチェーン、顧客体験のためのAIマッチング",
        expertise: [
          "Eコマースプラットフォーム開発者",
          "小売向けUX/UIデザイナー",
          "サプライチェーンソフトウェアエンジニア",
          "データ分析専門家",
          "モバイルコマース専門家"
        ],
        stats: "平均40% コスト削減",
        projects: "890+ 完了"
      },
      {
        icon: <Car className="w-8 h-8" />,
        name: "製造 & IoT",
        description: "スマート製造と接続デバイスのための産業専門知識",
        expertise: [
          "IoTと組み込みシステムエンジニア",
          "産業自動化専門家",
          "サプライチェーンソフトウェア開発者",
          "品質管理システム専門家",
          "ロボティクスプログラマー"
        ],
        stats: "30% 高速な市場投入",
        projects: "520+ 完了"
      },
      {
        icon: <GraduationCap className="w-8 h-8" />,
        name: "教育 & EdTech",
        description: "教育技術とデジタル学習プラットフォームのためのマッチング",
        expertise: [
          "学習管理システム開発者",
          "教育コンテンツ専門家",
          "アクセシビリティコンプライアンス専門家",
          "学生データ分析エンジニア",
          "VR/AR教育開発者"
        ],
        stats: "2百万人+ の学生に影響",
        projects: "310+ 完了"
      }
    ],
    approach: {
      title: "業界特有のアプローチ",
      steps: [
        {
          step: "業界分析",
          description: "あなたのセクターの特定の要件と課題への深い洞察"
        },
        {
          step: "専門マッチング",
          description: "業界特有の成功パターンで訓練されたAIアルゴリズム"
        },
        {
          step: "コンプライアンス保証",
          description: "必要な認証と標準の自動検証"
        },
        {
          step: "品質検証",
          description: "業界特有のテストと品質保証プロセス"
        }
      ]
    },
    ctaText: "あなたの業界の専門家を見つける",
    statsTitle: "業界横断的な成功",
    overallStats: [
      { value: "15+", label: "サービス提供業界" },
      { value: "98%", label: "顧客満足度" },
      { value: "45+", label: "国" },
      { value: "2.5x", label: "より高速なスケーリング" }
    ]
  },
  zh: {
    title: "行业特定专业知识带来成果",
    subtitle: "我们了解不同行业的独特挑战和要求，为每个行业提供量身定制的AI匹配",
    industries: [
      {
        icon: <Code2 className="w-8 h-8" />,
        name: "技术与SaaS",
        description: "为软件开发、云基础设施和数字化转型项目匹配",
        expertise: [
          "全栈开发人员",
          "DevOps和云专家",
          "AI/ML工程师",
          "网络安全专家",
          "产品经理"
        ],
        stats: "技术项目95%成功率",
        projects: "1,200+ 已完成"
      },
      {
        icon: <HeartPulse className="w-8 h-8" />,
        name: "医疗与生命科学",
        description: "为医疗技术、合规性和医疗创新提供专业匹配",
        expertise: [
          "符合HIPAA的开发人员",
          "健康信息学专家",
          "医疗设备软件工程师",
          "生物信息学专家",
          "医疗数据科学家"
        ],
        stats: "100%合规成功",
        projects: "450+ 已完成"
      },
      {
        icon: <Shield className="w-8 h-8" />,
        name: "金融与FinTech",
        description: "为金融服务、银行和监管技术提供安全匹配",
        expertise: [
          "金融软件开发人员",
          "区块链和加密专家",
          "量化分析师",
          "监管合规专家",
          "支付系统工程师"
        ],
        stats: "99.8%安全评级",
        projects: "680+ 已完成"
      },
      {
        icon: <Smartphone className="w-8 h-8" />,
        name: "电子商务与零售",
        description: "为数字商务、供应链和客户体验提供AI匹配",
        expertise: [
          "电子商务平台开发人员",
          "零售UX/UI设计师",
          "供应链软件工程师",
          "数据分析专家",
          "移动商务专家"
        ],
        stats: "平均降低成本40%",
        projects: "890+ 已完成"
      },
      {
        icon: <Car className="w-8 h-8" />,
        name: "制造与物联网",
        description: "为智能制造和连接设备提供工业专业知识",
        expertise: [
          "物联网和嵌入式系统工程师",
          "工业自动化专家",
          "供应链软件开发人员",
          "质量控制系统专家",
          "机器人程序员"
        ],
        stats: "上市时间加快30%",
        projects: "520+ 已完成"
      },
      {
        icon: <GraduationCap className="w-8 h-8" />,
        name: "教育与EdTech",
        description: "为教育技术和数字学习平台匹配",
        expertise: [
          "学习管理系统开发人员",
          "教育内容专家",
          "无障碍合规专家",
          "学生数据分析工程师",
          "VR/AR教育开发人员"
        ],
        stats: "影响200万+学生",
        projects: "310+ 已完成"
      }
    ],
    approach: {
      title: "我们的行业特定方法",
      steps: [
        {
          step: "行业分析",
          description: "深入了解您行业的具体要求和挑战"
        },
        {
          step: "专业匹配",
          description: "基于行业特定成功模式训练的AI算法"
        },
        {
          step: "合规保证",
          description: "自动验证所需认证和标准"
        },
        {
          step: "质量验证",
          description: "行业特定的测试和质量保证流程"
        }
      ]
    },
    ctaText: "为您的行业寻找专家",
    statsTitle: "跨行业成功",
    overallStats: [
      { value: "15+", label: "服务行业" },
      { value: "98%", label: "客户满意度" },
      { value: "45+", label: "国家" },
      { value: "2.5x", label: "更快扩展" }
    ]
  }
};

interface IndustryExpertiseProps {
  readonly language: Language;
}

export function IndustryExpertise({ language }: IndustryExpertiseProps) {
  const t = translations[language] || translations.en;

  return (
    <section className="py-20 bg-gray-50">
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

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {t.overallStats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {t.industries.map((industry) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4">
                {industry.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
              <p className="text-gray-600 mb-4">{industry.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Specialized Expertise:</h4>
                <ul className="space-y-1">
                  {industry.expertise.slice(0, 3).map((item) => (
                    <li key={item} className="text-sm text-gray-600">• {item}</li>
                  ))}
                  {industry.expertise.length > 3 && (
                    <li className="text-sm text-primary-600">
                      +{industry.expertise.length - 3} more specializations
                    </li>
                  )}
                </ul>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Success Rate:</span>
                  <span className="font-semibold text-green-600">{industry.stats}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Projects:</span>
                  <span className="font-semibold text-gray-900">{industry.projects}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Approach Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            {t.approach.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.approach.steps.map((step, index) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{step.step}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
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
            href="/industries"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Globe className="w-5 h-5 mr-2" />
            {t.ctaText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}