import { X } from "lucide-react";
import translations from "./translations";

interface SkillsProps {
  readonly translations: typeof translations.en;
  readonly profile: any;
}

export default function Skills({ translations, profile }: SkillsProps) {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {translations.sections.skills}
        </h2>
        <button
          className="text-primary-600 hover:text-primary-800 text-sm font-medium"
        >
          {translations.actions.add}
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {profile.skills.map((skill: any) => (
          <div
            key={skill.id}
            className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full flex items-center"
          >
            <span>{skill.name}</span>
            <span className="ml-1 text-xs opacity-75">
              ({translations.levels[skill.level as keyof typeof translations.levels]})
            </span>
            <button className="ml-1 text-primary-600 hover:text-primary-800">
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
