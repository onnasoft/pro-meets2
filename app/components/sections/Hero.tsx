import React, { useEffect, useMemo, useState } from "react";
import {
  CalendarCheck,
  Video,
  Users,
  Lightbulb,
  TrendingUp,
  ChevronRight,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

const translations: Record<string, Record<string, string>> = {
  es: {
    titlePrefix: "Transforma tu ",
    titleSuffix: "proceso de reclutamiento",
    subtitle:
      "La plataforma todo-en-uno para agendar entrevistas, realizar videollamadas, gestionar candidatos y grabar sesiones.",
    typing1: "Automatizado",
    typing2: "Inteligente",
    typing3: "Eficiente",
    typing4: "Colaborativo",
    ctaDemo: "Solicitar Demo",
    ctaFeatures: "Ver Funcionalidades",
    poweredBy: "Potenciado con tecnología avanzada:",
  },
  en: {
    titlePrefix: "Transform your ",
    titleSuffix: "hiring process",
    subtitle:
      "The all-in-one platform to schedule interviews, conduct video calls, manage candidates and record sessions.",
    typing1: "Automated",
    typing2: "Smart",
    typing3: "Efficient",
    typing4: "Collaborative",
    ctaDemo: "Request Demo",
    ctaFeatures: "Explore Features",
    poweredBy: "Powered by advanced technology:",
  },
};

interface HeroProps {
  readonly language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language] || translations.es;

  const words = useMemo(
    () => [t.typing1, t.typing2, t.typing3, t.typing4],
    [t]
  );

  const [typingText, setTypingText] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeWriter = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setTypingText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setTypingText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }

      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const speed = isDeleting ? 100 : 150;
    const timer = setTimeout(typeWriter, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex, words]);

  // Floating animation for the mockup
  useEffect(() => {
    const elements = document.querySelectorAll(".floating");
    const handleAnimation = () => {
      elements.forEach((el) => {
        if (!(el instanceof HTMLElement)) return;
        if (!el.dataset.offset) return;

        const y =
          Math.sin(Date.now() / 1000 + Number(el.dataset.offset) * 1000) * 10;
        el.style.transform = `translateY(${y}px)`;
      });
      requestAnimationFrame(handleAnimation);
    };
    handleAnimation();
  }, []);

  const recruitmentPillars = [
    { icon: <CalendarCheck className="w-6 h-6" />, title: "Agendamiento" },
    { icon: <Video className="w-6 h-6" />, title: "Videollamadas" },
    { icon: <Users className="w-6 h-6" />, title: "Colaboración" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Inteligencia" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Analíticas" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-primary-50 min-h-[90vh] flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-200 blur-3xl"></div>
          <div className="absolute top-2/3 left-2/3 w-64 h-64 rounded-full bg-secondary-700 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary-300 blur-3xl"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-20 md:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-8">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary-100 text-primary-800 mb-4">
                ✨ La nueva forma de reclutar
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {t.titlePrefix}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">
                {t.titleSuffix}
              </span>
            </h1>

            <div className="h-12 mb-6">
              <span className="text-2xl md:text-3xl font-medium text-primary-600">
                {typingText}
                <span className="animate-pulse">|</span>
              </span>
            </div>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              {t.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/demo"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-lg shadow-primary hover:shadow-primary-md transition-all hover:scale-[1.02]"
              >
                <Rocket className="w-5 h-5" />
                {t.ctaDemo}
              </Link>
              <Link
                to="#features"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-800 font-medium rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:scale-[1.02]"
              >
                {t.ctaFeatures}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="mt-12">
              <p className="text-sm text-gray-500 mb-4">{t.poweredBy}</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {recruitmentPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-100 hover:border-primary-200 transition-colors"
                  >
                    <div className="text-primary-500">{pillar.icon}</div>
                    <span className="text-sm font-medium">{pillar.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mockup image */}
          <div className="lg:w-1/2 relative">
            <div className="relative floating" data-offset="0">
              <div className="absolute -top-10 -left-10 w-64 h-64 rounded-2xl bg-primary-100/50 border border-primary-200/50"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-2xl bg-primary-200/50 border border-primary-300/50"></div>
              <div className="relative z-10 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-3 gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <div className="p-4 bg-gradient-to-br from-primary-50 to-primary-100 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center text-white">
                      <Video className="w-8 h-8" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      Entrevista programada
                    </h3>
                    <p className="text-gray-600 text-sm max-w-xs mx-auto">
                      Reunión con Carlos M. para puesto de Desarrollador
                      Frontend
                    </p>
                    <button className="mt-6 px-6 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg text-sm font-medium hover:from-primary-600 hover:to-primary-700 transition-colors">
                      Unirse ahora
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
