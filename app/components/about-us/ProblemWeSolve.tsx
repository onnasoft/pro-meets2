import { motion } from "framer-motion";
import { X, Clock, DollarSign, UserX, Building, Users, TrendingUp } from "lucide-react";
import { Language } from "@onnasoft/pro-meets-core";

const translations = {
  en: {
    title: "The Recruitment Challenge We Solve",
    subtitle: "Traditional hiring processes are broken, creating frustration for both companies and candidates",
    problems: [
      {
        icon: <Clock className="w-6 h-6" />,
        title: "Lengthy Hiring Processes",
        description: "Average time-to-hire is 42 days, causing companies to lose top talent to competitors",
        stat: "42 days",
        statDescription: "Average time-to-hire"
      },
      {
        icon: <DollarSign className="w-6 h-6" />,
        title: "High Recruitment Costs",
        description: "Companies spend an average of $4,000 per hire on traditional recruitment methods",
        stat: "$4,000",
        statDescription: "Average cost per hire"
      },
      {
        icon: <UserX className="w-6 h-6" />,
        title: "Poor Candidate Experience",
        description: "60% of job seekers abandon applications due to complex and lengthy processes",
        stat: "60%",
        statDescription: "Of candidates drop out"
      },
      {
        icon: <Building className="w-6 h-6" />,
        title: "Cultural Mismatches",
        description: "Over 30% of new hires leave within the first year due to poor cultural fit",
        stat: "30%",
        statDescription: "Early turnover rate"
      }
    ],
    impact: {
      title: "How This Impacts Businesses",
      points: [
        "Lost productivity and delayed projects",
        "Increased recruitment and training costs",
        "Lower team morale from prolonged vacancies",
        "Missed business opportunities"
      ]
    },
    candidateImpact: {
      title: "How This Impacts Candidates",
      points: [
        "Frustrating and opaque application processes",
        "Long waiting periods without feedback",
        "Mismatched roles that don't align with skills",
        "Missed career opportunities"
      ]
    },
    solutionIntro: "Our AI-powered platform addresses these challenges by:",
    solutionPoints: [
      "Reducing time-to-hire by up to 70%",
      "Cutting recruitment costs by more than half",
      "Improving candidate experience with transparent processes",
      "Ensuring cultural and skill fit with advanced matching algorithms"
    ]
  },
  es: {
    title: "El Desafío de Contratación que Resolvemos",
    subtitle: "Los procesos tradicionales de contratación están rotos, creando frustración tanto para empresas como para candidatos",
    problems: [
      {
        icon: <Clock className="w-6 h-6" />,
        title: "Procesos de Contratación Prolongados",
        description: "El tiempo promedio para contratar es de 42 días, haciendo que las empresas pierdan talento frente a competidores",
        stat: "42 días",
        statDescription: "Tiempo promedio de contratación"
      },
      {
        icon: <DollarSign className="w-6 h-6" />,
        title: "Altos Costos de Reclutamiento",
        description: "Las empresas gastan un promedio de $4,000 por contratación en métodos tradicionales",
        stat: "$4,000",
        statDescription: "Costo promedio por contratación"
      },
      {
        icon: <UserX className="w-6 h-6" />,
        title: "Mala Experiencia del Candidato",
        description: "60% de los buscadores de empleo abandonan solicitudes debido a procesos complejos y largos",
        stat: "60%",
        statDescription: "De candidatos abandonan"
      },
      {
        icon: <Building className="w-6 h-6" />,
        title: "Incompatibilidad Cultural",
        description: "Más del 30% de las nuevas contrataciones se van durante el primer año debido a mala adaptación cultural",
        stat: "30%",
        statDescription: "Tasa de rotación temprana"
      }
    ],
    impact: {
      title: "Cómo Esto Afecta a las Empresas",
      points: [
        "Pérdida de productividad y proyectos retrasados",
        "Mayores costos de reclutamiento y capacitación",
        "Baja moral del equipo por vacantes prolongadas",
        "Oportunidades de negocio perdidas"
      ]
    },
    candidateImpact: {
      title: "Cómo Esto Afecta a los Candidatos",
      points: [
        "Procesos de aplicación frustrantes y opacos",
        "Largos períodos de espera sin retroalimentación",
        "Roles inadecuados que no se alinean con habilidades",
        "Oportunidades de carrera perdidas"
      ]
    },
    solutionIntro: "Nuestra plataforma impulsada por IA aborda estos desafíos mediante:",
    solutionPoints: [
      "Reduciendo el tiempo de contratación hasta un 70%",
      "Recortando costos de reclutamiento a más de la mitad",
      "Mejorando la experiencia del candidato con procesos transparentes",
      "Asegurando compatibilidad cultural y de habilidades con algoritmos de matching avanzados"
    ]
  },
  fr: {
    title: "Le Défi de Recrutement que Nous Résolvons",
    subtitle: "Les processus de recrutement traditionnels sont défaillants, créant des frustrations pour les entreprises et les candidats",
    problems: [
      {
        icon: <Clock className="w-6 h-6" />,
        title: "Processus de Recrutement Longs",
        description: "Le délai moyen d'embauche est de 42 jours, faisant perdre aux entreprises des talents au profit des concurrents",
        stat: "42 jours",
        statDescription: "Délai moyen d'embauche"
      },
      {
        icon: <DollarSign className="w-6 h-6" />,
        title: "Coûts de Recrutement Élevés",
        description: "Les entreprises dépensent en moyenne 4 000 $ par embauche avec des méthodes de recrutement traditionnelles",
        stat: "4 000 $",
        statDescription: "Coût moyen par embauche"
      },
      {
        icon: <UserX className="w-6 h-6" />,
        title: "Mauvaise Expérience Candidat",
        description: "60% des chercheurs d'emploi abandonnent les candidatures en raison de processus complexes et longs",
        stat: "60%",
        statDescription: "De candidats abandonnent"
      },
      {
        icon: <Building className="w-6 h-6" />,
        title: "Inadéquation Culturelle",
        description: "Plus de 30% des nouvelles embauches partent dans la première année en raison d'une mauvaise adéquation culturelle",
        stat: "30%",
        statDescription: "Taux de rotation précoce"
      }
    ],
    impact: {
      title: "Impact sur les Entreprises",
      points: [
        "Perte de productivité et projets retardés",
        "Coûts de recrutement et de formation accrus",
        "Baisse du moral de l'équipe due aux postes vacants prolongés",
        "Opportunités commerciales manquées"
      ]
    },
    candidateImpact: {
      title: "Impact sur les Candidats",
      points: [
        "Processus de candidature frustrants et opaques",
        "Longues périodes d'attente sans retour",
        "Postes inadaptés ne correspondant pas aux compétences",
        "Opportunités de carrière manquées"
      ]
    },
    solutionIntro: "Notre plateforme alimentée par l'IA relève ces défis en :",
    solutionPoints: [
      "Réduisant le délai d'embauche jusqu'à 70%",
      "Diminuant les coûts de recrutement de plus de moitié",
      "Améliorant l'expérience candidat avec des processus transparents",
      "Garantissant l'adéquation culturelle et technique avec des algorithmes de matching avancés"
    ]
  },
  jp: {
    title: "私たちが解決する採用課題",
    subtitle: "従来の採用プロセスは機能しておらず、企業と候補者の両方に不満を生み出しています",
    problems: [
      {
        icon: <Clock className="w-6 h-6" />,
        title: "長い採用プロセス",
        description: "平均採用までの時間は42日間で、企業は競合他社に優秀な人材を奪われています",
        stat: "42日",
        statDescription: "平均採用までの時間"
      },
      {
        icon: <DollarSign className="w-6 h-6" />,
        title: "高い採用コスト",
        description: "企業は従来の採用方法で採用1件あたり平均4,000ドルを費やしています",
        stat: "4,000ドル",
        statDescription: "採用1件あたりの平均コスト"
      },
      {
        icon: <UserX className="w-6 h-6" />,
        title: "不十分な候補者体験",
        description: "求職者の60%が複雑で長いプロセスのため応募を断念しています",
        stat: "60%",
        statDescription: "応募を断念する候補者"
      },
      {
        icon: <Building className="w-6 h-6" />,
        title: "文化的不適合",
        description: "文化的不適合により、新人採用の30%以上が1年以内に離職しています",
        stat: "30%",
        statDescription: "早期離職率"
      }
    ],
    impact: {
      title: "企業への影響",
      points: [
        "生産性の損失とプロジェクトの遅延",
        "採用およびトレーニングコストの増加",
        "長引く空席によるチーム士気の低下",
        "ビジネス機会の損失"
      ]
    },
    candidateImpact: {
      title: "候補者への影響",
      points: [
        "不満がたまり不透明な応募プロセス",
        "フィードバックのない長い待機期間",
        "スキルに合わない不適切な役職",
        "キャリア機会の損失"
      ]
    },
    solutionIntro: "当社のAI駆動プラットフォームは以下の方法でこれらの課題に対処します:",
    solutionPoints: [
      "採用時間を最大70%短縮",
      "採用コストを半分以上削減",
      "透明性のあるプロセスで候補者体験を改善",
      "高度なマッチングアルゴリズムで文化的・技術的適合を確保"
    ]
  },
  zh: {
    title: "我们解决的招聘挑战",
    subtitle: "传统的招聘流程已失效，给公司和求职者都带来挫折",
    problems: [
      {
        icon: <Clock className="w-6 h-6" />,
        title: "漫长的招聘流程",
        description: "平均招聘时间为42天，导致公司失去顶尖人才给竞争对手",
        stat: "42天",
        statDescription: "平均招聘时间"
      },
      {
        icon: <DollarSign className="w-6 h-6" />,
        title: "高昂的招聘成本",
        description: "公司使用传统招聘方法平均每雇花费4,000美元",
        stat: "4,000美元",
        statDescription: "平均单次招聘成本"
      },
      {
        icon: <UserX className="w-6 h-6" />,
        title: "糟糕的候选人体验",
        description: "60%的求职者因复杂冗长的流程而放弃申请",
        stat: "60%",
        statDescription: "候选人放弃率"
      },
      {
        icon: <Building className="w-6 h-6" />,
        title: "文化不匹配",
        description: "超过30%的新员工因文化不适应在第一年内离职",
        stat: "30%",
        statDescription: "早期离职率"
      }
    ],
    impact: {
      title: "这对企业的影响",
      points: [
        "生产力损失和项目延迟",
        "增加招聘和培训成本",
        "职位长期空缺导致团队士气低落",
        "错过商业机会"
      ]
    },
    candidateImpact: {
      title: "这对候选人的影响",
      points: [
        "令人沮丧且不透明的申请流程",
        "长时间等待没有反馈",
        "与技能不匹配的职位",
        "错过职业机会"
      ]
    },
    solutionIntro: "我们的AI驱动平台通过以下方式应对这些挑战:",
    solutionPoints: [
      "将招聘时间减少高达70%",
      "降低一半以上的招聘成本",
      "通过透明流程改善候选人体验",
      "通过先进匹配算法确保文化和技能匹配"
    ]
  }
};

interface ProblemWeSolveProps {
  readonly language: Language;
}

export function ProblemWeSolve({ language }: ProblemWeSolveProps) {
  const t = translations[language] || translations.en;

  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
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
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {t.subtitle}
            </p>
          </motion.div>

          {/* Problems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {t.problems.map((problem) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 flex-shrink-0">
                    {problem.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {problem.description}
                    </p>
                    <div className="bg-red-50 px-4 py-2 rounded-lg inline-flex items-center gap-2">
                      <span className="text-2xl font-bold text-red-700">
                        {problem.stat}
                      </span>
                      <span className="text-sm text-red-600">
                        {problem.statDescription}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Business Impact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    <Building className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {t.impact.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {t.impact.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Candidate Impact */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {t.candidateImpact.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {t.candidateImpact.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Solution Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t.solutionIntro}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {t.solutionPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-300 flex-shrink-0" />
                    <span className="text-white">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}