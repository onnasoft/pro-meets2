import { Link } from "@remix-run/react";
import { NavItem } from "./NavItem";
import translations from "./translations";
import { User } from "~/types/models";
import { getAvatarUrl } from "~/utils/gravatar";

interface SidebarProps {
  readonly user: User;
  readonly translations: typeof translations.en;
}

export function Sidebar({ user, translations }: SidebarProps) {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 bg-white shadow-sm">
        {/* Logo */}
        <div className="flex items-center h-16 px-4 border-b border-gray-200 bg-primary-500">
          <Link to="/dashboard" className="text-xl font-bold text-white">
            {translations.appName}
          </Link>
        </div>

        {/* Menú principal */}
        <nav className="flex-1 px-2 py-6 space-y-1">
          <NavItem
            to="/dashboard" exact={true}
            activeClassName="bg-primary-100 text-primary-700"
          >
            <span className="flex items-center">
              <span className="mr-3">📅</span> {translations.menu.calendar}
            </span>
          </NavItem>
          <NavItem
            to="/dashboard/projects"
            activeClassName="bg-primary-100 text-primary-700"
          >
            <span className="flex items-center">
              <span className="mr-3">📁</span> {translations.menu.projects}
            </span>
          </NavItem>
          <NavItem
            to="/dashboard/meetings"
            activeClassName="bg-primary-100 text-primary-700"
          >
            <span className="flex items-center">
              <span className="mr-3">🎥</span> {translations.menu.meetings}
            </span>
          </NavItem>
          <NavItem
            to="/dashboard/candidates"
            activeClassName="bg-primary-100 text-primary-700"
          >
            <span className="flex items-center">
              <span className="mr-3">👥</span> {translations.menu.candidates}
            </span>
          </NavItem>
          <NavItem
            to="/dashboard/jobs"
            activeClassName="bg-primary-100 text-primary-700"
          >
            <span className="flex items-center">
              <span className="mr-3">💼</span> {translations.menu.jobs}
            </span>
          </NavItem>
          <NavItem
            to="/dashboard/analytics"
            activeClassName="bg-primary-100 text-primary-700"
          >
            <span className="flex items-center">
              <span className="mr-3">📊</span> {translations.menu.analytics}
            </span>
          </NavItem>
          <NavItem
            to="/dashboard/recordings"
            activeClassName="bg-primary-100 text-primary-700"
          >
            <span className="flex items-center">
              <span className="mr-3">🎬</span> {translations.menu.recordings}
            </span>
          </NavItem>
        </nav>

        {/* Perfil del usuario en el sidebar */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
              <img
                src={getAvatarUrl(user)}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">{user.name}</p>
              <p className="text-xs text-gray-500">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
