import {
  Building,
  Target,
  Rocket,
  Globe,
  Cloud,
  Brain,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Language } from "@onnasoft/pro-meets-core";

const translations = {
  en: {
    title: "Who Benefits from Our AI Matching Platform?",
    subtitle: "Designed for companies and teams that need to find the perfect talent for their projects",
    beneficiaries: [
      {
        title: "Tech Startups",
        description: "Quickly find specialized developers and technical talent for your MVP and growth projects.",
        stats: "Find talent 5x faster than traditional methods",
        icon: <Rocket className="w-6 h-6" />,
        industries: ["SaaS", "FinTech", "HealthTech", "EdTech"]
      },
      {
        title: "Enterprise Teams",
        description: "Scale your development capacity with vetted experts for specific projects and initiatives.",
        stats: "40% cost reduction on project staffing",
        icon: <Building className="w-6 h-6" />,
        industries: ["Finance", "Healthcare", "E-commerce", "Manufacturing"]
      },
      {
        title: "Digital Agencies",
        description: "Find the right specialists for each client project without long recruitment cycles.",
        stats: "2x more projects delivered with same team size",
        icon: <Globe className="w-6 h-6" />,
        industries: ["Marketing", "Design", "Development", "Consulting"]
      },
      {
        title: "Product Teams",
        description: "Augment your team with specialized skills for specific features or technical challenges.",
        stats: "70% faster time-to-market for new features",
        icon: <Target className="w-6 h-6" />,
        industries: ["Mobile Apps", "Web Platforms", "AI/ML", "IoT"]
      },
      {
        title: "IT Departments",
        description: "Quickly find experts for infrastructure, security, and digital transformation projects.",
        stats: "60% reduction in project onboarding time",
        icon: <Cloud className="w-6 h-6" />,
        industries: ["Cloud Migration", "DevOps", "Cybersecurity", "Data Engineering"]
      },
      {
        title: "Innovation Labs",
        description: "Access cutting-edge expertise for R&D projects and experimental initiatives.",
        stats: "3x more innovation projects completed annually",
        icon: <Brain className="w-6 h-6" />,
        industries: ["AI Research", "Blockchain", "AR/VR", "Biotech"]
      },
    ],
    ctaTitle: "Not sure if our platform fits your needs?",
    ctaDescription: "We've helped companies across 30+ industries find perfect talent matches for their projects",
    ctaButton: "Schedule a Consultation",
    ctaSecondary: "View Industry Case Studies"
  },
  es: {
    title: "¿Quién se Beneficia de Nuestra Plataforma de Matching con IA?",
    subtitle: "Diseñada para empresas y equipos que necesitan encontrar el talento perfecto para sus proyectos",
    beneficiaries: [
      {
        title: "Startups Tecnológicas",
        description: "Encuentra rápidamente desarrolladores especializados y talento técnico para tu MVP y proyectos de crecimiento.",
        stats: "Encuentra talento 5x más rápido que métodos tradicionales",
        icon: <Rocket className="w-6 h-6" />,
        industries: ["SaaS", "FinTech", "HealthTech", "EdTech"]
      },
      {
        title: "Equipos Enterprise",
        description: "Escala tu capacidad de desarrollo con expertos verificados para proyectos e iniciativas específicas.",
        stats: "40% reducción de costos en staffing de proyectos",
        icon: <Building className="w-6 h-6" />,
        industries: ["Finanzas", "Salud", "E-commerce", "Manufactura"]
      },
      {
        title: "Agencias Digitales",
        description: "Encuentra los especialistas adecuados para cada proyecto de cliente sin largos ciclos de reclutamiento.",
        stats: "2x más proyectos entregados con mismo tamaño de equipo",
        icon: <Globe className="w-6 h-6" />,
        industries: ["Marketing", "Diseño", "Desarrollo", "Consultoría"]
      },
      {
        title: "Equipos de Producto",
        description: "Aumenta tu equipo con habilidades especializadas para features específicas o desafíos técnicos.",
        stats: "70% más rápido time-to-market para nuevas features",
        icon: <Target className="w-6 h-6" />,
        industries: ["Apps Móviles", "Plataformas Web", "AI/ML", "IoT"]
      },
      {
        title: "Departamentos de TI",
        description: "Encuentra rápidamente expertos para infraestructura, seguridad y proyectos de transformación digital.",
        stats: "60% reducción en tiempo de onboarding de proyectos",
        icon: <Cloud className="w-6 h-6" />,
        industries: ["Migración Cloud", "DevOps", "Ciberseguridad", "Ingeniería de Datos"]
      },
      {
        title: "Labs de Innovación",
        description: "Accede a expertise de vanguardia para proyectos de R&D e iniciativas experimentales.",
        stats: "3x más proyectos de innovación completados anualmente",
        icon: <Brain className="w-6 h-6" />,
        industries: ["Investigación AI", "Blockchain", "AR/VR", "Biotecnología"]
      },
    ],
    ctaTitle: "¿No estás seguro si nuestra plataforma se adapta a tus necesidades?",
    ctaDescription: "Hemos ayudado a empresas en 30+ industrias a encontrar matches perfectos de talento para sus proyectos",
    ctaButton: "Agendar Consulta",
    ctaSecondary: "Ver Casos de Estudio por Industria"
  },
  fr: {
    title: "Qui Bénéficie de Notre Plateforme de Matching IA ?",
    subtitle: "Conçue pour les entreprises et équipes qui doivent trouver les talents parfaits pour leurs projets",
    beneficiaries: [
      {
        title: "Startups Technologiques",
        description: "Trouvez rapidement des développeurs spécialisés et des talents techniques pour votre MVP et projets de croissance.",
        stats: "Trouvez des talents 5x plus vite que les méthodes traditionnelles",
        icon: <Rocket className="w-6 h-6" />,
        industries: ["SaaS", "FinTech", "HealthTech", "EdTech"]
      },
      {
        title: "Équipes Enterprise",
        description: "Étendez votre capacité de développement avec des experts vérifiés pour des projets et initiatives spécifiques.",
        stats: "40% de réduction des coûts de staffing projet",
        icon: <Building className="w-6 h-6" />,
        industries: ["Finance", "Santé", "E-commerce", "Manufacture"]
      },
      {
        title: "Agences Digitales",
        description: "Trouvez les spécialistes appropriés pour chaque projet client sans longs cycles de recrutement.",
        stats: "2x plus de projets livrés avec la même taille d'équipe",
        icon: <Globe className="w-6 h-6" />,
        industries: ["Marketing", "Design", "Développement", "Consulting"]
      },
      {
        title: "Équipes Produit",
        description: "Augmentez votre équipe avec des compétences spécialisées pour des fonctionnalités spécifiques ou défis techniques.",
        stats: "70% plus rapide time-to-market pour nouvelles fonctionnalités",
        icon: <Target className="w-6 h-6" />,
        industries: ["Apps Mobiles", "Plateformes Web", "IA/ML", "IoT"]
      },
      {
        title: "Départments IT",
        description: "Trouvez rapidement des experts pour l'infrastructure, sécurité et projets de transformation digitale.",
        stats: "60% de réduction du temps d'onboarding projet",
        icon: <Cloud className="w-6 h-6" />,
        industries: ["Migration Cloud", "DevOps", "Cybersécurité", "Ingénierie Données"]
      },
      {
        title: "Labs d'Innovation",
        description: "Accédez à une expertise de pointe pour projets R&D et initiatives expérimentales.",
        stats: "3x plus de projets d'innovation complétés annuellement",
        icon: <Brain className="w-6 h-6" />,
        industries: ["Recherche IA", "Blockchain", "AR/VR", "Biotechnologie"]
      },
    ],
    ctaTitle: "Vous ne savez pas si notre plateforme correspond à vos besoins ?",
    ctaDescription: "Nous avons aidé des entreprises de 30+ industries à trouver des matches de talent parfaits pour leurs projets",
    ctaButton: "Planifier une Consultation",
    ctaSecondary: "Voir les Études de Cas par Industrie"
  },
  jp: {
    title: "当社のAIマッチングプラットフォームの恩恵を受けるのは？",
    subtitle: "プロジェクトに完璧な人材を見つける必要がある企業とチームのために設計",
    beneficiaries: [
      {
        title: "テクノロジースタートアップ",
        description: "MVPや成長プロジェクトのための専門的な開発者と技術人材を素早く見つけます。",
        stats: "従来の方法より5倍速く人材を発見",
        icon: <Rocket className="w-6 h-6" />,
        industries: ["SaaS", "FinTech", "HealthTech", "EdTech"]
      },
      {
        title: "エンタープライズチーム",
        description: "特定のプロジェクトとイニシアチブのための検証済みエキスパートで開発能力を拡張。",
        stats: "プロジェクト人員配置コスト40%削減",
        icon: <Building className="w-6 h-6" />,
        industries: ["金融", "医療", "Eコマース", "製造"]
      },
      {
        title: "デジタルエージェンシー",
        description: "長い採用サイクルなしで各クライアントプロジェクトに適した専門家を見つけます。",
        stats: "同じチームサイズで2倍以上のプロジェクトを納品",
        icon: <Globe className="w-6 h-6" />,
        industries: ["マーケティング", "デザイン", "開発", "コンサルティング"]
      },
      {
        title: "プロダクトチーム",
        description: "特定の機能や技術的課題のために専門スキルでチームを強化。",
        stats: "新機能の市場投入時間70%短縮",
        icon: <Target className="w-6 h-6" />,
        industries: ["モバイルアプリ", "Webプラットフォーム", "AI/ML", "IoT"]
      },
      {
        title: "IT部門",
        description: "インフラ、セキュリティ、デジタル変革プロジェクトの専門家を素早く見つけます。",
        stats: "プロジェクトオンボーディング時間60%削減",
        icon: <Cloud className="w-6 h-6" />,
        industries: ["クラウド移行", "DevOps", "サイバーセキュリティ", "データエンジニアリング"]
      },
      {
        title: "イノベーションラボ",
        description: "R&Dプロジェクトと実験的イニシアチブのための最先端の専門知識にアクセス。",
        stats: "年間完了イノベーションプロジェクト3倍増",
        icon: <Brain className="w-6 h-6" />,
        industries: ["AI研究", "ブロックチェーン", "AR/VR", "バイオテクノロジー"]
      },
    ],
    ctaTitle: "当社のプラットフォームがご要件に合うか不明ですか？",
    ctaDescription: "30以上の業界の企業がプロジェクトに完璧な人材マッチを見つけるのを支援してきました",
    ctaButton: "相談を予約する",
    ctaSecondary: "業界別事例研究を見る"
  },
  zh: {
    title: "谁从我们的AI匹配平台中受益？",
    subtitle: "专为需要为项目找到完美人才的公司和团队设计",
    beneficiaries: [
      {
        title: "科技初创公司",
        description: "快速为您的MVP和增长项目找到专业开发人员和技术人才。",
        stats: "比传统方法快5倍找到人才",
        icon: <Rocket className="w-6 h-6" />,
        industries: ["SaaS", "金融科技", "医疗科技", "教育科技"]
      },
      {
        title: "企业团队",
        description: "为特定项目和计划使用经过审查的专家来扩展您的开发能力。",
        stats: "项目人员配置成本降低40%",
        icon: <Building className="w-6 h-6" />,
        industries: ["金融", "医疗", "电子商务", "制造"]
      },
      {
        title: "数字机构",
        description: "无需漫长的招聘周期即可为每个客户项目找到合适的专家。",
        stats: "相同团队规模交付2倍以上项目",
        icon: <Globe className="w-6 h-6" />,
        industries: ["营销", "设计", "开发", "咨询"]
      },
      {
        title: "产品团队",
        description: "为特定功能或技术挑战增加专业技能的团队成员。",
        stats: "新功能上市时间加快70%",
        icon: <Target className="w-6 h-6" />,
        industries: ["移动应用", "Web平台", "AI/ML", "物联网"]
      },
      {
        title: "IT部门",
        description: "快速找到基础设施、安全和数字化转型项目的专家。",
        stats: "项目入职时间减少60%",
        icon: <Cloud className="w-6 h-6" />,
        industries: ["云迁移", "DevOps", "网络安全", "数据工程"]
      },
      {
        title: "创新实验室",
        description: "获取研发项目和实验性计划的前沿专业知识。",
        stats: "年度完成创新项目增加3倍",
        icon: <Brain className="w-6 h-6" />,
        industries: ["AI研究", "区块链", "AR/VR", "生物技术"]
      },
    ],
    ctaTitle: "不确定我们的平台是否适合您的需求？",
    ctaDescription: "我们已经帮助30多个行业的公司为他们的项目找到完美的人才匹配",
    ctaButton: "安排咨询",
    ctaSecondary: "查看行业案例研究"
  },
};

