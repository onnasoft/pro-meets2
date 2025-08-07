import { LoaderFunctionArgs } from "@remix-run/node";
import {
  redirect,
  useLoaderData,
  useNavigate,
  useOutletContext,
} from "@remix-run/react";
import { useMemo, useState } from "react";
import { BasicInfoForm } from "~/components/BasicInfoForm";
import { ContactInfoForm } from "~/components/ContactInfoForm";
import { LeaderSelectionForm } from "~/components/projects/LeaderSelectionForm";
import { SubmitSection } from "~/components/projects/SubmitSection";
import translations from "~/components/projects/translations";
import { useOrganizationsMembers } from "~/hooks/organization-members";
import { useRequireOrganization } from "~/hooks/require-organization";
import { Create, In } from "~/rest";
import { createMedia } from "~/services/media";
import { getProject, updateProject } from "~/services/projects";
import useErrorStore from "~/store/error";
import { DashboardOutletContext } from "~/types/dashboard";
import { MemberRole, MemberStatus, Project } from "~/types/models";

export async function loader(args: LoaderFunctionArgs) {
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
      throw new Error("Organization ID is required");
    }

    const project = await getProject(
      id,
      {},
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      }
    );

    return { project };
  } catch {
    return redirect("/login");
  }
}

export default function ViewProjectPage() {
  useRequireOrganization();
  const { language, organizations } =
    useOutletContext<DashboardOutletContext>();
  const t = translations[language] || translations.en;
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const organizationId = organizations?.find((org) => org.current)?.id;
  const { project } = useLoaderData<typeof loader>();
  const [formValues, setFormValues] = useState<Create<Project>>({
    name: project.name || "",
    description: project.description || "",
    organizationId: organizationId!,
    website: project.website || "",
    location: project.location || "",
    phone: project.phone || "",
    logoUrl: project.logoUrl || "",
    startDate: project.startDate || "",
    dueDate: project.dueDate || "",
    leaderId: project.leaderId || "",
  });
  const { setError } = useErrorStore();
  const allowedRoles = useMemo(
    () => [MemberRole.OWNER, MemberRole.ADMIN, MemberRole.MEMBER],
    []
  );
  const { data: members = [] } = useOrganizationsMembers({
    relations: ["user"],
    where: {
      organizationId,
      status: MemberStatus.ACTIVE,
      role: In(allowedRoles),
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    // Simulate API call
    try {
      const result = await updateProject(project.id, {
        ...formValues,
        organizationId: organizationId!,
        startDate: formValues.startDate
          ? new Date(formValues.startDate).toISOString()
          : undefined,
        dueDate: formValues.dueDate
          ? new Date(formValues.dueDate).toISOString()
          : undefined,
      });
      if (!result) throw new Error(t.errorMessage);

      console.log("Project updated:", result);
    } catch (error) {
      console.error("Error updating project:", error);
      setError(
        t.errorMessage,
        (error as Error).message || "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = async (file: File) => {
    try {
      if (!file) return;
      if (file.size > 2 * 1024 * 1024) {
        setErrors((prev) => ({ ...prev, logoUrl: t.logoSizeError }));
        return;
      }

      const media = await createMedia({
        file,
        alt: "Project Logo",
        organizationId,
      });
      const logoUrl = media.url;
      setFormValues((prev) => ({ ...prev, logoUrl }));
    } catch (error) {
      console.error("Error uploading logo:", error);
      setErrors((prev) => ({ ...prev, logoUrl: t.logoUploadError }));
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <BasicInfoForm
            name={formValues.name}
            description={formValues.description ?? ""}
            onChange={handleChange}
            errors={errors}
            translations={t}
          />

          <ContactInfoForm
            website={formValues.website!}
            location={formValues.location!}
            phone={formValues.phone!}
            logoUrl={formValues.logoUrl!}
            onChange={handleChange}
            onLogoUpload={handleFileChange}
            errors={errors}
            translations={t}
          />

          <LeaderSelectionForm
            leaders={members}
            selectedLeader={members.find(
              (m) => m.userId === formValues.leaderId
            )}
            startDate={formValues.startDate ?? ""}
            dueDate={formValues.dueDate ?? ""}
            onLeaderSelect={(leader) => {
              setFormValues((prev) => ({
                ...prev,
                leaderId: leader?.userId ? leader.userId : "",
              }));
            }}
            onDateChange={handleChange}
            errors={errors}
            translations={t}
          />

          <SubmitSection
            isSubmitting={isSubmitting}
            onCancel={() => navigate("/dashboard/projects")}
            submitError={errors.submit}
            translations={t}
          />
        </form>
      </div>
    </div>
  );
}
