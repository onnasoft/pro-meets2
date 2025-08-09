import { useLoaderData, useNavigate, useOutletContext } from "react-router";
import { languageLoader } from "~/loaders/language";
import { OrganizationsSection } from "~/components/settings/OrganizationsSection";
import { NotificationsSection } from "~/components/settings/NotificationsSection";
import { ApiKeysSection } from "~/components/settings/ApiKeysSection";
import { WebhooksSection } from "~/components/settings/WebhooksSection";
import translations from "~/components/settings/translations";
import { useState } from "react";
import { useOrganizations } from "~/hooks/organizations";
import { DashboardOutletContext } from "~/types/dashboard";
import { Equal } from "~/rest";
import { deleteOrganizationMember } from "~/services/organization-members";
import useErrorStore from "~/store/error";
import useConfirmationStore from "~/store/confirmation";
import { MemberStatus } from "~/models/OrganizationMember";

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

  const [selectedOrganization, setSelectedOrganization] = useState<
    string | null
  >(null);
  const setErrorState = useErrorStore((state) => state.setError);
  const { open } = useConfirmationStore();

  // Estados para organizaciones
  const { data: organizations = [] } = useOrganizations({
    relations: ["members"],
    where: {
      members: {
        user: {
          id: Equal(user.id),
        },
        status: MemberStatus.ACTIVE,
      },
    },
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

  const handleViewOrganization = (id: string) => {
    navigate(`/dashboard/organizations/${id}`);
  };

  const handleLeaveOrganization = (id: string) => {
    setSelectedOrganization(id);

    open(
      t.organizations.confirmDialog.title,
      t.organizations.confirmDialog.message,
      t.organizations.confirmDialog.confirmText,
      t.organizations.confirmDialog.cancelText,
      deleteOrganization,
      true
    );
  };

  const handleCreateOrganization = () => {
    navigate("/dashboard/organizations/new");
  };

  const deleteOrganization = async () => {
    if (!selectedOrganization) return;

    try {
      await deleteOrganizationMember(selectedOrganization);
      window.location.reload();
    } catch (error) {
      setErrorState(
        "Failed to delete organization",
        error instanceof Error ? error.message : "Unknown error"
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="space-y-8">
        <OrganizationsSection
          translations={t.organizations}
          organizations={organizations}
          onViewOrganization={handleViewOrganization}
          onLeaveOrganization={handleLeaveOrganization}
          onCreateOrganization={handleCreateOrganization}
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
