import { Languages as LanguagesLR } from "lucide-react";
import translations from "./translations";

interface LanguagesProps {
  readonly translations: typeof translations.en;
  readonly profile: any;
}

export default function Languages({ translations, profile }: LanguagesProps) {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <LanguagesLR className="h-5 w-5 mr-2 text-primary-600" />
          {translations.sections.languages}
        </h2>
        <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
          {translations.actions.add}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profile.languages.map((lang: any) => (
          <div
            key={lang.id}
            className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
          >
            <div>
              <p className="font-medium">{lang.name}</p>
              <p className="text-sm text-gray-500">
                {
                  translations.levels[
                    lang.proficiency as keyof typeof translations.levels
                  ]
                }
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="text-primary-600 hover:text-primary-800">
                {translations.actions.edit}
              </button>
              <button className="text-red-600 hover:text-red-800">
                {translations.actions.remove}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
