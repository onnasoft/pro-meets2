import { Key } from "lucide-react";
import translations from "./translations";

interface ApiKeysSectionProps {
  readonly translations: typeof translations.en.apiKeys;
  readonly apiKeys: string[];
  readonly newApiKey: string;
  readonly onAddApiKey: () => void;
  readonly onRemoveApiKey: (index: number) => void;
  readonly onApiKeyChange: (value: string) => void;
}

export function ApiKeysSection({
  translations,
  apiKeys,
  newApiKey,
  onAddApiKey,
  onRemoveApiKey,
  onApiKeyChange,
}: ApiKeysSectionProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center mb-4">
        <Key className="h-5 w-5 text-primary-600 mr-2" />
        <h2 className="text-xl font-semibold">{translations.title}</h2>
      </div>

      <div className="space-y-4">
        <div className="flex">
          <input
            type="text"
            value={newApiKey}
            onChange={(e) => onApiKeyChange(e.target.value)}
            placeholder={translations.placeholder}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
          <button
            onClick={onAddApiKey}
            className="px-4 py-2 bg-primary-600 text-white rounded-r-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            {translations.add}
          </button>
        </div>

        {apiKeys.length > 0 ? (
          <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
            {apiKeys.map((key, index) => (
              <li
                key={key}
                className="flex items-center justify-between px-4 py-3"
              >
                <span className="font-mono text-sm">{key}</span>
                <button
                  onClick={() => onRemoveApiKey(index)}
                  className="text-red-600 hover:text-red-800"
                >
                  {translations.delete}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">{translations.noKeys}</p>
        )}
      </div>
    </div>
  );
}
