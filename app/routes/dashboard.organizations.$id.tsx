import {
  useLoaderData,
  useNavigate,
  useOutletContext,
  LoaderFunctionArgs,
  redirect,
} from "react-router";
import { useState } from "react";
import { PlanSelector } from "~/components/organization/PlanSelector";
import { BasicInfoForm } from "~/components/BasicInfoForm";
import { ContactInfoForm } from "~/components/ContactInfoForm";
import { SubmitSection } from "~/components/organization/SubmitSection";
import translations from "~/components/organization/translations";
import { getOrganizationSchema } from "~/components/organization/schema";
import MembersManager from "~/components/organization/MembersManager";
import { DashboardOutletContext } from "~/types/dashboard";
import useErrorStore from "~/store/error";
import Title from "~/components/Title";
import { createMedia, getOrganization, In, MemberRole, MemberStatus, Organization, OrganizationPlan, Update, updateOrganization } from "pro-meets-core";

interface LoaderData {
  organization: Organization;
}

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

    const organization = await getOrganization(
      id,
      {
        where: {
          members: {
            status: In([MemberStatus.ACTIVE, MemberStatus.PENDING]),
          },
        },
        relations: ["members", "members.user"],
      },
      {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      }
    );

    return { organization } as LoaderData;
  } catch {
    return redirect("/login");
  }
}

type NonNullableFields<T> = {
  [K in keyof T]-?: NonNullable<T[K]>;
};

export default function ViewOrganizationPage() {
  const { user, language } = useOutletContext<DashboardOutletContext>();
  const { organization } = useLoaderData<typeof loader>();
  const t = translations[language] || translations.en;
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formValues, setFormValues] = useState<
    NonNullableFields<Omit<Update<Organization>, "ownerId" | "billingEmail">>
  >({
    name: organization.name ?? "",
    description: organization.description ?? "",
    website: organization.website ?? "",
    location: organization.location ?? "",
    phone: organization.phone ?? "",
    logoUrl: organization.logoUrl ?? "",
    plan: organization.plan ?? OrganizationPlan.FREE,
    current: organization.current ?? false,
    status: organization.status ?? "",
  });
  const setError = useErrorStore((state) => state.setError);

  const members = organization.members ?? [];
  const role =
    organization.members.find((m) => m.user?.id === user.id)?.role ||
    MemberRole.GUEST;
  const canUpdate = role === MemberRole.OWNER || role === MemberRole.ADMIN;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handlePlanSelect = (plan: OrganizationPlan) => {
    setFormValues((prev) => ({ ...prev, plan }));
    if (errors.plan) setErrors((prev) => ({ ...prev, plan: "" }));
  };

  const schema = getOrganizationSchema(t);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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

    const processedData = value;

    try {
      const response = await updateOrganization(organization.id, processedData);
      if (!response) {
        throw new Error(t.errorMessage);
      }
    } catch (error) {
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

      const media = await createMedia({ file, alt: "Organization Logo" });
      const logoUrl = media.url;
      setFormValues((prev) => ({ ...prev, logoUrl }));
    } catch (error) {
      console.error("Error uploading logo:", error);
      setErrors((prev) => ({ ...prev, logoUrl: t.logoUploadError }));
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <Title
          title={canUpdate ? t.updateTitle : t.viewTitle}
          description={canUpdate ? t.updateDescription : t.viewDescription}
        />

        <form onSubmit={handleSubmit} className="space-y-6">
          <BasicInfoForm
            name={formValues.name}
            description={formValues.description}
            onChange={handleChange}
            errors={errors}
            canUpdate={canUpdate}
            translations={t}
          />

          <ContactInfoForm
            website={formValues.website}
            location={formValues.location}
            phone={formValues.phone}
            logoUrl={formValues.logoUrl}
            onChange={handleChange}
            onLogoUpload={handleFileChange}
            errors={errors}
            canUpdate={canUpdate}
            translations={t}
          />

          <MembersManager
            members={members}
            canUpdate={canUpdate}
            organization={organization}
            /*onChange={handleChange}
            error={errors.members}
            translations={t}*/
          />

          {role === MemberRole.OWNER && (
            <PlanSelector
              selectedPlan={formValues.plan}
              onSelectPlan={handlePlanSelect}
              translations={t}
              error={errors.plan}
            />
          )}
          {canUpdate && (
            <SubmitSection
              isSubmitting={isSubmitting}
              onCancel={() => navigate(-1)}
              submitError={errors.submit}
              translations={t}
            />
          )}
        </form>
      </div>
    </div>
  );
}
