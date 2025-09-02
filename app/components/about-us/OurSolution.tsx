import { motion } from "framer-motion";
import {
  Network,
  Zap,
  Shield,
  BarChart3,
  MessageCircle,
  Link,
  Users,
  CheckCircle,
  Award,
  Brain,
  Database,
  Lock
} from "lucide-react";
import { Language } from "@onnasoft/pro-meets-core";
import { SiHttpie } from "react-icons/si";

const translations = {
  en: {
    title: "Our Integrated Talent Ecosystem",
    subtitle: "A comprehensive platform that revolutionizes talent acquisition through intelligent data aggregation and seamless processes",
    features: {
      socialIntegration: {
        title: "Social Profile Integration",
        description: "Automatically gather candidate information from multiple platforms without manual data entry",
        items: [
          "LinkedIn professional profiles",
          "GitHub code repositories & activity",
          "Kaggle data science projects",
          "Twitter professional presence",
          "Portfolio websites & blogs"
        ]
      },
      unifiedPlatform: {
        title: "All-in-One Recruitment Environment",
        description: "Manage the entire hiring process within a single, intuitive platform",
        items: [
          "Candidate communication tools",
          "Skill assessment integration",
          "Interview scheduling system",
          "Collaborative evaluation workspace",
          "Analytics and reporting dashboard"
        ]
      },
      apiEcosystem: {
        title: "Open API Ecosystem",
        description: "Extend functionality and integrate with your existing tools through our powerful API",
        items: [
          "RESTful API for custom integrations",
          "Webhook support for real-time updates",
          "Pre-built connectors for popular HR systems",
          "Developer portal with comprehensive documentation",
          "Sandbox environment for testing"
        ]
      },
      aiMatching: {
        title: "Advanced AI Matching",
        description: "Our proprietary algorithms analyze multiple data points for perfect candidate-role alignment",
        items: [
          "Multi-dimensional skill assessment",
          "Cultural fit prediction",
          "Growth potential analysis",
          "Team compatibility scoring",
          "Retention likelihood estimation"
        ]
      }
    },
    process: {
      title: "Our 4-Step Matching Process",
      steps: [
        {
          step: "01",
          title: "Data Aggregation",
          description: "Automatically collect candidate information from verified social and professional networks",
          icon: <Database className="w-6 h-6" />
        },
        {
          step: "02",
          title: "Intelligent Analysis",
          description: "Our AI analyzes skills, experience, projects, and cultural indicators across platforms",
          icon: <Brain className="w-6 h-6" />
        },
        {
          step: "03",
          title: "Smart Matching",
          description: "Algorithmically match candidates to roles based on comprehensive compatibility scoring",
          icon: <Network className="w-6 h-6" />
        },
        {
          step: "04",
          title: "Seamless Engagement",
          description: "Connect with candidates through integrated communication tools and tracking",
          icon: <MessageCircle className="w-6 h-6" />
        }
      ]
    },
    benefits: {
      recruiters: {
        title: "For Recruiters & Companies",
        items: [
          {
            title: "70% Time Reduction",
            description: "Cut hiring time from weeks to days with automated candidate sourcing",
            icon: <Zap className="w-5 h-5" />
          },
          {
            title: "Comprehensive Profiles",
            description: "Access rich candidate data without manual information gathering",
            icon: <Users className="w-5 h-5" />
          },
          {
            title: "Better Matches",
            description: "Higher quality hires with our multi-platform compatibility analysis",
            icon: <Award className="w-5 h-5" />
          },
          {
            title: "Process Automation",
            description: "Streamline scheduling, communication, and evaluation workflows",
            icon: <BarChart3 className="w-5 h-5" />
          }
        ]
      },
      candidates: {
        title: "For Candidates",
        items: [
          {
            title: "No Repetitive Applications",
            description: "Your profiles and data work for you across multiple opportunities",
            icon: <CheckCircle className="w-5 h-5" />
          },
          {
            title: "Better Role Fit",
            description: "Get matched with positions that truly align with your skills and goals",
            icon: <Award className="w-5 h-5" />
          },
          {
            title: "Transparent Process",
            description: "Clear communication and status updates throughout the hiring journey",
            icon: <Shield className="w-5 h-5" />
          },
          {
            title: "Career Visibility",
            description: "Showcase your complete professional footprint to potential employers",
            icon: <Network className="w-5 h-5" />
          }
        ]
      }
    },
    differentiation: {
      title: "What Makes Us Different",
      items: [
        {
          title: "Holistic Data Integration",
          description: "We're the only platform that aggregates data from both professional and technical networks",
          icon: <Link className="w-5 h-5" />
        },
        {
          title: "API-First Architecture",
          description: "Built from the ground up to be extensible and integrable with your existing systems",
          icon: <SiHttpie className="w-5 h-5" />
        },
        {
          title: "Privacy by Design",
          description: "Transparent data handling with candidate consent at the center of our approach",
          icon: <Lock className="w-5 h-5" />
        },
        {
          title: "Continuous Learning",
          description: "Our AI improves with every interaction, delivering increasingly accurate matches",
          icon: <Brain className="w-5 h-5" />
        }
      ]
    },
    cta: {
      primary: "Request a Demo",
      secondary: "Explore Our API"
    }
  },
  es: {
    title: "Nuestro Ecosistema Integral de Talento",
    subtitle: "Una plataforma completa que revoluciona la adquisición de talento mediante agregación inteligente de datos y procesos fluidos",
    features: {
      socialIntegration: {
        title: "Integración de Perfiles Sociales",
        description: "Reúne automáticamente información de candidatos de múltiples plataformas sin entrada manual de datos",
        items: [
          "Perfiles profesionales de LinkedIn",
          "Repositorios de código y actividad en GitHub",
          "Proyectos de ciencia de datos en Kaggle",
          "Presencia profesional en Twitter",
          "Sitios web de portafolio y blogs"
        ]
      },
      unifiedPlatform: {
        title: "Entorno de Contratación Todo-en-Uno",
        description: "Gestiona todo el proceso de contratación dentro de una única plataforma intuitiva",
        items: [
          "Herramientas de comunicación con candidatos",
          "Integración de evaluaciones de habilidades",
          "Sistema de programación de entrevistas",
          "Espacio de trabajo colaborativo de evaluación",
          "Panel de análisis y reportes"
        ]
      },
      apiEcosystem: {
        title: "Ecosistema API Abierta",
        description: "Extiende la funcionalidad e integra con tus herramientas existentes mediante nuestra API potente",
        items: [
          "API RESTful para integraciones personalizadas",
          "Soporte para webhooks en tiempo real",
          "Conectores preconstruidos para sistemas de RH populares",
          "Portal para desarrolladores con documentación completa",
          "Entorno sandbox para pruebas"
        ]
      },
      aiMatching: {
        title: "Matching con IA Avanzada",
        description: "Nuestros algoritmos propietarios analizan múltiples puntos de datos para una alineación perfecta candidato-rol",
        items: [
          "Evaluación de habilidades multidimensional",
          "Predicción de ajuste cultural",
          "Análisis de potencial de crecimiento",
          "Puntuación de compatibilidad de equipo",
          "Estimación de probabilidad de retención"
        ]
      }
    },
    process: {
      title: "Nuestro Proceso de Matching en 4 Pasos",
      steps: [
        {
          step: "01",
          title: "Agregación de Datos",
          description: "Recolecta automáticamente información de candidatos de redes sociales y profesionales verificadas",
          icon: <Database className="w-6 h-6" />
        },
        {
          step: "02",
          title: "Análisis Inteligente",
          description: "Nuestra IA analiza habilidades, experiencia, proyectos e indicadores culturales across plataformas",
          icon: <Brain className="w-6 h-6" />
        },
        {
          step: "03",
          title: "Matching Inteligente",
          description: "Empareja candidatos con roles algorítmicamente basado en puntuación de compatibilidad comprehensiva",
          icon: <Network className="w-6 h-6" />
        },
        {
          step: "04",
          title: "Interacción Fluida",
          description: "Conéctate con candidatos through herramientas de comunicación integradas y seguimiento",
          icon: <MessageCircle className="w-6 h-6" />
        }
      ]
    },
    benefits: {
      recruiters: {
        title: "Para Reclutadores y Empresas",
        items: [
          {
            title: "Reducción de 70% en Tiempo",
            description: "Reduce el tiempo de contratación de semanas a días con abastecimiento automatizado de candidatos",
            icon: <Zap className="w-5 h-5" />
          },
          {
            title: "Perfiles Comprehensivos",
            description: "Accede a datos ricos de candidatos sin recolección manual de información",
            icon: <Users className="w-5 h-5" />
          },
          {
            title: "Mejores Matches",
            description: "Contrataciones de mayor calidad con nuestro análisis de compatibilidad multi-plataforma",
            icon: <Award className="w-5 h-5" />
          },
          {
            title: "Automatización de Procesos",
            description: "Optimiza flujos de trabajo de programación, comunicación y evaluación",
            icon: <BarChart3 className="w-5 h-5" />
          }
        ]
      },
      candidates: {
        title: "Para Candidatos",
        items: [
          {
            title: "Sin Aplicaciones Repetitivas",
            description: "Tus perfiles y datos trabajan para ti a través de múltiples oportunidades",
            icon: <CheckCircle className="w-5 h-5" />
          },
          {
            title: "Mejor Ajuste al Rol",
            description: "Match con posiciones que realmente se alinean con tus habilidades y objetivos",
            icon: <Award className="w-5 h-5" />
          },
          {
            title: "Proceso Transparente",
            description: "Comunicación clara y actualizaciones de estado throughout el proceso de contratación",
            icon: <Shield className="w-5 h-5" />
          },
          {
            title: "Visibilidad Profesional",
            description: "Muestra tu huella profesional completa a empleadores potenciales",
            icon: <Network className="w-5 h-5" />
          }
        ]
      }
    },
    differentiation: {
      title: "Qué Nos Hace Diferentes",
      items: [
        {
          title: "Integración Holística de Datos",
          description: "Somos la única plataforma que agrega datos de redes profesionales y técnicas",
          icon: <Link className="w-5 h-5" />
        },
        {
          title: "Arquitectura API-First",
          description: "Construida desde cero para ser extensible e integrable con tus sistemas existentes",
          icon: <SiHttpie className="w-5 h-5" />
        },
        {
          title: "Privacidad por Diseño",
          description: "Manejo transparente de datos con consentimiento del candidato en el centro de nuestro enfoque",
          icon: <Lock className="w-5 h-5" />
        },
        {
          title: "Aprendizaje Continuo",
          description: "Nuestra IA mejora con cada interacción, entregando matches cada vez más precisos",
          icon: <Brain className="w-5 h-5" />
        }
      ]
    },
    cta: {
      primary: "Solicitar Demo",
      secondary: "Explorar Nuestra API"
    }
  },
  fr: {
    title: "Notre Écosystème Intégré de Talents",
    subtitle: "Une plateforme complète qui révolutionne l'acquisition de talents grâce à l'agrégation intelligente de données et des processus transparents",
    features: {
      socialIntegration: {
        title: "Intégration de Profils Sociaux",
        description: "Collecte automatiquement les informations des candidats de multiples plateformes sans saisie manuelle",
        items: [
          "Profils professionnels LinkedIn",
          "Dépôts de code et activité GitHub",
          "Projets data science sur Kaggle",
          "Présence professionnelle sur Twitter",
          "Sites portfolio et blogs"
        ]
      },
      unifiedPlatform: {
        title: "Environnement de Recrutement Tout-en-Un",
        description: "Gérez l'intégralité du processus de recrutement dans une plateforme unique et intuitive",
        items: [
          "Outils de communication avec les candidats",
          "Intégration d'évaluations de compétences",
          "Système de planification d'entretiens",
          "Espace d'évaluation collaboratif",
          "Tableau de bord d'analyse et de reporting"
        ]
      },
      apiEcosystem: {
        title: "Écosystème API Ouverte",
        description: "Étendez les fonctionnalités et intégrez avec vos outils existants via notre API puissante",
        items: [
          "API RESTful pour intégrations personnalisées",
          "Support webhook pour mises à jour en temps réel",
          "Connecteurs préconstruits pour systèmes RH populaires",
          "Portail développeur avec documentation complète",
          "Environnement sandbox pour tests"
        ]
      },
      aiMatching: {
        title: "Matching par IA Avancée",
        description: "Nos algorithmes propriétaires analysent multiples points de données pour un alignement parfait candidat-poste",
        items: [
          "Évaluation multidimensionnelle des compétences",
          "Prédiction d'adéquation culturelle",
          "Analyse du potentiel de croissance",
          "Score de compatibilité d'équipe",
          "Estimation de probabilité de rétention"
        ]
      }
    },
    process: {
      title: "Notre Processus de Matching en 4 Étapes",
      steps: [
        {
          step: "01",
          title: "Agrégation de Données",
          description: "Collecte automatique des informations candidats depuis les réseaux sociaux et professionnels vérifiés",
          icon: <Database className="w-6 h-6" />
        },
        {
          step: "02",
          title: "Analyse Intelligente",
          description: "Notre IA analyse compétences, expérience, projets et indicateurs culturels across plateformes",
          icon: <Brain className="w-6 h-6" />
        },
        {
          step: "03",
          title: "Matching Intelligent",
          description: "Appariez les candidats aux postes algorithmiquement sur scoring de compatibilité complet",
          icon: <Network className="w-6 h-6" />
        },
        {
          step: "04",
          title: "Engagement Transparent",
          description: "Connectez-vous avec les candidats via outils de communication intégrés et suivi",
          icon: <MessageCircle className="w-6 h-6" />
        }
      ]
    },
    benefits: {
      recruiters: {
        title: "Pour Recruteurs et Entreprises",
        items: [
          {
            title: "Réduction de 70% du Temps",
            description: "Réduisez le temps de recrutement de semaines à jours avec sourcing automatisé de candidats",
            icon: <Zap className="w-5 h-5" />
          },
          {
            title: "Profils Complets",
            description: "Accédez à des données candidates riches sans collecte manuelle d'information",
            icon: <Users className="w-5 h-5" />
          },
          {
            title: "Meilleurs Matches",
            description: "Embauches de qualité supérieure avec notre analyse de compatibilité multi-plateformes",
            icon: <Award className="w-5 h-5" />
          },
          {
            title: "Automatisation des Processus",
            description: "Rationalisez les flux de planification, communication et évaluation",
            icon: <BarChart3 className="w-5 h-5" />
          }
        ]
      },
      candidates: {
        title: "Pour Candidats",
        items: [
          {
            title: "Plus de Candidatures Répétitives",
            description: "Vos profils et données travaillent pour vous across multiples opportunités",
            icon: <CheckCircle className="w-5 h-5" />
          },
          {
            title: "Meilleure Adéquation au Poste",
            description: "Soyez matché avec des postes alignés avec vos compétences et objectifs",
            icon: <Award className="w-5 h-5" />
          },
          {
            title: "Processus Transparent",
            description: "Communication claire et updates de statut throughout le processus de recrutement",
            icon: <Shield className="w-5 h-5" />
          },
          {
            title: "Visibilité Professionnelle",
            description: "Montrez votre empreinte professionnelle complète aux employeurs potentiels",
            icon: <Network className="w-5 h-5" />
          }
        ]
      }
    },
    differentiation: {
      title: "Ce Qui Nous Différencie",
      items: [
        {
          title: "Intégration Holistique des Données",
          description: "Nous sommes la seule plateforme agrégeant données des réseaux professionnels et techniques",
          icon: <Link className="w-5 h-5" />
        },
        {
          title: "Architecture API-First",
          description: "Construite dès la base pour être extensible et intégrable avec vos systèmes existants",
          icon: <SiHttpie className="w-5 h-5" />
        },
        {
          title: "Privacy by Design",
          description: "Gestion transparente des données avec consentement candidat au cœur de notre approche",
          icon: <Lock className="w-5 h-5" />
        },
        {
          title: "Apprentissage Continu",
          description: "Notre IA s'améliore avec chaque interaction, offrant des matches toujours plus précis",
          icon: <Brain className="w-5 h-5" />
        }
      ]
    },
    cta: {
      primary: "Demander une Démo",
      secondary: "Explorer Notre API"
    }
  },
  jp: {
    title: "私たちの統合型タレントエコシステム",
    subtitle: "インテリジェントなデータ収集とシームレスなプロセスを通じて人材獲得を革新する包括的なプラットフォーム",
    features: {
      socialIntegration: {
        title: "ソーシャルプロファイル統合",
        description: "手動データ入力をせずに複数のプラットフォームから候補者情報を自動的に収集",
        items: [
          "LinkedInの職業プロファイル",
          "GitHubのコードリポジトリと活動",
          "Kaggleのデータサイエンスプロジェクト",
          "Twitterの職業的存在",
          "ポートフォリオWebサイトとブログ"
        ]
      },
      unifiedPlatform: {
        title: "オールインワン採用環境",
        description: "単一の直感的なプラットフォーム内で採用プロセス全体を管理",
        items: [
          "候補者コミュニケーションツール",
          "スキル評価統合",
          "面接スケジューリングシステム",
          "協調評価ワークスペース",
          "分析とレポートダッシュボード"
        ]
      },
      apiEcosystem: {
        title: "オープンAPIエコシステム",
        description: "強力なAPIを通じて機能を拡張し既存ツールと統合",
        items: [
          "カスタム統合のためのRESTful API",
          "リアルタイム更新のためのWebhookサポート",
          "人気HRシステム向けプリビルドコネクター",
          "包括的なドキュメントを持つ開発者ポータル",
          "テストのためのサンドボックス環境"
        ]
      },
      aiMatching: {
        title: "高度なAIマッチング",
        description: "独自アルゴリズムが複数のデータポイントを分析し、候補者と役職の完璧な一致を実現",
        items: [
          "多次元スキル評価",
          "文化的適合性予測",
          "成長可能性分析",
          "チーム互換性スコアリング",
          "定着可能性推定"
        ]
      }
    },
    process: {
      title: "4ステップのマッチングプロセス",
      steps: [
        {
          step: "01",
          title: "データ収集",
          description: "検証済みのソーシャルおよび職業ネットワークから候補者情報を自動収集",
          icon: <Database className="w-6 h-6" />
        },
        {
          step: "02",
          title: "インテリジェント分析",
          description: "当社のAIがプラットフォーム横断でスキル、経験、プロジェクト、文化的指標を分析",
          icon: <Brain className="w-6 h-6" />
        },
        {
          step: "03",
          title: "スマートマッチング",
          description: "包括的互換性スコアリングに基づきアルゴリズムで候補者と役職をマッチング",
          icon: <Network className="w-6 h-6" />
        },
        {
          step: "04",
          title: "シームレスなエンゲージメント",
          description: "統合コミュニケーションツールとトラッキングで候補者と接続",
          icon: <MessageCircle className="w-6 h-6" />
        }
      ]
    },
    benefits: {
      recruiters: {
        title: "採用担当者と企業向け",
        items: [
          {
            title: "70%の時間短縮",
            description: "自動化された候補者ソーシングで採用時間を数週間から数日に短縮",
            icon: <Zap className="w-5 h-5" />
          },
          {
            title: "包括的なプロファイル",
            description: "手動情報収集なしで豊富な候補者データにアクセス",
            icon: <Users className="w-5 h-5" />
          },
          {
            title: "より良いマッチング",
            description: "マルチプラットフォーム互換性分析による高品質な採用",
            icon: <Award className="w-5 h-5" />
          },
          {
            title: "プロセス自動化",
            description: "スケジューリング、通信、評価ワークフローの合理化",
            icon: <BarChart3 className="w-5 h-5" />
          }
        ]
      },
      candidates: {
        title: "候補者向け",
        items: [
          {
            title: "反復的な応募なし",
            description: "あなたのプロファイルとデータが複数の機会にわたって働きます",
            icon: <CheckCircle className="w-5 h-5" />
          },
          {
            title: "より良い役職適合",
            description: "スキルと目標に真に沿ったポジションとマッチング",
            icon: <Award className="w-5 h-5" />
          },
          {
            title: "透明なプロセス",
            description: "採用プロセス全体で明確なコミュニケーションとステータス更新",
            icon: <Shield className="w-5 h-5" />
          },
          {
            title: "キャリア可視性",
            description: "潜在的な雇用主に完全な職業的足跡を展示",
            icon: <Network className="w-5 h-5" />
          }
        ]
      }
    },
    differentiation: {
      title: "私たちの違い",
      items: [
        {
          title: "全体的なデータ統合",
          description: "職業ネットワークと技術ネットワークの両方からデータを集約する唯一のプラットフォーム",
          icon: <Link className="w-5 h-5" />
        },
        {
          title: "APIファーストアーキテクチャ",
          description: "既存システムと拡張可能かつ統合可能になるようゼロから構築",
          icon: <SiHttpie className="w-5 h-5" />
        },
        {
          title: "設計段階からのプライバシー",
          description: "候補者の同意を中心とした透明なデータ処理",
          icon: <Lock className="w-5 h-5" />
        },
        {
          title: "継続的学習",
          description: "当社のAIは相互作用ごとに改善し、ますます正確なマッチングを提供",
          icon: <Brain className="w-5 h-5" />
        }
      ]
    },
    cta: {
      primary: "デモをリクエスト",
      secondary: "APIを探索"
    }
  },
  zh: {
    title: "我们的一体化人才生态系统",
    subtitle: "通过智能数据聚合和无缝流程彻底改变人才获取的综合平台",
    features: {
      socialIntegration: {
        title: "社交资料整合",
        description: "无需手动输入即可自动从多个平台收集候选人信息",
        items: [
          "LinkedIn职业档案",
          "GitHub代码库和活动",
          "Kaggle数据科学项目",
          "Twitter专业形象",
          "作品集网站和博客"
        ]
      },
      unifiedPlatform: {
        title: "一体化招聘环境",
        description: "在单一直观平台内管理整个招聘流程",
        items: [
          "候选人沟通工具",
          "技能评估整合",
          "面试安排系统",
          "协作评估工作区",
          "分析和报告仪表板"
        ]
      },
      apiEcosystem: {
        title: "开放API生态系统",
        description: "通过我们强大的API扩展功能并与现有工具集成",
        items: [
          "用于自定义集成的RESTful API",
          "实时更新的Webhook支持",
          "流行HR系统的预构建连接器",
          "具有全面文档的开发人员门户",
          "测试用沙盒环境"
        ]
      },
      aiMatching: {
        title: "高级AI匹配",
        description: "我们的专有算法分析多个数据点以实现候选人-职位的完美对齐",
        items: [
          "多维技能评估",
          "文化契合度预测",
          "成长潜力分析",
          "团队兼容性评分",
          "保留可能性估计"
        ]
      }
    },
    process: {
      title: "我们的4步匹配流程",
      steps: [
        {
          step: "01",
          title: "数据聚合",
          description: "自动从经过验证的社交和专业网络收集候选人信息",
          icon: <Database className="w-6 h-6" />
        },
        {
          step: "02",
          title: "智能分析",
          description: "我们的AI分析跨平台的技能、经验、项目和文化指标",
          icon: <Brain className="w-6 h-6" />
        },
        {
          step: "03",
          title: "智能匹配",
          description: "基于全面兼容性评分通过算法将候选人与职位匹配",
          icon: <Network className="w-6 h-6" />
        },
        {
          step: "04",
          title: "无缝互动",
          description: "通过集成沟通工具和跟踪与候选人联系",
          icon: <MessageCircle className="w-6 h-6" />
        }
      ]
    },
    benefits: {
      recruiters: {
        title: "面向招聘人员和公司",
        items: [
          {
            title: "减少70%时间",
            description: "通过自动化候选人搜寻将招聘时间从数周缩短到数天",
            icon: <Zap className="w-5 h-5" />
          },
          {
            title: "全面档案",
            description: "无需手动信息收集即可访问丰富的候选人数据",
            icon: <Users className="w-5 h-5" />
          },
          {
            title: "更好匹配",
            description: "通过我们的多平台兼容性分析实现更高质量的招聘",
            icon: <Award className="w-5 h-5" />
          },
          {
            title: "流程自动化",
            description: "简化安排、沟通和评估工作流程",
            icon: <BarChart3 className="w-5 h-5" />
          }
        ]
      },
      candidates: {
        title: "面向候选人",
        items: [
          {
            title: "无需重复申请",
            description: "您的档案和数据在多个机会中为您工作",
            icon: <CheckCircle className="w-5 h-5" />
          },
          {
            title: "更好职位匹配",
            description: "与真正符合您技能和目标的职位匹配",
            icon: <Award className="w-5 h-5" />
          },
          {
            title: "透明流程",
            description: "在整个招聘过程中提供清晰沟通和状态更新",
            icon: <Shield className="w-5 h-5" />
          },
          {
            title: "职业可见性",
            description: "向潜在雇主展示您完整的专业足迹",
            icon: <Network className="w-5 h-5" />
          }
        ]
      }
    },
    differentiation: {
      title: "我们的差异化优势",
      items: [
        {
          title: "整体数据整合",
          description: "我们是唯一整合专业网络和技术网络数据的平台",
          icon: <Link className="w-5 h-5" />
        },
        {
          title: "API优先架构",
          description: "从头构建，可与现有系统扩展和集成",
          icon: <SiHttpie className="w-5 h-5" />
        },
        {
          title: "隐私设计",
          description: "以候选人同意为核心的透明数据处理",
          icon: <Lock className="w-5 h-5" />
        },
        {
          title: "持续学习",
          description: "我们的AI随着每次交互而改进，提供越来越精确的匹配",
          icon: <Brain className="w-5 h-5" />
        }
      ]
    },
    cta: {
      primary: "请求演示",
      secondary: "探索我们的API"
    }
  }
};

