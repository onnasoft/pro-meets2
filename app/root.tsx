import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { LinksFunction, LoaderFunctionArgs } from "react-router";
import { languageLoader } from "./loaders/language";
import "tiptap-extension-resizable-image/styles.css";
import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const loader = async (args: LoaderFunctionArgs) => {
  const cookieHeader = args.request.headers.get("Cookie") || "";
  const cookies = Object.fromEntries(
    cookieHeader.split("; ").map((c) => {
      const [k, v] = c.split("=");
      return [k, decodeURIComponent(v)];
    })
  );

  (global as any)["cookies"] = cookies;

  const { language } = await languageLoader(args);
  return {
    language,
    ENV: {
      PUBLIC_BASE_URL: process.env.PUBLIC_BASE_URL ?? "",
      PUBLIC_API_URL: process.env.PUBLIC_API_URL ?? "",
      PUBLIC_GOOGLE_CLIENT_ID: process.env.PUBLIC_GOOGLE_CLIENT_ID ?? "",
      PUBLIC_LINKEDIN_URL:
        process.env.PUBLIC_LINKEDIN_URL ??
        "https://www.linkedin.com/company/pro-meets",
      PUBLIC_STRIPE_PUBLISHABLE_KEY:
        process.env.PUBLIC_STRIPE_PUBLISHABLE_KEY ?? "",

      JULIO_TORRES_LINKEDIN:
        process.env.PUBLIC_JULIO_TORRES_LINKEDIN ??
        "https://www.linkedin.com/in/julio-cesar-torres-moreno/",
      JULIO_TORRES_GITHUB: process.env.PUBLIC_JULIO_TORRES_GITHUB ?? "",
      JULIO_TORRES_EMAIL: process.env.PUBLIC_JULIO_TORRES_EMAIL ?? "",
      LEONARDO_TORRES_LINKEDIN:
        process.env.PUBLIC_LEONARDO_TORRES_LINKEDIN ?? "",
      LEONARDO_TORRES_EMAIL:
        process.env.PUBLIC_LEONARDO_TORRES_EMAIL ?? "",
    },
  };
};

interface LayoutProps {
  readonly children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export { ErrorBoundary } from '~/components/ErrorBoundary';

export default function App() {
  const { ENV, language } = useLoaderData<typeof loader>();
  const queryClient = new QueryClient();

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(ENV)};`,
        }}
      />
      <QueryClientProvider client={queryClient}>
        <Outlet context={{ language }} />
      </QueryClientProvider>
    </>
  );
}
