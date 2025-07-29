import { Users } from "lucide-react";

interface MembersFormProps {
  readonly members: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly error?: string;
  readonly translations: {
    fields: {
      members: string;
    };
    optional: string;
    placeholders: {
      members: string;
    };
    errors: {
      members: {
        emails: string;
      };
    };
  };
}

export function MembersForm({
  members,
  onChange,
  error,
  translations,
}: MembersFormProps) {
  return (
    <div>
      <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
        <Users className="h-4 w-4 mr-2 text-gray-500" />
        {translations.fields.members}{" "}
        <span className="text-gray-500 ml-1">{translations.optional}</span>
      </label>
      <input
        type="text"
        name="members"
        value={members}
        onChange={onChange}
        placeholder={translations.placeholders.members}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
          error ? "border-red-300" : "border-gray-300"
        }`}
      />
      <p className="mt-1 text-xs text-gray-500">
        Separate multiple emails with commas
      </p>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}