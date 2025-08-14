import { useNavigate, useOutletContext } from "react-router";
import GenericDialog from "../GenericDialog";
import JobsTable from "../jobs/JobsTable";
import { useState } from "react";
import {
  ContractType,
  EducationLevel,
  Job,
  JobStatus,
  JobType,
} from "~/models/Job";
import { useJobs } from "~/hooks/jobs";
import JobForm from "../jobs/JobForm";
import translations from "../jobs/translations";
import { DashboardOutletContext } from "~/types/dashboard";
import { Create, Update } from "~/rest";
import { Project } from "~/models/Project";
import { createJob, updateJob } from "~/services/jobs";
import { getJobSchema } from "../jobs/schema";

interface JobsManagerProps {
  readonly project: Project;
}

export default function JobsManager({ project }: JobsManagerProps) {
  const { language, organization } = useOutletContext<DashboardOutletContext>();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<"create" | "edit" | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jobId, setJobId] = useState<string | null>(null);
  const t = translations[language];

  const [formValues, setFormValues] = useState<Create<Job> | Update<Job>>({
    title: "",
    description: "",
    location: "",
    type: JobType.FULL_TIME,
    contractType: ContractType.PERMANENT,
    educationLevel: EducationLevel.BACHELOR,
    experienceRequired: "",
    salaryMin: 0,
    salaryMax: 0,
    recruiterFee: 0,
    skillsRequired: "",
    postedAt: "",
    projectId: project.id,
    organizationId: organization.id,
    benefits: "",
    isActive: false,
    status: JobStatus.OPEN,
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof Job | "form", string>>
  >({});

  const schema = getJobSchema(t);
  const { data: jobs = [] } = useJobs({
    relations: ["project"],
    where: {
      projectId: project.id,
    },
  });

  const handleNewJob = () => {
    setIsOpen("create");
    setJobId(null);
    setFormValues({
      title: "",
      description: "",
      location: "",
      type: JobType.FULL_TIME,
      contractType: ContractType.PERMANENT,
      educationLevel: EducationLevel.BACHELOR,
      experienceRequired: "",
      salaryMin: 0,
      salaryMax: 0,
      recruiterFee: 0,
      skillsRequired: "",
      postedAt: "",
      projectId: project.id,
      organizationId: organization.id,
      benefits: "",
      isActive: false,
      status: JobStatus.OPEN,
    });
  };

  const handleEditJob = (job: Job) => {
    setIsOpen("edit");
    setJobId(job.id);
    setFormValues({
      title: job.title,
      description: job.description,
      location: job.location,
      type: job.type,
      contractType: job.contractType,
      educationLevel: job.educationLevel,
      experienceRequired: job.experienceRequired,
      salaryMin: job.salaryMin,
      salaryMax: job.salaryMax,
      recruiterFee: job.recruiterFee,
      skillsRequired: job.skillsRequired,
      postedAt: job.postedAt
        ? new Date(job.postedAt).toISOString().split("T")[0]
        : "",
      projectId: job.projectId,
      organizationId: job.organizationId || "",
      benefits: job.benefits || "",
      isActive: job.isActive,
      status: job.status,
    });
  };

  const handleDeleteJob = (job: Job) => {
    alert(`Delete job: ${job.title}`);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors({
      ...errors,
      [name]: undefined,
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrors({});

    const { error, value } = schema.validate(formValues, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const validationErrors = error.details.reduce(
        (acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        },
        {} as Record<string, string>
      );
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const processedData = { ...value };

    try {
      if (isOpen === "create") {
        await createJob(processedData);
      } else if (isOpen === "edit") {
        await updateJob(jobId!, processedData);
      }
    } catch {
      setErrors({ form: "Error submitting form" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <GenericDialog
        isOpen={isOpen !== null}
        onClose={() => setIsOpen(null)}
        title="Confirm Action"
        size="6xl"
      >
        <JobForm
          translations={t}
          isSubmitting={isSubmitting}
          projects={[project]}
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          {...formValues}
        />
      </GenericDialog>

      <JobsTable
        jobs={jobs}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onNewJob={handleNewJob}
        onEditJob={handleEditJob}
        onDeleteJob={handleDeleteJob}
      />
    </>
  );
}
