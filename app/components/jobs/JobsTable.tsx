import { useOutletContext } from "react-router";
import { Job, JobStatus } from "pro-meets-core";
import { DashboardOutletContext } from "~/types/dashboard";
import useConfirmationStore from "~/store/confirmation";

const translations = {
  en: {
    title: "Job Offers",
    subtitle: "Manage all active job offers",
    searchPlaceholder: "Search jobs...",
    newJob: "New Job",
    noResultsTitle: "No job offers found",
    noResultsSubtitle: "Try adjusting your search or create a new offer",
    position: "Position",
    project: "Project",
    location: "Location",
    salary: "Salary",
    type: "Type",
    status: "Status",
    actions: "Actions",
    showing: "Showing",
    to: "to",
    of: "of",
    results: "results",
    previous: "Previous",
    next: "Next",
    edit: "Edit",
    delete: "Delete",
    statusOpen: "Open",
    statusClosed: "Closed",
    statusPending: "Pending",
  },
  es: {
    title: "Ofertas Laborales",
    subtitle: "Gestiona todas las ofertas laborales activas",
    searchPlaceholder: "Buscar ofertas...",
    newJob: "Nueva Oferta",
    noResultsTitle: "No se encontraron ofertas laborales",
    noResultsSubtitle: "Intenta ajustar tu búsqueda o crear una nueva oferta",
    position: "Puesto",
    project: "Proyecto",
    location: "Ubicación",
    salary: "Salario",
    type: "Tipo",
    status: "Estado",
    actions: "Acciones",
    showing: "Mostrando",
    to: "a",
    of: "de",
    results: "resultados",
    previous: "Anterior",
    next: "Siguiente",
    edit: "Editar",
    delete: "Eliminar",
    statusOpen: "Abierta",
    statusClosed: "Cerrada",
    statusPending: "Pendiente",
  },
  fr: {
    title: "Offres d'emploi",
    subtitle: "Gérer toutes les offres d'emploi actives",
    searchPlaceholder: "Rechercher des offres...",
    newJob: "Nouvelle Offre",
    noResultsTitle: "Aucune offre d'emploi trouvée",
    noResultsSubtitle:
      "Essayez d'ajuster votre recherche ou créez une nouvelle offre",
    position: "Poste",
    project: "Projet",
    location: "Localisation",
    salary: "Salaire",
    type: "Type",
    status: "Statut",
    actions: "Actions",
    showing: "Affichage",
    to: "à",
    of: "de",
    results: "résultats",
    previous: "Précédent",
    next: "Suivant",
    edit: "Modifier",
    delete: "Supprimer",
    statusOpen: "Ouverte",
    statusClosed: "Fermée",
    statusPending: "En attente",
  },
  jp: {
    title: "求人情報",
    subtitle: "アクティブな求人を管理する",
    searchPlaceholder: "求人を検索...",
    newJob: "新しい求人",
    noResultsTitle: "求人情報が見つかりません",
    noResultsSubtitle: "検索条件を調整するか新しい求人を作成してください",
    position: "職種",
    project: "プロジェクト",
    location: "勤務地",
    salary: "給与",
    type: "雇用形態",
    status: "状態",
    actions: "操作",
    showing: "表示中",
    to: "から",
    of: "の",
    results: "件",
    previous: "前へ",
    next: "次へ",
    edit: "編集",
    delete: "削除",
    statusOpen: "募集中",
    statusClosed: "終了",
    statusPending: "保留中",
  },
  zh: {
    title: "职位招聘",
    subtitle: "管理所有活跃的职位招聘",
    searchPlaceholder: "搜索职位...",
    newJob: "新建职位",
    noResultsTitle: "未找到职位招聘",
    noResultsSubtitle: "请调整搜索条件或创建新职位",
    position: "职位",
    project: "项目",
    location: "地点",
    salary: "薪资",
    type: "类型",
    status: "状态",
    actions: "操作",
    showing: "显示",
    to: "至",
    of: "的",
    results: "条结果",
    previous: "上一页",
    next: "下一页",
    edit: "编辑",
    delete: "删除",
    statusOpen: "开放",
    statusClosed: "已关闭",
    statusPending: "待定",
  },
};

