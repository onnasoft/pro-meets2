import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { Organization } from "~/types/models";
import { getOrganizations } from "~/services/organizations";

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

    const organizations = await getOrganizations(null, {
      Authorization: `Bearer ${accessToken}`,
    });

    if (!organizations.length) {
      throw new Error("No organizations found");
    }

    return { organizations } as LoaderData;
  } catch {
    return redirect("/login");
  }
}
