import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import {
  LoaderFunctionArgs,
  redirect,
  useLoaderData,
  useNavigate,
  useOutletContext,
} from "react-router";
import JobForm from "~/components/jobs/JobForm";
import { getJobSchema } from "~/components/jobs/schema";
import translations from "~/components/jobs/translations";
import Title from "~/components/Title";
import { useProjects } from "~/hooks/projects";
import { Job } from "~/models/Job";
import { Create } from "~/rest";
import { getJob, updateJob } from "~/services/jobs";
import { DashboardOutletContext } from "~/types/dashboard";

export const loader = async (args: LoaderFunctionArgs) => {
  try {
    const cookieHeader = args.request.headers.get("Cookie") || "";
    const cookies = Object.fromEntries(
      cookieHeader.split("; ").map((c) => {
        const [k, v] = c.split("=");
        return [k, decodeURIComponent(v)];
      })
    );
    const accessToken = cookies.accessToken || null;

    if (!accessToken) {
      throw new Error("Access token not found in cookies");
    }

    const id = args.params.id;
    if (!id) {
      throw new Error("Job ID is required");
    }

    const job = await getJob(
      id,
      {},
      {
        Authorization: `Bearer ${accessToken}`,
      }
    );

    if (!job) {
      throw new Error("Job not found");
    }

    return { job };
  } catch {
    return redirect("/login");
  }
};

export default function NewJob() {
  const { job } = useLoaderData<{ job: Job }>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { language } = useOutletContext<DashboardOutletContext>();
  const t = translations[language] || translations.en;
  const [formValues, setFormValues] = useState<Create<Job>>({
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
    postedAt: job.postedAt,
    projectId: job.projectId,
    organizationId: job.organizationId,
    benefits: job.benefits,
    isActive: job.isActive,
    status: job.status,
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
      const response = await updateJob(job.id, processedData);
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
    <div className="mx-auto">
      <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 p-6">
        <Title title={t.updateTitle} description={t.updateDescription} />

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
