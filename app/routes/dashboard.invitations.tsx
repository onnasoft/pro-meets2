import { useLoaderData, useOutletContext } from "@remix-run/react";
import translations from "~/components/invitations/translations";
import PendingInvitations from "~/components/invitations/PendingInvitations";
import PreviousInvitations from "~/components/invitations/PreviousInvitations";
import { Mail } from "lucide-react";
import { DashboardOutletContext } from "~/types/dashboard";
import { LoaderFunctionArgs } from "@remix-run/node";
import { useQuery } from "@tanstack/react-query";
import { getOrganizationsMembers } from "~/services/organization-members";
import { MemberStatus } from "~/types/models";

const mockInvitations = [
  {
    id: "1",
    organization: {
      name: "Tech Solutions Inc.",
      logo: "https://via.placeholder.com/150",
    },
    inviter: {
      name: "María García",
      email: "maria.garcia@example.com",
    },
    role: "Admin",
    status: "pending",
    createdAt: "2023-05-15T10:30:00Z",
  },
  {
    id: "2",
    organization: {
      name: "Digital Innovations",
      logo: "https://via.placeholder.com/150",
    },
    inviter: {
      name: "Carlos López",
      email: "carlos.lopez@example.com",
    },
    role: "Member",
    status: "accepted",
    createdAt: "2023-04-10T14:20:00Z",
  },
  {
    id: "3",
    organization: {
      name: "Creative Labs",
      logo: "https://via.placeholder.com/150",
    },
    inviter: {
      name: "Ana Martínez",
      email: "ana.martinez@example.com",
    },
    role: "Recruiter",
    status: "declined",
    createdAt: "2023-03-22T09:15:00Z",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  return { token };
}

export default function Invitations() {
  const { token } = useLoaderData<typeof loader>();
  const { language } = useOutletContext<DashboardOutletContext>();
  const t = translations[language] || translations.en;

  const pastInvitations = mockInvitations.filter(
    (invite) => invite.status !== "pending"
  );

  const filter = token ? { invitationToken: token } : {};

  const { data: pending = [] } = useQuery({
    queryKey: ["pending-invitations", token],
    queryFn: () =>
      getOrganizationsMembers({
        where: {
          status: MemberStatus.PENDING,
          ...filter,
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
      <PreviousInvitations translations={t} pastInvitations={pastInvitations} />
    </div>
  );
}
