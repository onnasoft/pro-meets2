import { Lock, Mail, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import translations from "./translations";
import { loginAuthSchema } from "./schema";
import { LoginFormData } from "./types";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useGoogleLogin } from "@react-oauth/google";
import useAuthStore from "~/store/auth";
import { Language, login, OAuthGoogleLogin } from "pro-meets-core";

interface LoginFormProps {
  readonly language: Language;
  readonly redirectUrl?: string;
}

export default function LoginForm({ language, redirectUrl }: LoginFormProps) {
  const t = translations[language] || translations.en;
  const schema = loginAuthSchema(t);
  const navigate = useNavigate();
  const auth = useAuthStore();

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof LoginFormData | "global", string>>
  >({});

  const [touched, setTouched] = useState<
    Partial<Record<keyof LoginFormData, boolean>>
  >({});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const googleLogin = useGoogleLogin({
    onSuccess: ({ access_token }) => {
      OAuthGoogleLogin(access_token)
        .then((response) => {
          auth.setTokens(response.access_token, response.refresh_token);
          navigate(redirectUrl ?? "/dashboard");
        })
        .catch((error) => {
          setErrors((prev) => ({
            ...prev,
            global: error.message || t.errors.googleLoginError,
          }));
        });
    },
    onError: () => console.log("Login Failed"),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name as keyof LoginFormData);
  };

  const validateField = (fieldName: keyof LoginFormData) => {
    const result = schema.validate(formData, { abortEarly: false });
    const newErrors: Partial<Record<keyof LoginFormData, string>> = {};

    result.error?.details.forEach((detail) => {
      if (detail.path[0] === fieldName) {
        newErrors[detail.path[0]] = detail.message;
      }
    });

    setErrors((prev) => ({ ...prev, ...newErrors }));
  };

  const validateForm = () => {
    const result = schema.validate(formData, { abortEarly: false });
    const newErrors: Partial<Record<keyof LoginFormData, string>> = {};

    result.error?.details.forEach((detail) => {
      newErrors[detail.path[0] as keyof LoginFormData] = detail.message;
    });

    setErrors(newErrors);
    setTouched({
      email: true,
      password: true,
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setErrors((prev) => ({ ...prev, global: "" }));
    setIsSubmitting(true);
    try {
      const response = await login(
        formData.email,
        formData.password,
        formData.rememberMe
      );

      auth.setTokens(response.access_token, response.refresh_token);
      navigate(redirectUrl ?? "/dashboard");
    } catch (error: any) {
      setErrors((prev) => ({
        ...prev,
        global: error.message || t.loginError,
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = () => {
    googleLogin({
      enable_serial_consent: true,
      state: "login",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{t.title}</h1>
        <p className="text-gray-600">{t.subtitle}</p>
      </div>

      {errors.global && (
        <div className="mb-4 p-4 bg-red-50 rounded-lg flex items-start">
          <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
          <p className="text-sm text-red-700">{errors.global}</p>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t.emailLabel}
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
              required
              className={`pl-10 block w-full py-3 px-4 border ${
                errors.email ? "border-red-300" : "border-gray-300"
              } rounded-lg focus:ring-primary-500 focus:border-primary-500`}
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errors.email && touched.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t.passwordLabel}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              required
              className={`pl-10 block w-full py-3 px-4 border ${
                errors.password ? "border-red-300" : "border-gray-300"
              } rounded-lg focus:ring-primary-500 focus:border-primary-500`}
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              )}
            </button>
          </div>
          {errors.password && touched.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="rememberMe"
              name="rememberMe"
              type="checkbox"
              className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              checked={formData.rememberMe}
              onChange={handleChange}
            />
            <label
              htmlFor="rememberMe"
              className="ml-2 block text-sm text-gray-700"
            >
              {t.rememberMe}
            </label>
          </div>

          <div className="text-sm">
            <Link
              to="/forgot-password"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              {t.forgotPassword}
            </Link>
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t.loggingIn : t.loginButton}
          </button>
        </div>
      </form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">{t.or}</span>
          </div>
        </div>

        <div className="mt-6 gap-3">
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isSubmitting}
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.784-1.667-4.166-2.685-6.735-2.685-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.524 10-10 0-0.67-0.069-1.325-0.189-1.955h-9.811z" />
            </svg>
            <span className="ml-2">{t.googleLogin}</span>
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {t.noAccount}{" "}
            <Link
              to="/signup"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              {t.signupLink}
            </Link>
          </p>
        </div>
      </div>
    </motion.div>
  );
}
