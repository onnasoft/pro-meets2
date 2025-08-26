import { Users, ChevronRight, LogOut } from "lucide-react";
import translations from "./translations";
import { Organization, MemberRole } from "pro-meets-core";

interface OrganizationsSectionProps {
  readonly translations: typeof translations.en.organizations;
  readonly organizations: Organization[];
  readonly onViewOrganization: (id: string) => void;
  readonly onLeaveOrganization: (id: string) => void;
  readonly onCreateOrganization: () => void;
}

export function OrganizationsSection({
  translations,
  organizations,
  onViewOrganization,
  onLeaveOrganization,
  onCreateOrganization,
}: OrganizationsSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center mb-4">
        <Users className="h-5 w-5 text-primary-600 mr-2" />
        <h2 className="text-xl font-semibold">{translations.title}</h2>
      </div>

      <div className="space-y-4">
        {organizations.length > 0 ? (
          <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
            {organizations.map((org) => (
              <li
                key={org.id}
                className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 group"
              >
                <div>
                  <h3 className="font-medium">{org.name}</h3>
                  <p className="text-sm text-gray-500">{org.members[0].role}</p>
                </div>
                <div className="flex items-center gap-2">
                  {org.members[0].role !== MemberRole.OWNER && (
                    <button
                      onClick={() => onLeaveOrganization(org.members[0].id)}
                      className="p-1.5 rounded-md text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors flex items-center gap-1"
                      title={translations.leave}
                    >
                      <LogOut className="h-4 w-4" />
                      <span className="text-sm font-medium">{translations.leave}</span>
                    </button>
                  )}
                  <button
                    onClick={() => onViewOrganization(org.id)}
                    className="flex items-center text-primary-600 hover:text-primary-800"
                  >
                    {translations.viewDetails}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">
            {translations.noOrganizations}
          </p>
        )}

        <div className="pt-2">
          <button
            onClick={onCreateOrganization}
            className="px-4 py-2 border border-primary-600 text-primary-600 rounded-md text-sm font-medium hover:bg-primary-50"
          >
            {translations.create}
          </button>
        </div>
      </div>
    </div>
  );
}