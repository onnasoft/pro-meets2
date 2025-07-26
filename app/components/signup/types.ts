export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  company?: string;
  terms: boolean;
}
