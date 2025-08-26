import { OrganizationSelector } from "./OrganizationSelector";
import { NotificationsMenu } from "./NotificationsMenu";
import { UserMenu } from "./UserMenu";
import translations from "./translations";
import { Menu } from "lucide-react";
import useMobileMenuStore from "~/store/menu";
import { Organization, User } from "pro-meets-core";

interface HeaderProps {
  readonly organizations: Organization[];
  readonly currentOrganization?: Organization;
  readonly notifications: {
    id: number;
    title: string;
    description: string;
    time: string;
    read: boolean;
    icon: string;
  }[];
  readonly user: User;
  readonly translations: typeof translations.en;
}

export function Header({
  organizations,
  currentOrganization,
  notifications,
  user,
  translations,
}: HeaderProps) {
  const openMobileMenu = useMobileMenuStore((state) => state.open);
  return (
    <header className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center md:hidden">
        <button
          className="p-2 text-gray-500 rounded-md hover:text-gray-600 hover:bg-gray-100"
          onClick={openMobileMenu}
        >
          <Menu />
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
