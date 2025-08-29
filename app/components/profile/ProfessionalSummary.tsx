import translations from "./translations";

interface ProfessionalSummaryProps {
  readonly translations: typeof translations.en;
  readonly profile: any;
  readonly editing?: string;
}

export default function ProfessionalSummary({
  translations,
  profile,
  editing,
}: ProfessionalSummaryProps) {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {translations.sections.summary}
        </h2>
        <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
          {translations.actions.edit}
        </button>
      </div>

      {editing === "summary" ? (
        <div className="space-y-3">
          <textarea
            name="summary"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-xs focus:outline-hidden focus:ring-primary-500 focus:border-primary-500"
            rows={4}
            placeholder={translations.placeholders.summary}
          />
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
        <p className="text-gray-700 whitespace-pre-line">{profile.summary}</p>
      )}
    </section>
  );
}
