import { Form, useNavigate, useOutletContext } from "react-router";
import HTMLEditor from "~/components/HTMLEditor";
import translations from "~/components/jobs/translations";
import Title from "~/components/Title";
import { JobType, JobStatus, ContractType, EducationLevel } from "~/models/Job";
import { DashboardOutletContext } from "~/types/dashboard";

export default function NewJob() {
  const { language } = useOutletContext<DashboardOutletContext>();
  const navigate = useNavigate();
  const t = translations[language] || translations.en;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 p-6">
        <Title title={t.title} description={t.subtitle} />

        <Form method="post" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Job Title */}
            <div className="col-span-2">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.jobTitle}
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none "
                placeholder={t.jobTitlePlaceholder}
              />
            </div>

            {/* Job Description */}
            <div className="col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.jobDescription}
              </label>
              <HTMLEditor />
            </div>

             {/* Project ID */}
            <div className="col-span-2">
              <label
                htmlFor="projectId"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.project}
              </label>
              <select
                id="projectId"
                name="projectId"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none "
              >
                <option value="">{t.selectProject}</option>
                <option value="09d887bc-439c-4dba-a35a-ea1a1b72db42">
                  Project Alpha
                </option>
              </select>
            </div>

            {/* Job Type */}
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.jobType}
              </label>
              <select
                id="type"
                name="type"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none "
                defaultValue={JobType.FULL_TIME}
              >
                {Object.values(JobType).map((jobType) => (
                  <option key={jobType} value={jobType}>
                    {t.jobTypes[jobType]}
                  </option>
                ))}
              </select>
            </div>

            {/* Contract Type */}
            <div>
              <label
                htmlFor="contractType"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.contractType}
              </label>
              <select
                id="contractType"
                name="contractType"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none "
                defaultValue={ContractType.PERMANENT}
              >
                {Object.values(ContractType).map((contractType) => (
                  <option key={contractType} value={contractType}>
                    {t.contractTypes[contractType]}
                  </option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.status}
              </label>
              <select
                id="status"
                name="status"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none "
                defaultValue={JobStatus.OPEN}
              >
                {Object.values(JobStatus).map((status) => (
                  <option key={status} value={status}>
                    {t.statusTypes[status]}
                  </option>
                ))}
              </select>
            </div>

            {/* Active Status */}
            <div className="flex items-center">
              <input
                id="isActive"
                name="isActive"
                type="checkbox"
                defaultChecked
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label
                htmlFor="isActive"
                className="ml-2 block text-sm text-gray-700"
              >
                {t.activeStatus}
              </label>
            </div>

            {/* Salary Range */}
            <div>
              <label
                htmlFor="salaryMin"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.minSalary}
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input
                  type="number"
                  id="salaryMin"
                  name="salaryMin"
                  className="block w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                  placeholder="30.000"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="salaryMax"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.maxSalary}
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input
                  type="number"
                  id="salaryMax"
                  name="salaryMax"
                  className="block w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                  placeholder="200.000"
                />
              </div>
            </div>

            {/* Recruiter Fee */}
            <div>
              <label
                htmlFor="recruiterFee"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.recruiterFee}
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input
                  type="number"
                  id="recruiterFee"
                  name="recruiterFee"
                  className="block w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                  placeholder="500"
                />
              </div>
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.location}
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none "
                placeholder={t.locationPlaceholder}
              />
            </div>

            {/* Experience Required */}
            <div className="col-span-2">
              <label
                htmlFor="experienceRequired"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.experienceRequired}
              </label>
              <input
                type="text"
                id="experienceRequired"
                name="experienceRequired"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none "
                placeholder={t.experiencePlaceholder}
              />
            </div>

            {/* Education Level */}
            <div>
              <label
                htmlFor="educationLevel"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.educationLevel}
              </label>
              <select
                id="educationLevel"
                name="educationLevel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none "
              >
                <option value="">{t.selectEducation}</option>
                {Object.values(EducationLevel).map((level) => (
                  <option key={level} value={level}>
                    {t.educationLevels[level]}
                  </option>
                ))}
              </select>
            </div>

            {/* Skills Required */}
            <div className="col-span-2">
              <label
                htmlFor="skillsRequired"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t.skillsRequired}
              </label>
              <HTMLEditor />
            </div>

            {/* Organization ID (hidden) */}
            <input
              type="hidden"
              name="organizationId"
              value="49b31fc1-1648-4fe6-bc0d-a39011de0b02"
            />
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {t.cancel}
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {t.create}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}
