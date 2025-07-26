import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Language } from "~/utils/language";

const translations = {
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Answers to the most common questions about our platform",
    faqs: [
      {
        question: "How does ProMeets integrate with our current systems?",
        answer:
          "ProMeets offers native integrations with major ATS (Applicant Tracking Systems), calendar tools (Google Calendar, Outlook), and video conferencing platforms. Our implementation team works with you to ensure a smooth migration and provides developer-accessible APIs.",
        tip: "Pro tip: All our plans include a free Security Assessment to identify potential improvements in your current processes.",
      },
      {
        question:
          "What differentiates ProMeets from using Zoom + Calendly + ATS separately?",
        answer:
          "Unlike fragmented solutions, ProMeets offers a fully integrated flow specifically designed for technical recruitment: automatic recordings linked to each candidate, contextual collaborative evaluation, specialized templates for technical roles, and unified analytics that show the performance of the entire process, not just isolated parts.",
      },
      {
        question: "How do you ensure the security of candidate data?",
        answer:
          "We implement end-to-end encryption, storage in ISO 27001 certified data centers, granular access controls, and compliance with GDPR and local regulations. All recordings and personal data are managed with strict security protocols and you can configure automatic retention and deletion periods.",
      },
      {
        question: "Does it work for high-volume hiring?",
        answer:
          "Absolutely. Our clients manage processes with 500+ monthly candidates using features like: technical auto-scoring based on criteria, batch scheduling, asynchronous recorded interviews, and advanced dashboards for tracking massive pipelines. The platform scales automatically according to your volume.",
      },
      {
        question: "What support and training is included?",
        answer:
          "We offer personalized onboarding, live team training, an online academy with certification, and priority support through multiple channels (chat, email, video call). All plans include 24/7 technical support and access to our resource center with templates and best practices for technical recruitment.",
      },
      {
        question: "Can I try ProMeets before committing?",
        answer:
          "Yes, we offer a personalized demo with specific use cases for your industry, plus a 14-day free trial with access to all features. During the trial, we assign a Customer Success Manager to guide you through the initial setup.",
      },
    ],
    ctaTitle: "Didn't find your question?",
    ctaSubtitle: "Our team of specialists is ready to help you personally",
    ctaPrimary: "Contact sales",
    ctaSecondary: "View full documentation",
    proTip: "Pro tip:",
  },
  es: {
    title: "Preguntas frecuentes",
    subtitle: "Respuestas a las dudas más comunes sobre nuestra plataforma",
    faqs: [
      {
        question: "¿Cómo integra ProMeets con nuestros sistemas actuales?",
        answer:
          "ProMeets ofrece integraciones nativas con los principales ATS (Applicant Tracking Systems), herramientas de calendario (Google Calendar, Outlook), y plataformas de videoconferencia. Nuestro equipo de implementación trabaja contigo para garantizar una migración sin problemas y ofrece API accesibles para desarrolladores.",
        tip: "Tip profesional: Todos nuestros planes incluyen un Assessment de Seguridad gratuito para identificar posibles mejoras en tus procesos actuales.",
      },
      {
        question:
          "¿Qué diferencia a ProMeets de usar Zoom + Calendly + ATS por separado?",
        answer:
          "A diferencia de soluciones fragmentadas, ProMeets ofrece un flujo completamente integrado diseñado específicamente para reclutamiento técnico: grabaciones automáticas vinculadas a cada candidato, evaluación colaborativa en contexto, plantillas especializadas para roles técnicos, y analíticas unificadas que te muestran el rendimiento de todo el proceso, no solo partes aisladas.",
      },
      {
        question:
          "¿Cómo garantizan la seguridad de los datos de los candidatos?",
        answer:
          "Implementamos cifrado end-to-end, almacenamiento en centros de datos certificados ISO 27001, controles de acceso granulares, y cumplimiento con GDPR y regulaciones locales. Todas las grabaciones y datos personales se gestionan con estrictos protocolos de seguridad y puedes configurar períodos automáticos de retención y eliminación.",
      },
      {
        question: "¿Funciona para reclutamiento masivo (high-volume hiring)?",
        answer:
          "Absolutamente. Nuestros clientes gestionan procesos con 500+ candidatos mensuales usando funciones como: autocalificación técnica basada en criterios, programación por lotes, entrevistas grabadas asíncronas, y dashboards avanzados para seguimiento de pipelines masivos. La plataforma escala automáticamente según tu volumen.",
      },
      {
        question: "¿Qué soporte y capacitación incluye?",
        answer:
          "Ofrecemos onboarding personalizado, capacitación en vivo para equipos, academia en línea con certificación, y soporte prioritario por múltiples canales (chat, email, videollamada). Todos los planes incluyen soporte técnico 24/7 y acceso a nuestro centro de recursos con plantillas y mejores prácticas para reclutamiento técnico.",
      },
      {
        question: "¿Puedo probar ProMeets antes de comprometerme?",
        answer:
          "Sí, ofrecemos una demo personalizada con casos de uso específicos para tu industria, además de un periodo de prueba gratuito de 14 días con acceso a todas las funciones. Durante la prueba, asignamos un Customer Success Manager para guiarte en la configuración inicial.",
      },
    ],
    proTip: "Tip profesional:",
    ctaTitle: "¿No encontraste tu pregunta?",
    ctaSubtitle:
      "Nuestro equipo de especialistas está listo para ayudarte personalmente",
    ctaPrimary: "Contactar a ventas",
    ctaSecondary: "Ver documentación completa",
  },
  fr: {
    title: "Questions fréquemment posées",
    subtitle: "Réponses aux questions les plus courantes sur notre plateforme",
    faqs: [
      {
        question: "Comment ProMeets s'intègre-t-il à nos systèmes actuels ?",
        answer:
          "ProMeets propose des intégrations natives avec les principaux ATS (Applicant Tracking Systems), outils de calendrier (Google Calendar, Outlook) et plateformes de visioconférence. Notre équipe d'implémentation travaille avec vous pour garantir une migration fluide et fournit des API accessibles aux développeurs.",
        tip: "Conseil pro : Tous nos plans incluent une évaluation de sécurité gratuite pour identifier les améliorations potentielles dans vos processus actuels.",
      },
      {
        question:
          "Qu'est-ce qui différencie ProMeets de l'utilisation séparée de Zoom + Calendly + ATS ?",
        answer:
          "Contrairement aux solutions fragmentées, ProMeets offre un flux entièrement intégré conçu spécifiquement pour le recrutement technique : enregistrements automatiques liés à chaque candidat, évaluation collaborative contextuelle, modèles spécialisés pour les rôles techniques et analyses unifiées montrant la performance de l'ensemble du processus, pas seulement des parties isolées.",
      },
      {
        question:
          "Comment garantissez-vous la sécurité des données des candidats ?",
        answer:
          "Nous mettons en œuvre un chiffrement de bout en bout, un stockage dans des centres de données certifiés ISO 27001, des contrôles d'accès granulaires et une conformité au GDPR et aux réglementations locales. Tous les enregistrements et données personnelles sont gérés avec des protocoles de sécurité stricts et vous pouvez configurer des périodes de rétention et de suppression automatiques.",
      },
      {
        question: "Fonctionne-t-il pour le recrutement en volume élevé ?",
        answer:
          "Absolument. Nos clients gèrent des processus avec 500+ candidats mensuels en utilisant des fonctionnalités comme : l'auto-évaluation technique basée sur des critères, la planification par lots, les entretiens enregistrés asynchrones et des tableaux de bord avancés pour suivre des pipelines massifs. La plateforme s'adapte automatiquement à votre volume.",
      },
      {
        question: "Quel support et formation sont inclus ?",
        answer:
          "Nous proposons un onboarding personnalisé, des formations en direct pour les équipes, une académie en ligne avec certification et un support prioritaire via plusieurs canaux (chat, email, appel vidéo). Tous les plans incluent un support technique 24/7 et l'accès à notre centre de ressources avec des modèles et meilleures pratiques pour le recrutement technique.",
      },
      {
        question: "Puis-je essayer ProMeets avant de m'engager ?",
        answer:
          "Oui, nous proposons une démo personnalisée avec des cas d'usage spécifiques à votre secteur, ainsi qu'un essai gratuit de 14 jours avec accès à toutes les fonctionnalités. Pendant l'essai, nous assignons un Customer Success Manager pour vous guider dans la configuration initiale.",
      },
    ],
    proTip: "Conseil pro :",
    ctaTitle: "Vous n'avez pas trouvé votre question ?",
    ctaSubtitle:
      "Notre équipe de spécialistes est prête à vous aider personnellement",
    ctaPrimary: "Contacter les ventes",
    ctaSecondary: "Voir la documentation complète",
  },
  ja: {
    title: "よくある質問",
    subtitle: "当社プラットフォームに関するよくある質問への回答",
    faqs: [
      {
        question: "ProMeetsは現在のシステムとどのように統合されますか？",
        answer:
          "ProMeetsは主要なATS（応募者追跡システム）、カレンダーツール（Googleカレンダー、Outlook）、ビデオ会議プラットフォームとネイティブに統合されます。導入チームがスムーズな移行をサポートし、開発者がアクセス可能なAPIを提供します。",
        tip: "プロのヒント：すべてのプランに、現在のプロセスの改善点を特定する無料のセキュリティ評価が含まれています。",
      },
      {
        question:
          "Zoom + Calendly + ATSを別々に使うのとProMeetsの違いは何ですか？",
        answer:
          "断片化されたソリューションとは異なり、ProMeetsは技術採用向けに特別に設計された完全に統合されたフローを提供します：各候補者にリンクされた自動録画、文脈を考慮した共同評価、技術職向けの専門テンプレート、孤立した部分ではなくプロセス全体のパフォーマンスを示す統合分析。",
      },
      {
        question: "候補者データの安全性はどのように保証されていますか？",
        answer:
          "エンドツーエンド暗号化、ISO 27001認証データセンターでの保管、きめ細かいアクセス制御、GDPRおよび現地規制への準拠を実施しています。すべての録画と個人データは厳格なセキュリティプロトコルで管理され、自動保持・削除期間を設定できます。",
      },
      {
        question: "大量採用（high-volume hiring）に対応していますか？",
        answer:
          "もちろんです。当社のクライアントは、基準に基づく技術的自己採点、バッチスケジューリング、非同期録画面接、大規模パイプライン追跡のための高度なダッシュボードなどの機能を使用して、月500人以上の候補者を管理しています。プラットフォームはボリュームに応じて自動的に拡張します。",
      },
      {
        question: "どのようなサポートとトレーニングが含まれていますか？",
        answer:
          "パーソナライズされたオンボーディング、チーム向けライブトレーニング、認定付きオンラインアカデミー、複数チャネル（チャット、メール、ビデオ通話）での優先サポートを提供します。すべてのプランに24/7技術サポートと、技術採用向けのテンプレートとベストプラクティスが揃ったリソースセンターへのアクセスが含まれます。",
      },
      {
        question: "コミットする前にProMeetsを試すことはできますか？",
        answer:
          "はい、業界特有のユースケースを考慮したパーソナライズされたデモと、全機能にアクセスできる14日間の無料トライアルを提供しています。トライアル期間中は、初期設定をガイドするカスタマーサクセスマネージャーが割り当てられます。",
      },
    ],
    proTip: "プロのヒント：",
    ctaTitle: "質問が見つかりませんでしたか？",
    ctaSubtitle: "専門家チームが個別にお手伝いします",
    ctaPrimary: "営業に連絡",
    ctaSecondary: "完全なドキュメントを見る",
  },
  zh: {
    title: "常见问题",
    subtitle: "关于我们平台最常见问题的解答",
    faqs: [
      {
        question: "ProMeets如何与我们当前的系统集成？",
        answer:
          "ProMeets提供与主要ATS（申请人跟踪系统）、日历工具（Google日历、Outlook）和视频会议平台的原生集成。我们的实施团队与您合作确保顺利迁移，并提供开发人员可访问的API。",
        tip: "专业提示：所有计划都包括免费的安全评估，以识别当前流程中的潜在改进点。",
      },
      {
        question: "ProMeets与单独使用Zoom + Calendly + ATS有什么区别？",
        answer:
          "与碎片化解决方案不同，ProMeets提供专为技术招聘设计的完全集成流程：自动录制链接到每位候选人、上下文协作评估、技术角色专用模板，以及显示整个流程绩效而非孤立部分的统一分析。",
      },
      {
        question: "如何确保候选人数据的安全？",
        answer:
          "我们实施端到端加密、存储在ISO 27001认证的数据中心、细粒度访问控制，并遵守GDPR和当地法规。所有录音和个人数据都通过严格的安全协议管理，您可以配置自动保留和删除周期。",
      },
      {
        question: "适用于大规模招聘吗？",
        answer:
          "完全可以。我们的客户使用以下功能管理每月500多名候选人的流程：基于标准的技术自动评分、批量安排、异步录制面试，以及用于跟踪大规模管道的先进仪表板。平台会根据您的规模自动扩展。",
      },
      {
        question: "包含哪些支持和培训？",
        answer:
          "我们提供个性化入职培训、团队现场培训、带认证的在线学院，以及通过多种渠道（聊天、电子邮件、视频通话）的优先支持。所有计划都包括24/7技术支持和访问我们的资源中心，其中包含技术招聘的模板和最佳实践。",
      },
      {
        question: "可以在承诺前试用ProMeets吗？",
        answer:
          "是的，我们提供针对您行业特定用例的个性化演示，以及14天免费试用，可访问所有功能。试用期间，我们会指派一位客户成功经理指导您完成初始设置。",
      },
    ],
    proTip: "专业提示：",
    ctaTitle: "没有找到您的问题？",
    ctaSubtitle: "我们的专家团队随时准备为您提供帮助",
    ctaPrimary: "联系销售",
    ctaSecondary: "查看完整文档",
  },
};

interface FrequentAskedQuestionsProps {
  readonly language: Language;
}

export function FrequentAskedQuestions({
  language,
}: FrequentAskedQuestionsProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const t = translations[language] || translations.en;

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Animations
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
    <section id="frequent-asked-questions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="text-center mb-16"
        >
          <motion.h2
            variants={item}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            {t.title}
          </motion.h2>
          <motion.p
            variants={item}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="mx-auto"
        >
          {t.faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={item}
              whileHover={{ scale: 1.01 }}
              className="mb-4 border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <motion.h3
                  layout
                  className="text-lg font-semibold text-gray-900 text-left"
                >
                  {faq.question}
                </motion.h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="px-6 overflow-hidden"
                  >
                    <div className="pb-6 text-gray-600">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        {faq.answer}
                      </motion.p>
                      {faq.tip && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100"
                        >
                          <p className="text-sm text-blue-700">
                            <strong>{t.proTip}</strong> {faq.tip}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-xl p-8 inline-block max-w-2xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {t.ctaTitle}
            </h3>
            <p className="text-gray-600 mb-6">{t.ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
              >
                {t.ctaPrimary}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                {t.ctaSecondary}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
