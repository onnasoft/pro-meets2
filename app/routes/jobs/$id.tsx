import { LoaderFunctionArgs, useLoaderData } from "react-router";
import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { languageLoader } from "~/loaders/language";
import { useState } from "react";
import HTMLView from "~/components/HTMLView";
import { getJob, JobStatus, Language } from "@onnasoft/pro-meets-core";
import commonTranslations, { formatDate } from "./translations";

interface LoaderData {
  language: Language;
  job: Awaited<ReturnType<typeof getJob>>;
}

export async function loader(args: LoaderFunctionArgs): Promise<LoaderData> {
  const { language } = await languageLoader(args);

  const id = args.params.id!;
  const job = await getJob(
    id,
    {
      relations: ['organization']
    },
  );

  return { language, job };
}

// Traducciones
const translations = {
  en: {
    breadcrumbHome: "Home",
    breadcrumbJobs: "Jobs",
    jobOpen: "Open",
    jobPaused: "Paused",
    jobClosed: "Closed",
    confidentialCompany: "Confidential company",
    salaryNotSpecified: "Salary not specified",
    salaryFrom: "From €",
    salaryUpTo: "Up to €",
    postedOn: "Posted on",
    applyNow: "Apply Now",
    processing: "Processing...",
    jobDescription: "Job Description",
    noDescription: "No description available for this position.",
    aboutCompany: "About the company",
    relatedProject: "Related project",
    noLongerAccepting: "This position is no longer accepting applications.",
    termsNotice: "By applying, you agree to our terms and privacy policy.",
    viewDetails: "View Details",
    experienceRequired: "Experience Required",
    educationLevel: "Education Level",
    ...commonTranslations.en,
  },
  es: {
    breadcrumbHome: "Inicio",
    breadcrumbJobs: "Empleos",
    jobOpen: "Abierto",
    jobPaused: "En pausa",
    jobClosed: "Cerrado",
    confidentialCompany: "Empresa confidencial",
    salaryNotSpecified: "Salario no especificado",
    salaryFrom: "Desde €",
    salaryUpTo: "Hasta €",
    postedOn: "Publicado el",
    applyNow: "Postularse ahora",
    processing: "Procesando...",
    jobDescription: "Descripción del puesto",
    noDescription: "No hay descripción disponible para este puesto.",
    aboutCompany: "Sobre la empresa",
    relatedProject: "Proyecto relacionado",
    noLongerAccepting: "Este puesto ya no está aceptando solicitudes.",
    termsNotice: "Al postularte, aceptas nuestras condiciones y política de privacidad.",
    viewDetails: "Ver Detalles",
    experienceRequired: "Experiencia Requerida",
    educationLevel: "Nivel de Educación",
    ...commonTranslations.es,
  },
  fr: {
    breadcrumbHome: "Accueil",
    breadcrumbJobs: "Emplois",
    jobOpen: "Ouvert",
    jobPaused: "En pause",
    jobClosed: "Fermé",
    confidentialCompany: "Entreprise confidentielle",
    salaryNotSpecified: "Salaire non spécifié",
    salaryFrom: "À partir de €",
    salaryUpTo: "Jusqu'à €",
    postedOn: "Publié le",
    applyNow: "Postuler maintenant",
    processing: "Traitement en cours...",
    jobDescription: "Description du poste",
    noDescription: "Aucune description disponible pour ce poste.",
    aboutCompany: "À propos de l'entreprise",
    relatedProject: "Projet associé",
    noLongerAccepting: "Ce poste n'accepte plus de candidatures.",
    termsNotice: "En postulant, vous acceptez nos conditions et politique de confidentialité.",
    viewDetails: "Voir les détails",
    experienceRequired: "Expérience Requise",
    educationLevel: "Niveau d'Éducation",
    ...commonTranslations.fr,
  },
  jp: {
    breadcrumbHome: "ホーム",
    breadcrumbJobs: "求人",
    jobOpen: "募集中",
    jobPaused: "一時停止中",
    jobClosed: "終了",
    confidentialCompany: "非公開企業",
    salaryNotSpecified: "給与未記載",
    salaryFrom: "€から",
    salaryUpTo: "€まで",
    postedOn: "投稿日",
    applyNow: "今すぐ応募",
    processing: "処理中...",
    jobDescription: "職務内容",
    noDescription: "この職位の説明は利用できません。",
    aboutCompany: "企業について",
    relatedProject: "関連プロジェクト",
    noLongerAccepting: "この職位は現在応募を受け付けておりません。",
    termsNotice: "応募により、利用規約とプライバシーポリシーに同意したものとみなします。",
    viewDetails: "詳細を見る",
    experienceRequired: "必要な経験",
    educationLevel: "学歴",
    ...commonTranslations.jp,
  },
  zh: {
    breadcrumbHome: "首页",
    breadcrumbJobs: "职位",
    jobOpen: "开放",
    jobPaused: "暂停",
    jobClosed: "关闭",
    confidentialCompany: "保密公司",
    salaryNotSpecified: "薪资未指定",
    salaryFrom: "起薪 €",
    salaryUpTo: "最高 €",
    postedOn: "发布于",
    applyNow: "立即申请",
    processing: "处理中...",
    jobDescription: "职位描述",
    noDescription: "此职位暂无描述。",
    aboutCompany: "关于公司",
    relatedProject: "相关项目",
    noLongerAccepting: "此职位已停止接受申请。",
    termsNotice: "申请即表示您同意我们的条款和隐私政策。",
    viewDetails: "查看详情",
    experienceRequired: "所需经验",
    educationLevel: "教育水平",
    ...commonTranslations.zh,
  }
};

