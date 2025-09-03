import { useLoaderData } from "react-router";
import { languageLoader } from "~/loaders/language";
import { NotificationsSection } from "~/components/settings/NotificationsSection";
import translations from "~/components/settings/translations";
import { useState } from "react";

export { languageLoader as loader } from "~/loaders/language";

export default function SettingsPage() {
  const { language } = useLoaderData<typeof languageLoader>();
  const t = translations[language] || translations.en;

  const [emailEnabled, setEmailEnabled] = useState(true);
  const [meetingReminders, setMeetingReminders] = useState(true);
  const [weeklySummary, setWeeklySummary] = useState(false);

  return (
    <div className="p-4 flex-1">
      <div className="space-y-8">
        <NotificationsSection
          translations={t.notifications}
          emailEnabled={emailEnabled}
          meetingReminders={meetingReminders}
          weeklySummary={weeklySummary}
          onToggleEmail={() => setEmailEnabled(!emailEnabled)}
          onToggleReminders={() => setMeetingReminders(!meetingReminders)}
          onToggleSummary={() => setWeeklySummary(!weeklySummary)}
        />
      </div>
    </div>
  );
}
