import { useLoaderData, useOutletContext } from "@remix-run/react";
import translations from "~/components/invitations/translations";
import PendingInvitations from "~/components/invitations/PendingInvitations";
import PreviousInvitations from "~/components/invitations/PreviousInvitations";
import { Mail } from "lucide-react";
import { DashboardOutletContext } from "~/types/dashboard";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useQuery } from "@tanstack/react-query";
import { getOrganizationsMembers } from "~/services/organization-members";
import { MemberRole, MemberStatus } from "~/types/models";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  return { token };
}

export default function Invitations() {
  const { token } = useLoaderData<typeof loader>();
  const { language } = useOutletContext<DashboardOutletContext>();
  const t = translations[language] || translations.en;

  const pendingFilter = token ? { invitationToken: token } : {};
  const { data: pending = [] } = useQuery({
    queryKey: ["pending-invitations", token],
    queryFn: () =>
      getOrganizationsMembers({
        where: {
          status: MemberStatus.PENDING,
          ...pendingFilter,
        },
        relations: ["organization", "organization.owner"],
      }),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  const { data: past = [] } = useQuery({
    queryKey: ["past-invitations", token],
    queryFn: () =>
      getOrganizationsMembers({
        where: {
          status: {
            value: MemberStatus.PENDING,
            op: "not",
          },
          role: { op: "not", value: MemberRole.OWNER },
        },
        relations: ["organization", "organization.owner"],
      }),
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center mb-8">
        <Mail className="h-8 w-8 text-primary-600 mr-3" />
        <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
      </div>

      {/* Invitaciones pendientes */}
      <PendingInvitations translations={t} pendingInvitations={pending} />

      {/* Invitaciones anteriores */}
      <PreviousInvitations translations={t} pastInvitations={past} />
    </div>
  );
}
