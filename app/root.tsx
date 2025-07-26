import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

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

interface Environment {
  PUBLIC_API_URL: string;
}

export const loader = async () => {
  return {
    ENV: {
      PUBLIC_API_URL: process.env.PUBLIC_API_URL ?? "",
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
  const { ENV } = useLoaderData<typeof loader>();

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.ENV = ${JSON.stringify(ENV)};`,
        }}
      />
      <Outlet />
    </>
  );
}
