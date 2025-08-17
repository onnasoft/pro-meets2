import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "react-router";
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

export function ErrorBoundary() {
  return (
    <Layout>
      <h1 className="text-red-500">Something went wrong</h1>
    </Layout>
  );
}

export default function App() {
  const { ENV, language } = useLoaderData<typeof loader>();

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(ENV)};`,
        }}
      />
      <Outlet context={{ language }} />
    </>
  );
}
