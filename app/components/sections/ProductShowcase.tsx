import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { motion } from "framer-motion";
import { Language } from "pro-meets-core";
import {
  Brain,
  Rocket,
  BarChart3,
  Code,
  Cloud,
  Database,
  Palette,
  Smartphone,
  Globe
} from "lucide-react";

const translations = {
  en: {
    title: "AI-Powered Talent Matching for Your Projects",
    matching: {
      name: "Smart Matching",
      description: (
        <>
          <p className="mb-4">
            Our AI algorithm analyzes your project requirements and finds the perfect talent match:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Advanced skill and experience matching</li>
            <li>Availability and timezone alignment</li>
            <li>Project complexity assessment</li>
            <li>Cultural fit and work style compatibility</li>
            <li>Budget and rate optimization</li>
          </ul>
          <p>Find the right talent 5x faster than traditional methods.</p>
        </>
      ),
      stats: "95% accuracy in talent-project matching",
    },
    onboarding: {
      name: "Rapid Onboarding",
      description: (
        <>
          <p className="mb-4">
            Get your project started immediately with pre-vetted professionals:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Verified skills and portfolio review</li>
            <li>Background and reference checks</li>
            <li>Immediate availability confirmation</li>
            <li>Contract and agreement templates</li>
            <li>Secure payment setup</li>
          </ul>
          <p>Reduce onboarding time from weeks to just days.</p>
        </>
      ),
      stats: "70% faster project kickoff",
    },
    management: {
      name: "Project Management",
      description: (
        <>
          <p className="mb-4">
            Everything you need to manage your project successfully:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Integrated communication tools</li>
            <li>Progress tracking and milestones</li>
            <li>Time tracking and productivity metrics</li>
            <li>File sharing and collaboration</li>
            <li>Quality assurance checkpoints</li>
          </ul>
          <p>Complete project visibility and control in one platform.</p>
        </>
      ),
      stats: "40% increase in project success rate",
    },
    buttons: {
      findTalent: "Find Talent Now",
      viewCases: "View Case Studies",
    },
    techStack: "We Connect You with Experts Across All Technologies",
    techCategories: [
      {
        icon: <Code className="w-6 h-6" />,
        name: "Web Development",
        skills: ["React", "Vue", "Angular", "Node.js", "Python", "PHP"]
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        name: "Mobile Development",
        skills: ["iOS", "Android", "Flutter", "React Native", "Kotlin", "Swift"]
      },
      {
        icon: <Cloud className="w-6 h-6" />,
        name: "Cloud & DevOps",
        skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]
      },
      {
        icon: <Database className="w-6 h-6" />,
        name: "Data Science & AI",
        skills: ["Python", "R", "TensorFlow", "PyTorch", "SQL", "ML"]
      },
      {
        icon: <Palette className="w-6 h-6" />,
        name: "UI/UX Design",
        skills: ["Figma", "Sketch", "Adobe XD", "Prototyping", "User Research"]
      },
      {
        icon: <Globe className="w-6 h-6" />,
        name: "Digital Marketing",
        skills: ["SEO", "PPC", "Social Media", "Content Strategy", "Analytics"]
      },
    ],
  },
  es: {
    title: "Matching de Talento con IA para Tus Proyectos",
    matching: {
      name: "Matching Inteligente",
      description: (
        <>
          <p className="mb-4">
            Nuestro algoritmo de IA analiza tus requisitos de proyecto y encuentra el talento perfecto:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Matching avanzado de habilidades y experiencia</li>
            <li>Alineación de disponibilidad y zona horaria</li>
            <li>Evaluación de complejidad del proyecto</li>
            <li>Compatibilidad cultural y de estilo de trabajo</li>
            <li>Optimización de presupuesto y tarifas</li>
          </ul>
          <p>Encuentra el talento adecuado 5 veces más rápido que con métodos tradicionales.</p>
        </>
      ),
      stats: "95% de precisión en matching talento-proyecto",
    },
    onboarding: {
      name: "Onboarding Rápido",
      description: (
        <>
          <p className="mb-4">
            Inicia tu proyecto inmediatamente con profesionales pre-evaluados:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Habilidades verificadas y revisión de portafolio</li>
            <li>Verificación de antecedentes y referencias</li>
            <li>Confirmación de disponibilidad inmediata</li>
            <li>Plantillas de contrato y acuerdos</li>
            <li>Configuración de pagos seguros</li>
          </ul>
          <p>Reduce el tiempo de onboarding de semanas a solo días.</p>
        </>
      ),
      stats: "70% más rápido el inicio de proyectos",
    },
    management: {
      name: "Gestión de Proyectos",
      description: (
        <>
          <p className="mb-4">
            Todo lo que necesitas para gestionar tu proyecto exitosamente:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Herramientas de comunicación integradas</li>
            <li>Seguimiento de progreso y hitos</li>
            <li>Control de tiempo y métricas de productividad</li>
            <li>Compartición de archivos y colaboración</li>
            <li>Puntos de control de calidad</li>
          </ul>
          <p>Visibilidad y control completo del proyecto en una sola plataforma.</p>
        </>
      ),
      stats: "40% de aumento en la tasa de éxito de proyectos",
    },
    buttons: {
      findTalent: "Encontrar Talento Ahora",
      viewCases: "Ver Casos de Estudio",
    },
    techStack: "Te Conectamos con Expertos en Todas las Tecnologías",
    techCategories: [
      {
        icon: <Code className="w-6 h-6" />,
        name: "Desarrollo Web",
        skills: ["React", "Vue", "Angular", "Node.js", "Python", "PHP"]
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        name: "Desarrollo Móvil",
        skills: ["iOS", "Android", "Flutter", "React Native", "Kotlin", "Swift"]
      },
      {
        icon: <Cloud className="w-6 h-6" />,
        name: "Cloud & DevOps",
        skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]
      },
      {
        icon: <Database className="w-6 h-6" />,
        name: "Ciencia de Datos & IA",
        skills: ["Python", "R", "TensorFlow", "PyTorch", "SQL", "ML"]
      },
      {
        icon: <Palette className="w-6 h-6" />,
        name: "Diseño UI/UX",
        skills: ["Figma", "Sketch", "Adobe XD", "Prototipado", "Investigación de Usuario"]
      },
      {
        icon: <Globe className="w-6 h-6" />,
        name: "Marketing Digital",
        skills: ["SEO", "PPC", "Redes Sociales", "Estrategia de Contenido", "Analytics"]
      },
    ],
  },
  fr: {
    title: "Matching de Talent avec IA pour Vos Projets",
    matching: {
      name: "Matching Intelligent",
      description: (
        <>
          <p className="mb-4">
            Notre algorithme d'IA analyse vos exigences de projet et trouve le talent parfait :
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Matching avancé de compétences et expérience</li>
            <li>Alignement disponibilité et fuseau horaire</li>
            <li>Évaluation complexité du projet</li>
            <li>Compatibilité culturelle et style de travail</li>
            <li>Optimisation budget et tarifs</li>
          </ul>
          <p>Trouvez le talent idéal 5 fois plus vite qu'avec les méthodes traditionnelles.</p>
        </>
      ),
      stats: "95% de précision dans le matching talent-projet",
    },
    onboarding: {
      name: "Onboarding Rapide",
      description: (
        <>
          <p className="mb-4">
            Démarrez votre projet immédiatement avec des professionnels pré-vérifiés :
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Compétences vérifiées et revue de portfolio</li>
            <li>Vérification antécédents et références</li>
            <li>Confirmation disponibilité immédiate</li>
            <li>Modèles de contrat et accords</li>
            <li>Configuration paiements sécurisés</li>
          </ul>
          <p>Réduisez le temps d'onboarding de semaines à quelques jours.</p>
        </>
      ),
      stats: "70% plus rapide pour démarrer les projets",
    },
    management: {
      name: "Gestion de Projet",
      description: (
        <>
          <p className="mb-4">
            Tout ce dont vous avez besoin pour gérer votre projet avec succès :
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Outils de communication intégrés</li>
            <li>Suivi progression et jalons</li>
            <li>Suivi temps et métriques productivité</li>
            <li>Partage fichiers et collaboration</li>
            <li>Points de contrôle qualité</li>
          </ul>
          <p>Visibilité et contrôle complets du projet sur une seule plateforme.</p>
        </>
      ),
      stats: "40% d'augmentation du taux de réussite des projets",
    },
    buttons: {
      findTalent: "Trouver des Talents Maintenant",
      viewCases: "Voir les Études de Cas",
    },
    techStack: "Nous Vous Connectons avec des Experts dans Toutes les Technologies",
    techCategories: [
      {
        icon: <Code className="w-6 h-6" />,
        name: "Développement Web",
        skills: ["React", "Vue", "Angular", "Node.js", "Python", "PHP"]
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        name: "Développement Mobile",
        skills: ["iOS", "Android", "Flutter", "React Native", "Kotlin", "Swift"]
      },
      {
        icon: <Cloud className="w-6 h-6" />,
        name: "Cloud & DevOps",
        skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]
      },
      {
        icon: <Database className="w-6 h-6" />,
        name: "Science des Données & IA",
        skills: ["Python", "R", "TensorFlow", "PyTorch", "SQL", "ML"]
      },
      {
        icon: <Palette className="w-6 h-6" />,
        name: "Design UI/UX",
        skills: ["Figma", "Sketch", "Adobe XD", "Prototypage", "Recherche Utilisateur"]
      },
      {
        icon: <Globe className="w-6 h-6" />,
        name: "Marketing Digital",
        skills: ["SEO", "PPC", "Réseaux Sociaux", "Stratégie de Contenu", "Analytics"]
      },
    ],
  },
  jp: {
    title: "AIを活用したプロジェクトのための人材マッチング",
    matching: {
      name: "スマートマッチング",
      description: (
        <>
          <p className="mb-4">
            当社のAIアルゴリズムがプロジェクト要件を分析し、完璧な人材マッチを見つけます：
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>高度なスキルと経験のマッチング</li>
            <li>可用性とタイムゾーンの調整</li>
            <li>プロジェクト複雑性の評価</li>
            <li>文化的適合性と仕事スタイルの互換性</li>
            <li>予算と料金の最適化</li>
          </ul>
          <p>従来の方法より5倍速く適切な人材を見つけます。</p>
        </>
      ),
      stats: "人材とプロジェクトのマッチング精度95%",
    },
    onboarding: {
      name: "迅速なオンボーディング",
      description: (
        <>
          <p className="mb-4">
            事前審査済みのプロフェッショナルで即座にプロジェクトを開始：
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>検証済みスキルとポートフォリオレビュー</li>
            <li>経歴と参照チェック</li>
            <li>即時可用性確認</li>
            <li>契約と合意のテンプレート</li>
            <li>安全な支払い設定</li>
          </ul>
          <p>オンボーディング時間を数週間から数日に短縮。</p>
        </>
      ),
      stats: "プロジェクト開始が70%高速化",
    },
    management: {
      name: "プロジェクト管理",
      description: (
        <>
          <p className="mb-4">
            プロジェクトを成功裏に管理するために必要なすべて：
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>統合コミュニケーションツール</li>
            <li>進捗追跡とマイルストーン</li>
            <li>時間追跡と生産性指標</li>
            <li>ファイル共有とコラボレーション</li>
            <li>品質保証チェックポイント</li>
          </ul>
          <p>単一プラットフォームでの完全なプロジェクト可視性と制御。</p>
        </>
      ),
      stats: "プロジェクト成功率40%向上",
    },
    buttons: {
      findTalent: "今すぐ人材を見つける",
      viewCases: "事例研究を見る",
    },
    techStack: "あらゆる技術のエキスパートとおつなぎします",
    techCategories: [
      {
        icon: <Code className="w-6 h-6" />,
        name: "Web開発",
        skills: ["React", "Vue", "Angular", "Node.js", "Python", "PHP"]
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        name: "モバイル開発",
        skills: ["iOS", "Android", "Flutter", "React Native", "Kotlin", "Swift"]
      },
      {
        icon: <Cloud className="w-6 h-6" />,
        name: "クラウド & DevOps",
        skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]
      },
      {
        icon: <Database className="w-6 h-6" />,
        name: "データサイエンス & AI",
        skills: ["Python", "R", "TensorFlow", "PyTorch", "SQL", "ML"]
      },
      {
        icon: <Palette className="w-6 h-6" />,
        name: "UI/UXデザイン",
        skills: ["Figma", "Sketch", "Adobe XD", "プロトタイピング", "ユーザー調査"]
      },
      {
        icon: <Globe className="w-6 h-6" />,
        name: "デジタルマーケティング",
        skills: ["SEO", "PPC", "ソーシャルメディア", "コンテンツ戦略", "分析"]
      },
    ],
  },
  zh: {
    title: "AI驱动的项目人才匹配",
    matching: {
      name: "智能匹配",
      description: (
        <>
          <p className="mb-4">
            我们的AI算法分析您的项目需求并找到完美的人才匹配：
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>高级技能和经验匹配</li>
            <li>可用性和时区对齐</li>
            <li>项目复杂性评估</li>
            <li>文化契合和工作风格兼容性</li>
            <li>预算和费率优化</li>
          </ul>
          <p>比传统方法快5倍找到合适人才。</p>
        </>
      ),
      stats: "人才项目匹配准确率95%",
    },
    onboarding: {
      name: "快速入职",
      description: (
        <>
          <p className="mb-4">
            使用经过预先审核的专业人士立即启动您的项目：
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>验证技能和作品集审查</li>
            <li>背景和参考检查</li>
            <li>即时可用性确认</li>
            <li>合同和协议模板</li>
            <li>安全支付设置</li>
          </ul>
          <p>将入职时间从数周减少到仅几天。</p>
        </>
      ),
      stats: "项目启动速度快70%",
    },
    management: {
      name: "项目管理",
      description: (
        <>
          <p className="mb-4">
            成功管理项目所需的一切：
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>集成沟通工具</li>
            <li>进度跟踪和里程碑</li>
            <li>时间跟踪和生产力指标</li>
            <li>文件共享和协作</li>
            <li>质量保证检查点</li>
          </ul>
          <p>在一个平台中实现完整的项目可见性和控制。</p>
        </>
      ),
      stats: "项目成功率提高40%",
    },
    buttons: {
      findTalent: "立即寻找人才",
      viewCases: "查看案例研究",
    },
    techStack: "我们为您连接所有技术领域的专家",
    techCategories: [
      {
        icon: <Code className="w-6 h-6" />,
        name: "Web开发",
        skills: ["React", "Vue", "Angular", "Node.js", "Python", "PHP"]
      },
      {
        icon: <Smartphone className="w-6 h-6" />,
        name: "移动开发",
        skills: ["iOS", "Android", "Flutter", "React Native", "Kotlin", "Swift"]
      },
      {
        icon: <Cloud className="w-6 h-6" />,
        name: "云与DevOps",
        skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]
      },
      {
        icon: <Database className="w-6 h-6" />,
        name: "数据科学与AI",
        skills: ["Python", "R", "TensorFlow", "PyTorch", "SQL", "ML"]
      },
      {
        icon: <Palette className="w-6 h-6" />,
        name: "UI/UX设计",
        skills: ["Figma", "Sketch", "Adobe XD", "原型设计", "用户研究"]
      },
      {
        icon: <Globe className="w-6 h-6" />,
        name: "数字营销",
        skills: ["SEO", "PPC", "社交媒体", "内容策略", "分析"]
      },
    ],
  },
};

