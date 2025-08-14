import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router";
import JobForm from "~/components/jobs/JobForm";
import { getJobSchema } from "~/components/jobs/schema";
import translations from "~/components/jobs/translations";
import Title from "~/components/Title";
import { useProjects } from "~/hooks/projects";
import {
  ContractType,
  EducationLevel,
  Job,
  JobStatus,
  JobType,
} from "~/models/Job";
import { Create } from "~/rest";
import { createJob } from "~/services/jobs";
import { DashboardOutletContext } from "~/types/dashboard";

export default function NewJob() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language, organization } = useOutletContext<DashboardOutletContext>();
  const t = translations[language] || translations.en;
  const [formValues, setFormValues] = useState<Create<Job>>({
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
    benefits: "",
    postedAt: new Date().toISOString().split("T")[0],
    projectId: "",
    organizationId: organization.id,
    isActive: true,
    status: JobStatus.OPEN,
  });
  const [errors, setErrors] = useState<
    Partial<Record<keyof Job | "form", string>>
  >({});
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const { data: projects = [] } = useProjects();

  const schema = getJobSchema(t);

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
      const response = await createJob(processedData);
      if (!response) throw new Error(t.errorMessage);

      const data = response;
      navigate(`/dashboard/jobs/${data.id}`, {
        state: { successMessage: t.successMessage },
      });
      queryClient.invalidateQueries({ queryKey: ["jobs"] });
    } catch (error) {
      console.error("Error creating job:", error);
      setErrors({
        ...errors,
        form: (error as Error).message || "An unexpected error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 p-6">
        <Title title={t.createTitle} description={t.createDescription} />

        <JobForm
          translations={t}
          isSubmitting={isSubmitting}
          projects={projects}
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          {...formValues}
        />
      </div>
    </div>
  );
}
