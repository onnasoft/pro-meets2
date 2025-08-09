import { Calendar, Users } from "lucide-react";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import translations from "./translations";
import { Project, ProjectStatus } from "~/models/Project";
import HTMLView from "../HTMLView";
import { Link } from "react-router";

interface ProjectCardProps {
  readonly project: Project;
  readonly translations: typeof translations.en;
}

export function ProjectCard({ project, translations }: ProjectCardProps) {
  let progressBarColor = "bg-gray-500";
  if (project.status === ProjectStatus.COMPLETED) {
    progressBarColor = "bg-green-500";
  } else if (project.status === ProjectStatus.IN_PROGRESS) {
    progressBarColor = "bg-blue-500";
  } else if (project.status === ProjectStatus.ON_HOLD) {
    progressBarColor = "bg-yellow-500";
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .html-view .ProseMirror {
            padding: 0;
            height: 100px;
            min-height: unset;
          }
          `,
        }}
      />

      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
            {project.name}
          </h3>
          <ProjectStatusBadge
            status={project.status}
            translations={translations}
          />
        </div>

        <div className="text-gray-600 dark:text-gray-400 text-sm mb-4">
          <HTMLView value={project.description ?? ""} />
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-1">
            <span>
              {translations.stats.inProgress}: {project.openPositions}/
              {project.totalPositions}
            </span>
            <span>{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className={`h-2 rounded-full ${progressBarColor}`}
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
            <span>{project.leader?.name}</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3 flex justify-end">
        <Link
          to={`/dashboard/projects/${project.id}`}
          className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-900 dark:hover:text-primary-500"
        >
          {translations.viewDetails}
        </Link>
      </div>
    </div>
  );
}
