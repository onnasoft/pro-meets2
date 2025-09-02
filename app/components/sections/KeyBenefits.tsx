import {
  Zap,
  Brain,
  ShieldCheck,
  BarChart3,
  Clock,
  Rocket,
  Code,
  Palette,
  Globe,
  Database,
  Smartphone,
  Cloud,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Language } from "@onnasoft/pro-meets-core";

const translations = {
  en: {
    title: "Find the Perfect Talent for Your Projects",
    description: "Leverage our AI-powered platform to discover and connect with top professionals tailored to your specific project needs",
    forCompanies: "For Companies & Contractors",
    benefits: [
      {
        icon: <Brain className="w-10 h-10 text-primary-600" />,
        title: "AI-Powered Matching",
        description: "Our intelligent algorithm analyzes project requirements and matches you with the most suitable talent based on skills, experience, and availability.",
        stats: "95% match accuracy",
      },
      {
        icon: <Rocket className="w-10 h-10 text-primary-600" />,
        title: "Rapid Onboarding",
        description: "Get your project started quickly with pre-vetted professionals who can hit the ground running from day one.",
        stats: "Reduce onboarding time by 70%",
      },
      {
        icon: <Zap className="w-10 h-10 text-primary-600" />,
        title: "Speed to Market",
        description: "Accelerate your project timeline by connecting with available professionals who are ready to start immediately.",
        stats: "2x faster project completion",
      },
      {
        icon: <ShieldCheck className="w-10 h-10 text-primary-600" />,
        title: "Quality Assurance",
        description: "All professionals are verified, with proven track records and portfolio reviews to ensure top-quality deliverables.",
        stats: "98% client satisfaction rate",
      },
      {
        icon: <BarChart3 className="w-10 h-10 text-primary-600" />,
        title: "Cost Efficiency",
        description: "Optimize your project budget with transparent pricing and flexible engagement models tailored to your needs.",
        stats: "Save up to 40% on project costs",
      },
      {
        icon: <Clock className="w-10 h-10 text-primary-600" />,
        title: "Time Zone Alignment",
        description: "Find professionals who work in your time zone or have overlapping hours for better collaboration.",
        stats: "24/7 collaboration possible",
      },
    ],
    techStack: "We Specialize In All Tech Stacks",
    techCategories: [
      {
        icon: <Code className="w-8 h-8 text-primary-600" />,
        name: "Web Development",
        skills: ["React", "Vue", "Angular", "Node.js", "Python", "PHP"]
      },
      {
        icon: <Smartphone className="w-8 h-8 text-primary-600" />,
        name: "Mobile Development",
        skills: ["iOS", "Android", "Flutter", "React Native", "Kotlin", "Swift"]
      },
      {
        icon: <Cloud className="w-8 h-8 text-primary-600" />,
        name: "Cloud & DevOps",
        skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]
      },
      {
        icon: <Database className="w-8 h-8 text-primary-600" />,
        name: "Data Science & AI",
        skills: ["Python", "R", "TensorFlow", "PyTorch", "SQL", "ML"]
      },
      {
        icon: <Palette className="w-8 h-8 text-primary-600" />,
        name: "UI/UX Design",
        skills: ["Figma", "Sketch", "Adobe XD", "Prototyping", "User Research"]
      },
      {
        icon: <Globe className="w-8 h-8 text-primary-600" />,
        name: "Digital Marketing",
        skills: ["SEO", "PPC", "Social Media", "Content Strategy", "Analytics"]
      },
    ],
    ctaTitle: "Ready to Start Your Project?",
    ctaDescription: "Join thousands of companies that have successfully found the perfect talent for their projects",
    ctaButton: "Find Talent Now",
    stats: [
      { value: "5,000+", label: "Projects Completed" },
      { value: "95%", label: "Client Satisfaction" },
      { value: "48h", label: "Average Match Time" },
      { value: "40%", label: "Cost Savings" },
    ]
  },
  es: {
    title: "Encuentra el Talento Perfecto para Tus Proyectos",
    description: "Utiliza nuestra plataforma impulsada por IA para descubrir y conectar con los mejores profesionales adaptados a las necesidades específicas de tu proyecto",
    forCompanies: "Para Empresas y Contratistas",
    benefits: [
      {
        icon: <Brain className="w-10 h-10 text-primary-600" />,
        title: "Matching con IA",
        description: "Nuestro algoritmo inteligente analiza los requisitos del proyecto y te conecta con el talento más adecuado según habilidades, experiencia y disponibilidad.",
        stats: "95% de precisión en matching",
      },
      {
        icon: <Rocket className="w-10 h-10 text-primary-600" />,
        title: "Incorporación Rápida",
        description: "Comienza tu proyecto rápidamente con profesionales pre-evaluados que pueden empezar a trabajar desde el primer día.",
        stats: "Reduce el tiempo de onboarding en 70%",
      },
      {
        icon: <Zap className="w-10 h-10 text-primary-600" />,
        title: "Velocidad de Ejecución",
        description: "Acelera la línea de tiempo de tu proyecto conectando con profesionales disponibles que están listos para empezar inmediatamente.",
        stats: "2x más rápido en completar proyectos",
      },
      {
        icon: <ShieldCheck className="w-10 h-10 text-primary-600" />,
        title: "Garantía de Calidad",
        description: "Todos los profesionales están verificados, con historiales comprobados y revisiones de portafolio para garantizar entregables de alta calidad.",
        stats: "98% de satisfacción del cliente",
      },
      {
        icon: <BarChart3 className="w-10 h-10 text-primary-600" />,
        title: "Eficiencia de Costos",
        description: "Optimiza el presupuesto de tu proyecto con precios transparentes y modelos de engagement flexibles adaptados a tus necesidades.",
        stats: "Ahorra hasta 40% en costos de proyecto",
      },
      {
        icon: <Clock className="w-10 h-10 text-primary-600" />,
        title: "Alineación de Zona Horaria",
        description: "Encuentra profesionales que trabajen en tu zona horaria o tengan horarios superpuestos para una mejor colaboración.",
        stats: "Colaboración 24/7 posible",
      },
    ],
    techStack: "Especializados en Todos los Tech Stacks",
    techCategories: [
      {
        icon: <Code className="w-8 h-8 text-primary-600" />,
        name: "Desarrollo Web",
        skills: ["React", "Vue", "Angular", "Node.js", "Python", "PHP"]
      },
      {
        icon: <Smartphone className="w-8 h-8 text-primary-600" />,
        name: "Desarrollo Móvil",
        skills: ["iOS", "Android", "Flutter", "React Native", "Kotlin", "Swift"]
      },
      {
        icon: <Cloud className="w-8 h-8 text-primary-600" />,
        name: "Cloud & DevOps",
        skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]
      },
      {
        icon: <Database className="w-8 h-8 text-primary-600" />,
        name: "Ciencia de Datos & IA",
        skills: ["Python", "R", "TensorFlow", "PyTorch", "SQL", "ML"]
      },
      {
        icon: <Palette className="w-8 h-8 text-primary-600" />,
        name: "Diseño UI/UX",
        skills: ["Figma", "Sketch", "Adobe XD", "Prototipado", "Investigación de Usuario"]
      },
      {
        icon: <Globe className="w-8 h-8 text-primary-600" />,
        name: "Marketing Digital",
        skills: ["SEO", "PPC", "Redes Sociales", "Estrategia de Contenido", "Analytics"]
      },
    ],
    ctaTitle: "¿Listo para Empezar Tu Proyecto?",
    ctaDescription: "Únete a miles de empresas que han encontrado exitosamente el talento perfecto para sus proyectos",
    ctaButton: "Encontrar Talento Ahora",
    stats: [
      { value: "5,000+", label: "Proyectos Completados" },
      { value: "95%", label: "Satisfacción del Cliente" },
      { value: "48h", label: "Tiempo Promedio de Matching" },
      { value: "40%", label: "Ahorro en Costos" },
    ]
  },
  fr: {
    title: "Trouvez les Talents Parfaits pour Vos Projets",
    description: "Utilisez notre plateforme alimentée par l'IA pour découvrir et connecter avec les meilleurs professionnels adaptés aux besoins spécifiques de votre projet",
    forCompanies: "Pour Entreprises et Contractants",
    benefits: [
      {
        icon: <Brain className="w-10 h-10 text-primary-600" />,
        title: "Matching par IA",
        description: "Notre algorithme intelligent analyse les exigences du projet et vous met en relation avec les talents les plus adaptés selon les compétences, l'expérience et la disponibilité.",
        stats: "95% de précision de matching",
      },
      {
        icon: <Rocket className="w-10 h-10 text-primary-600" />,
        title: "Intégration Rapide",
        description: "Démarrez votre projet rapidement avec des professionnels pré-vérifiés qui peuvent commencer à travailler dès le premier jour.",
        stats: "Réduit le temps d'intégration de 70%",
      },
      {
        icon: <Zap className="w-10 h-10 text-primary-600" />,
        title: "Vitesse d'Exécution",
        description: "Accélérez votre calendrier de projet en vous connectant avec des professionnels disponibles prêts à commencer immédiatement.",
        stats: "2x plus rapide pour terminer les projets",
      },
      {
        icon: <ShieldCheck className="w-10 h-10 text-primary-600" />,
        title: "Assurance Qualité",
        description: "Tous les professionnels sont vérifiés, avec des antécédents éprouvés et des examens de portfolio pour garantir des livrables de haute qualité.",
        stats: "98% de satisfaction client",
      },
      {
        icon: <BarChart3 className="w-10 h-10 text-primary-600" />,
        title: "Efficacité des Coûts",
        description: "Optimisez votre budget de projet avec une tarification transparente et des modèles d'engagement flexibles adaptés à vos besoins.",
        stats: "Économisez jusqu'à 40% sur les coûts de projet",
      },
      {
        icon: <Clock className="w-10 h-10 text-primary-600" />,
        title: "Alignement Fuseau Horaire",
        description: "Trouvez des professionnels qui travaillent dans votre fuseau horaire ou ont des heures chevauchantes pour une meilleure collaboration.",
        stats: "Collaboration 24/7 possible",
      },
    ],
    techStack: "Spécialisés dans Tous les Tech Stacks",
    techCategories: [
      {
        icon: <Code className="w-8 h-8 text-primary-600" />,
        name: "Développement Web",
        skills: ["React", "Vue", "Angular", "Node.js", "Python", "PHP"]
      },
      {
        icon: <Smartphone className="w-8 h-8 text-primary-600" />,
        name: "Développement Mobile",
        skills: ["iOS", "Android", "Flutter", "React Native", "Kotlin", "Swift"]
      },
      {
        icon: <Cloud className="w-8 h-8 text-primary-600" />,
        name: "Cloud & DevOps",
        skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]
      },
      {
        icon: <Database className="w-8 h-8 text-primary-600" />,
        name: "Science des Données & IA",
        skills: ["Python", "R", "TensorFlow", "PyTorch", "SQL", "ML"]
      },
      {
        icon: <Palette className="w-8 h-8 text-primary-600" />,
        name: "Design UI/UX",
        skills: ["Figma", "Sketch", "Adobe XD", "Prototypage", "Recherche Utilisateur"]
      },
      {
        icon: <Globe className="w-8 h-8 text-primary-600" />,
        name: "Marketing Digital",
        skills: ["SEO", "PPC", "Réseaux Sociaux", "Stratégie de Contenu", "Analytics"]
      },
    ],
    ctaTitle: "Prêt à Démarrer Votre Projet ?",
    ctaDescription: "Rejoignez des milliers d'entreprises qui ont trouvé avec succès les talents parfaits pour leurs projets",
    ctaButton: "Trouver des Talents Maintenant",
    stats: [
      { value: "5,000+", label: "Projets Complétés" },
      { value: "95%", label: "Satisfaction Client" },
      { value: "48h", label: "Temps Moyen de Matching" },
      { value: "40%", label: "Économies sur les Coûts" },
    ]
  },
  jp: {
    title: "プロジェクトに最適な人材を見つける",
    description: "AIを活用したプラットフォームで、プロジェクトの特定のニーズに合わせたトッププロフェッショナルを発見し、つながりましょう",
    forCompanies: "企業と契約者のために",
    benefits: [
      {
        icon: <Brain className="w-10 h-10 text-primary-600" />,
        title: "AIによるマッチング",
        description: "当社の智能アルゴリズムがプロジェクト要件を分析し、スキル、経験、可用性に基づいて最も適した人材とマッチングします。",
        stats: "95%のマッチ精度",
      },
      {
        icon: <Rocket className="w-10 h-10 text-primary-600" />,
        title: "迅速なオンボーディング",
        description: "初日から即戦力となる事前審査済みのプロフェッショナルで、プロジェクトを迅速に開始できます。",
        stats: "オンボーディング時間を70%削減",
      },
      {
        icon: <Zap className="w-10 h-10 text-primary-600" />,
        title: "市場投入の迅速化",
        description: "すぐに開始できる利用可能なプロフェッショナルとつながることで、プロジェクトのタイムラインを加速させます。",
        stats: "2倍速いプロジェクト完了",
      },
      {
        icon: <ShieldCheck className="w-10 h-10 text-primary-600" />,
        title: "品質保証",
        description: "すべてのプロフェッショナルは検証済みで、実績のある経歴とポートフォリオレビューにより高品質の成果物を保証します。",
        stats: "98%の顧客満足度",
      },
      {
        icon: <BarChart3 className="w-10 h-10 text-primary-600" />,
        title: "コスト効率",
        description: "透明な価格設定とニーズに合わせた柔軟な契約モデルで、プロジェクト予算を最適化します。",
        stats: "プロジェクトコストを最大40%節約",
      },
      {
        icon: <Clock className="w-10 h-10 text-primary-600" />,
        title: "タイムゾーン調整",
        description: "より良いコラボレーションのために、あなたのタイムゾーンで働くか、重なる時間帯があるプロフェッショナルを見つけます。",
        stats: "24/7のコラボレーションが可能",
      },
    ],
    techStack: "すべての技術スタックに対応",
    techCategories: [
      {
        icon: <Code className="w-8 h-8 text-primary-600" />,
        name: "Web開発",
        skills: ["React", "Vue", "Angular", "Node.js", "Python", "PHP"]
      },
      {
        icon: <Smartphone className="w-8 h-8 text-primary-600" />,
        name: "モバイル開発",
        skills: ["iOS", "Android", "Flutter", "React Native", "Kotlin", "Swift"]
      },
      {
        icon: <Cloud className="w-8 h-8 text-primary-600" />,
        name: "クラウド & DevOps",
        skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]
      },
      {
        icon: <Database className="w-8 h-8 text-primary-600" />,
        name: "データサイエンス & AI",
        skills: ["Python", "R", "TensorFlow", "PyTorch", "SQL", "ML"]
      },
      {
        icon: <Palette className="w-8 h-8 text-primary-600" />,
        name: "UI/UXデザイン",
        skills: ["Figma", "Sketch", "Adobe XD", "プロトタイピング", "ユーザー調査"]
      },
      {
        icon: <Globe className="w-8 h-8 text-primary-600" />,
        name: "デジタルマーケティング",
        skills: ["SEO", "PPC", "ソーシャルメディア", "コンテンツ戦略", "分析"]
      },
    ],
    ctaTitle: "プロジェクトを始める準備はできましたか？",
    ctaDescription: "プロジェクトに最適な人材を見つけることに成功した何千もの企業に参加しましょう",
    ctaButton: "今すぐ人材を見つける",
    stats: [
      { value: "5,000+", label: "完了したプロジェクト" },
      { value: "95%", label: "顧客満足度" },
      { value: "48h", label: "平均マッチ時間" },
      { value: "40%", label: "コスト削減" },
    ]
  },
  zh: {
    title: "为您的项目找到完美人才",
    description: "利用我们AI驱动的平台，发现并连接最适合您项目需求的顶级专业人士",
    forCompanies: "面向企业和承包商",
    benefits: [
      {
        icon: <Brain className="w-10 h-10 text-primary-600" />,
        title: "AI智能匹配",
        description: "我们的智能算法分析项目需求，根据技能、经验和可用性为您匹配最合适的人才。",
        stats: "95%匹配准确率",
      },
      {
        icon: <Rocket className="w-10 h-10 text-primary-600" />,
        title: "快速入职",
        description: "通过经过预先审核的专业人士快速启动您的项目，他们可以从第一天就开始工作。",
        stats: "减少70%的入职时间",
      },
      {
        icon: <Zap className="w-10 h-10 text-primary-600" />,
        title: "加速上市",
        description: "通过连接可以立即开始的可用专业人士，加速您的项目时间表。",
        stats: "项目完成速度快2倍",
      },
      {
        icon: <ShieldCheck className="w-10 h-10 text-primary-600" />,
        title: "质量保证",
        description: "所有专业人士都经过验证，拥有经过验证的 track record 和作品集审查，确保高质量的交付成果。",
        stats: "98%客户满意度",
      },
      {
        icon: <BarChart3 className="w-10 h-10 text-primary-600" />,
        title: "成本效益",
        description: "通过透明的定价和根据您需求定制的灵活参与模式，优化您的项目预算。",
        stats: "节省高达40%的项目成本",
      },
      {
        icon: <Clock className="w-10 h-10 text-primary-600" />,
        title: "时区对齐",
        description: "找到在您时区工作或有时段重叠的专业人士，以实现更好的协作。",
        stats: "可实现24/7协作",
      },
    ],
    techStack: "我们专注于所有技术栈",
    techCategories: [
      {
        icon: <Code className="w-8 h-8 text-primary-600" />,
        name: "Web开发",
        skills: ["React", "Vue", "Angular", "Node.js", "Python", "PHP"]
      },
      {
        icon: <Smartphone className="w-8 h-8 text-primary-600" />,
        name: "移动开发",
        skills: ["iOS", "Android", "Flutter", "React Native", "Kotlin", "Swift"]
      },
      {
        icon: <Cloud className="w-8 h-8 text-primary-600" />,
        name: "云与DevOps",
        skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]
      },
      {
        icon: <Database className="w-8 h-8 text-primary-600" />,
        name: "数据科学与AI",
        skills: ["Python", "R", "TensorFlow", "PyTorch", "SQL", "ML"]
      },
      {
        icon: <Palette className="w-8 h-8 text-primary-600" />,
        name: "UI/UX设计",
        skills: ["Figma", "Sketch", "Adobe XD", "原型设计", "用户研究"]
      },
      {
        icon: <Globe className="w-8 h-8 text-primary-600" />,
        name: "数字营销",
        skills: ["SEO", "PPC", "社交媒体", "内容策略", "分析"]
      },
    ],
    ctaTitle: "准备好开始您的项目了吗？",
    ctaDescription: "加入成千上万成功为项目找到完美人才的企业",
    ctaButton: "立即寻找人才",
    stats: [
      { value: "5,000+", label: "已完成项目" },
      { value: "95%", label: "客户满意度" },
      { value: "48h", label: "平均匹配时间" },
      { value: "40%", label: "成本节省" },
    ]
  },
};

interface KeyBenefitsProps {
  readonly language: Language;
}

export function KeyBenefits({ language }: KeyBenefitsProps) {
  const t = translations[language] || translations.en;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="benefits" className="py-24 from-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto"
          >
            {t.description}
          </motion.p>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-primary-700 mb-4 flex items-center justify-center gap-3"
            >
              <Sparkles className="w-8 h-8" />
              {t.forCompanies}
            </motion.h3>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {t.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={item}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 rounded-xl mb-6 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 mb-4">{benefit.description}</p>
                <div className="mt-auto pt-4 border-t border-gray-200">
                  <p className="text-sm font-medium text-primary-700">
                    {benefit.stats}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold text-gray-900 mb-4"
            >
              {t.techStack}
            </motion.h3>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {t.techCategories.map((category) => (
              <motion.div
                key={category.name}
                variants={item}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{category.name}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-md p-8 md:p-12 border border-gray-200 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-700 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {t.ctaTitle}
          </h3>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            {t.ctaDescription}
          </p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md">
            {t.ctaButton}
          </button>
        </motion.div>
      </div>
    </section>
  );
}