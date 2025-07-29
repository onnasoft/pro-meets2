import {
  Outlet,
  useLoaderData,
  useLocation,
  useNavigate,
} from "@remix-run/react";
import translations from "~/components/dashboard/translations";
import { Sidebar } from "~/components/dashboard/Sidebar";
import { Header } from "~/components/dashboard/Header";
import { sessionLoader } from "~/loaders/session";
import { Organization, User } from "~/types/models";
import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import { languageLoader } from "~/loaders/language";
import { Language } from "~/utils/language";
import { organizationsLoader } from "~/loaders/organizations";
import { useEffect, useMemo } from "react";
import useOrganizationStore from "~/store/organization";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface LoaderData {
  language: Language;
  user: User;
  organizations: Organization[];
}

export async function loader(args: LoaderFunctionArgs) {
  try {
    const result = await Promise.all([
      languageLoader(args),
      sessionLoader(args),
      organizationsLoader(args),
    ]);

    if (!result || result.length < 2) {
      throw new Error("Failed to load necessary data");
    }
    if ("organizations" in result[2] === false) {
      throw new Error("Organizations data is missing");
    }
    if ("user" in result[1] === false) {
      throw new Error("User data is missing");
    }

    const languageData = result[0] as { language: Language };
    const sessionData = result[1] as { user: User };
    const organizationsData = result[2] as { organizations: Organization[] };

    return {
      language: languageData.language,
      user: sessionData.user,
      organizations: organizationsData.organizations,
    };
  } catch {
    return redirect("/login");
  }
}

export default function DashboardLayout() {
  const { language, user, organizations } = useLoaderData<typeof loader>();
  const t = translations[language] || translations.en;
  const navigation = useNavigate();
  const location = useLocation();

  const queryClient = useMemo(() => new QueryClient(), []);

  const setCurrentOrganizationId = useOrganizationStore(
    (state) => state.setCurrentOrganizationId
  );
  const currentOrganizationId = useOrganizationStore(
    (state) => state.currentOrganizationId
  );

  const currentOrganization = organizations.find(
    (org) => org.id === currentOrganizationId
  );

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

  useEffect(() => {
    if (organizations.length > 0) return;
    if (location.pathname === "/dashboard/organizations/new") return;

    navigation("/dashboard/organizations/new");
  }, [organizations]);

  useEffect(() => {
    if (!currentOrganizationId && organizations.length > 0) {
      const currentOrg = organizations.find((org) => org.current);
      if (currentOrg) {
        setCurrentOrganizationId(currentOrg.id);
      } else {
        const firstOrg = organizations[0];
        if (!firstOrg) return;
        setCurrentOrganizationId(firstOrg.id);
      }
    }
  }, [currentOrganizationId, organizations, navigation]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen bg-primary-50">
        <Sidebar user={user} translations={t} />

        <div className="flex flex-col flex-1 overflow-hidden">
          <Header
            organizations={organizations}
            currentOrganization={currentOrganization}
            notifications={notifications}
            user={user}
            translations={t}
          />

          <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
            <Outlet context={{ user, organizations, language }} />
          </main>
        </div>
      </div>
    </QueryClientProvider>
  );
}