interface OurSolutionProps {
  readonly language: Language;
}

export function OurSolution({ language }: OurSolutionProps) {
  const t = translations[language] || translations.en;

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-50 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-50 rounded-full filter blur-3xl opacity-30"></div>
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
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Process Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
              {t.process.title}
            </h3>

            <div className="relative">
              {/* Connection line */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                {t.process.steps.map((step) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 relative z-10">
                        {step.icon}
                      </div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 bg-primary-700 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                        {step.step}
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          >
            {/* Social Integration */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
              <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-6">
                <Network className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.features.socialIntegration.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {t.features.socialIntegration.description}
              </p>
              <ul className="space-y-3">
                {t.features.socialIntegration.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Unified Platform */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border border-green-200">
              <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center text-white mb-6">
                <BarChart3 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.features.unifiedPlatform.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {t.features.unifiedPlatform.description}
              </p>
              <ul className="space-y-3">
                {t.features.unifiedPlatform.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* API Ecosystem */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border border-purple-200">
              <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center text-white mb-6">
                <SiHttpie className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.features.apiEcosystem.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {t.features.apiEcosystem.description}
              </p>
              <ul className="space-y-3">
                {t.features.apiEcosystem.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Matching */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border border-orange-200">
              <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center text-white mb-6">
                <Brain className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.features.aiMatching.title}
              </h3>
              <p className="text-gray-700 mb-6">
                {t.features.aiMatching.description}
              </p>
              <ul className="space-y-3">
                {t.features.aiMatching.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
          >
            {/* Recruiter Benefits */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center lg:text-left">
                {t.benefits.recruiters.title}
              </h3>
              <div className="space-y-6">
                {t.benefits.recruiters.items.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-xs hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Candidate Benefits */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center lg:text-left">
                {t.benefits.candidates.title}
              </h3>
              <div className="space-y-6">
                {t.benefits.candidates.items.map((benefit) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-xs hover:shadow-md transition-all"
                  >
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-600 flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Differentiation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
              {t.differentiation.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.differentiation.items.map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-b from-white to-gray-50 p-6 rounded-xl border border-gray-200 text-center hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Ready to Transform Your Hiring Process?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg shadow-primary hover:shadow-primary-md transition-all hover:scale-[1.02]"
                >
                  {t.cta.primary}
                </a>
                <a
                  href="/api-docs"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 shadow-xs hover:shadow-md transition-all hover:scale-[1.02]"
                >
                  {t.cta.secondary}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}