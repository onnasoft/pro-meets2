import { useLoaderData, useNavigate } from "@remix-run/react";
import { useState } from "react";
import Joi from "joi";
import { Building2, Globe, MapPin, Phone, Users } from "lucide-react";
import { languageLoader } from "~/loaders/language";

export { languageLoader as loader } from "~/loaders/language";

const translations = {
  en: {
    title: "Create new organization",
    fields: {
      name: "Organization name",
      description: "Description",
      website: "Website URL",
      location: "Location",
      phone: "Phone number",
      members: "Initial members (emails)",
      logo: "Logo URL",
    },
    placeholders: {
      website: "https://example.com",
      members: "user1@example.com, user2@example.com",
    },
    cancel: "Cancel",
    submit: "Create organization",
    submitting: "Creating...",
    errors: {
      name: {
        min: "Name must be at least 3 characters",
        empty: "Name is required",
        required: "Name is required",
      },
      website: {
        uri: "Please enter a valid URL (https://example.com)",
      },
      phone: {
        pattern: "Please enter a valid phone number",
      },
      members: {
        emails: "Please enter valid email addresses separated by commas",
      },
    },
    successMessage: "Organization created successfully!",
    errorMessage: "Error creating organization",
    optional: "(optional)",
  },
  es: {
    title: "Crear nueva organización",
    fields: {
      name: "Nombre de la organización",
      description: "Descripción",
      website: "URL del sitio web",
      location: "Ubicación",
      phone: "Número de teléfono",
      members: "Miembros iniciales (correos)",
      logo: "URL del logo",
    },
    placeholders: {
      website: "https://ejemplo.com",
      members: "usuario1@ejemplo.com, usuario2@ejemplo.com",
    },
    cancel: "Cancelar",
    submit: "Crear organización",
    submitting: "Creando...",
    errors: {
      name: {
        min: "El nombre debe tener al menos 3 caracteres",
        empty: "El nombre es obligatorio",
        required: "El nombre es obligatorio",
      },
      website: {
        uri: "Ingresa una URL válida (https://ejemplo.com)",
      },
      phone: {
        pattern: "Ingresa un número de teléfono válido",
      },
      members: {
        emails: "Ingresa direcciones de correo válidas separadas por comas",
      },
    },
    successMessage: "¡Organización creada exitosamente!",
    errorMessage: "Error al crear la organización",
    optional: "(opcional)",
  },
  fr: {
    title: "Créer une nouvelle organisation",
    fields: {
      name: "Nom de l'organisation",
      description: "Description",
      website: "URL du site web",
      location: "Emplacement",
      phone: "Numéro de téléphone",
      members: "Membres initiaux (emails)",
      logo: "URL du logo",
    },
    placeholders: {
      website: "https://exemple.com",
      members: "utilisateur1@exemple.com, utilisateur2@exemple.com",
    },
    cancel: "Annuler",
    submit: "Créer l'organisation",
    submitting: "Création en cours...",
    errors: {
      name: {
        min: "Le nom doit comporter au moins 3 caractères",
        empty: "Le nom est requis",
        required: "Le nom est requis",
      },
      website: {
        uri: "Veuillez entrer une URL valide (https://exemple.com)",
      },
      phone: {
        pattern: "Veuillez entrer un numéro de téléphone valide",
      },
      members: {
        emails:
          "Veuillez entrer des adresses email valides séparées par des virgules",
      },
    },
    successMessage: "Organisation créée avec succès !",
    errorMessage: "Erreur lors de la création de l'organisation",
    optional: "(optionnel)",
  },
  ja: {
    title: "新しい組織を作成",
    fields: {
      name: "組織名",
      description: "説明",
      website: "ウェブサイトURL",
      location: "所在地",
      phone: "電話番号",
      members: "初期メンバー（メールアドレス）",
      logo: "ロゴURL",
    },
    placeholders: {
      website: "https://example.com",
      members: "user1@example.com, user2@example.com",
    },
    cancel: "キャンセル",
    submit: "組織を作成",
    submitting: "作成中...",
    errors: {
      name: {
        min: "名前は3文字以上である必要があります",
        empty: "名前は必須です",
        required: "名前は必須です",
      },
      website: {
        uri: "有効なURLを入力してください（https://example.com）",
      },
      phone: {
        pattern: "有効な電話番号を入力してください",
      },
      members: {
        emails: "カンマ区切りで有効なメールアドレスを入力してください",
      },
    },
    successMessage: "組織が正常に作成されました！",
    errorMessage: "組織の作成中にエラーが発生しました",
    optional: "（任意）",
  },
  zh: {
    title: "创建新组织",
    fields: {
      name: "组织名称",
      description: "描述",
      website: "网站网址",
      location: "地点",
      phone: "电话号码",
      members: "初始成员（邮箱）",
      logo: "Logo 链接",
    },
    placeholders: {
      website: "https://example.com",
      members: "user1@example.com, user2@example.com",
    },
    cancel: "取消",
    submit: "创建组织",
    submitting: "创建中...",
    errors: {
      name: {
        min: "名称至少需要 3 个字符",
        empty: "名称为必填项",
        required: "名称为必填项",
      },
      website: {
        uri: "请输入有效的网址（https://example.com）",
      },
      phone: {
        pattern: "请输入有效的电话号码",
      },
      members: {
        emails: "请输入用逗号分隔的有效邮箱地址",
      },
    },
    successMessage: "组织创建成功！",
    errorMessage: "创建组织时出错",
    optional: "（可选）",
  },
};

