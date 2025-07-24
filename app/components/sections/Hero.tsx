"use client";

import React, { useEffect, useMemo, useState } from "react";
// Asegúrate de tener 'lucide-react' instalado para los iconos
import { CalendarCheck, Video, Users, Lightbulb, TrendingUp } from 'lucide-react'; 
import { Link } from "react-router-dom";

const translations: Record<string, Record<string, string>> = {
  es: {
    titlePrefix: "Tu Reclutamiento, ",
    titleSuffix: "Simplificado.",
    subtitle:
      "ProMeets centraliza el agendamiento, videollamadas, ATS y grabación de entrevistas. Contrata más rápido, mejor y con toda la información.",
    typing1: "Más Eficiente",
    typing2: "Más Inteligente",
    typing3: "Más Colaborativo",
    typing4: "Más Rápido",
    ctaDemo: "Solicitar Demo Gratuita",
    ctaFeatures: "Explorar Características",
    poweredBy: "Impulsando el éxito en reclutamiento con:",
  },
  en: {
    titlePrefix: "Your Recruitment, ",
    titleSuffix: "Simplified.",
    subtitle:
      "ProMeets centralizes scheduling, video calls, ATS, and interview recording. Hire faster, smarter, and with complete insights.",
    typing1: "More Efficient",
    typing2: "More Intelligent",
    typing3: "More Collaborative",
    typing4: "Faster Hiring",
    ctaDemo: "Request Free Demo",
    ctaFeatures: "Explore Features",
    poweredBy: "Driving recruitment success with:",
  },
  // Puedes añadir más idiomas aquí
};

interface HeroProps {
  readonly language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language] || translations.es; // Default to Spanish

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

  // Particle effect (manteniendo la misma lógica visual de fondo)
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle"; // Asegúrate de tener estilos CSS para '.particle'
      particle.style.left = Math.random() * 100 + "%";
      particle.style.width = Math.random() * 4 + 2 + "px";
      particle.style.height = particle.style.width;
      particle.style.animationDuration = Math.random() * 3 + 5 + "s";
      particle.style.opacity = (Math.random() * 0.5 + 0.2).toString();

      const container = document.getElementById("particles-container");
      if (container) {
        container.appendChild(particle);
        setTimeout(() => particle.remove(), 8000);
      }
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  // Iconos o "conceptos clave" que impulsan el reclutamiento
  const recruitmentPillars = [
    { icon: <CalendarCheck className="w-8 h-8 md:w-10 md:h-10 text-purple-600" />, title: "Eficiencia" },
    { icon: <Video className="w-8 h-8 md:w-10 md:h-10 text-purple-600" />, title: "Conexión" },
    { icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-purple-600" />, title: "Colaboración" },
    { icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-purple-600" />, title: "Inteligencia" },
    { icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-purple-600" />, title: "Crecimiento" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-pattern overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-100" // Fondo más suave para ProMeets
    >
      {/* Fondo con formas flotantes y partículas - Puedes mantener la misma lógica o ajustarla */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div id="particles-container" className="absolute inset-0"></div> {/* Necesitará estilos CSS para '.particle' */}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 break-words leading-tight text-gray-900">
            {t.titlePrefix}
            <span className="gradient-text bg-gradient-to-r from-purple-700 to-indigo-700 text-transparent bg-clip-text">
              {t.titleSuffix}
            </span>
            <br />
            <span className="typing-animation text-purple-700">{typingText}</span>
          </h1>
          <p className="text-gray-700 mb-8 max-w-md sm:max-w-xl md:max-w-3xl mx-auto animate-fade-in-down break-words text-lg">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Link
              to="/demo" // Ajusta el enlace según tu ruta de demo
              className="px-8 py-4 bg-purple-700 text-white font-bold rounded-full text-lg shadow-lg hover:bg-purple-800 transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-rocket mr-2"></i> {t.ctaDemo}
            </Link>
            <Link
              to="#caracteristicas" // Enlaza a la sección de características de tu página
              className="px-8 py-4 border-2 border-purple-700 text-purple-700 font-bold rounded-full text-lg shadow-lg hover:bg-purple-700 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              {t.ctaFeatures}
            </Link>
          </div>
        </div>

        <div className="mt-16 animate-slide-up">
          <p className="text-gray-600 mb-6 text-sm uppercase tracking-wider">
            {t.poweredBy}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {recruitmentPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col items-center p-3 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                title={pillar.title}
              >
                {pillar.icon}
                <span className="text-sm font-semibold text-gray-700 mt-2">{pillar.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;