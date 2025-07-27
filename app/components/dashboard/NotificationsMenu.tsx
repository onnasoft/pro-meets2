import { Bell } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import translations from "./translations";

interface Notification {
  id: number;
  title: string;
  description: string;
  time: string;
  read: boolean;
  icon: string;
}

interface NotificationsMenuProps {
  readonly notifications: Notification[];
  readonly translations: typeof translations.en;
}

export function NotificationsMenu({
  notifications,
  translations,
}: NotificationsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const unreadCount = notifications.filter((n) => !n.read).length;

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
        className="p-2 text-gray-500 rounded-full hover:text-gray-600 hover:bg-gray-100 relative"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-error-500 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 divide-y divide-gray-100">
          <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
            <p className="text-sm font-medium text-gray-900">
              {translations.notifications.title}
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
                  {translations.notifications.noNew}
                </p>
              </div>
            )}
          </div>
          <div className="px-4 py-2 bg-gray-50 text-center">
            <button className="text-sm font-medium text-primary-600 hover:text-primary-500">
              {translations.notifications.viewAll}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
