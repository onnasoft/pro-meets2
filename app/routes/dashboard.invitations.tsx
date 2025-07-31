import { useLoaderData } from "@remix-run/react";
import { languageLoader } from "~/loaders/language";
import { Mail, Clock, Check, X, Briefcase, Shield } from "lucide-react";
import { EmptyState } from "~/components/invitations/EmptyState";
import translations from "~/components/invitations/translations";

export { languageLoader as loader } from "~/loaders/language";

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

export default function Invitations() {
  const { language } = useLoaderData<typeof languageLoader>();
  const t = translations[language] || translations.en;

  // Filtrar invitaciones pendientes
  const pendingInvitations = mockInvitations.filter(
    (invite) => invite.status === "pending"
  );
  const pastInvitations = mockInvitations.filter(
    (invite) => invite.status !== "pending"
  );

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center mb-8">
        <Mail className="h-8 w-8 text-primary-600 mr-3" />
        <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
      </div>

      {/* Invitaciones pendientes */}
      <div className="mb-12">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          {t.pendingTitle} ({pendingInvitations.length})
        </h2>

        {pendingInvitations.length > 0 ? (
          <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
            {pendingInvitations.map((invite) => (
              <div key={invite.id} className="p-6">
                <div className="flex items-start">
                  <img
                    src={invite.organization.logo}
                    alt={invite.organization.name}
                    className="h-12 w-12 rounded-md mr-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900">
                        {invite.organization.name}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        {invite.role === "Admin" ? (
                          <Shield className="h-3 w-3 mr-1" />
                        ) : (
                          <Briefcase className="h-3 w-3 mr-1" />
                        )}
                        {invite.role}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {t.invitedBy}{" "}
                      <span className="font-medium">{invite.inviter.name}</span>{" "}
                      ({invite.inviter.email})
                    </p>
                    <p className="text-xs text-gray-400 mt-2 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {new Date(invite.createdAt).toLocaleDateString(language, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex justify-end space-x-3">
                  <button className="bg-red-100 text-red-800 px-4 py-2 rounded-md flex items-center">
                    <X className="h-4 w-4 mr-2" />
                    {t.declineButton}
                  </button>
                  <button className="bg-primary-600 text-white px-4 py-2 rounded-md flex items-center">
                    <Check className="h-4 w-4 mr-2" />
                    {t.acceptButton}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<Mail className="h-12 w-12 text-gray-400" />}
            title={t.noPendingTitle}
            description={t.noPendingDescription}
          />
        )}
      </div>

      {/* Invitaciones anteriores */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          {t.pastTitle}
        </h2>

        {pastInvitations.length > 0 ? (
          <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
            {pastInvitations.map((invite) => (
              <div key={invite.id} className="p-6">
                <div className="flex items-start">
                  <img
                    src={invite.organization.logo}
                    alt={invite.organization.name}
                    className="h-12 w-12 rounded-md mr-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900">
                        {invite.organization.name}
                      </h3>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          invite.status === "accepted"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {invite.status === "accepted" ? (
                          <>
                            <Check className="h-3 w-3 mr-1" />
                            {t.acceptedStatus}
                          </>
                        ) : (
                          <>
                            <X className="h-3 w-3 mr-1" />
                            {t.declinedStatus}
                          </>
                        )}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      {t.invitedBy}{" "}
                      <span className="font-medium">{invite.inviter.name}</span>{" "}
                      ({invite.inviter.email})
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-xs text-gray-400 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {new Date(invite.createdAt).toLocaleDateString(
                          language,
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </p>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                        {invite.role === "Admin" ? (
                          <Shield className="h-3 w-3 mr-1" />
                        ) : (
                          <Briefcase className="h-3 w-3 mr-1" />
                        )}
                        {invite.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<Mail className="h-12 w-12 text-gray-400" />}
            title={t.noPastTitle}
            description={t.noPastDescription}
          />
        )}
      </div>
    </div>
  );
}
