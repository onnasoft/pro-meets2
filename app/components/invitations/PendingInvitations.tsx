import { Briefcase, Check, Clock, Mail, Shield, X } from "lucide-react";
import translations from "./translations";
import { EmptyState } from "./EmptyState";
import { getAvatarUrl } from "~/utils/gravatar";
import { useQueryClient } from "@tanstack/react-query";
import { deleteOrganizationMember, MemberRole, MemberStatus, OrganizationMember, updateOrganizationMember } from "@onnasoft/pro-meets-core";

interface PendingInvitationsProps {
  readonly translations: typeof translations.en;
  readonly pendingInvitations: OrganizationMember[];
}

export default function PendingInvitations({
  translations,
  pendingInvitations,
}: PendingInvitationsProps) {
  const queryClient = useQueryClient();

  const handleDecline = async (invite: OrganizationMember) => {
    await deleteOrganizationMember(invite.id);
    await queryClient.invalidateQueries({ queryKey: ["pending-invitations"] });
    await queryClient.invalidateQueries({ queryKey: ["past-invitations"] });
  };

  const handleAccept = async (invite: OrganizationMember) => {
    await updateOrganizationMember(invite.id, {
      status: MemberStatus.ACTIVE,
    });
    await queryClient.invalidateQueries({ queryKey: ["pending-invitations"] });
    await queryClient.invalidateQueries({ queryKey: ["past-invitations"] });
    window.location.reload();
  };

  return (
    <div className="mb-12">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        {translations.pendingTitle} ({pendingInvitations.length})
      </h2>

      {pendingInvitations.length > 0 ? (
        <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
          {pendingInvitations.map((invite) => (
            <div key={invite.id} className="p-6">
              <div className="flex items-start">
                <img
                  src={
                    invite.organization?.logoUrl ??
                    getAvatarUrl(invite.organization?.owner)
                  }
                  alt={invite.organization?.name}
                  className="h-12 w-12 rounded-md mr-4"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">
                      {invite.organization?.name}
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {invite.role === MemberRole.ADMIN ? (
                        <Shield className="h-3 w-3 mr-1" />
                      ) : (
                        <Briefcase className="h-3 w-3 mr-1" />
                      )}
                      {invite.role}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {translations.invitedBy}{" "}
                    <span className="font-medium">
                      {invite.organization?.owner.name}
                    </span>{" "}
                    ({invite.organization?.owner.email})
                  </p>
                  <p className="text-xs text-gray-400 mt-2 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {new Date(invite.createdAt).toLocaleDateString(
                      translations.languageCode,
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    )}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                <button
                  onClick={() => handleDecline(invite)}
                  className="bg-red-100 text-red-800 px-4 py-2 rounded-md flex items-center"
                >
                  <X className="h-4 w-4 mr-2" />
                  {translations.declineButton}
                </button>
                <button
                  onClick={() => handleAccept(invite)}
                  className="bg-primary-600 text-white px-4 py-2 rounded-md flex items-center"
                >
                  <Check className="h-4 w-4 mr-2" />
                  {translations.acceptButton}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyState
          icon={<Mail className="h-12 w-12 text-gray-400" />}
          title={translations.noPendingTitle}
          description={translations.noPendingDescription}
        />
      )}
    </div>
  );
}
