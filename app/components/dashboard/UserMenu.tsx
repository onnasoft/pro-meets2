import {
  User,
  Settings,
  CreditCard,
  LogOut,
  ChevronDown,
  ChevronUp,
  Mail,
  HelpCircle,
  Lock,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { MenuItem } from "./MenuItem";
import translations from "./translations";
import { User as UserModel } from "~/types/models";
import { getAvatarUrl } from "~/utils/gravatar";
import useAuthStore from "~/store/auth";

interface UserMenuProps {
  readonly user: UserModel;
  readonly translations: typeof translations.en;
  readonly pendingInvites?: number;
  readonly className?: string;
}

export function UserMenu({
  user,
  translations,
  pendingInvites = 0,
  className = "",
}: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const auth = useAuthStore();

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
    <div className={`relative ${className}`} ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 text-sm rounded-full focus:outline-none transition-colors ${
          isOpen ? "ring-2 ring-primary-500" : ""
        }`}
        aria-label="Menú de usuario"
        aria-expanded={isOpen}
      >
        {/* Badge de notificaciones */}
        {pendingInvites > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-sm">
            {pendingInvites}
          </span>
        )}

        {/* Avatar */}
        <div className="relative">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-primary-500 to-primary-600 p-0.5">
            <div className="w-full h-full rounded-full bg-white overflow-hidden">
              <img
                src={getAvatarUrl(user)}
                alt={user.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Nombre (solo desktop) */}
        <div className="hidden md:flex flex-col items-start">
          <span className="font-medium text-gray-700 line-clamp-1 max-w-[120px]">
            {user.name}
          </span>
          <span className="text-xs text-gray-500">{user.role}</span>
        </div>

        {/* Icono de flecha */}
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-gray-500 hidden md:block" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-500 hidden md:block" />
        )}
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 origin-top-right bg-white rounded-lg shadow-xl ring-1 ring-gray-200 focus:outline-none z-50 divide-y divide-gray-100 overflow-hidden animate-fade-in">
          {/* Encabezado */}
          <div className="px-4 py-3 bg-gradient-to-r from-primary-50 to-primary-100">
            <p className="text-sm font-medium text-gray-900 truncate">
              {user.name}
            </p>
            <p className="text-xs text-gray-600 truncate">{user.email}</p>
          </div>

          {/* Sección principal */}
          <div className="py-1">
            <MenuItem
              icon={<User className="w-4 h-4 text-primary-600" />}
              onClick={() => {
                navigate("/dashboard/profile");
                setIsOpen(false);
              }}
              isHighlighted
            >
              {translations.userMenu.profile}
            </MenuItem>

            <MenuItem
              icon={<Mail className="w-4 h-4 text-blue-600" />}
              onClick={() => {
                navigate("/dashboard/invitations");
                setIsOpen(false);
              }}
              badge={pendingInvites > 0 ? pendingInvites : undefined}
            >
              {translations.userMenu.invitations}
            </MenuItem>

            <MenuItem
              icon={<Settings className="w-4 h-4 text-gray-600" />}
              onClick={() => {
                navigate("/dashboard/settings");
                setIsOpen(false);
              }}
            >
              {translations.userMenu.settings}
            </MenuItem>
          </div>

          {/* Sección de seguridad */}
          <div className="py-1">
            <MenuItem
              icon={<CreditCard className="w-4 h-4 text-purple-600" />}
              onClick={() => {
                navigate("/dashboard/billing");
                setIsOpen(false);
              }}
            >
              {translations.userMenu.billing}
            </MenuItem>
            <MenuItem
              icon={<Lock className="w-4 h-4 text-amber-600" />}
              onClick={() => {
                navigate("/dashboard/security");
                setIsOpen(false);
              }}
            >
              {translations.userMenu.security}
            </MenuItem>
            <MenuItem
              icon={<HelpCircle className="w-4 h-4 text-gray-600" />}
              onClick={() => {
                navigate("/help");
                setIsOpen(false);
              }}
            >
              Soporte
            </MenuItem>
          </div>

          {/* Cerrar sesión */}
          <div className="py-1">
            <MenuItem
              icon={<LogOut className="w-4 h-4 text-red-600" />}
              onClick={() => {
                auth.clearTokens();
                navigate("/");
                setIsOpen(false);
              }}
              isDanger
            >
              {translations.userMenu.logout}
            </MenuItem>
          </div>
        </div>
      )}
    </div>
  );
}
