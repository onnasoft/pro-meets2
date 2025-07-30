import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  User,
  MessageSquare,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import useLanguageStore from "~/store/language";
import { Language } from "~/utils/language";

const translations = {
  en: {
    blog: "Blog",
    login: "Login",
    signup: "Sign Up",
    language: "Language",
  },
  es: {
    blog: "Blog",
    login: "Iniciar sesión",
    signup: "Registrarse",
    language: "Idioma",
  },
  fr: {
    blog: "Blog",
    login: "Connexion",
    signup: "S'inscrire",
    language: "Langue",
  },
  jp: {
    blog: "ブログ",
    login: "ログイン",
    signup: "サインアップ",
    language: "言語",
  },
  zh: {
    blog: "博客",
    login: "登录",
    signup: "注册",
    language: "语言",
  },
};

interface HeaderProps {
  readonly language: Language;
}

export default function Header({ language }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showMobileLanguageDropdown, setShowMobileLanguageDropdown] = useState(false); // Nuevo estado para móvil
  const { setLanguage } = useLanguageStore((state) => state);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "ja", name: "日本語", flag: "🇯🇵" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
  ];

  const t = translations[language] || translations.en;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: t.blog,
      href: "/blog",
      icon: <BookOpen className="w-5 h-5 mr-2" />,
    },
  ];

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setShowLanguageDropdown(false);
    setShowMobileLanguageDropdown(false);
  };

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo al lado izquierdo */}
          <Link
            to="/"
            className="flex items-center focus:outline-none focus:ring-primary-500 rounded-md"
          >
            <img src="/logo.png" alt="ProMeets" className="h-10" />
          </Link>

          {/* Navegación desktop - ahora a la derecha */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium text-sm uppercase tracking-wider px-3 py-2 rounded-md hover:bg-primary-50"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Botones de acción */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/login"
                className="flex items-center text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 px-3 py-2"
              >
                <User className="w-5 h-5 mr-2" />
                {t.login}
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-primary hover:shadow-primary-md flex items-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                {t.signup}
              </Link>

              {/* Selector de idioma - ahora después del botón de registro */}
              <div className="relative ml-2">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200 px-3 py-2 rounded-md"
                >
                  <span className="text-xl mr-1">{currentLanguage?.flag}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      showLanguageDropdown ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50 overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`flex items-center w-full text-left px-4 py-2 text-sm ${
                          language === lang.code
                            ? "bg-primary-50 text-primary-600"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <span className="text-xl mr-3">{lang.flag}</span>
                        <span>
                          {lang.name} ({lang.code.toUpperCase()})
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">
                {isOpen ? "Cerrar menú" : "Abrir menú"}
              </span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white border-t border-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="flex items-center px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}

          {/* Selector de idioma móvil - ahora como acordeón */}
          <div className="px-3 py-2">
            <button
              onClick={() => setShowMobileLanguageDropdown(!showMobileLanguageDropdown)}
              className="flex items-center justify-between w-full px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200"
            >
              <div className="flex items-center">
                <span className="text-xl mr-3">{currentLanguage?.flag}</span>
                <span>{t.language}</span>
              </div>
              {showMobileLanguageDropdown ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>

            <div
              className={`transition-all duration-200 overflow-hidden ${
                showMobileLanguageDropdown ? "max-h-96" : "max-h-0"
              }`}
            >
              <div className="space-y-2 pl-4 pt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLanguageChange(lang.code);
                      setIsOpen(false);
                    }}
                    className={`flex items-center w-full px-3 py-2 text-sm rounded-md text-left ${
                      language === lang.code
                        ? "bg-primary-50 text-primary-600"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="text-xl mr-3">{lang.flag}</span>
                    <span>
                      {lang.name} ({lang.code.toUpperCase()})
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 space-y-3">
            <Link
              to="/login"
              className="flex items-center justify-center w-full px-4 py-3 text-center rounded-md text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <User className="w-5 h-5 mr-2" />
              {t.login}
            </Link>
            <Link
              to="/signup"
              className="flex items-center justify-center w-full px-4 py-3 text-center rounded-md bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-primary"
              onClick={() => setIsOpen(false)}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              {t.signup}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}