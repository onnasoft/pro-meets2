import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, ChevronDown, User, Settings, LogOut } from 'lucide-react';
import { User as UserType } from '@onnasoft/pro-meets-core';
import { getAvatarUrl } from '~/utils/gravatar';
import { Link } from 'react-router';

interface NetworkHeaderProps {
  currentUser: UserType;
  unreadCount: number;
  onChatClick: () => void;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onLogout?: () => void;
}

export const NetworkHeader: React.FC<NetworkHeaderProps> = ({
  currentUser,
  unreadCount,
  onChatClick,
  onProfileClick,
  onSettingsClick,
  onLogout
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Logo a la izquierda */}
      <div className="flex items-center gap-2">
        <h1 className="text-xl font-bold text-primary-600">
          <Link to="/">
            ProMeets
          </Link>
        </h1>
      </div>

      {/* Barra de búsqueda centrada */}
      <div className="flex-1 max-w-2xl mx-8">
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search people, companies, or posts..."
            className="w-full pl-12 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Iconos de acción y menú de usuario */}
      <div className="flex items-center gap-4">

        {/* Botón de Notificaciones */}
        <button className="p-2 rounded-full hover:bg-gray-100 relative transition-colors">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            3
          </span>
        </button>

        {/* Menú de usuario desplegable */}
        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <img
              src={getAvatarUrl(currentUser)}
              alt={currentUser.name}
              className="w-8 h-8 rounded-full border-2 border-transparent hover:border-primary-300 transition-colors"
            />
            <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-50">
              {/* Información del usuario */}
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="font-medium text-gray-900 text-sm">{currentUser.name}</p>
                <p className="text-xs text-gray-500 truncate">{currentUser.email}</p>
              </div>

              {/* Opciones del menú */}
              <Link
                to="/profile"
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
              >
                <User className="w-4 h-4" />
                My Profile
              </Link>

              <Link
                to="/settings"
                className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
              >
                <Settings className="w-4 h-4" />
                Settings
              </Link>

              {/* Separador */}
              <div className="border-t border-gray-100 my-1" />

              <button
                onClick={() => {
                  onLogout?.();
                  setIsMenuOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};