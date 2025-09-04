import { Globe, Check } from "lucide-react";
import translations from "./translations";

interface LanguageSectionProps {
  readonly translations: typeof translations.en.language;
  readonly currentLanguage: string;
  readonly onLanguageChange: (languageCode: string) => void;
}

export function LanguageSection({
  translations,
  currentLanguage,
  onLanguageChange,
}: LanguageSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-xs border border-gray-200 p-6">
      <div className="flex items-center mb-4">
        <Globe className="h-5 w-5 text-primary-600 mr-2" />
        <h2 className="text-xl font-semibold">{translations.title}</h2>
      </div>

      <p className="text-gray-600 mb-6">{translations.description}</p>

      <div className="space-y-3">
        {Object.entries(translations.languages).map(([code, language]) => (
          <button
            key={code}
            onClick={() => onLanguageChange(code)}
            className={`w-full flex items-center justify-between p-4 rounded-lg border transition-colors ${
              currentLanguage === code
                ? "border-primary-500 bg-primary-50"
                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-700 mr-3">
                {code.toUpperCase()}
              </div>
              <div className="text-left">
                <div className="font-medium text-gray-900">{language.name}</div>
                <div className="text-sm text-gray-500">{language.nativeName}</div>
              </div>
            </div>
            
            {currentLanguage === code && (
              <Check className="h-5 w-5 text-primary-600" />
            )}
          </button>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-4">{translations.changeNote}</p>
    </div>
  );
}