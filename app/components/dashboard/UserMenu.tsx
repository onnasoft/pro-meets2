import {
  User,
  Settings,
  CreditCard,
  Shield,
  LogOut,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "@remix-run/react";
import { MenuItem } from "./MenuItem";
import translations from "./translations";
import { User as UserModel } from "~/types/models";
import { getAvatarUrl } from "~/utils/gravatar";
import useAuthStore from "~/store/auth";

interface UserMenuProps {
  readonly user: UserModel;
  readonly translations: typeof translations.en;
}

export function UserMenu({ user, translations }: UserMenuProps) {
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
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-sm rounded-full focus:outline-none group"
      >
        <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
          <img
            src={getAvatarUrl(user)}
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="ml-2 hidden md:inline font-medium text-gray-700 group-hover:text-primary-600">
          {user.name}
        </span>
        {isOpen ? (
          <ChevronUp className="ml-1 w-4 h-4 text-gray-500 hidden md:block" />
        ) : (
          <ChevronDown className="ml-1 w-4 h-4 text-gray-500 hidden md:block" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 divide-y divide-gray-100">
          <div className="px-4 py-3">
            <p className="text-sm font-medium text-gray-900">{user.name}</p>
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
          </div>

          <div className="py-1">
            <MenuItem
              icon={<User className="w-4 h-4 mr-3 text-gray-400" />}
              onClick={() => {
                navigate("/dashboard/profile");
                setIsOpen(false);
              }}
            >
              {translations.userMenu.profile}
            </MenuItem>
            <MenuItem
              icon={<Settings className="w-4 h-4 mr-3 text-gray-400" />}
              onClick={() => {
                navigate("/dashboard/settings");
                setIsOpen(false);
              }}
            >
              {translations.userMenu.settings}
            </MenuItem>
            <MenuItem
              icon={<CreditCard className="w-4 h-4 mr-3 text-gray-400" />}
              onClick={() => {
                navigate("/dashboard/billing");
                setIsOpen(false);
              }}
            >
              {translations.userMenu.billing}
            </MenuItem>
            <MenuItem
              icon={<Shield className="w-4 h-4 mr-3 text-gray-400" />}
              onClick={() => {
                navigate("/dashboard/security");
                setIsOpen(false);
              }}
            >
              {translations.userMenu.security}
            </MenuItem>
          </div>

          <div className="py-1">
            <MenuItem
              icon={<LogOut className="w-4 h-4 mr-3 text-gray-400" />}
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
