import translations from "./translations";

interface StatsCardsProps {
  readonly translations: typeof translations.en;
}

export default function StatsCards({ translations }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          {translations.stats.total}
        </h3>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
          24
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          {translations.stats.active}
        </h3>
        <p className="text-2xl font-bold text-green-600 dark:text-green-500 mt-1">
          12
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          {translations.stats.hiring}
        </h3>
        <p className="text-2xl font-bold text-blue-600 dark:text-blue-500 mt-1">
          8
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">
          {translations.stats.completed}
        </h3>
        <p className="text-2xl font-bold text-purple-600 dark:text-purple-500 mt-1">
          4
        </p>
      </div>
    </div>
  );
}
