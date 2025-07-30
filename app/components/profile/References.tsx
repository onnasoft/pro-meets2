import translations from "./translations";

interface ReferencesProps {
  readonly translations: typeof translations.en;
  readonly profile: any;
}

export default function References({ profile, translations }: ReferencesProps) {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          {translations.sections.references}
        </h2>
        <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
          {translations.actions.add}
        </button>
      </div>

      <div className="space-y-4">
        {profile.references.map((ref: any) => (
          <div key={ref.id} className="border-l-2 border-primary-500 pl-4 py-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  {ref.name}
                </h3>
                <p className="text-gray-600">{ref.position}</p>
                <p className="text-sm text-gray-500">{ref.contact}</p>
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
          </div>
        ))}
      </div>
    </section>
  );
}