interface WhoBenefitsProps {
  readonly language: Language;
}

export function WhoBenefits({ language }: WhoBenefitsProps) {
  const t = translations[language] || translations.en;

  return (
    <section id="who-benefits" className="py-20 bg-white">
      <div className="container mx-auto px-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {t.beneficiaries.map((beneficiary, index) => (
            <motion.div
              key={beneficiary.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                {beneficiary.icon}
              </div>

              {/* Title and Description */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {beneficiary.title}
              </h3>
              <p className="text-gray-600 mb-6">{beneficiary.description}</p>

              {/* Stats */}
              <div className="px-4 py-3 bg-primary-50 rounded-lg mb-4">
                <p className="text-sm font-medium text-primary-700">
                  {beneficiary.stats}
                </p>
              </div>

              {/* Industries */}
              <div className="flex flex-wrap gap-2">
                {beneficiary.industries.slice(0, 3).map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {industry}
                  </span>
                ))}
                {beneficiary.industries.length > 3 && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-500 text-sm rounded-full">
                    +{beneficiary.industries.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t.ctaTitle}
          </h3>
          <p className="text-xl mb-8 opacity-90">
            {t.ctaDescription}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary-700 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center">
              {t.ctaButton}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-700 transition-colors">
              {t.ctaSecondary}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}