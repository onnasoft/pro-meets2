import { useNavigate, useOutletContext } from "@remix-run/react";
import { useState } from "react";
import { BasicInfoForm } from "~/components/projects/BasicInfoForm";
import { ContactInfoForm } from "~/components/projects/ContactInfoForm";
import { SubmitSection } from "~/components/projects/SubmitSection";
import translations from "~/components/projects/translations";
import { useRequireOrganization } from "~/hooks/require-organization";
import { Create } from "~/rest";
import { DashboardOutletContext } from "~/types/dashboard";
import { Project } from "~/types/models";

export default function NewProjectPage() {
  useRequireOrganization();
  const { language } = useOutletContext<DashboardOutletContext>();
  const t = translations[language] || translations.en;
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formValues, setFormValues] = useState<Create<Project>>({
    name: "",
    description: "",
    organizationId: "",
    ownerId: "",
    website: "",
    location: "",
    phone: "",
    logoUrl: "",
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
      // Here you would typically call your API to create the project
      // await createProject(formValues);
      console.log("Project created:", formValues);
      navigate("/dashboard/projects");
    } catch (error) {
      console.error("Error creating project:", error);
      setErrors({ submit: "Failed to create project. Please try again." });
    } finally {
      setIsSubmitting(false);
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
