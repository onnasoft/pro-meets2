import { Language } from "~/utils/language";
import { motion } from "framer-motion";
import {
  Mail,
  User,
  Lock,
  Briefcase,
  Eye,
  EyeOff,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { translations } from "./translations";
import { FormData } from "./types";
import { registerAuthSchema } from "./schema";
import { register } from "~/services/auth";
import { Link } from "@remix-run/react";

interface SignUpFormProps {
  language: Language;
}

const SignUpForm = ({ language }: SignUpFormProps) => {
  const t = translations[language] || translations.en;
  const schema = registerAuthSchema(t);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    terms: false,
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormData | "global", string>>
  >({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

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
    validateField(name as keyof FormData);
  };

  const validateField = (fieldName: keyof FormData) => {
    const result = schema.validate(formData, { abortEarly: false });
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    result.error?.details.forEach((detail) => {
      if (detail.path[0] === fieldName) {
        newErrors[detail.path[0]] = detail.message;
      }
    });

    // Validación adicional para confirmar contraseña
    if (fieldName === "confirmPassword" || fieldName === "password") {
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = t.passwordMismatch;
      }
    }

    setErrors((prev) => ({ ...prev, ...newErrors }));
  };

  const validateForm = () => {
    const result = schema.validate(formData, { abortEarly: false });
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    result.error?.details.forEach((detail) => {
      newErrors[detail.path[0] as keyof FormData] = detail.message;
    });

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t.passwordMismatch;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setRegistrationStatus("idle");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        company: formData.company,
        terms: formData.terms,
      });

      setRegistrationStatus("success");
    } catch (error: any) {
      setRegistrationStatus("error");
      setErrors((prev) => ({
        ...prev,
        global: error.message || t.registrationError,
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (registrationStatus === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center p-6 max-w-md mx-auto"
      >
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {t.registrationSuccessTitle}
        </h2>
        <p className="text-gray-600 mb-6">{t.registrationSuccessMessage}</p>
        <div className="mt-6 text-sm text-gray-500">
          <p>
            {t.didNotReceiveEmail}{" "}
            <Link
              to={`/resend-verification/${formData.email}`}
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              {t.resendEmail}
            </Link>
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto"
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

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t.nameLabel}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`pl-10 block w-full py-3 px-4 border ${
                errors.name && touched.name
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg focus:ring-primary-500 focus:border-primary-500`}
              placeholder={t.nameLabel}
            />
          </div>
          {errors.name && touched.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

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
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`pl-10 block w-full py-3 px-4 border ${
                errors.email && touched.email
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg focus:ring-primary-500 focus:border-primary-500`}
              placeholder={t.emailLabel}
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
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`pl-10 block w-full py-3 px-4 border ${
                errors.password && touched.password
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg focus:ring-primary-500 focus:border-primary-500`}
              placeholder={t.passwordLabel}
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
          {errors.password && touched.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t.confirmPasswordLabel}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              required
              className={`pl-10 block w-full py-3 px-4 border ${
                errors.confirmPassword && touched.confirmPassword
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg focus:ring-primary-500 focus:border-primary-500`}
              placeholder={t.confirmPasswordLabel}
              minLength={8}
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t.companyLabel}
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Briefcase className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              value={formData.company}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`pl-10 block w-full py-3 px-4 border ${
                errors.company && touched.company
                  ? "border-red-500"
                  : "border-gray-300"
              } rounded-lg focus:ring-primary-500 focus:border-primary-500`}
              placeholder={t.companyLabel}
            />
          </div>
          {errors.company && touched.company && (
            <p className="mt-1 text-sm text-red-600">{errors.company}</p>
          )}
        </div>

        <div className="flex items-center">
          <input
            id="terms"
            name="terms"
            type="checkbox"
            checked={formData.terms}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            className={`h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded ${
              errors.terms && touched.terms ? "border-red-500" : ""
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
        {errors.terms && touched.terms && (
          <p className="mt-1 text-sm text-red-600">{errors.terms}</p>
        )}

        <div className="pt-2">
          <button
            disabled={!formData.terms || isSubmitting}
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t.registering : t.signupButton}
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
            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.784-1.667-4.166-2.685-6.735-2.685-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.524 10-10 0-0.67-0.069-1.325-0.189-1.955h-9.811z" />
            </svg>
            <span className="ml-2">{t.googleSignup}</span>
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {t.alreadyHaveAccount}{" "}
            <a
              href="/login"
              className="font-medium text-primary-600 hover:text-primary-500"
            >
              {t.loginLink}
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SignUpForm;
