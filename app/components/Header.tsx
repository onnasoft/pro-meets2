import { useState } from "react";
import { Link } from "react-router";
import {
  Menu,
  X,
  User,
  MessageSquare,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Search,
  Users,
  Star
} from "lucide-react";
import useLanguageStore from "~/store/language";
import { Language } from "pro-meets-core";

const translations = {
  en: {
    jobs: "Jobs",
    blog: "Blog",
    login: "Login",
    signup: "Sign Up",
    language: "Language",
    about: "About Us",
    why: "Why Us"
  },
  es: {
    jobs: "Empleos",
    blog: "Blog",
    login: "Iniciar sesión",
    signup: "Registrarse",
    language: "Idioma",
    about: "Nosotros",
    why: "Por qué nosotros"
  },
  fr: {
    jobs: "Emplois",
    blog: "Blog",
    login: "Connexion",
    signup: "S'inscrire",
    language: "Langue",
    about: "À propos",
    why: "Pourquoi nous"
  },
  jp: {
    jobs: "求人",
    blog: "ブログ",
    login: "ログイン",
    signup: "サインアップ",
    language: "言語",
    about: "私たちについて",
    why: "選ばれる理由"
  },
  zh: {
    jobs: "招聘",
    blog: "博客",
    login: "登录",
    signup: "注册",
    language: "语言",
    about: "关于我们",
    why: "为什么选择我们"
  },
};

interface HeaderProps {
  readonly language: Language;
}

export default function Header({ language }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showMobileLanguageDropdown, setShowMobileLanguageDropdown] =
    useState(false);
  const { setLanguage } = useLanguageStore((state) => state);

  const languages: { code: Language; name: string; flag: string }[] = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
    { code: "jp", name: "日本語", flag: "🇯🇵" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
  ];

  const t = translations[language] || translations.en;

  const navLinks = [
    {
      name: t.why,
      href: "/why-us",
      icon: <Star className="w-5 h-5 mr-2" />,
    },
    {
      name: t.about,
      href: "/about-us",
      icon: <Users className="w-5 h-5 mr-2" />,
    },
    {
      name: t.jobs,
      href: "/jobs",
      icon: <Search className="w-5 h-5 mr-2" />,
    },
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
      className={`fixed w-full z-50 transition-all duration-300 py-2 bg-primary-50/70`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo al lado izquierdo */}
          <Link
            to="/"
            className="flex items-center focus:outline-hidden focus:ring-primary-500 rounded-md"
          >
            <img src="/logo.png" alt="ProMeets" className="h-10" />
          </Link>

          {/* Navegación desktop - ahora a la derecha */}
          <div className="flex items-center space-x-6">
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  prefetch="intent"
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium text-sm uppercase tracking-wider px-3 py-2 rounded-md"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Botones de acción */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/login"
                prefetch="intent"
                className="flex items-center text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 px-3 py-2"
              >
                <User className="w-5 h-5 mr-2" />
                {t.login}
              </Link>
              <Link
                to="/signup"
                prefetch="intent"
                className="px-4 py-2 bg-linear-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-primary hover:shadow-primary-md flex items-center"
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
                    className={`w-4 h-4 transition-transform ${showLanguageDropdown ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50 overflow-hidden">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`flex items-center w-full text-left px-4 py-2 text-sm ${language === lang.code
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
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-hidden focus:ring-2 focus:ring-primary-500"
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
        className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
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
              onClick={() =>
                setShowMobileLanguageDropdown(!showMobileLanguageDropdown)
              }
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
              className={`transition-all duration-200 overflow-hidden ${showMobileLanguageDropdown ? "max-h-96" : "max-h-0"
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
                    className={`flex items-center w-full px-3 py-2 text-sm rounded-md text-left ${language === lang.code
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
              className="flex items-center justify-center w-full px-4 py-3 text-center rounded-md text-base font-medium text-gray-700 bg-primary-100 hover:text-primary-600 hover:bg-primary-200 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <User className="w-5 h-5 mr-2" />
              {t.login}
            </Link>
            <Link
              to="/signup"
              className="flex items-center justify-center w-full px-4 py-3 text-center rounded-md bg-linear-to-r from-primary-500 to-primary-600 text-white font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-200 shadow-primary"
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