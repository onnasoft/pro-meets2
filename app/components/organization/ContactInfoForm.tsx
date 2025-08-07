import { Globe, MapPin, Phone, Building2, Upload } from "lucide-react";
import translations from "./translations";
import { useState, useRef } from "react";
import config from "~/config";

interface ContactInfoFormProps {
  readonly website: string;
  readonly location: string;
  readonly phone: string;
  readonly logoUrl: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly onLogoUpload: (file: File) => Promise<void>;
  readonly errors: Record<string, string>;
  readonly canUpdate?: boolean;
  readonly translations: typeof translations.en;
}

export function ContactInfoForm({
  website,
  location,
  phone,
  logoUrl,
  onChange,
  onLogoUpload,
  errors,
  canUpdate = true,
  translations,
}: ContactInfoFormProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleLogoClick = () => {
    if (canUpdate && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setIsUploading(true);
      try {
        await onLogoUpload(files[0]);
      } catch (error) {
        console.error("Error uploading logo:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

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
          readOnly={!canUpdate}
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
          readOnly={!canUpdate}
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
          readOnly={!canUpdate}
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

      {/* Logo Upload */}
      <div>
        <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
          <Building2 className="h-4 w-4 mr-2 text-gray-500" />
          {translations.fields.logo}{" "}
          <span className="text-gray-500 ml-1">{translations.optional}</span>
        </label>

        <div className="flex items-center space-x-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
            disabled={!canUpdate || isUploading}
          />

          <button
            type="button"
            onClick={handleLogoClick}
            disabled={!canUpdate || isUploading}
            className={`flex items-center px-3 py-2 border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              canUpdate
                ? "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                : "bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed"
            } ${isUploading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <Upload className="h-4 w-4 mr-2" />
            {isUploading ? translations.uploading : translations.upload}
          </button>

          {logoUrl && (
            <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden border border-gray-200">
              <img
                src={`${config.apiUrl}${logoUrl}`}
                alt="Organization Logo"
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
