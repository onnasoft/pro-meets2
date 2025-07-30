import { Award } from "lucide-react";
import translations from "./translations";

interface CertificationsProps {
  readonly translations: typeof translations.en;
  readonly profile: any;
}

export default function Certifications({
  profile,
  translations,
}: CertificationsProps) {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <Award className="h-5 w-5 mr-2 text-primary-600" />
          {translations.sections.certifications}
        </h2>
        <button
          className="text-primary-600 hover:text-primary-800 text-sm font-medium"
        >
          {translations.actions.add}
        </button>
      </div>

      <div className="space-y-4">
        {profile.certifications.map((cert: any) => (
          <div
            key={cert.id}
            className="border-l-2 border-primary-500 pl-4 py-2"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-800">
                  {cert.name}
                </h3>
                <p className="text-gray-600">{cert.issuer}</p>
                <p className="text-sm text-gray-500">{cert.date}</p>
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
