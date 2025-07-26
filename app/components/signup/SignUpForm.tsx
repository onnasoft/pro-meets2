import { Language } from "~/utils/language";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import translations from "./translations";
import { SignupFormData } from "./types";
import { registerAuthSchema } from "./schema";
import { register } from "~/services/auth";
import { Link } from "@remix-run/react";
import NameField from "./fields/NameField";
import EmailField from "./fields/EmailField";
import PasswordField from "./fields/PasswordField";
import CompanyField from "./fields/CompanyField";
import TermsField from "./fields/TermsField";

interface SignUpFormProps {
  language: Language;
}

const SignUpForm = ({ language }: SignUpFormProps) => {
  const t = translations[language] || translations.en;
  const schema = registerAuthSchema(t);

  const [formData, setFormData] = useState<SignupFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    terms: false,
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof SignupFormData | "global", string>>
  >({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof SignupFormData, boolean>>
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
    validateField(name as keyof SignupFormData);
  };

  const validateField = (fieldName: keyof SignupFormData) => {
    const result = schema.validate(formData, { abortEarly: false });
    const newErrors: Partial<Record<keyof SignupFormData, string>> = {};

    result.error?.details.forEach((detail) => {
      if (detail.path[0] === fieldName) {
        newErrors[detail.path[0]] = detail.message;
      }
    });

    if (fieldName === "confirmPassword" || fieldName === "password") {
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = t.passwordMismatch;
      }
    }

    setErrors((prev) => ({ ...prev, ...newErrors }));
  };

  const validateForm = () => {
    const result = schema.validate(formData, { abortEarly: false });
    const newErrors: Partial<Record<keyof SignupFormData, string>> = {};

    result.error?.details.forEach((detail) => {
      newErrors[detail.path[0] as keyof SignupFormData] = detail.message;
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
        <NameField
          value={formData.name}
          error={errors.name}
          touched={touched.name}
          onChange={handleChange}
          onBlur={handleBlur}
          label={t.nameLabel}
        />
        <EmailField
          value={formData.email}
          error={errors.email}
          touched={touched.email}
          onChange={handleChange}
          onBlur={handleBlur}
          label={t.emailLabel}
        />
        <PasswordField
          value={formData.password}
          error={errors.password}
          touched={touched.password}
          onChange={handleChange}
          onBlur={handleBlur}
          label={t.passwordLabel}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          name="password"
        />
        <PasswordField
          value={formData.confirmPassword}
          error={errors.confirmPassword}
          touched={touched.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          label={t.confirmPasswordLabel}
          showPassword={showConfirmPassword}
          setShowPassword={setShowConfirmPassword}
          name="confirmPassword"
        />
        <CompanyField
          value={formData.company}
          error={errors.company}
          touched={touched.company}
          onChange={handleChange}
          onBlur={handleBlur}
          label={t.companyLabel}
        />
        <TermsField
          checked={formData.terms}
          error={errors.terms}
          touched={touched.terms}
          onChange={handleChange}
          onBlur={handleBlur}
          t={t}
        />
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
