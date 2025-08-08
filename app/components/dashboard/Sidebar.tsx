import { Link, useNavigate } from "react-router";
import { NavItem } from "./NavItem";
import translations from "./translations";
import { User } from "~/types/models";
import { getAvatarUrl } from "~/utils/gravatar";
import {
  Calendar,
  Folder,
  Video,
  Users,
  Briefcase,
  BarChart2,
  Film,
  Settings,
  LogOut,
  ChevronDown,
  Plus,
  MessageSquare,
  FileText,
  Bell,
} from "lucide-react";
import useMobileMenuStore from "~/store/menu";

interface SidebarProps {
  readonly user: User;
  readonly translations: typeof translations.en;
  readonly onLogout?: () => void;
  readonly unreadCount?: number;
}

export function Sidebar({
  user,
  translations,
  onLogout,
  unreadCount = 0,
}: SidebarProps) {
  const navigate = useNavigate();
  const { isOpen, close } = useMobileMenuStore();
  const closeMobileMenu = () => {
    if (!isOpen) return;
    setTimeout(() => {
      close();
    }, 300);
  };

  const handleNewProject = () => {
    navigate("/dashboard/projects/new");
    closeMobileMenu();
  };

  return (
    <div
      className={`z-50 md:flex md:flex-shrink-0 ${
        isOpen ? "block absolute" : "hidden"
      }`}
    >
      <div className="flex flex-col w-64 border-r border-gray-200 bg-white h-screen sticky top-0">
        {/* Logo */}
        <div className="flex items-center h-16 px-4 border-b border-gray-200 bg-gradient-to-r from-primary-600 to-primary-500">
          <Link
            to="/dashboard"
            onClick={closeMobileMenu}
            className="text-xl font-bold text-white flex items-center"
          >
            <span className="bg-white/20 p-2 rounded-lg mr-2 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-white" />
            </span>
            {translations.appName}
          </Link>
        </div>

        {/* Menú principal */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {/* Botón de acción principal */}
          <div className="px-3 mb-4">
            <button
              onClick={handleNewProject}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors shadow-sm"
            >
              <Plus className="h-4 w-4" />
              <span>{translations.newProject}</span>
            </button>
          </div>

          {/* Sección Principal */}
          <div className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {translations.navigation}
          </div>

          <NavItem
            to="/dashboard"
            exact={true}
            onClick={closeMobileMenu}
            activeClassName="bg-primary-50 text-primary-600 border-l-4 border-primary-500"
          >
            <span className="flex items-center">
              <Calendar className="h-5 w-5 mr-3 text-gray-500 group-hover:text-primary-500" />
              {translations.menu.calendar}
            </span>
          </NavItem>

          <NavItem
            to="/dashboard/projects"
            onClick={closeMobileMenu}
            activeClassName="bg-primary-50 text-primary-600 border-l-4 border-primary-500"
          >
            <span className="flex items-center">
              <Folder className="h-5 w-5 mr-3 text-gray-500 group-hover:text-primary-500" />
              {translations.menu.projects}
              <span className="ml-auto bg-primary-100 text-primary-800 text-xs px-2 py-0.5 rounded-full">
                3
              </span>
            </span>
          </NavItem>

          <NavItem
            to="/dashboard/meetings"
            onClick={closeMobileMenu}
            activeClassName="bg-primary-50 text-primary-600 border-l-4 border-primary-500"
          >
            <span className="flex items-center">
              <Video className="h-5 w-5 mr-3 text-gray-500 group-hover:text-primary-500" />
              {translations.menu.meetings}
            </span>
          </NavItem>

          <NavItem
            to="/dashboard/messages"
            onClick={closeMobileMenu}
            activeClassName="bg-primary-50 text-primary-600 border-l-4 border-primary-500"
          >
            <span className="flex items-center">
              <MessageSquare className="h-5 w-5 mr-3 text-gray-500 group-hover:text-primary-500" />
              Mensajes
              {unreadCount > 0 && (
                <span className="ml-auto bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">
                  {unreadCount}
                </span>
              )}
            </span>
          </NavItem>

          {/* Sección Reclutamiento */}
          <div className="px-3 mt-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {translations.recruitment}
          </div>

          <NavItem
            to="/dashboard/candidates"
            onClick={closeMobileMenu}
            activeClassName="bg-primary-50 text-primary-600 border-l-4 border-primary-500"
          >
            <span className="flex items-center">
              <Users className="h-5 w-5 mr-3 text-gray-500 group-hover:text-primary-500" />
              {translations.menu.candidates}
              <span className="ml-auto bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">
                5 nuevos
              </span>
            </span>
          </NavItem>

          <NavItem
            to="/dashboard/jobs"
            onClick={closeMobileMenu}
            activeClassName="bg-primary-50 text-primary-600 border-l-4 border-primary-500"
          >
            <span className="flex items-center">
              <Briefcase className="h-5 w-5 mr-3 text-gray-500 group-hover:text-primary-500" />
              {translations.menu.jobs}
            </span>
          </NavItem>

          <NavItem
            to="/dashboard/documents"
            onClick={closeMobileMenu}
            activeClassName="bg-primary-50 text-primary-600 border-l-4 border-primary-500"
          >
            <span className="flex items-center">
              <FileText className="h-5 w-5 mr-3 text-gray-500 group-hover:text-primary-500" />
              {translations.menu.documents}
            </span>
          </NavItem>

          <div className="px-3 mt-4 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
            {translations.reports}
          </div>

          <NavItem
            to="/dashboard/analytics"
            onClick={closeMobileMenu}
            activeClassName="bg-primary-50 text-primary-600 border-l-4 border-primary-500"
          >
            <span className="flex items-center">
              <BarChart2 className="h-5 w-5 mr-3 text-gray-500 group-hover:text-primary-500" />
              {translations.menu.analytics}
            </span>
          </NavItem>

          <NavItem
            to="/dashboard/recordings"
            onClick={closeMobileMenu}
            activeClassName="bg-primary-50 text-primary-600 border-l-4 border-primary-500"
          >
            <span className="flex items-center">
              <Film className="h-5 w-5 mr-3 text-gray-500 group-hover:text-primary-500" />
              {translations.menu.recordings}
            </span>
          </NavItem>

          <NavItem
            to="/dashboard/notifications"
            onClick={closeMobileMenu}
            activeClassName="bg-primary-50 text-primary-600 border-l-4 border-primary-500"
          >
            <span className="flex items-center">
              <Bell className="h-5 w-5 mr-3 text-gray-500 group-hover:text-primary-500" />
              Notificaciones
            </span>
          </NavItem>
        </nav>

        {/* Perfil del usuario */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
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
            <button className="text-gray-400 hover:text-gray-500">
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 space-y-1">
            <NavItem
              to="/dashboard/settings"
              onClick={closeMobileMenu}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
            >
              <span className="flex items-center">
                <Settings className="h-5 w-5 mr-2 text-gray-400" />
                {translations.userMenu.settings}
              </span>
            </NavItem>
            <button
              onClick={onLogout}
              className="w-full flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
            >
              <LogOut className="h-5 w-5 mr-2 text-gray-400" />
              {translations.userMenu.logout}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
