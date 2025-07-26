import config from "~/config";
import { HTTPError, ValidationErrorResponse } from "~/types/http";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  company?: string;
  terms: boolean;
}

interface RegisterResponse {
  message: string;
}

type RegisterError = ValidationErrorResponse<RegisterFormData> | HTTPError;

export async function register(
  data: RegisterFormData
): Promise<RegisterResponse> {
  const response = await fetch(`${config.apiUrl}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: RegisterError = await response.json();
    if (typeof errorData.message === "string") {
      throw new Error(errorData.message || "Registration failed");
    }

    if (Array.isArray(errorData.message)) {
      const errorMessages = errorData.message.map(
        (error) =>
          `${error.property}: ${Object.values(error.constraints).join(", ")}`
      );
      throw new Error(`Validation errors: ${errorMessages.join("; ")}`);
    }

    throw new Error("Registration failed");
  }

  return response.json();
}

export async function resendVerification(email: string): Promise<void> {
  const response = await fetch(`${config.apiUrl}/auth/resend-verification`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
    credentials: "include",
  });

  if (!response.ok) {
    const errorData: HTTPError = await response.json();
    throw new Error(errorData.message || "Failed to resend verification email");
  }
}
