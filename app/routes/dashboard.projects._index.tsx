import { Plus, FileText } from "lucide-react";
import { useOutletContext } from "react-router";
import { useRequireOrganization } from "~/hooks/require-organization";
import { DashboardOutletContext } from "~/types/dashboard";
import { ProjectCard } from "~/components/projects/ProjectCard";
import translations from "~/components/projects/translations";
import AllProjects from "~/components/projects/AllProjects";
import Filters from "~/components/projects/Filters";
import StatsCards from "~/components/projects/StatsCards";
import { useOrganizationStatus } from "~/hooks/organizations";
import { useProjects } from "~/hooks/projects";

export default function ProjectsPage() {
  const { language, organizations } =
    useOutletContext<DashboardOutletContext>();
  useRequireOrganization();
  const organization =
    organizations.find((org) => org.current) || organizations[0];
  const t = translations[language] || translations.en;
  const { data: status } = useOrganizationStatus(organization.id);
  const { data: recentProjects = [] } = useProjects({
    take: 6,
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    relations: ["leader", "jobs"],
  });

  const { data: allProjects = [] } = useProjects({
    take: 10,
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
    relations: ["leader", "jobs"],
  });

  return (
    <div className="mx-auto">
      {/* Stats Cards */}
      <StatsCards status={status} translations={t} />

      {/* Filters */}
      <Filters translations={t} />

      {/* Projects Grid */}
      <div className="mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          {t.recentProjects}
        </h2>
        {recentProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                translations={t}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-12 text-center">
            <div className="mx-auto h-24 w-24 text-gray-400 dark:text-gray-500">
              <FileText className="w-full h-full" />
            </div>
            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
              {t.noProjects}
            </h3>
            <p className="mt-1 text-gray-500 dark:text-gray-400">
              {t.noProjectsDescription}
            </p>
            <div className="mt-6">
              <button className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                <Plus className="w-5 h-5 mr-2" />
                {t.newProject}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* All Projects Table */}
      <AllProjects translations={t} projects={allProjects} />
    </div>
  );
}
