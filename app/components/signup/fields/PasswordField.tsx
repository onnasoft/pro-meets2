import { Eye, EyeOff, Lock } from "lucide-react";

const PasswordField = ({
  value,
  error,
  touched,
  onChange,
  onBlur,
  label,
  showPassword,
  setShowPassword,
  name = "password",
}: {
  value: string;
  error?: string;
  touched?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  label: string;
  showPassword: boolean;
  setShowPassword: (show: boolean) => void;
  name?: string;
}) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Lock className="h-5 w-5 text-gray-400" />
      </div>
      <input
        id={name}
        name={name}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required
        className={`pl-10 block w-full py-3 px-4 border ${
          error && touched ? "border-red-500" : "border-gray-300"
        } rounded-lg focus:ring-primary-500 focus:border-primary-500`}
        placeholder={label}
        minLength={8}
      />
      <button
        type="button"
        className="absolute inset-y-0 right-0 pr-3 flex items-center"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? (
          <EyeOff className="h-5 w-5 text-gray-400" />
        ) : (
          <Eye className="h-5 w-5 text-gray-400" />
        )}
      </button>
    </div>
    {error && touched && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

export default PasswordField;
