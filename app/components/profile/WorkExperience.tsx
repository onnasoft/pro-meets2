import { Briefcase } from "lucide-react";
import translations from "./translations";

interface WorkExperienceProps {
  readonly translations: typeof translations.en;
  readonly profile: any;
  readonly editing?: string;
}

export default function WorkExperience({
  translations,
  profile,
  editing,
}: WorkExperienceProps) {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <Briefcase className="h-5 w-5 mr-2 text-primary-600" />
          {translations.sections.experience}
        </h2>
        <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
          {translations.actions.add}
        </button>
      </div>

      <div className="space-y-6">
        {profile.experience.map((exp: any) => (
          <div key={exp.id} className="border-l-2 border-primary-500 pl-4 py-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  {exp.position}
                </h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-sm text-gray-500">
                  {exp.startDate} - {exp.endDate}
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
            {editing === `experience-${exp.id}` ? (
              <div className="mt-3 space-y-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {translations.labels.position}
                    </label>
                    <input
                      type="text"
                      name="position"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {translations.labels.company}
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {translations.labels.period} (Start)
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {translations.labels.period} (End)
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {translations.labels.description}
                  </label>
                  <textarea
                    name="description"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-primary-500 focus:border-primary-500"
                    rows={3}
                    placeholder={translations.placeholders.description}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    {translations.actions.cancel}
                  </button>
                  <button className="px-3 py-1 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700">
                    {translations.actions.save}
                  </button>
                </div>
              </div>
            ) : (
              <p className="mt-2 text-gray-700 whitespace-pre-line">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
