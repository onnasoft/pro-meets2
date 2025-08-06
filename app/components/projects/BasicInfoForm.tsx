import HTMLEditor from "../HTMLEditor";
import translations from "./translations";

interface BasicInfoFormProps {
  readonly name: string;
  readonly description: string;
  readonly onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  readonly errors: Record<string, string>;
  readonly translations: typeof translations.en;
  readonly canUpdate?: boolean;
}

export function BasicInfoForm({
  name,
  description,
  onChange,
  errors,
  translations,
  canUpdate = true,
}: BasicInfoFormProps) {
  return (
    <>
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {translations.fields.name}
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          readOnly={!canUpdate}
          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${
            errors.name ? "border-red-300" : "border-gray-300"
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {translations.fields.description}{" "}
          <span className="text-gray-500">{translations.optional}</span>
        </label>
        <HTMLEditor
          value={description}
          onChange={(content) => {
            onChange({
              target: { name: "description", value: content },
            } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
          }}
        />
      </div>
    </>
  );
}
