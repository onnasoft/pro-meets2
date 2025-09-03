import { Language, User } from "@onnasoft/pro-meets-core";
import { LoaderFunctionArgs, Outlet, redirect, useOutletContext } from "react-router";
import SocialNetworkLayout from "~/components/social-network/SocialNetworkLayout";
import { languageLoader } from "~/loaders/language";
import { sessionLoader } from "~/loaders/session";
import logger from "~/utils/logger";

interface LoaderData {
  language: Language;
  user: User;
}

export async function loader(args: LoaderFunctionArgs) {
  try {
    const result = await Promise.all([
      languageLoader(args),
      sessionLoader(args),
    ]);

    if (!result || result.length < 2) {
      throw new Error("Failed to load necessary data");
    }
    if ("user" in result[1] === false) {
      throw new Error("User data is missing");
    }

    const languageData = result[0] as { language: Language };
    const sessionData = result[1] as { user: User };

    return {
      language: languageData.language,
      user: sessionData.user,
    } as LoaderData;
  } catch (error) {
    logger.error("Error loading dashboard data:", error);
    return redirect("/login");
  }
}

export default function Layout() {
  const { user, language } = useOutletContext<LoaderData>();

  return (
    <SocialNetworkLayout>
      <Outlet context={{ user, language }} />
    </SocialNetworkLayout>
  );
}