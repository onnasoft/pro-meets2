import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Organization } from "~/types/models";
import config from "~/config";

interface LoaderData {
  organizations: Organization[];
}

export async function organizationsLoader(args: LoaderFunctionArgs) {
  try {
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

    const userResponse = await fetch(`${config.apiUrl}/organizations`, {
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

    const organizations = (await userResponse.json()).data as Organization[];
    if (!organizations || organizations.length === 0) {
      throw new Error("No organizations found");
    }

    return { organizations } as LoaderData;
  } catch {
    return redirect("/login");
  }
}
