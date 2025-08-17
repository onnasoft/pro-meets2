import { statusOrganization } from "~/services/organizations";
import translations from "./translations";

interface StatsCardsProps {
  readonly translations: typeof translations.en;
  readonly status?: Awaited<ReturnType<typeof statusOrganization>> | null;
}

export default function StatsCards({ translations, status }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-4 gap-4 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          {translations.stats.total}
        </h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
          {status?.projects || 0}
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          {translations.stats.planning}
        </h3>
        <p className="text-2xl font-bold text-green-600 dark:text-green-500 mt-1">
          {status?.planning || 0}
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          {translations.stats.inProgress}
        </h3>
        <p className="text-2xl font-bold text-blue-600 dark:text-blue-500 mt-1">
          {status?.inProgress || 0}
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          {translations.stats.completed}
        </h3>
        <p className="text-2xl font-bold text-purple-600 dark:text-purple-500 mt-1">
          {status?.completed || 0}
        </p>
      </div>
    </div>
  );
}
