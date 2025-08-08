import { LoaderFunctionArgs, redirect } from "react-router";
import { MemberStatus, Organization } from "~/types/models";
import { getOrganizations } from "~/services/organizations";
import logger from "~/utils/logger";

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

    const organizations = await getOrganizations(
      {
        where: {
          members: {
            status: MemberStatus.ACTIVE,
          },
        },
        relations: ["members", "members.user"],
      },
      {
        Authorization: `Bearer ${accessToken}`,
      }
    );

    return { organizations } as LoaderData;
  } catch (err) {
    logger.error("Error loading organizations:", err);
    return redirect("/login");
  }
}
