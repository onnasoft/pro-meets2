import { Calendar, Mail, MapPin, Phone, User } from "lucide-react";
import translations from "./translations";

interface PersonalInformationProps {
  readonly translations: typeof translations.en;
  readonly profile: any;
}

export default function PersonalInformation({
  translations,
  profile,
}: PersonalInformationProps) {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 flex items-center">
          <User className="h-5 w-5 mr-2 text-primary-600" />
          {translations.sections.personal}
        </h2>
        <button
          className="text-primary-600 hover:text-primary-800 text-sm font-medium"
        >
          {translations.actions.edit}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-start">
          <Mail className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
          <div>
            <p className="text-sm text-gray-500">{translations.labels.email}</p>
            <p className="text-gray-800">{profile.personal.email}</p>
          </div>
        </div>
        <div className="flex items-start">
          <Phone className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
          <div>
            <p className="text-sm text-gray-500">{translations.labels.phone}</p>
            <p className="text-gray-800">{profile.personal.phone}</p>
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
          <div>
            <p className="text-sm text-gray-500">
              {translations.labels.address}
            </p>
            <p className="text-gray-800">{profile.personal.address}</p>
          </div>
        </div>
        <div className="flex items-start">
          <Calendar className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
          <div>
            <p className="text-sm text-gray-500">
              {translations.labels.birthdate}
            </p>
            <p className="text-gray-800">{profile.personal.birthdate}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
