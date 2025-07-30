import { Cpu } from "lucide-react";
import translations from "./translations";

interface WebhooksSectionProps {
  readonly translations: typeof translations.en.webhooks;
  readonly webhooks: string[];
  readonly newWebhook: string;
  readonly onAddWebhook: () => void;
  readonly onRemoveWebhook: (index: number) => void;
  readonly onWebhookChange: (value: string) => void;
}

export function WebhooksSection({
  translations,
  webhooks,
  newWebhook,
  onAddWebhook,
  onRemoveWebhook,
  onWebhookChange,
}: WebhooksSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center mb-4">
        <Cpu className="h-5 w-5 text-primary-600 mr-2" />
        <h2 className="text-xl font-semibold">{translations.title}</h2>
      </div>

      <div className="space-y-4">
        <div className="flex">
          <input
            type="text"
            value={newWebhook}
            onChange={(e) => onWebhookChange(e.target.value)}
            placeholder={translations.placeholder}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
          <button
            onClick={onAddWebhook}
            className="px-4 py-2 bg-primary-600 text-white rounded-r-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {translations.add}
          </button>
        </div>

        {webhooks.length > 0 ? (
          <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
            {webhooks.map((webhook, index) => (
              <li
                key={webhook}
                className="flex items-center justify-between px-4 py-3"
              >
                <span className="text-sm break-all">{webhook}</span>
                <button
                  onClick={() => onRemoveWebhook(index)}
                  className="text-red-600 hover:text-red-800 ml-2 flex-shrink-0"
                >
                  {translations.delete}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">{translations.noWebhooks}</p>
        )}
      </div>
    </div>
  );
}
