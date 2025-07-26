import { Mail } from "lucide-react";

const EmailField = ({
  value,
  error,
  touched,
  onChange,
  onBlur,
  label,
}: {
  value: string;
  error?: string;
  touched?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  label: string;
}) => (
  <div>
    <label
      htmlFor="email"
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Mail className="h-5 w-5 text-gray-400" />
      </div>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required
        className={`pl-10 block w-full py-3 px-4 border ${
          error && touched ? "border-red-500" : "border-gray-300"
        } rounded-lg focus:ring-primary-500 focus:border-primary-500`}
        placeholder={label}
      />
    </div>
    {error && touched && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

export default EmailField;
