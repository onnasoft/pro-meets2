import { useNavigate, useOutletContext } from "@remix-run/react";
import { useState } from "react";
import { createOrganization } from "~/services/organizations";
import { Organization, OrganizationPlan } from "~/types/models";
import { PlanSelector } from "~/components/organization/PlanSelector";
import { BasicInfoForm } from "~/components/organization/BasicInfoForm";
import { ContactInfoForm } from "~/components/organization/ContactInfoForm";
import { SubmitSection } from "~/components/organization/SubmitSection";
import translations from "~/components/organization/translations";
import { getOrganizationSchema } from "~/components/organization/schema";
import { Create } from "~/rest";
import { DashboardOutletContext } from "~/types/dashboard";
import { createMedia } from "~/services/media";

export { languageLoader as loader } from "~/loaders/language";

export default function NewOrganizationPage() {
  const { language } = useOutletContext<DashboardOutletContext>();
  const t = translations[language] || translations.en;
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formValues, setFormValues] = useState<
    Omit<Create<Organization>, "ownerId" | "current" | "status">
  >({
    name: "",
    description: "",
    website: "",
    location: "",
    phone: "",
    logoUrl: "",
    plan: OrganizationPlan.FREE,
  });

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

    const processedData = {
      ...value,
      members: value.members
        ? value.members
            .split(",")
            .map((e: string) => e.trim())
            .filter(Boolean)
        : [],
    };

    try {
      const response = await createOrganization(processedData);
      if (!response) throw new Error(t.errorMessage);

      const data = response;
      navigate(`/dashboard/organizations/${data.id}`, {
        state: { successMessage: t.successMessage },
      });
    } catch (error) {
      console.error("Error creating organization:", error);
      setErrors({ submit: t.errorMessage });
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
        alt: "",
      });
      console.log(media);
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

          <PlanSelector
            selectedPlan={formValues.plan}
            onSelectPlan={handlePlanSelect}
            translations={t}
            error={errors.plan}
          />

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