// Función para formatear salario
const formatSalary = (min?: number, max?: number, language: string = 'es') => {
  const t = translations[language as keyof typeof translations];

  if (!min && !max) return t.salaryNotSpecified;
  if (min && max) return `€${min.toLocaleString()} - €${max.toLocaleString()}`;
  if (min) return `${t.salaryFrom}${min.toLocaleString()}`;
  return `${t.salaryUpTo}${max?.toLocaleString()}`;
};


export default function JobsPage() {
  const { language, job } = useLoaderData<typeof loader>();
  const [isApplying, setIsApplying] = useState(false);
  const t = translations[language as keyof typeof translations] || translations.es;

  const handleApply = () => {
    setIsApplying(true);
    // Lógica para postularse al empleo
  };

  return (
    <>
      <Header language={language} />
      <main>
        <div className="pt-28" />

        <section className="container mx-auto px-6">
          <div className="mx-auto max-w-6xl bg-white px-8">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <ol className="list-none p-0 inline-flex">
                <li className="flex items-center">
                  <a href="/" className="hover:text-primary-600">{t.breadcrumbHome}</a>
                  <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                  </svg>
                </li>
                <li className="flex items-center">
                  <a href="/jobs" className="hover:text-primary-600">{t.breadcrumbJobs}</a>
                  <svg className="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                    <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                  </svg>
                </li>
                <li className="text-gray-700">{job.title}</li>
              </ol>
            </nav>

            {/* Header del empleo */}
            <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
                  {job.status === JobStatus.OPEN && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      {t.jobOpen}
                    </span>
                  )}
                  {job.status === JobStatus.PAUSED && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                      {t.jobPaused}
                    </span>
                  )}
                  {job.status === JobStatus.CLOSED && (
                    <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                      {t.jobClosed}
                    </span>
                  )}
                </div>

                <div className="flex items-center text-lg text-gray-700 mb-4">
                  {job.organization?.name || t.confidentialCompany}
                </div>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location || t.locationNotSpecified}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {t.jobTypes[job.type]}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {formatSalary(job.salaryMin, job.salaryMax, language)}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">
                    {t.contractTypes[job.contractType]}
                  </span>
                  {job.experienceRequired && (
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {t.experienceRequired}: {job.experienceRequired}
                    </span>
                  )}
                  {job.educationLevel && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {t.educationLevel}: {t.educationLevels[job.educationLevel]}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-end gap-4">
                <div className="text-sm text-gray-500">
                  {t.postedOn}: {formatDate(job.postedAt, language)}
                </div>
                {job.status === JobStatus.OPEN && (
                  <button
                    onClick={handleApply}
                    disabled={isApplying}
                    className="bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    {isApplying ? t.processing : t.applyNow}
                  </button>
                )}
              </div>
            </div>

            {/* Descripción del empleo */}
            <div className="border-t pt-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">{t.jobDescription}</h2>
              <div className="prose max-w-none">
                {job.description ? (
                  <HTMLView value={job.description} />
                ) : (
                  <p className="text-gray-500">{t.noDescription}</p>
                )}
              </div>
            </div>

            {/* Información de la empresa */}
            {job.organization && (
              <div className="border-t pt-8">
                <h2 className="text-2xl font-bold mb-4">{t.aboutCompany}</h2>
                <div className="flex items-start gap-4">
                  {job.organization.logoUrl && (
                    <img
                      src={job.organization.logoUrl}
                      alt={job.organization.name}
                      className="w-16 h-16 object-contain rounded-lg"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-semibold">{job.organization.name}</h3>
                    {job.organization.description && (
                      <p className="text-gray-700 mt-2">{job.organization.description}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Proyecto relacionado */}
            {job.project && (
              <div className="border-t pt-8 mt-8">
                <h2 className="text-2xl font-bold mb-4">{t.relatedProject}</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold">{job.project.name}</h3>
                  {job.project.description && (
                    <p className="text-gray-700 mt-2">{job.project.description}</p>
                  )}
                </div>
              </div>
            )}

            {/* Acciones finales */}
            <div className="border-t pt-8 mt-8 mb-8 pb-8 text-center">
              {job.status === JobStatus.OPEN ? (
                <>
                  <button
                    onClick={handleApply}
                    disabled={isApplying}
                    className="bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white px-8 py-3 rounded-lg font-medium text-lg transition-colors mb-4"
                  >
                    {isApplying ? t.processing : t.applyNow}
                  </button>
                  <p className="text-sm text-gray-500">
                    {t.termsNotice}
                  </p>
                </>
              ) : (
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="text-gray-700 font-medium">{t.noLongerAccepting}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer language={language} />
    </>
  );
}