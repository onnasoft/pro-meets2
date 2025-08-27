import { useState } from "react";
import { Search, MapPin, DollarSign, Briefcase, Clock, Filter } from "lucide-react";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { MetaFunction, useLoaderData, LoaderFunctionArgs } from "react-router";
import { languageLoader } from "~/loaders/language";
import { useJobs } from "~/hooks/jobs";

const translations = {
  en: {
    title: "Job Opportunities",
    subtitle: "Find your next career move",
    searchPlaceholder: "Job title, company or keywords...",
    locationPlaceholder: "Location",
    salaryLabel: "Salary",
    jobTypeLabel: "Job Type",
    featured: "Featured",
    fullTime: "Full-time",
    partTime: "Part-time",
    contract: "Contract",
    internship: "Internship",
    remote: "Remote",
    hybrid: "Hybrid",
    applyNow: "Apply Now",
    viewDetails: "View Details",
    noJobsFound: "No jobs found matching your criteria",
    filters: "Filters",
    clearAll: "Clear All",
  },
  es: {
    title: "Oportunidades Laborales",
    subtitle: "Encuentra tu próximo paso profesional",
    searchPlaceholder: "Puesto, empresa o palabras clave...",
    locationPlaceholder: "Ubicación",
    salaryLabel: "Salario",
    jobTypeLabel: "Tipo de empleo",
    featured: "Destacado",
    fullTime: "Tiempo completo",
    partTime: "Medio tiempo",
    contract: "Contrato",
    internship: "Pasantía",
    remote: "Remoto",
    hybrid: "Híbrido",
    applyNow: "Aplicar Ahora",
    viewDetails: "Ver Detalles",
    noJobsFound: "No se encontraron empleos que coincidan",
    filters: "Filtros",
    clearAll: "Limpiar todo",
  },
  fr: {
    title: "Opportunités d'emploi",
    subtitle: "Trouvez votre prochain mouvement de carrière",
    searchPlaceholder: "Intitulé du poste, entreprise ou mots-clés...",
    locationPlaceholder: "Emplacement",
    salaryLabel: "Salaire",
    jobTypeLabel: "Type d'emploi",
    featured: "En vedette",
    fullTime: "Temps plein",
    partTime: "Temps partiel",
    contract: "Contrat",
    internship: "Stage",
    remote: "À distance",
    hybrid: "Hybride",
    applyNow: "Postuler maintenant",
    viewDetails: "Voir les détails",
    noJobsFound: "Aucun emploi trouvé correspondant à vos critères",
    filters: "Filtres",
    clearAll: "Tout effacer",
  },
  jp: {
    title: "求人情報",
    subtitle: "次のキャリアのステップを見つける",
    searchPlaceholder: "職種、会社名、またはキーワード...",
    locationPlaceholder: "勤務地",
    salaryLabel: "給与",
    jobTypeLabel: "雇用形態",
    featured: "注目",
    fullTime: "フルタイム",
    partTime: "パートタイム",
    contract: "契約",
    internship: "インターンシップ",
    remote: "リモート",
    hybrid: "ハイブリッド",
    applyNow: "今すぐ応募",
    viewDetails: "詳細を見る",
    noJobsFound: "条件に一致する求人は見つかりませんでした",
    filters: "フィルター",
    clearAll: "すべてクリア",
  },
  zh: {
    title: "职位机会",
    subtitle: "找到您的下一个职业发展",
    searchPlaceholder: "职位名称、公司或关键词...",
    locationPlaceholder: "地点",
    salaryLabel: "薪资",
    jobTypeLabel: "职位类型",
    featured: "推荐",
    fullTime: "全职",
    partTime: "兼职",
    contract: "合同",
    internship: "实习",
    remote: "远程",
    hybrid: "混合",
    applyNow: "立即申请",
    viewDetails: "查看详情",
    noJobsFound: "未找到符合您条件的职位",
    filters: "筛选",
    clearAll: "清除所有",
  }
};

