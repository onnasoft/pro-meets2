import { Briefcase, Check, Clock, Mail, Shield, X } from "lucide-react";
import translations from "./translations";
import { EmptyState } from "./EmptyState";
import { getAvatarUrl } from "~/utils/gravatar";
import { MemberRole, MemberStatus, OrganizationMember } from "@onnasoft/pro-meets-core";

interface PreviousInvitationsProps {
  readonly translations: typeof translations.en;
  readonly pastInvitations: OrganizationMember[];
}

export default function PreviousInvitations({
  translations,
  pastInvitations,
}: PreviousInvitationsProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        {translations.pastTitle}
      </h2>

      {pastInvitations.length > 0 ? (
        <div className="bg-white shadow-sm rounded-lg divide-y divide-gray-200">
          {pastInvitations.map((invite) => (
            <div key={invite.id} className="p-6">
              <div className="flex items-start">
                <img
                  src={
                    invite.organization?.logoUrl ??
                    getAvatarUrl(invite.organization?.owner!)
                  }
                  alt={invite.organization?.name}
                  className="h-12 w-12 rounded-md mr-4"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-gray-900">
                      {invite.organization?.name}
                    </h3>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        invite.status === MemberStatus.ACTIVE
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {invite.status === MemberStatus.ACTIVE ? (
                        <>
                          <Check className="h-3 w-3 mr-1" />
                          {translations.acceptedStatus}
                        </>
                      ) : (
                        <>
                          <X className="h-3 w-3 mr-1" />
                          {translations.declinedStatus}
                        </>
                      )}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    {translations.invitedBy}{" "}
                    <span className="font-medium">
                      {invite.organization?.owner.name}
                    </span>{" "}
                    ({invite.organization?.owner.email})
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <p className="text-xs text-gray-400 flex items-center">
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
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {invite.role === MemberRole.ADMIN ? (
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
          title={translations.noPastTitle}
          description={translations.noPastDescription}
        />
      )}
    </div>
  );
}
