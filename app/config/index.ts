declare global {
  interface Window {
    ENV?: {
      PUBLIC_API_URL?: string;
      PUBLIC_LINKEDIN_URL?: string;
      GOOGLE_CLIENT_ID?: string;
      STRIPE_PUBLISHABLE_KEY?: string;
    };
  }
}

type Config = {
  apiUrl: string;
  linkedinUrl: string;
  googleClientId: string;
  stripePublishableKey: string;
};

let _config: Config;

if (typeof window === "undefined") {
  _config = {
    apiUrl: process.env.PUBLIC_API_URL || "/api",
    linkedinUrl:
      process.env.PUBLIC_LINKEDIN_URL ||
      "https://www.linkedin.com/company/pro-meets",
    googleClientId: process.env.GOOGLE_CLIENT_ID || "YOUR_CLIENT_ID",
    stripePublishableKey:
      process.env.STRIPE_PUBLISHABLE_KEY || "YOUR_STRIPE_PUBLISHABLE_KEY",
  };
} else {
  _config = {
    apiUrl: window.ENV?.PUBLIC_API_URL || "/api",
    linkedinUrl:
      window.ENV?.PUBLIC_LINKEDIN_URL ||
      "https://www.linkedin.com/company/pro-meets",
    googleClientId: window.ENV?.GOOGLE_CLIENT_ID || "YOUR_CLIENT_ID",
    stripePublishableKey:
      window.ENV?.STRIPE_PUBLISHABLE_KEY || "YOUR_STRIPE_PUBLISHABLE_KEY",
  };
}

const config = _config;

export default config;
