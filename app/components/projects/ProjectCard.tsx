import { Calendar, Users } from "lucide-react";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import translations from "./translations";

interface ProjectCardProps {
  readonly project: {
    id: string;
    name: string;
    description: string;
    status: string;
    progress: number;
    openPositions: number;
    totalPositions: number;
    startDate: string;
    endDate: string;
    teamMembers: number;
  };
  readonly translations: typeof translations.en;
}

export function ProjectCard({ project, translations }: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
            {project.name}
          </h3>
          <ProjectStatusBadge status={project.status} translations={translations} />
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          {project.description}
        </p>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
            <span>
              {translations.stats.hiring}: {project.openPositions}/{project.totalPositions}
            </span>
            <span>{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${
                project.status === "completed"
                  ? "bg-green-500"
                  : project.status === "active"
                  ? "bg-blue-500"
                  : project.status === "onHold"
                  ? "bg-yellow-500"
                  : "bg-gray-500"
              }`}
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{project.startDate}</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Users className="h-4 w-4 mr-1" />
            <span>{project.teamMembers}</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3 flex justify-end">
        <button className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-500">
          View details →
        </button>
      </div>
    </div>
  );
}
