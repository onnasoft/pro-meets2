import translations from "./translations";

interface ProjectStatusBadgeProps {
  readonly status: string;
  readonly translations: typeof translations.en;
}

export function ProjectStatusBadge({
  status,
  translations,
}: ProjectStatusBadgeProps) {
  const statusClasses = {
    active: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    planning: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    onHold:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    completed:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  };

  const statusText = {
    active: translations.active,
    planning: translations.planning,
    onHold: translations.onHold,
    completed: translations.completed,
  };

  return (
    <span
      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
        statusClasses[status as keyof typeof statusClasses]
      }`}
    >
      {statusText[status as keyof typeof statusText]}
    </span>
  );
}
