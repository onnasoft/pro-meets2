import { Globe, MapPin, Phone, Building2 } from "lucide-react";

interface ContactInfoFormProps {
  readonly website: string;
  readonly location: string;
  readonly phone: string;
  readonly logo: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly errors: Record<string, string>;
  readonly translations: {
    fields: {
      website: string;
      location: string;
      phone: string;
      logo: string;
    };
    optional: string;
    placeholders: {
      website: string;
    };
    errors: {
      website: {
        uri: string;
      };
      phone: {
        pattern: string;
      };
    };
  };
}

export function ContactInfoForm({
  website,
  location,
  phone,
  logo,
  onChange,
  errors,
  translations,
}: ContactInfoFormProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Website */}
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <Globe className="h-4 w-4 mr-2 text-gray-500" />
          {translations.fields.website}{" "}
          <span className="text-gray-500 ml-1">{translations.optional}</span>
        </label>
        <input
          type="url"
          name="website"
          value={website}
          onChange={onChange}
          placeholder={translations.placeholders.website}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
            errors.website ? "border-red-300" : "border-gray-300"
          }`}
        />
        {errors.website && (
          <p className="mt-1 text-sm text-red-600">{errors.website}</p>
        )}
      </div>

      {/* Location */}
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <MapPin className="h-4 w-4 mr-2 text-gray-500" />
          {translations.fields.location}{" "}
          <span className="text-gray-500 ml-1">{translations.optional}</span>
        </label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <Phone className="h-4 w-4 mr-2 text-gray-500" />
          {translations.fields.phone}{" "}
          <span className="text-gray-500 ml-1">{translations.optional}</span>
        </label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={onChange}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
            errors.phone ? "border-red-300" : "border-gray-300"
          }`}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      {/* Logo URL */}
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <Building2 className="h-4 w-4 mr-2 text-gray-500" />
          Logo URL{" "}
          <span className="text-gray-500 ml-1">{translations.optional}</span>
        </label>
        <input
          type="url"
          name="logo"
          value={logo}
          onChange={onChange}
          placeholder="https://example.com/logo.png"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
    </div>
  );
}