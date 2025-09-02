declare global {
  interface Window {
    ENV?: {
      [x: string]: string;
    };
  }
}

type Config = {
  baseUrl: string;
  apiUrl: string;
  linkedinUrl: string;
  googleClientId: string;
  stripePublishableKey: string;
  juliorTorresLinkedIn: string;
  juliorTorresGithub: string;
  juliorTorresEmail: string;
  leonardoTorresLinkedIn: string;
  leonardoTorresEmail: string;
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
      process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY ||
      "YOUR_STRIPE_PUBLISHABLE_KEY",

    juliorTorresLinkedIn:
      process.env.PUBLIC_JULIO_TORRES_LINKEDIN ||
      "https://www.linkedin.com/in/julio-cesar-torres-moreno/",
    juliorTorresGithub:
      process.env.PUBLIC_JULIO_TORRES_GITHUB ||
      "https://github.com/juliotorresmoreno",
    juliorTorresEmail:
      process.env.PUBLIC_JULIO_TORRES_EMAIL || "juliotorres@onnasoft.us",
    leonardoTorresLinkedIn:
      process.env.PUBLIC_LEONARDO_TORRES_LINKEDIN ||
      "https://www.linkedin.com/in/leonardo-torres-moreno-682b29161/",
    leonardoTorresEmail:
      process.env.PUBLIC_LEONARDO_TORRES_EMAIL || "leonardotorres@onnasoft.us",
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
      window.ENV?.PUBLIC_STRIPE_PUBLISHABLE_KEY ||
      "YOUR_STRIPE_PUBLISHABLE_KEY",
    juliorTorresLinkedIn:
      window.ENV?.PUBLIC_JULIO_TORRES_LINKEDIN ||
      "https://www.linkedin.com/in/julio-cesar-torres-moreno/",
    juliorTorresGithub:
      window.ENV?.PUBLIC_JULIO_TORRES_GITHUB ||
      "https://github.com/juliotorresmoreno",
    juliorTorresEmail:
      window.ENV?.PUBLIC_JULIO_TORRES_EMAIL || "juliotorres@onnasoft.us",
    leonardoTorresLinkedIn:
      window.ENV?.PUBLIC_LEONARDO_TORRES_LINKEDIN ||
      "https://www.linkedin.com/in/leonardo-torres-moreno-682b29161/",
    leonardoTorresEmail:
      window.ENV?.PUBLIC_LEONARDO_TORRES_EMAIL || "leonardotorres@onnasoft.us",
  };
}

const config = _config;

export default config;