interface ProductShowcaseProps {
  readonly language: Language;
}

export function ProductShowcase({ language }: ProductShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const t = translations[language] || translations.en;

  const features = [
    {
      name: t.matching.name,
      description: t.matching.description,
      image: "/screenshots/ai-matching.webp",
      stats: t.matching.stats,
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: t.onboarding.name,
      description: t.onboarding.description,
      image: "/screenshots/onboarding.webp",
      stats: t.onboarding.stats,
      icon: <Rocket className="w-6 h-6" />
    },
    {
      name: t.management.name,
      description: t.management.description,
      image: "/screenshots/project-management.webp",
      stats: t.management.stats,
      icon: <BarChart3 className="w-6 h-6" />
    },
  ];

  return (
    <section id="product-showcase" className="py-24 bg-gray-50 to-primary-50/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left panel (content) */}
          <div className="lg:w-1/2 flex flex-col h-full">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            >
              {t.title}
            </motion.h2>

            <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
              <TabList className="flex space-x-1 rounded-xl bg-primary-100 p-1 mb-8">
                {features.map((feature) => (
                  <Tab
                    key={feature.name}
                    className={({ selected }) =>
                      `w-full rounded-lg py-3 px-4 text-sm font-medium leading-5 transition-colors flex items-center justify-center gap-2 ${selected
                        ? "bg-white shadow-lg text-primary-700"
                        : "text-gray-700 hover:bg-white/70"
                      }`
                    }
                  >
                    {feature.icon}
                    {feature.name}
                  </Tab>
                ))}
              </TabList>

              <TabPanels className="flex-1">
                {features.map((feature) => (
                  <TabPanel key={feature.name} className="h-full flex flex-col">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-lg text-gray-700 mb-6 grow"
                    >
                      {feature.description}
                    </motion.div>
                    <div className="space-y-6">
                      <div className="px-4 py-3 bg-primary-100 rounded-lg text-primary-800 font-medium">
                        {feature.stats}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl">
                          {t.buttons.findTalent}
                        </button>
                        <button className="px-8 py-3 border-2 border-primary-600 text-primary-700 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                          {t.buttons.viewCases}
                        </button>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            {/* Tech Stack Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t.techStack}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {t.techCategories.map((category) => (
                  <div key={category.name} className="bg-white p-4 rounded-lg shadow-xs border border-gray-200">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="text-primary-600">{category.icon}</div>
                      <span className="font-medium text-gray-900">{category.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {category.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {category.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
                          +{category.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right panel (image) */}
          <div className="lg:w-1/2 h-full min-h-[600px] lg:min-h-[700px] sticky top-6">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 h-full bg-white"
            >
              <div className="h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary-100 rounded-full flex items-center justify-center">
                    {features[selectedIndex].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {features[selectedIndex].name}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {features[selectedIndex].stats}
                  </p>
                  <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-700">
                    AI-powered matching and project management platform
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}