import { translations } from "./translations";

const TermsField = ({
  checked,
  error,
  touched,
  onChange,
  onBlur,
  t,
}: {
  checked: boolean;
  error?: string;
  touched?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  t: (typeof translations)["en"];
}) => (
  <>
    <div className="flex items-center">
      <input
        id="terms"
        name="terms"
        type="checkbox"
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
        required
        className={`h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded ${
          error && touched ? "border-red-500" : ""
        }`}
      />
      <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
        {t.termsText}{" "}
        <a
          href="/terms"
          className="font-medium text-primary-600 hover:text-primary-500"
        >
          {t.termsLink}
        </a>{" "}
        {t.and}{" "}
        <a
          href="/privacy"
          className="font-medium text-primary-600 hover:text-primary-500"
        >
          {t.privacyLink}
        </a>
      </label>
    </div>
    {error && touched && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </>
);

export default TermsField;