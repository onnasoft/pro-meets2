declare global {
  interface Window {
    ENV?: {
      PUBLIC_BASE_URL?: string;
      PUBLIC_API_URL?: string;
      PUBLIC_LINKEDIN_URL?: string;
      PUBLIC_GOOGLE_CLIENT_ID?: string;
      PUBLIC_STRIPE_PUBLISHABLE_KEY?: string;
    };
  }
}

type Config = {
  baseUrl: string;
  apiUrl: string;
  linkedinUrl: string;
  googleClientId: string;
  stripePublishableKey: string;
};

let _config: Config;

if (typeof window === "undefined") {
  _config = {
    baseUrl: process.env.PUBLIC_BASE_URL || "http://localhost:3000",
    apiUrl: process.env.API_URL || "/api",
    linkedinUrl:
      process.env.PUBLIC_LINKEDIN_URL ||
      "https://www.linkedin.com/company/pro-meets",
    googleClientId: process.env.PUBLIC_GOOGLE_CLIENT_ID || "YOUR_CLIENT_ID",
    stripePublishableKey:
      process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY || "YOUR_STRIPE_PUBLISHABLE_KEY",
  };
} else {
  _config = {
    baseUrl: window.ENV?.PUBLIC_BASE_URL || "http://localhost:3000",
    apiUrl: window.ENV?.PUBLIC_API_URL || "/api",
    linkedinUrl:
      window.ENV?.PUBLIC_LINKEDIN_URL ||
      "https://www.linkedin.com/company/pro-meets",
    googleClientId: window.ENV?.PUBLIC_GOOGLE_CLIENT_ID || "YOUR_CLIENT_ID",
    stripePublishableKey:
      window.ENV?.PUBLIC_STRIPE_PUBLISHABLE_KEY || "YOUR_STRIPE_PUBLISHABLE_KEY",
  };
}

const config = _config;

export default config;
