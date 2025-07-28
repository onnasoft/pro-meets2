import { Outlet, useLoaderData } from "@remix-run/react";
import translations from "~/components/dashboard/translations";
import { Sidebar } from "~/components/dashboard/Sidebar";
import { Header } from "~/components/dashboard/Header";
import { sessionLoader } from "~/loaders/session";

export { sessionLoader as loader } from "~/loaders/session";

export default function DashboardLayout() {
  const { language, user } = useLoaderData<typeof sessionLoader>();
  const t = translations[language] || translations.en;

  // Datos de ejemplo
  const organizations = [
    { id: "1", name: "Tech Solutions Inc.", current: true },
    { id: "2", name: "Innovate Labs" },
    { id: "3", name: "Digital Creations" },
  ];

  const currentOrganization =
    organizations.find((org) => org.current) || organizations[0];

  // Notificaciones de ejemplo
  const notifications = [
    {
      id: 1,
      title: "New candidate applied",
      description: "Maria Garcia applied for Frontend Developer position",
      time: "10 minutes ago",
      read: false,
      icon: "👤",
    },
    {
      id: 2,
      title: "Interview scheduled",
      description: "Interview with Juan Perez tomorrow at 10:00 AM",
      time: "2 hours ago",
      read: true,
      icon: "📅",
    },
    {
      id: 3,
      title: "Recording ready",
      description: "Your interview recording with Ana Martinez is available",
      time: "Yesterday",
      read: true,
      icon: "🎥",
    },
  ];

  return (
    <div className="flex h-screen bg-primary-50">
      <Sidebar
        user={{ name: user.name, role: user.role, avatarUrl: user.avatarUrl }}
        translations={t}
      />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header
          organizations={organizations}
          currentOrganization={currentOrganization}
          notifications={notifications}
          user={{
            name: user.name,
            email: user.email,
            avatarUrl: user.avatarUrl,
          }}
          translations={t}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
