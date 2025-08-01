import { LoaderFunctionArgs } from "@remix-run/node";
import { defaultLanguage, Language, languages } from "~/utils/language";

interface LoaderData {
  language: Language;
}

export async function languageLoader({
  request,
}: LoaderFunctionArgs): Promise<LoaderData> {
  const cookieHeader = request.headers.get("Cookie") || "";
  const cookies = Object.fromEntries(
    cookieHeader.split("; ").map((c) => {
      const [k, v] = c.split("=");
      return [k, decodeURIComponent(v)];
    })
  );

  let language = (cookies.language ||
    request.headers.get("Accept-Language")?.split(",")[0]) as Language;

  if (!Object.values(languages).includes(language)) {
    language = defaultLanguage;
  }

  return { language };
}
