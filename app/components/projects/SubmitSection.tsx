import translations from "./translations";

interface SubmitSectionProps {
  readonly isSubmitting: boolean;
  readonly onCancel: () => void;
  readonly submitError?: string;
  readonly translations: typeof translations.en;
}

export function SubmitSection({
  isSubmitting,
  onCancel,
  submitError,
  translations,
}: SubmitSectionProps) {
  return (
    <>
      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          {translations.cancel}
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
            isSubmitting ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          {isSubmitting ? translations.submitting : translations.submit}
        </button>
      </div>

      {submitError && (
        <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">
          {submitError}
        </div>
      )}
    </>
  );
}
