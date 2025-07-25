
declare global {
  interface Window {
    ENV?: {
      PUBLIC_API_URL?: string;
    };
  }
}

type Config = {
  apiUrl: string;
};

let _config: Config;

if (typeof window === "undefined") {
  _config = {
    apiUrl: process.env.PUBLIC_API_URL || "/api",
  };
} else {
  _config = {
    apiUrl: window.ENV?.PUBLIC_API_URL || "/api",
  };
}

const config = _config;

export default config;
