import { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { motion } from "framer-motion";
import { Language } from "~/utils/language";

const translations = {
  en: {
    title: "The most complete platform for tech recruitment",
    scheduling: {
      name: "Smart Scheduling",
      description: (
        <>
          <p className="mb-4">
            Our scheduling system revolutionizes how you coordinate interviews:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Automatic sync with Google Calendar, Outlook and others</li>
            <li>Candidates select times based on your availability</li>
            <li>Automatic email and SMS reminders</li>
            <li>Configuration of buffers between interviews</li>
            <li>Smart blocking of non-working hours</li>
          </ul>
          <p>Reduce coordination time by 80% and eliminate endless emails.</p>
        </>
      ),
      stats: "95% of interviews scheduled without conflicts",
    },
    interviews: {
      name: "Integrated Interviews",
      description: (
        <>
          <p className="mb-4">
            Everything you need for effective interviews in one place:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>HD video calls with guaranteed quality</li>
            <li>Automatic recording with secure storage</li>
            <li>Real-time transcription with content analysis</li>
            <li>Standardized question templates</li>
            <li>Shared notes during the interview</li>
          </ul>
          <p>Eliminates the need for Zoom, Teams and other external tools.</p>
        </>
      ),
      stats: "40% more efficiency in interview sessions",
    },
    evaluation: {
      name: "Collaborative Evaluation",
      description: (
        <>
          <p className="mb-4">
            Make more objective decisions with our evaluation system:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Standardized scorecards by position</li>
            <li>Asynchronous feedback from the hiring team</li>
            <li>Side-by-side candidate comparison</li>
            <li>Cultural compatibility analysis</li>
            <li>Integration with your technical tests</li>
          </ul>
          <p>Reduce unconscious bias and improve your hiring quality.</p>
        </>
      ),
      stats: "60% less time in decision processes",
    },
    buttons: {
      liveDemo: "View live demo",
      documentation: "Technical documentation",
    },
  },
  es: {
    title: "La plataforma más completa para reclutamiento tecnológico",
    scheduling: {
      name: "Programación Inteligente",
      description: (
        <>
          <p className="mb-4">
            Nuestro sistema de agendamiento revoluciona cómo coordinas
            entrevistas:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              Sincronización automática con Google Calendar, Outlook y otros
            </li>
            <li>Los candidatos seleccionan horarios según tu disponibilidad</li>
            <li>Recordatorios automáticos por email y SMS</li>
            <li>Configuración de buffers entre entrevistas</li>
            <li>Bloqueo inteligente de horarios no laborales</li>
          </ul>
          <p>
            Reduce el tiempo de coordinación en un 80% y elimina los correos
            interminables.
          </p>
        </>
      ),
      stats: "95% de entrevistas programadas sin conflictos",
    },
    interviews: {
      name: "Entrevistas Integradas",
      description: (
        <>
          <p className="mb-4">
            Todo lo que necesitas para entrevistas efectivas en un solo lugar:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Videollamadas HD con calidad garantizada</li>
            <li>Grabación automática con almacenamiento seguro</li>
            <li>Transcripción en tiempo real con análisis de contenido</li>
            <li>Plantillas de preguntas estandarizadas</li>
            <li>Notas compartidas durante la entrevista</li>
          </ul>
          <p>
            Elimina la necesidad de Zoom, Teams y otras herramientas externas.
          </p>
        </>
      ),
      stats: "40% más eficiencia en sesiones de entrevistas",
    },
    evaluation: {
      name: "Evaluación Colaborativa",
      description: (
        <>
          <p className="mb-4">
            Toma decisiones más objetivas con nuestro sistema de evaluación:
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Scorecards estandarizadas por puesto</li>
            <li>Comentarios asíncronos del equipo de contratación</li>
            <li>Comparación lado a lado de candidatos</li>
            <li>Análisis de compatibilidad cultural</li>
            <li>Integración con tus pruebas técnicas</li>
          </ul>
          <p>
            Reduce los sesgos inconscientes y mejora la calidad de tus
            contrataciones.
          </p>
        </>
      ),
      stats: "60% menos tiempo en procesos de decisión",
    },
    buttons: {
      liveDemo: "Ver demostración en vivo",
      documentation: "Documentación técnica",
    },
  },
  fr: {
    title: "La plateforme la plus complète pour le recrutement technologique",
    scheduling: {
      name: "Planification Intelligente",
      description: (
        <>
          <p className="mb-4">
            Notre système de planification révolutionne la coordination des
            entretiens :
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>
              Synchronisation automatique avec Google Calendar, Outlook et
              autres
            </li>
            <li>
              Les candidats sélectionnent des horaires selon votre disponibilité
            </li>
            <li>Rappels automatiques par email et SMS</li>
            <li>Configuration de tampons entre les entretiens</li>
            <li>Blocage intelligent des heures non travaillées</li>
          </ul>
          <p>
            Réduisez le temps de coordination de 80% et éliminez les emails sans
            fin.
          </p>
        </>
      ),
      stats: "95% des entretiens programmés sans conflits",
    },
    interviews: {
      name: "Entretiens Intégrés",
      description: (
        <>
          <p className="mb-4">
            Tout ce dont vous avez besoin pour des entretiens efficaces en un
            seul endroit :
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Appels vidéo HD avec qualité garantie</li>
            <li>Enregistrement automatique avec stockage sécurisé</li>
            <li>Transcription en temps réel avec analyse de contenu</li>
            <li>Modèles de questions standardisées</li>
            <li>Notes partagées pendant l'entretien</li>
          </ul>
          <p>Élimine le besoin de Zoom, Teams et d'autres outils externes.</p>
        </>
      ),
      stats: "40% plus d'efficacité dans les sessions d'entretien",
    },
    evaluation: {
      name: "Évaluation Collaborative",
      description: (
        <>
          <p className="mb-4">
            Prenez des décisions plus objectives avec notre système d'évaluation
            :
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Grilles d'évaluation standardisées par poste</li>
            <li>Commentaires asynchrones de l'équipe de recrutement</li>
            <li>Comparaison côte à côte des candidats</li>
            <li>Analyse de compatibilité culturelle</li>
            <li>Intégration avec vos tests techniques</li>
          </ul>
          <p>
            Réduisez les biais inconscients et améliorez la qualité de vos
            embauches.
          </p>
        </>
      ),
      stats: "60% moins de temps dans les processus de décision",
    },
    buttons: {
      liveDemo: "Voir la démo en direct",
      documentation: "Documentation technique",
    },
  },
  ja: {
    title: "技術採用のための最も完全なプラットフォーム",
    scheduling: {
      name: "スマートスケジューリング",
      description: (
        <>
          <p className="mb-4">
            私たちのスケジューリングシステムは、面接の調整方法を革新します：
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>Googleカレンダー、Outlookなどとの自動同期</li>
            <li>候補者があなたの空き時間に基づいて時間を選択</li>
            <li>自動メールおよびSMSリマインダー</li>
            <li>面接間のバッファ設定</li>
            <li>非労働時間のスマートブロック</li>
          </ul>
          <p>調整時間を80％削減し、無限のメールを排除します。</p>
        </>
      ),
      stats: "95％の面接が衝突なくスケジュール",
    },
    interviews: {
      name: "統合面接",
      description: (
        <>
          <p className="mb-4">効果的な面接に必要なすべてが1か所に：</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>品質保証付きHDビデオ通話</li>
            <li>安全なストレージを備えた自動録画</li>
            <li>コンテンツ分析付きリアルタイム文字起こし</li>
            <li>標準化された質問テンプレート</li>
            <li>面接中の共有メモ</li>
          </ul>
          <p>Zoom、Teamsなどの外部ツールが不要になります。</p>
        </>
      ),
      stats: "面接セッションの効率が40％向上",
    },
    evaluation: {
      name: "共同評価",
      description: (
        <>
          <p className="mb-4">私たちの評価システムでより客観的な決定を：</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>ポジション別標準化スコアカード</li>
            <li>採用チームからの非同期フィードバック</li>
            <li>候補者の並列比較</li>
            <li>文化的適合性分析</li>
            <li>技術テストとの統合</li>
          </ul>
          <p>無意識のバイアスを減らし、採用品質を向上させます。</p>
        </>
      ),
      stats: "意思決定プロセスに60％少ない時間",
    },
    buttons: {
      liveDemo: "ライブデモを見る",
      documentation: "技術文書",
    },
  },
  zh: {
    title: "最完整的科技招聘平台",
    scheduling: {
      name: "智能调度",
      description: (
        <>
          <p className="mb-4">我们的调度系统彻底改变了您协调面试的方式：</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>与Google日历、Outlook等自动同步</li>
            <li>候选人根据您的可用性选择时间</li>
            <li>自动邮件和短信提醒</li>
            <li>面试间隔时间配置</li>
            <li>智能屏蔽非工作时间</li>
          </ul>
          <p>减少80%的协调时间，消除无尽的邮件往来。</p>
        </>
      ),
      stats: "95%的面试安排无冲突",
    },
    interviews: {
      name: "集成面试",
      description: (
        <>
          <p className="mb-4">在一个地方获得有效面试所需的一切：</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>高清视频通话，质量有保障</li>
            <li>自动录制，安全存储</li>
            <li>实时转录与内容分析</li>
            <li>标准化问题模板</li>
            <li>面试中共享笔记</li>
          </ul>
          <p>无需使用Zoom、Teams等外部工具。</p>
        </>
      ),
      stats: "面试效率提高40%",
    },
    evaluation: {
      name: "协作评估",
      description: (
        <>
          <p className="mb-4">使用我们的评估系统做出更客观的决定：</p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>按职位标准化的评分卡</li>
            <li>招聘团队的异步反馈</li>
            <li>候选人并列比较</li>
            <li>文化兼容性分析</li>
            <li>与您的技术测试集成</li>
          </ul>
          <p>减少无意识偏见，提高招聘质量。</p>
        </>
      ),
      stats: "决策过程时间减少60%",
    },
    buttons: {
      liveDemo: "查看实时演示",
      documentation: "技术文档",
    },
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
      name: t.scheduling.name,
      description: t.scheduling.description,
      image: "/screenshots/scheduling.webp",
      stats: t.scheduling.stats,
    },
    {
      name: t.interviews.name,
      description: t.interviews.description,
      image: "/screenshots/interview.webp",
      stats: t.interviews.stats,
    },
    {
      name: t.evaluation.name,
      description: t.evaluation.description,
      image: "/screenshots/evaluation.webp",
      stats: t.evaluation.stats,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br bg-gray-50">
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
              <TabList className="flex space-x-1 rounded-xl bg-primary-900/10 p-1 mb-8">
                {features.map((feature) => (
                  <Tab
                    key={feature.name}
                    className={({ selected }) =>
                      `w-full rounded-lg py-3 text-sm font-medium leading-5 transition-colors ${
                        selected
                          ? "bg-white shadow-lg text-primary-700"
                          : "text-gray-700 hover:bg-white/70"
                      }`
                    }
                  >
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
                      className="text-lg text-gray-700 mb-6 flex-grow"
                    >
                      {feature.description}
                    </motion.div>
                    <div className="space-y-6">
                      <div className="px-4 py-3 bg-primary-100 rounded-lg text-primary-800 font-medium">
                        {feature.stats}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-colors shadow-lg hover:shadow-xl">
                          {t.buttons.liveDemo}
                        </button>
                        <button className="px-8 py-3 border-2 border-primary-600 text-primary-700 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                          {t.buttons.documentation}
                        </button>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>

          {/* Right panel (image) */}
          <div className="lg:w-1/2 relative h-full min-h-[500px] lg:min-h-[600px] sticky top-6">
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 h-full"
            >
              <img
                src={features[selectedIndex].image}
                alt={features[selectedIndex].name}
                className="w-full h-full object-contain object-top bg-white p-4"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-medium text-lg">
                  {features[selectedIndex].name} • ProMeets
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