interface JobsTableProps {
  readonly searchTerm: string;
  readonly setSearchTerm: (term: string) => void;
  readonly jobs: Array<Job>;
  readonly onNewJob: () => void;
  readonly onEditJob: (job: Job) => void;
  readonly onDeleteJob: (job: Job) => void | Promise<void>;
}

export default function JobsTable({
  jobs,
  searchTerm,
  setSearchTerm,
  onNewJob,
  onEditJob,
  onDeleteJob,
}: JobsTableProps) {
  const { language } = useOutletContext<DashboardOutletContext>();
  const t = translations[language] || translations.en;
  const confirmation = useConfirmationStore();

  const getStatusTranslation = (status: JobStatus) => {
    switch (status) {
      case JobStatus.OPEN:
        return t.statusOpen;
      case JobStatus.CLOSED:
        return t.statusClosed;
      default:
        return t.statusPending;
    }
  };

  const handleDeleteJob = (job: Job) => {
    confirmation.open({
      title: "Confirm Deletion",
      message: `Are you sure you want to delete the job offer for ${job.title}? This action cannot be undone.`,
      confirmText: t.delete,
      onConfirm: async () => {
        await onDeleteJob(job);
      },
    });
  };

  return (
    <div className="bg-white shadow-xs rounded-xl overflow-hidden border border-gray-100">
      <div className="p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-100">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">{t.title}</h2>
          <p className="text-sm text-gray-500 mt-1">{t.subtitle}</p>
        </div>

        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-3">
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              className="block w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            onClick={onNewJob}
            className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-xs hover:shadow-md"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {t.position}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {t.project}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {t.location}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {t.salary}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {t.type}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {t.status}
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {t.actions}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {jobs.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-8 text-center">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <svg
                      className="w-12 h-12 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <h3 className="text-gray-600 font-medium">
                      {t.noResultsTitle}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {t.noResultsSubtitle}
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              jobs.map((job) => {
                let statusClass = "";
                if (job.status === JobStatus.OPEN) {
                  statusClass = "bg-green-50 text-green-700 ring-green-600/20";
                } else if (job.status === JobStatus.CLOSED) {
                  statusClass = "bg-red-50 text-red-700 ring-red-600/20";
                } else {
                  statusClass = "bg-gray-50 text-gray-700 ring-gray-600/20";
                }

                return (
                  <tr
                    key={job.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="shrink-0 h-10 w-10 rounded-md bg-primary-50 flex items-center justify-center text-primary-600">
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">
                            {job.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            {job.postedAt &&
                              new Date(job.postedAt).toLocaleDateString(
                                language,
                                {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                }
                              )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-gray-900 font-medium">
                        {job.project?.name || "-"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 text-gray-600">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{job.location}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {job.salaryMin} - {job.salaryMax}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700">
                        {job.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusClass} ring-1 ring-inset`}
                      >
                        {getStatusTranslation(job.status!)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-3">
                        <button
                          onClick={() => onEditJob(job)}
                          className="text-primary-600 hover:text-primary-900 flex items-center gap-1"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => handleDeleteJob(job)}
                          className="text-red-600 hover:text-red-900 flex items-center gap-1"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {jobs.length > 0 && (
        <div className="bg-gray-50 px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100">
          <div className="text-sm text-gray-600">
            {t.showing} <span className="font-medium">1</span> {t.to}{" "}
            <span className="font-medium">{jobs.length}</span> {t.of}{" "}
            <span className="font-medium">{jobs.length}</span> {t.results}
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-200 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {t.previous}
            </button>
            <button className="px-3 py-1 border border-gray-200 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              {t.next}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
