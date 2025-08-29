import { Bell, Mail, Calendar } from "lucide-react";
import translations from "./translations";

interface NotificationsSectionProps {
  readonly translations: typeof translations.en.notifications;
  readonly emailEnabled: boolean;
  readonly meetingReminders: boolean;
  readonly weeklySummary: boolean;
  readonly onToggleEmail: () => void;
  readonly onToggleReminders: () => void;
  readonly onToggleSummary: () => void;
}

export function NotificationsSection({
  translations,
  emailEnabled,
  meetingReminders,
  weeklySummary,
  onToggleEmail,
  onToggleReminders,
  onToggleSummary,
}: NotificationsSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-xs border border-gray-200 p-6">
      <div className="flex items-center mb-4">
        <Bell className="h-5 w-5 text-primary-600 mr-2" />
        <h2 className="text-xl font-semibold">{translations.title}</h2>
      </div>

      <div className="space-y-4">
        {/* Email */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-gray-500 mr-2" />
            <div>
              <h3 className="font-medium">{translations.email.label}</h3>
              <p className="text-sm text-gray-500">{translations.email.description}</p>
            </div>
          </div>
          <button
            onClick={onToggleEmail}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-hidden ${
              emailEnabled ? "bg-primary-600" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                emailEnabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* Meeting Reminders */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-500 mr-2" />
            <div>
              <h3 className="font-medium">{translations.reminders.label}</h3>
              <p className="text-sm text-gray-500">{translations.reminders.description}</p>
            </div>
          </div>
          <button
            onClick={onToggleReminders}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-hidden ${
              meetingReminders ? "bg-primary-600" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                meetingReminders ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>

        {/* Weekly Summary */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Mail className="h-5 w-5 text-gray-500 mr-2" />
            <div>
              <h3 className="font-medium">{translations.summary.label}</h3>
              <p className="text-sm text-gray-500">{translations.summary.description}</p>
            </div>
          </div>
          <button
            onClick={onToggleSummary}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-hidden ${
              weeklySummary ? "bg-primary-600" : "bg-gray-200"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                weeklySummary ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
