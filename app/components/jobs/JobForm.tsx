import { ContractType, EducationLevel, Job, JobStatus, JobType, Project } from "pro-meets-core";
import HTMLEditor from "~/components/HTMLEditor";
import translations from "~/components/jobs/translations";
import config from "~/config";


interface JobFormProps extends Partial<Job> {
  readonly translations: typeof translations.en;
  readonly isSubmitting: boolean;
  readonly projects: Project[];
  readonly errors: Partial<Record<keyof Job | "form", string>>;
  readonly onSubmit: () => void;
  readonly onCancel?: () => void;
  readonly onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => void;
}

export default function JobForm({
  translations,
  projects,
  onSubmit,
  onChange,
  onCancel,
  isSubmitting,
  errors,
  ...formData
}: JobFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form method="post" className="space-y-6" onSubmit={handleSubmit}>
      {/* Display form-level errors */}
      {errors.form && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-red-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                {errors.form}
              </h3>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Job Title */}
        <div className="col-span-2">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {translations.jobTitle}
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title || ""}
            onChange={onChange}
            required
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${errors.title
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 "
              }`}
            placeholder={translations.jobTitlePlaceholder}
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>

        {/* Job Description */}
        <div className="col-span-2">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {translations.jobDescription}
          </label>
          <HTMLEditor
            value={formData.description || ""}
            onChange={(content) => {
              onChange({
                target: { name: "description", value: content },
              } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
            }}
            className={
              errors.description ? "border-red-300" : "border-gray-300"
            }
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description}</p>
          )}
        </div>

        {/* URL */}
        {formData.id && (
          <div className="col-span-2">
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              URL
            </label>
            <input
              type="url"
              id="url"
              name="url"
              required
              readOnly
              value={`${config.baseUrl}/jobs/${formData.id}`}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none border-gray-300`}
            />
          </div>
        )}

        {/* Project ID */}
        <div className="col-span-2">
          <label
            htmlFor="projectId"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {translations.project}
          </label>
          <select
            id="projectId"
            name="projectId"
            value={formData.projectId || ""}
            onChange={onChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${errors.projectId
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 "
              }`}
          >
            {!formData.projectId ? (
              <option value="">{translations.selectProject}</option>
            ) : null}
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
          {errors.projectId && (
            <p className="mt-1 text-sm text-red-600">{errors.projectId}</p>
          )}
        </div>

        {/* Job Type */}
        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {translations.jobType}
          </label>
          <select
            id="type"
            name="type"
            required
            value={formData.type || JobType.FULL_TIME}
            onChange={onChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${errors.type
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 "
              }`}
          >
            {Object.values(JobType).map((jobType) => (
              <option key={jobType} value={jobType}>
                {translations.jobTypes[jobType]}
              </option>
            ))}
          </select>
          {errors.type && (
            <p className="mt-1 text-sm text-red-600">{errors.type}</p>
          )}
        </div>

        {/* Contract Type */}
        <div>
          <label
            htmlFor="contractType"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {translations.contractType}
          </label>
          <select
            id="contractType"
            name="contractType"
            required
            value={formData.contractType || ContractType.PERMANENT}
            onChange={onChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${errors.contractType
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 "
              }`}
          >
            {Object.values(ContractType).map((contractType) => (
              <option key={contractType} value={contractType}>
                {translations.contractTypes[contractType]}
              </option>
            ))}
          </select>
          {errors.contractType && (
            <p className="mt-1 text-sm text-red-600">{errors.contractType}</p>
          )}
        </div>

        {/* Status */}
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {translations.status}
          </label>
          <select
            id="status"
            name="status"
            required
            value={formData.status || JobStatus.OPEN}
            onChange={onChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${errors.status
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 "
              }`}
          >
            {Object.values(JobStatus).map((status) => (
              <option key={status} value={status}>
                {translations.statusTypes[status]}
              </option>
            ))}
          </select>
          {errors.status && (
            <p className="mt-1 text-sm text-red-600">{errors.status}</p>
          )}
        </div>

        {/* Active Status */}
        <div className="flex items-center">
          <input
            id="isActive"
            name="isActive"
            type="checkbox"
            checked={formData.isActive || false}
            onChange={onChange}
            className={`h-4 w-4 rounded ${errors.isActive
                ? "border-red-300 text-red-600 focus:ring-red-500"
                : "border-gray-300 text-primary-600 focus:ring-primary-500"
              }`}
          />
          <label
            htmlFor="isActive"
            className="ml-2 block text-sm text-gray-700"
          >
            {translations.activeStatus}
          </label>
        </div>
        {errors.isActive && (
          <p className="mt-1 text-sm text-red-600">{errors.isActive}</p>
        )}

        {/* Salary Range */}
        <div>
          <label
            htmlFor="salaryMin"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {translations.minSalary}
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <input
              type="number"
              id="salaryMin"
              name="salaryMin"
              min={0}
              value={formData.salaryMin || ""}
              onChange={onChange}
              className={`block w-full pl-7 pr-3 py-2 border rounded-md focus:outline-none ${errors.salaryMin
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 "
                }`}
              placeholder="30.000"
            />
          </div>
          {errors.salaryMin && (
            <p className="mt-1 text-sm text-red-600">{errors.salaryMin}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="salaryMax"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {translations.maxSalary}
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <input
              type="number"
              id="salaryMax"
              name="salaryMax"
              min={formData.salaryMin || 0}
              value={formData.salaryMax || ""}
              onChange={onChange}
              className={`block w-full pl-7 pr-3 py-2 border rounded-md focus:outline-none ${errors.salaryMax
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 "
                }`}
              placeholder="200.000"
            />
          </div>
          {errors.salaryMax && (
            <p className="mt-1 text-sm text-red-600">{errors.salaryMax}</p>
          )}
        </div>

        {/* Education Level */}
        <div>
          <label
            htmlFor="educationLevel"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {translations.educationLevel}
          </label>
          <select
            id="educationLevel"
            name="educationLevel"
            value={formData.educationLevel || ""}
            onChange={onChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${errors.educationLevel
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 "
              }`}
          >
            {!formData.educationLevel && (
              <option value="">{translations.selectEducation}</option>
            )}
            {Object.values(EducationLevel).map((level) => (
              <option key={level} value={level}>
                {translations.educationLevels[level]}
              </option>
            ))}
          </select>
          {errors.educationLevel && (
            <p className="mt-1 text-sm text-red-600">{errors.educationLevel}</p>
          )}
        </div>

        {/* Location */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {translations.location}
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location || ""}
            onChange={onChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${errors.location
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 "
              }`}
            placeholder={translations.locationPlaceholder}
          />
          {errors.location && (
            <p className="mt-1 text-sm text-red-600">{errors.location}</p>
          )}
        </div>

        {/* Experience Required */}
        <div className="col-span-2">
          <label
            htmlFor="experienceRequired"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {translations.experienceRequired}
          </label>
          <input
            type="text"
            id="experienceRequired"
            name="experienceRequired"
            value={formData.experienceRequired || ""}
            onChange={onChange}
            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${errors.experienceRequired
                ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                : "border-gray-300 "
              }`}
            placeholder={translations.experiencePlaceholder}
          />
          {errors.experienceRequired && (
            <p className="mt-1 text-sm text-red-600">
              {errors.experienceRequired}
            </p>
          )}
        </div>

        {/* Recruiter Fee */}
        <div>
          <label
            htmlFor="recruiterFee"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {translations.recruiterFee}
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <input
              type="number"
              id="recruiterFee"
              name="recruiterFee"
              value={formData.recruiterFee || ""}
              onChange={onChange}
              min={0}
              className={`block w-full pl-7 pr-3 py-2 border rounded-md focus:outline-none ${errors.recruiterFee
                  ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                  : "border-gray-300 "
                }`}
              placeholder="500"
            />
          </div>
          {errors.recruiterFee && (
            <p className="mt-1 text-sm text-red-600">{errors.recruiterFee}</p>
          )}
        </div>

        <input
          type="hidden"
          name="organizationId"
          value={formData.organizationId || ""}
        />
        {errors.organizationId && (
          <p className="mt-1 text-sm text-red-600">{errors.organizationId}</p>
        )}
      </div>

      {/* Form Actions */}
      <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          {translations.cancel}
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""
            }`}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              {translations.submitting}
            </span>
          ) : (
            translations.submit
          )}
        </button>
      </div>
    </form>
  );
}
