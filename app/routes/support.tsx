// app/routes/support.tsx
import { MetaFunction, useLoaderData } from "react-router";
import { languageLoader } from "~/loaders/language";

const translations = {
  en: {
    title: "Support Center",
    subtitle: "We're here to help you with any questions or issues",
    contactTitle: "Contact Us",
    emailLabel: "Your Email",
    subjectLabel: "Subject",
    messageLabel: "Message",
    submitButton: "Send Message",
    faqTitle: "Frequently Asked Questions",
    faqItems: [
      {
        question: "How do I reset my password?",
        answer: "You can reset your password by clicking on 'Forgot Password' on the login page."
      },
      {
        question: "How can I verify my email?",
        answer: "Check your inbox for the verification email we sent. If you can't find it, try the resend option."
      },
      {
        question: "Is there a mobile app available?",
        answer: "Yes, ProMeets is available on both iOS and Android platforms."
      }
    ]
  },
  es: {
    title: "Centro de Soporte",
    subtitle: "Estamos aquí para ayudarte con cualquier pregunta o problema",
    contactTitle: "Contáctanos",
    emailLabel: "Tu Email",
    subjectLabel: "Asunto",
    messageLabel: "Mensaje",
    submitButton: "Enviar Mensaje",
    faqTitle: "Preguntas Frecuentes",
    faqItems: [
      {
        question: "¿Cómo restablezco mi contraseña?",
        answer: "Puedes restablecer tu contraseña haciendo clic en 'Olvidé mi contraseña' en la página de inicio de sesión."
      },
      {
        question: "¿Cómo puedo verificar mi email?",
        answer: "Revisa tu bandeja de entrada por el correo de verificación que enviamos. Si no lo encuentras, prueba la opción de reenvío."
      },
      {
        question: "¿Hay una aplicación móvil disponible?",
        answer: "Sí, ProMeets está disponible tanto para iOS como para Android."
      }
    ]
  },
  fr: {
    title: "Centre d'assistance",
    subtitle: "Nous sommes là pour vous aider avec toutes vos questions ou problèmes",
    contactTitle: "Contactez-nous",
    emailLabel: "Votre Email",
    subjectLabel: "Sujet",
    messageLabel: "Message",
    submitButton: "Envoyer le message",
    faqTitle: "Questions fréquemment posées",
    faqItems: [
      {
        question: "Comment réinitialiser mon mot de passe ?",
        answer: "Vous pouvez réinitialiser votre mot de passe en cliquant sur 'Mot de passe oublié' sur la page de connexion."
      },
      {
        question: "Comment puis-je vérifier mon email ?",
        answer: "Vérifiez votre boîte de réception pour l'email de vérification que nous avons envoyé. Si vous ne le trouvez pas, essayez l'option de renvoi."
      },
      {
        question: "Existe-t-il une application mobile disponible ?",
        answer: "Oui, ProMeets est disponible sur les plateformes iOS et Android."
      }
    ]
  },
  jp: {
    title: "サポートセンター",
    subtitle: "ご質問や問題があればお気軽にお問い合わせください",
    contactTitle: "お問い合わせ",
    emailLabel: "メールアドレス",
    subjectLabel: "件名",
    messageLabel: "メッセージ",
    submitButton: "送信",
    faqTitle: "よくある質問",
    faqItems: [
      {
        question: "パスワードをリセットするにはどうすればよいですか？",
        answer: "ログインページの「パスワードを忘れた場合」をクリックすると、パスワードをリセットできます。"
      },
      {
        question: "メールを確認するにはどうすればよいですか？",
        answer: "送信した確認メールを受信トレイで確認してください。見つからない場合は、再送オプションをお試しください。"
      },
      {
        question: "モバイルアプリはありますか？",
        answer: "はい、ProMeetsはiOSとAndroidの両方のプラットフォームで利用できます。"
      }
    ]
  },
  zh: {
    title: "支持中心",
    subtitle: "我们随时为您解答任何问题或疑问",
    contactTitle: "联系我们",
    emailLabel: "您的电子邮件",
    subjectLabel: "主题",
    messageLabel: "消息",
    submitButton: "发送消息",
    faqTitle: "常见问题",
    faqItems: [
      {
        question: "如何重置密码？",
        answer: "您可以在登录页面点击'忘记密码'来重置密码。"
      },
      {
        question: "如何验证我的电子邮件？",
        answer: "请检查您的收件箱查看我们发送的验证邮件。如果找不到，请尝试重新发送选项。"
      },
      {
        question: "是否有移动应用程序可用？",
        answer: "是的，ProMeets可在iOS和Android平台上使用。"
      }
    ]
  }
};

export { languageLoader as loader };

export const meta: MetaFunction<typeof languageLoader> = ({ data }) => {
  const language = data?.language || "en";
  const t = translations[language] || translations.en;

  return [
    { title: `${t.title} | ProMeets` },
    { name: "description", content: t.subtitle },
    // Open Graph / Facebook
    { property: "og:title", content: t.title },
    { property: "og:description", content: t.subtitle },
    // Twitter
    { property: "twitter:title", content: t.title },
    { property: "twitter:description", content: t.subtitle },
  ];
};

export default function SupportPage() {
  const { language } = useLoaderData<typeof languageLoader>();
  const t = translations[language] || translations.en;

  return (
    <section className="container mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">
          {t.title}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          {t.subtitle}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden p-8">
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            {t.contactTitle}
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                {t.subjectLabel}
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t.messageLabel}
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              {t.submitButton}
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-semibold text-primary-800 mb-6">
            {t.faqTitle}
          </h2>
          <div className="space-y-4">
            {t.faqItems.map((item) => (
              <div key={item.answer} className="bg-white rounded-xl shadow-md overflow-hidden">
                <details className="group">
                  <summary className="list-none p-4 cursor-pointer flex justify-between items-center">
                    <span className="font-medium text-gray-800 group-hover:text-primary-600">
                      {item.question}
                    </span>
                    <svg
                      className="w-5 h-5 text-gray-500 group-hover:text-primary-600 transform group-open:rotate-180"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </summary>
                  <div className="px-4 pb-4 text-gray-600">
                    {item.answer}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}