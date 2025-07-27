import { OrganizationSelector } from "./OrganizationSelector";
import { NotificationsMenu } from "./NotificationsMenu";
import { UserMenu } from "./UserMenu";
import translations from "./translations";

interface HeaderProps {
  readonly organizations: {
    id: string;
    name: string;
    current?: boolean;
  }[];
  readonly currentOrganization: {
    id: string;
    name: string;
  };
  readonly notifications: {
    id: number;
    title: string;
    description: string;
    time: string;
    read: boolean;
    icon: string;
  }[];
  readonly user: {
    name: string;
    email: string;
    avatar: string;
  };
  readonly translations: typeof translations.en;
}

export function Header({
  organizations,
  currentOrganization,
  notifications,
  user,
  translations,
}: HeaderProps) {
  return (
    <header className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-sm">
      {/* Menú móvil (opcional) */}
      <div className="flex items-center md:hidden">
        <button className="p-2 text-gray-500 rounded-md hover:text-gray-600 hover:bg-gray-100">
          Menu
        </button>
      </div>

      <OrganizationSelector
        organizations={organizations}
        currentOrganization={currentOrganization}
        translations={translations}
      />

      <div className="flex items-center space-x-4">
        <NotificationsMenu
          notifications={notifications}
          translations={translations}
        />
        <UserMenu user={user} translations={translations} />
      </div>
    </header>
  );
}
