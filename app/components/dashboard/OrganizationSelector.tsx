import { Building2, ChevronsUpDown, Plus } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import translations from "./translations";
import { Organization } from "~/types/models";
import { updateOrganization } from "~/services/organizations";
import useOrganizationStore from "~/store/organization";

interface OrganizationSelectorProps {
  readonly organizations: Organization[];
  readonly currentOrganization?: Organization;
  readonly translations: typeof translations.en;
}

export function OrganizationSelector({
  organizations,
  currentOrganization,
  translations,
}: OrganizationSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const setCurrentOrganizationId = useOrganizationStore(
    (state) => state.setCurrentOrganizationId
  );

  const handleOrganizationChange = async (org: Organization) => {
    setIsOpen(false);
    await updateOrganization(org.id, { current: true });
    setCurrentOrganizationId(org.id);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center">
      <div className="relative" ref={menuRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg hover:bg-gray-100 w-[280px] md:w-[380px] border border-gray-200"
        >
          <div className="flex items-center space-x-3">
            <Building2 className="h-5 w-5 text-primary-600 flex-shrink-0" />
            <span className="font-medium text-gray-700 text-left truncate">
              {currentOrganization?.name}
            </span>
          </div>
          <ChevronsUpDown className="h-4 w-4 text-gray-400 flex-shrink-0" />
        </button>

        {isOpen && (
          <div className="absolute left-0 mt-2 w-[280px] md:w-[380px] origin-top-left bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none z-50 divide-y divide-gray-100 border border-gray-200">
            <div className="px-5 py-3 bg-gray-50 rounded-t-lg">
              <p className="text-sm font-semibold text-gray-900">
                {translations.organizations.title}
              </p>
            </div>

            <div className="py-1 max-h-[280px] md:max-h-[380px] overflow-y-auto">
              {organizations.map((org) => (
                <button
                  key={org.id}
                  onClick={() => handleOrganizationChange(org)}
                  className={`w-full flex items-center justify-between px-5 py-3 text-sm ${
                    org.id === currentOrganization?.id
                      ? "bg-primary-50 text-primary-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex items-center">
                    <Building2 className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" />
                    <span className="text-left">{org.name}</span>
                  </div>
                  {org.id === currentOrganization?.id && (
                    <span className="ml-4 px-2 py-0.5 text-xs font-medium rounded-full bg-primary-100 text-primary-800">
                      {translations.organizations.current}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {!organizations.length && (
              <div className="py-1 bg-gray-50 rounded-b-lg">
                <button
                  onClick={() => {
                    navigate("/dashboard/organizations/new");
                    setIsOpen(false);
                  }}
                  className="w-full flex items-center px-5 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                  <Plus className="w-5 h-5 mr-3 text-gray-400 flex-shrink-0" />
                  <span>{translations.organizations.createNew}</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
