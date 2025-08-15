import { Settings, Users } from "lucide-react";
import translations from "./translations";
import { ProjectStatusBadge } from "./ProjectStatusBadge";
import { Project, ProjectStatus } from "~/models/Project";
import { JobStatus } from "~/models/Job";
import { useNavigate } from "react-router";

interface AllProjectsProps {
  readonly translations: typeof translations.en;
  readonly projects: Project[];
}

export default function AllProjects({
  translations,
  projects,
}: AllProjectsProps) {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
        {translations.allProjects}
      </h2>
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                {translations.projects}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Status
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Progress
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Positions
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Leader
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
              >
                Timeline
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {projects.map((project) => (
              <tr
                key={project.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {project.name}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {(() => {
                          const plainText =
                            new DOMParser().parseFromString(
                              project.description || "",
                              "text/html"
                            ).body.textContent || "";

                          return plainText.length > 100
                            ? plainText.slice(0, 100) + "..."
                            : plainText;
                        })()}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <ProjectStatusBadge
                    status={project.status}
                    translations={translations}
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {(() => {
                    const colors = {
                      [ProjectStatus.COMPLETED]: "bg-green-500",
                      [ProjectStatus.IN_PROGRESS]: "bg-blue-500",
                      [ProjectStatus.ON_HOLD]: "bg-yellow-500",
                      [ProjectStatus.PLANNING]: "bg-gray-500",
                      [ProjectStatus.CANCELLED]: "bg-red-500",
                    };
                    const progressBarColor =
                      colors[project.status] || "bg-gray-500";
                    return (
                      <>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full ${progressBarColor}`}
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          {project.progress}%
                        </div>
                      </>
                    );
                  })()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-white">
                    {
                      project.jobs.filter(
                        (job) => job.status === JobStatus.OPEN
                      ).length
                    }
                    /{project.jobs.length} open
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex -space-x-2">{project.leader?.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {project.startDate} - {project.dueDate}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() =>
                      navigate(`/dashboard/projects/${project.id}`)
                    }
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-500 mr-3"
                  >
                    <Settings className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
