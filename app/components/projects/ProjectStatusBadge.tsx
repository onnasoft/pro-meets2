import { ProjectStatus } from "~/models/Project";
import translations from "./translations";

interface ProjectStatusBadgeProps {
  readonly status: string;
  readonly translations: typeof translations.en;
}

export function ProjectStatusBadge({
  status,
  translations,
}: ProjectStatusBadgeProps) {
  const statusClasses: Record<ProjectStatus, string> = {
    [ProjectStatus.CANCELLED]:
      "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    [ProjectStatus.PLANNING]:
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    [ProjectStatus.IN_PROGRESS]:
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    [ProjectStatus.ON_HOLD]:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    [ProjectStatus.COMPLETED]:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  };

  const statusText: Record<ProjectStatus, string> = {
    [ProjectStatus.CANCELLED]: translations.cancelled,
    [ProjectStatus.PLANNING]: translations.planning,
    [ProjectStatus.IN_PROGRESS]: translations.inProgress,
    [ProjectStatus.ON_HOLD]: translations.onHold,
    [ProjectStatus.COMPLETED]: translations.completed,
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
