import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { User } from "~/types/models";
import { Language } from "~/utils/language";
import { languageLoader } from "./language";
import config from "~/config";

interface LoaderData {
  language: Language;
  user: User;
}

export async function sessionLoader(args: LoaderFunctionArgs) {
  try {
    const { language } = await languageLoader(args);
    const cookieHeader = args.request.headers.get("Cookie") || "";
    const cookies = Object.fromEntries(
      cookieHeader.split("; ").map((c) => {
        const [k, v] = c.split("=");
        return [k, decodeURIComponent(v)];
      })
    );
    const accessToken = cookies.accessToken || null;

    if (!accessToken) {
      throw new Error("Access token not found in cookies");
    }

    const userResponse = await fetch(`${config.apiUrl}/auth/session`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      credentials: "include",
    });

    if (!userResponse.ok) {
      throw new Error("Failed to fetch user session");
    }

    const user = (await userResponse.json()) as User;
    if (!user || !user.id) {
      throw new Error("User not found in session");
    }

    const data: LoaderData = {
      language,
      user,
    };

    return data;
  } catch {
    return redirect("/login");
  }
}
