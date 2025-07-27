// app/routes/dashboard.tsx
import { Outlet, Link, NavLink, useNavigate } from "@remix-run/react";
import {
  User,
  Settings,
  Bell,
  LogOut,
  CreditCard,
  Shield,
  ChevronDown,
  ChevronUp,
  Plus,
  Building2,
  ChevronsUpDown
} from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function DashboardLayout() {
  const user = {
    id: "123",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  };

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isOrgMenuOpen, setIsOrgMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationsRef = useRef<HTMLDivElement>(null);
  const orgMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Datos de ejemplo
  const organizations = [
    { id: "1", name: "Tech Solutions Inc.", current: true },
    { id: "2", name: "Innovate Labs" },
    { id: "3", name: "Digital Creations" },
  ];

  const currentOrganization = organizations.find(org => org.current) || organizations[0];

  // Notificaciones de ejemplo
  const notifications = [
    {
      id: 1,
      title: "Nuevo candidato aplicó",
      description: "María García aplicó a la vacante de Frontend Developer",
      time: "Hace 10 minutos",
      read: false,
      icon: "👤",
    },
    {
      id: 2,
      title: "Entrevista programada",
      description: "Entrevista con Juan Pérez mañana a las 10:00 AM",
      time: "Hace 2 horas",
      read: true,
      icon: "📅",
    },
    {
      id: 3,
      title: "Grabación lista",
      description: "La grabación de tu entrevista con Ana Martínez está disponible",
      time: "Ayer",
      read: true,
      icon: "🎥",
    },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  // Cerrar menús al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
      if (notificationsRef.current && !notificationsRef.current.contains(event.target as Node)) {
        setIsNotificationsOpen(false);
      }
      if (orgMenuRef.current && !orgMenuRef.current.contains(event.target as Node)) {
        setIsOrgMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex h-screen bg-primary-50">
      {/* Sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 bg-white shadow-sm">
          {/* Logo */}
          <div className="flex items-center h-16 px-4 border-b border-gray-200 bg-primary-500">
            <Link to="/dashboard" className="text-xl font-bold text-white">
              RecruitFlow
            </Link>
          </div>

          {/* Menú principal */}
          <nav className="flex-1 px-2 py-6 space-y-1">
            <NavItem
              to="/dashboard"
              activeClassName="bg-primary-100 text-primary-700"
            >
              <span className="flex items-center">
                <span className="mr-3">📅</span> Calendario
              </span>
            </NavItem>
            <NavItem
              to="/dashboard/meetings"
              activeClassName="bg-primary-100 text-primary-700"
            >
              <span className="flex items-center">
                <span className="mr-3">🎥</span> Reuniones
              </span>
            </NavItem>
            <NavItem
              to="/dashboard/candidates"
              activeClassName="bg-primary-100 text-primary-700"
            >
              <span className="flex items-center">
                <span className="mr-3">👥</span> Candidatos
              </span>
            </NavItem>
            <NavItem
              to="/dashboard/jobs"
              activeClassName="bg-primary-100 text-primary-700"
            >
              <span className="flex items-center">
                <span className="mr-3">💼</span> Vacantes
              </span>
            </NavItem>
            <NavItem
              to="/dashboard/analytics"
              activeClassName="bg-primary-100 text-primary-700"
            >
              <span className="flex items-center">
                <span className="mr-3">📊</span> Analíticas
              </span>
            </NavItem>
            <NavItem
              to="/dashboard/recordings"
              activeClassName="bg-primary-100 text-primary-700"
            >
              <span className="flex items-center">
                <span className="mr-3">🎬</span> Grabaciones
              </span>
            </NavItem>
          </nav>

          {/* Perfil del usuario en el sidebar */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={user.avatar}
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

      {/* Área principal */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header superior */}
        <header className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-sm">
          {/* Menú móvil (opcional) */}
          <div className="flex items-center md:hidden">
            <button className="p-2 text-gray-500 rounded-md hover:text-gray-600 hover:bg-gray-100">
              Menú
            </button>
          </div>

          {/* Selector de organización */}
          <div className="flex items-center">
            <div className="relative" ref={orgMenuRef}>
              <button
                onClick={() => setIsOrgMenuOpen(!isOrgMenuOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
              >
                <Building2 className="h-5 w-5 text-primary-600" />
                <span className="font-medium text-gray-700">
                  {currentOrganization?.name}
                </span>
                <ChevronsUpDown className="h-4 w-4 text-gray-400" />
              </button>

              {/* Menú desplegable de organizaciones */}
              {isOrgMenuOpen && (
                <div className="absolute left-0 mt-2 w-56 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 divide-y divide-gray-100">
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium text-gray-900">Organizaciones</p>
                  </div>
                  
                  <div className="py-1">
                    {organizations.map((org) => (
                      <button
                        key={org.id}
                        onClick={() => {
                          // Lógica para cambiar de organización
                          setIsOrgMenuOpen(false);
                        }}
                        className={`w-full flex items-center px-4 py-2 text-sm ${
                          org.current 
                            ? 'bg-primary-50 text-primary-700' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <Building2 className="w-4 h-4 mr-3 text-gray-400" />
                        {org.name}
                        {org.current && (
                          <span className="ml-auto inline-block h-2 w-2 rounded-full bg-primary-500"></span>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  <div className="py-1">
                    <button
                      onClick={() => {
                        navigate("/organizations/new");
                        setIsOrgMenuOpen(false);
                      }}
                      className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Plus className="w-4 h-4 mr-3 text-gray-400" />
                      Crear organización
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Acciones del usuario */}
          <div className="flex items-center space-x-4">
            {/* Notificaciones */}
            <div className="relative" ref={notificationsRef}>
              <button
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2 text-gray-500 rounded-full hover:text-gray-600 hover:bg-gray-100 relative"
              >
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-error-500 rounded-full">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Panel de notificaciones */}
              {isNotificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 divide-y divide-gray-100">
                  <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
                    <p className="text-sm font-medium text-gray-900">
                      Notificaciones
                    </p>
                  </div>
                  <div className="max-h-96 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`px-4 py-3 hover:bg-gray-50 ${
                            !notification.read ? "bg-primary-50" : ""
                          }`}
                        >
                          <div className="flex items-start">
                            <div className="flex-shrink-0 pt-0.5 text-lg mr-3">
                              {notification.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900">
                                {notification.title}
                              </p>
                              <p className="text-sm text-gray-500 truncate">
                                {notification.description}
                              </p>
                              <p className="mt-1 text-xs text-gray-400">
                                {notification.time}
                              </p>
                            </div>
                            {!notification.read && (
                              <div className="ml-2 flex-shrink-0">
                                <span className="inline-block w-2 h-2 rounded-full bg-primary-500"></span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-6 text-center">
                        <p className="text-sm text-gray-500">
                          No hay notificaciones nuevas
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="px-4 py-2 bg-gray-50 text-center">
                    <button className="text-sm font-medium text-primary-600 hover:text-primary-500">
                      Ver todas
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Menú desplegable del usuario */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center text-sm rounded-full focus:outline-none group"
              >
                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="ml-2 hidden md:inline font-medium text-gray-700 group-hover:text-primary-600">
                  {user.name}
                </span>
                {isUserMenuOpen ? (
                  <ChevronUp className="ml-1 w-4 h-4 text-gray-500 hidden md:block" />
                ) : (
                  <ChevronDown className="ml-1 w-4 h-4 text-gray-500 hidden md:block" />
                )}
              </button>

              {/* Menú desplegable */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 divide-y divide-gray-100">
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium text-gray-900">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {user.email}
                    </p>
                  </div>

                  <div className="py-1">
                    <MenuItem
                      icon={<User className="w-4 h-4 mr-3 text-gray-400" />}
                      onClick={() => navigate("/dashboard/profile")}
                    >
                      Perfil
                    </MenuItem>
                    <MenuItem
                      icon={<Settings className="w-4 h-4 mr-3 text-gray-400" />}
                      onClick={() => navigate("/dashboard/settings")}
                    >
                      Configuración
                    </MenuItem>
                    <MenuItem
                      icon={
                        <CreditCard className="w-4 h-4 mr-3 text-gray-400" />
                      }
                      onClick={() => navigate("/dashboard/billing")}
                    >
                      Facturación
                    </MenuItem>
                    <MenuItem
                      icon={<Shield className="w-4 h-4 mr-3 text-gray-400" />}
                      onClick={() => navigate("/dashboard/security")}
                    >
                      Seguridad
                    </MenuItem>
                  </div>

                  <div className="py-1">
                    <MenuItem
                      icon={<LogOut className="w-4 h-4 mr-3 text-gray-400" />}
                      onClick={() => navigate("/logout")}
                      isDanger
                    >
                      Cerrar sesión
                    </MenuItem>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Contenido principal */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

interface NavItemProps {
  readonly to: string;
  readonly children: React.ReactNode;
  readonly activeClassName?: string;
}

function NavItem({ to, children, activeClassName = "" }: NavItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive }: { isActive: boolean }) =>
        `block px-3 py-2 text-sm font-medium rounded-md ${
          isActive
            ? activeClassName
            : "text-gray-700 hover:bg-primary-50 hover:text-primary-600"
        }`
      }
      end
    >
      {children}
    </NavLink>
  );
}

interface MenuItemProps {
  readonly icon: React.ReactNode;
  readonly children: React.ReactNode;
  readonly onClick: () => void;
  readonly isDanger?: boolean;
}

function MenuItem({
  icon,
  children,
  onClick,
  isDanger = false,
}: MenuItemProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center px-4 py-2 text-sm ${
        isDanger
          ? "text-error-600 hover:bg-error-50"
          : "text-gray-700 hover:bg-gray-50"
      }`}
    >
      {icon}
      <span className={isDanger ? "text-error-600" : "text-gray-700"}>
        {children}
      </span>
    </button>
  );
}