export async function loader(args: LoaderFunctionArgs) {
  const { language } = await languageLoader(args);
  return { language };
}

export const meta: MetaFunction<typeof loader> = ({ loaderData }) => {
  const language = loaderData?.language || "en";
  const t = translations[language] || translations.en;

  return [
    { title: `${t.title} | ProMeets` },
    { name: "description", content: t.subtitle },
    { name: "keywords", content: "jobs, employment, career, hiring" },
  ];
};

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  isFeatured: boolean;
  postedDate: string;
  description: string;
  workMode: string;
  experienceLevel: string;
}

export default function JobsPage() {
  const { language } = useLoaderData<typeof loader>();
  const t = translations[language] || translations.en;
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [workModeFilter, setWorkModeFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Datos de ejemplo mejorados
  const { data: jobs = [] } = useJobs();

  const clearFilters = () => {
    setSearchTerm("");
    setLocationFilter("");
    setJobTypeFilter("");
    setWorkModeFilter("");
  };

  const jobTypes = [t.fullTime, t.partTime, t.contract, t.internship];
  const workModes = [t.remote, t.hybrid, "On-site"];

  return (
    <>
      <Header language={language} />
      <main>
        <div className="pt-28" />

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary-500 to-primary-700 py-16 text-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl max-w-2xl mx-auto">{t.subtitle}</p>
          </div>
        </section>

        {/* Jobs Section */}
        <section className="container mx-auto px-6 py-12">
          {/* Search and Filters */}
          <div className="max-w-6xl mx-auto mb-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative col-span-2">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  name="search"
                  type="text"
                  autoComplete="off"
                  placeholder={t.searchPlaceholder}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder={t.locationPlaceholder}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center text-primary-600 hover:text-primary-800"
              >
                <Filter className="h-4 w-4 mr-2" />
                {t.filters}
              </button>
              {(searchTerm || locationFilter || jobTypeFilter || workModeFilter) && (
                <button
                  onClick={clearFilters}
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  {t.clearAll}
                </button>
              )}
            </div>

            {showFilters && (
              <div className="bg-gray-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-700 mb-2 flex items-center">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {t.jobTypeLabel}
                  </h3>
                  <div className="space-y-2">
                    {jobTypes.map((type) => (
                      <label key={type} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="jobType"
                          checked={jobTypeFilter === type}
                          onChange={() => setJobTypeFilter(jobTypeFilter === type ? "" : type)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-gray-700 mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Work Mode
                  </h3>
                  <div className="space-y-2">
                    {workModes.map((mode) => (
                      <label key={mode} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="workMode"
                          checked={workModeFilter === mode}
                          onChange={() => setWorkModeFilter(workModeFilter === mode ? "" : mode)}
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                        />
                        <span>{mode}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Jobs List */}
          <div className="max-w-6xl mx-auto">
            {jobs.length > 0 ? (
              <div className="space-y-4">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-start">
                          <div className="bg-primary-100 text-primary-800 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                            {job.project?.name.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">
                              {job.title}
                            </h3>
                            <p className="text-gray-600">{job.project?.name}</p>

                            <div className="mt-3 flex flex-wrap gap-2">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                <MapPin className="h-3 w-3 mr-1" />
                                {job.location}
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <DollarSign className="h-3 w-3 mr-1" />
                                {job.salaryMin} ~ {job.salaryMax}
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {job.contractType}
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                {job.experienceRequired}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-4 flex flex-col items-end">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 mb-2">
                          {job.type}
                        </span>
                        <span className="text-sm text-gray-500 mb-3">{job.postedAt}</span>
                        <div className="flex space-x-2">
                          <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                            {t.applyNow}
                          </button>
                          <button className="px-4 py-2 border border-primary-600 text-primary-600 rounded-md hover:bg-primary-50 transition-colors">
                            {t.viewDetails}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
                  <Search className="h-full w-full" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">{t.noJobsFound}</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
                >
                  {t.clearAll}
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer language={language} />
    </>
  );
}