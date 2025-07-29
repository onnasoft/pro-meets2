interface BasicInfoFormProps {
  readonly name: string;
  readonly description: string;
  readonly onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  readonly errors: Record<string, string>;
  readonly translations: {
    fields: {
      name: string;
      description: string;
    };
    optional: string;
    errors: {
      name: {
        min: string;
        empty: string;
        required: string;
      };
    };
  };
}

export function BasicInfoForm({
  name,
  description,
  onChange,
  errors,
  translations,
}: BasicInfoFormProps) {
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {translations.fields.name}
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
            errors.name ? "border-red-300" : "border-gray-300"
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {translations.fields.description}{" "}
          <span className="text-gray-500">{translations.optional}</span>
        </label>
        <textarea
          name="description"
          rows={3}
          value={description}
          onChange={onChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
        />
      </div>
    </>
  );
}
