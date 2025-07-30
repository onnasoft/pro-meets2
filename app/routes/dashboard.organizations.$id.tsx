import { useLoaderData, useNavigate, useOutletContext } from "@remix-run/react";
import { useState } from "react";
import { Building2 } from "lucide-react";
import { getOrganization, updateOrganization } from "~/services/organizations";
import {
  MemberRole,
  Organization,
  OrganizationPlan,
  Update,
} from "~/types/models";
import { PlanSelector } from "~/components/organization/PlanSelector";
import { BasicInfoForm } from "~/components/organization/BasicInfoForm";
import { ContactInfoForm } from "~/components/organization/ContactInfoForm";
import { SubmitSection } from "~/components/organization/SubmitSection";
import translations from "~/components/organization/translations";
import { getOrganizationSchema } from "~/components/organization/schema";
import { LoaderFunctionArgs, redirect } from "@remix-run/node";
import MembersManager from "~/components/organization/MembersManager";
import { DashboardOutletContext } from "~/types/dashboard";

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

export default function NewOrganizationPage() {
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
    logoSrc: organization.logoSrc ?? "",
    plan: organization.plan ?? OrganizationPlan.FREE,
    current: organization.current ?? false,
    status: organization.status ?? "",
    logoUrl: organization.logoUrl ?? "",
  });

  const members = organization.members ?? [];
  const role =
    organization.members.find((m) => m.user?.id === user.id)?.role ||
    MemberRole.MEMBER;

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const schema = getOrganizationSchema(t);
    const { error, value } = schema.validate(formValues, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const validationErrors = error.details.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {} as Record<string, string>);
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const processedData = value;

    try {
      const response = await updateOrganization(organization.id, processedData);
      if (!response) throw new Error(t.errorMessage);
    } catch (error) {
      console.error("Error creating organization:", error);
      setErrors({ submit: t.errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex items-center mb-8">
        <Building2 className="h-8 w-8 text-primary-600 mr-3" />
        <h1 className="text-2xl font-bold text-gray-900">{t.updateTitle}</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          <BasicInfoForm
            name={formValues.name}
            description={formValues.description}
            onChange={handleChange}
            errors={errors}
            translations={t}
          />

          <ContactInfoForm
            website={formValues.website}
            location={formValues.location}
            phone={formValues.phone}
            logoSrc={formValues.logoSrc}
            onChange={handleChange}
            errors={errors}
            translations={t}
          />

          <MembersManager
            members={members}
            role={role}
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

          <SubmitSection
            isSubmitting={isSubmitting}
            onCancel={() => navigate(-1)}
            submitError={errors.submit}
            translations={t}
          />
        </form>
      </div>
    </div>
  );
}