const getOrganizationSchema = (t: typeof translations.en) =>
  Joi.object({
    name: Joi.string()
      .min(3)
      .messages({
        "string.min": t.errors.name.min,
        "string.empty": t.errors.name.empty,
      })
      .required()
      .messages({
        "any.required": t.errors.name.required,
      }),
    description: Joi.string().allow("").optional(),
    website: Joi.string()
      .uri()
      .messages({
        "string.uri": t.errors.website.uri,
      })
      .allow("")
      .optional(),
    location: Joi.string().allow("").optional(),
    phone: Joi.string()
      .pattern(/^[\d\s+\-()]{7,}$/)
      .messages({
        "string.pattern.base": t.errors.phone.pattern,
      })
      .allow("")
      .optional(),
    members: Joi.string()
      .custom((value: string, helpers) => {
        if (!value) return value;
        const emails = value.split(",").map((e) => e.trim());
        const invalid = emails.some(
          (e) => !Joi.string().email().validate(e).error
        );
        return invalid ? helpers.error("string.emails") : value;
      }, "email validation")
      .messages({
        "string.emails": t.errors.members.emails,
      })
      .allow("")
      .optional(),
    logo: Joi.string().uri().allow("").optional(),
  });

export default function NewOrganizationPage() {
  const { language } = useLoaderData<typeof languageLoader>();
  const t = translations[language] || translations.en;
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    phone: "",
    members: "",
    logo: "",
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

    try {
      // Procesar miembros antes de enviar
      const processedData = {
        ...value,
        members: value.members
          ? value.members
              .split(",")
              .map((e: string) => e.trim())
              .filter(Boolean)
          : [],
      };

      const response = await fetch("/api/organizations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(processedData),
        credentials: "include",
      });

      if (!response.ok) throw new Error(t.errorMessage);

      const data = await response.json();
      navigate(`/dashboard/organizations/${data.id}`, {
        state: { successMessage: t.successMessage },
      });
    } catch {
      setErrors({ submit: t.errorMessage });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex items-center mb-8">
        <Building2 className="h-8 w-8 text-primary-600 mr-3" />
        <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Nombre */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t.fields.name}
            </label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                errors.name ? "border-red-300" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Descripción */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t.fields.description}{" "}
              <span className="text-gray-500">{t.optional}</span>
            </label>
            <textarea
              name="description"
              rows={3}
              value={formValues.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Website */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Globe className="h-4 w-4 mr-2 text-gray-500" />
                {t.fields.website}{" "}
                <span className="text-gray-500 ml-1">{t.optional}</span>
              </label>
              <input
                type="url"
                name="website"
                value={formValues.website}
                onChange={handleChange}
                placeholder={t.placeholders.website}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                  errors.website ? "border-red-300" : "border-gray-300"
                }`}
              />
              {errors.website && (
                <p className="mt-1 text-sm text-red-600">{errors.website}</p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                {t.fields.location}{" "}
                <span className="text-gray-500 ml-1">{t.optional}</span>
              </label>
              <input
                type="text"
                name="location"
                value={formValues.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                {t.fields.phone}{" "}
                <span className="text-gray-500 ml-1">{t.optional}</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                  errors.phone ? "border-red-300" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
              )}
            </div>

            {/* Logo URL */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Building2 className="h-4 w-4 mr-2 text-gray-500" />
                Logo URL{" "}
                <span className="text-gray-500 ml-1">{t.optional}</span>
              </label>
              <input
                type="url"
                name="logo"
                value={formValues.logo}
                onChange={handleChange}
                placeholder="https://example.com/logo.png"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
          </div>

          {/* Members */}
          <div>
            <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
              <Users className="h-4 w-4 mr-2 text-gray-500" />
              {t.fields.members}{" "}
              <span className="text-gray-500 ml-1">{t.optional}</span>
            </label>
            <input
              type="text"
              name="members"
              value={formValues.members}
              onChange={handleChange}
              placeholder={t.placeholders.members}
              className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                errors.members ? "border-red-300" : "border-gray-300"
              }`}
            />
            <p className="mt-1 text-xs text-gray-500">
              Separate multiple emails with commas
            </p>
            {errors.members && (
              <p className="mt-1 text-sm text-red-600">{errors.members}</p>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              {t.cancel}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? t.submitting : t.submit}
            </button>
          </div>

          {errors.submit && (
            <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">
              {errors.submit}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
