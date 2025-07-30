import { useLoaderData, useNavigate, useOutletContext } from "@remix-run/react";
import { languageLoader } from "~/loaders/language";
import { OrganizationsSection } from "~/components/settings/OrganizationsSection";
import { NotificationsSection } from "~/components/settings/NotificationsSection";
import { ApiKeysSection } from "~/components/settings/ApiKeysSection";
import { WebhooksSection } from "~/components/settings/WebhooksSection";
import translations from "~/components/settings/translations";
import { useState } from "react";
import { useOrganizations } from "~/hooks/organizations";
import { DashboardOutletContext } from "~/types/dashboard";

export { languageLoader as loader } from "~/loaders/language";

export default function SettingsPage() {
  const { language } = useLoaderData<typeof languageLoader>();
  const t = translations[language] || translations.en;
  const { user } = useOutletContext<DashboardOutletContext>();

  const navigate = useNavigate();

  // Estados para los toggle switches
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [meetingReminders, setMeetingReminders] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(false);

  // Estados para API keys y webhooks
  const [apiKeys, setApiKeys] = useState<string[]>([]);
  const [webhooks, setWebhooks] = useState<string[]>([]);
  const [newApiKey, setNewApiKey] = useState("");
  const [newWebhook, setNewWebhook] = useState("");

  // Estados para organizaciones
  const { data: organizations = [] } = useOrganizations({
    relations: ["members"],
    where: {
      "members.user.id": {
        value: user.id,
        op: "eq",
      },
    } as any,
  });

  const addApiKey = () => {
    if (newApiKey.trim()) {
      setApiKeys([...apiKeys, newApiKey]);
      setNewApiKey("");
    }
  };

  const addWebhook = () => {
    if (newWebhook.trim()) {
      setWebhooks([...webhooks, newWebhook]);
      setNewWebhook("");
    }
  };

  const removeApiKey = (index: number) => {
    setApiKeys(apiKeys.filter((_, i) => i !== index));
  };

  const removeWebhook = (index: number) => {
    setWebhooks(webhooks.filter((_, i) => i !== index));
  };

  const viewOrganization = (id: string) => {
    navigate(`/dashboard/organizations/${id}`);
  };

  const leaveOrganization = (id: string) => {
    console.log("Salir de organización:", id);
  };

  const createOrganization = () => {
    navigate("/dashboard/organizations/new");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{t.title}</h1>
        <p className="text-gray-600 mt-2">{t.subtitle}</p>
      </div>

      <div className="space-y-8">
        <OrganizationsSection
          translations={t.organizations}
          organizations={organizations}
          onViewOrganization={viewOrganization}
          onLeaveOrganization={leaveOrganization}
          onCreateOrganization={createOrganization}
        />

        <NotificationsSection
          translations={t.notifications}
          emailEnabled={emailEnabled}
          meetingReminders={meetingReminders}
          weeklySummary={weeklySummary}
          onToggleEmail={() => setEmailEnabled(!emailEnabled)}
          onToggleReminders={() => setMeetingReminders(!meetingReminders)}
          onToggleSummary={() => setWeeklySummary(!weeklySummary)}
        />

        <ApiKeysSection
          translations={t.apiKeys}
          apiKeys={apiKeys}
          newApiKey={newApiKey}
          onAddApiKey={addApiKey}
          onRemoveApiKey={removeApiKey}
          onApiKeyChange={setNewApiKey}
        />

        <WebhooksSection
          translations={t.webhooks}
          webhooks={webhooks}
          newWebhook={newWebhook}
          onAddWebhook={addWebhook}
          onRemoveWebhook={removeWebhook}
          onWebhookChange={setNewWebhook}
        />
      </div>
    </div>
  );
}
