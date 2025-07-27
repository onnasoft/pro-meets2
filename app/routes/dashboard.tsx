import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { languageLoader } from "~/loaders/language";
import translations from "~/components/dashboard/translations";
import { Sidebar } from "~/components/dashboard/Sidebar";
import { Header } from "~/components/dashboard/Header";

export const loader = async (args: LoaderFunctionArgs) => {
  const { language } = await languageLoader(args);
  return { language };
};

export default function DashboardLayout() {
  const { language } = useLoaderData<typeof loader>();
  const t = translations[language] || translations.en;

  const user = {
    id: "123",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  };

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
        user={{ name: user.name, role: user.role, avatar: user.avatar }}
        translations={t}
      />

      <div className="flex flex-col flex-1 overflow-hidden">
        <Header
          organizations={organizations}
          currentOrganization={currentOrganization}
          notifications={notifications}
          user={{ name: user.name, email: user.email, avatar: user.avatar }}
          translations={t}
        />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
