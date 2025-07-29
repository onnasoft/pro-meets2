import { useLoaderData } from "@remix-run/react";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Globe2,
  GitBranch,
  Award,
  Languages,
  Linkedin,
  Github,
  Twitter,
  Globe,
  X,
} from "lucide-react";
import { languageLoader } from "~/loaders/language";

export { languageLoader as loader } from "~/loaders/language";

const translations = {
  en: {
    title: "Professional Profile",
    sections: {
      personal: "Personal Information",
      summary: "Professional Summary",
      experience: "Work Experience",
      education: "Education",
      skills: "Skills",
      languages: "Languages",
      projects: "Projects",
      certifications: "Certifications",
      references: "References",
      social: "Social Media",
    },
    labels: {
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      address: "Address",
      birthdate: "Date of Birth",
      nationality: "Nationality",
      position: "Position",
      company: "Company",
      period: "Period",
      description: "Description",
      degree: "Degree",
      institution: "Institution",
      year: "Year",
      skillName: "Skill",
      level: "Level",
      language: "Language",
      proficiency: "Proficiency",
      projectName: "Project Name",
      role: "Role",
      technologies: "Technologies",
      certName: "Certification",
      issuer: "Issuer",
      date: "Date",
      referenceName: "Reference",
      contact: "Contact",
      linkedin: "LinkedIn",
      github: "GitHub",
      twitter: "Twitter",
      website: "Website",
    },
    placeholders: {
      summary: "Brief description of your professional profile...",
      description: "Describe your responsibilities and achievements...",
    },
    levels: {
      beginner: "Beginner",
      intermediate: "Intermediate",
      advanced: "Advanced",
      expert: "Expert",
      native: "Native",
      fluent: "Fluent",
      professional: "Professional",
      basic: "Basic",
    },
    actions: {
      edit: "Edit",
      save: "Save",
      cancel: "Cancel",
      add: "Add",
      remove: "Remove",
    },
  },
  es: {
    title: "Perfil Profesional",
    sections: {
      personal: "Información Personal",
      summary: "Resumen Profesional",
      experience: "Experiencia Laboral",
      education: "Educación",
      skills: "Habilidades",
      languages: "Idiomas",
      projects: "Proyectos",
      certifications: "Certificaciones",
      references: "Referencias",
      social: "Redes Sociales",
    },
    labels: {
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Teléfono",
      address: "Dirección",
      birthdate: "Fecha de Nacimiento",
      nationality: "Nacionalidad",
      position: "Cargo",
      company: "Empresa",
      period: "Periodo",
      description: "Descripción",
      degree: "Título",
      institution: "Institución",
      year: "Año",
      skillName: "Habilidad",
      level: "Nivel",
      language: "Idioma",
      proficiency: "Dominio",
      projectName: "Nombre del Proyecto",
      role: "Rol",
      technologies: "Tecnologías",
      certName: "Certificación",
      issuer: "Emisor",
      date: "Fecha",
      referenceName: "Referencia",
      contact: "Contacto",
      linkedin: "LinkedIn",
      github: "GitHub",
      twitter: "Twitter",
      website: "Sitio Web",
    },
    placeholders: {
      summary: "Breve descripción de tu perfil profesional...",
      description: "Describe tus responsabilidades y logros...",
    },
    levels: {
      beginner: "Principiante",
      intermediate: "Intermedio",
      advanced: "Avanzado",
      expert: "Experto",
      native: "Nativo",
      fluent: "Fluido",
      professional: "Profesional",
      basic: "Básico",
    },
    actions: {
      edit: "Editar",
      save: "Guardar",
      cancel: "Cancelar",
      add: "Agregar",
      remove: "Eliminar",
    },
  },
  fr: {
    title: "Profil Professionnel",
    sections: {
      personal: "Informations Personnelles",
      summary: "Résumé Professionnel",
      experience: "Expérience Professionnelle",
      education: "Éducation",
      skills: "Compétences",
      languages: "Langues",
      projects: "Projets",
      certifications: "Certifications",
      references: "Références",
      social: "Réseaux Sociaux",
    },
    labels: {
      name: "Nom Complet",
      email: "E-mail",
      phone: "Téléphone",
      address: "Adresse",
      birthdate: "Date de Naissance",
      nationality: "Nationalité",
      position: "Poste",
      company: "Entreprise",
      period: "Période",
      description: "Description",
      degree: "Diplôme",
      institution: "Établissement",
      year: "Année",
      skillName: "Compétence",
      level: "Niveau",
      language: "Langue",
      proficiency: "Maîtrise",
      projectName: "Nom du Projet",
      role: "Rôle",
      technologies: "Technologies",
      certName: "Certification",
      issuer: "Émetteur",
      date: "Date",
      referenceName: "Référence",
      contact: "Contact",
      linkedin: "LinkedIn",
      github: "GitHub",
      twitter: "Twitter",
      website: "Site Web",
    },
    placeholders: {
      summary: "Brève description de votre profil professionnel...",
      description: "Décrivez vos responsabilités et réalisations...",
    },
    levels: {
      beginner: "Débutant",
      intermediate: "Intermédiaire",
      advanced: "Avancé",
      expert: "Expert",
      native: "Natif",
      fluent: "Courant",
      professional: "Professionnel",
      basic: "Basique",
    },
    actions: {
      edit: "Modifier",
      save: "Enregistrer",
      cancel: "Annuler",
      add: "Ajouter",
      remove: "Supprimer",
    },
  },
  ja: {
    title: "職務経歴書",
    sections: {
      personal: "個人情報",
      summary: "職務要約",
      experience: "職務経験",
      education: "学歴",
      skills: "スキル",
      languages: "言語",
      projects: "プロジェクト",
      certifications: "資格",
      references: "推薦状",
      social: "ソーシャルメディア",
    },
    labels: {
      name: "氏名",
      email: "メール",
      phone: "電話番号",
      address: "住所",
      birthdate: "生年月日",
      nationality: "国籍",
      position: "職位",
      company: "会社名",
      period: "期間",
      description: "説明",
      degree: "学位",
      institution: "教育機関",
      year: "年",
      skillName: "スキル",
      level: "レベル",
      language: "言語",
      proficiency: "習熟度",
      projectName: "プロジェクト名",
      role: "役割",
      technologies: "技術",
      certName: "資格名",
      issuer: "発行者",
      date: "日付",
      referenceName: "推薦者",
      contact: "連絡先",
      linkedin: "LinkedIn",
      github: "GitHub",
      twitter: "Twitter",
      website: "ウェブサイト",
    },
    placeholders: {
      summary: "あなたの職務経歴を簡潔に説明してください...",
      description: "担当した業務内容や成果を記述してください...",
    },
    levels: {
      beginner: "初心者",
      intermediate: "中級者",
      advanced: "上級者",
      expert: "専門家",
      native: "ネイティブ",
      fluent: "流暢",
      professional: "ビジネスレベル",
      basic: "基礎",
    },
    actions: {
      edit: "編集",
      save: "保存",
      cancel: "キャンセル",
      add: "追加",
      remove: "削除",
    },
  },
  zh: {
    title: "职业简历",
    sections: {
      personal: "个人信息",
      summary: "职业概况",
      experience: "工作经验",
      education: "教育背景",
      skills: "技能",
      languages: "语言",
      projects: "项目",
      certifications: "证书",
      references: "推荐人",
      social: "社交媒体",
    },
    labels: {
      name: "姓名",
      email: "电子邮件",
      phone: "电话",
      address: "地址",
      birthdate: "出生日期",
      nationality: "国籍",
      position: "职位",
      company: "公司",
      period: "时间段",
      description: "描述",
      degree: "学位",
      institution: "院校",
      year: "年份",
      skillName: "技能",
      level: "水平",
      language: "语言",
      proficiency: "熟练程度",
      projectName: "项目名称",
      role: "角色",
      technologies: "技术",
      certName: "证书名称",
      issuer: "颁发机构",
      date: "日期",
      referenceName: "推荐人",
      contact: "联系方式",
      linkedin: "LinkedIn",
      github: "GitHub",
      twitter: "Twitter",
      website: "网站",
    },
    placeholders: {
      summary: "简要描述您的职业背景...",
      description: "描述您的职责和成就...",
    },
    levels: {
      beginner: "初级",
      intermediate: "中级",
      advanced: "高级",
      expert: "专家",
      native: "母语",
      fluent: "流利",
      professional: "专业",
      basic: "基础",
    },
    actions: {
      edit: "编辑",
      save: "保存",
      cancel: "取消",
      add: "添加",
      remove: "删除",
    },
  },
};

// Mock data for the profile
const mockProfile = {
  personal: {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, San Francisco, CA 94105",
    birthdate: "1990-05-15",
    nationality: "American",
  },
  summary:
    "Senior Software Engineer with 8+ years of experience in full-stack development, specializing in JavaScript technologies. Passionate about building scalable web applications and mentoring junior developers.",
  experience: [
    {
      id: "1",
      position: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      startDate: "2019-01-01",
      endDate: "2023-12-31",
      description:
        "Led a team of 5 developers to build a SaaS platform using React, Node.js, and AWS. Improved application performance by 40% through optimization techniques.",
    },
    {
      id: "2",
      position: "Software Developer",
      company: "Digital Innovations",
      startDate: "2015-06-01",
      endDate: "2018-12-31",
      description:
        "Developed and maintained web applications using Angular and .NET. Implemented CI/CD pipelines reducing deployment time by 60%.",
    },
  ],
  education: [
    {
      id: "1",
      degree: "Master of Computer Science",
      institution: "Stanford University",
      year: "2015",
    },
    {
      id: "2",
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of California",
      year: "2013",
    },
  ],
  skills: [
    { id: "1", name: "JavaScript", level: "expert" },
    { id: "2", name: "React", level: "expert" },
    { id: "3", name: "Node.js", level: "advanced" },
    { id: "4", name: "TypeScript", level: "advanced" },
    { id: "5", name: "AWS", level: "intermediate" },
  ],
  languages: [
    { id: "1", name: "English", proficiency: "native" },
    { id: "2", name: "Spanish", proficiency: "fluent" },
    { id: "3", name: "French", proficiency: "basic" },
  ],
  projects: [
    {
      id: "1",
      name: "E-commerce Platform",
      role: "Lead Developer",
      technologies: "React, Node.js, MongoDB",
      description:
        "Built a scalable e-commerce platform with payment integration and inventory management.",
    },
    {
      id: "2",
      name: "Task Management App",
      role: "Full-stack Developer",
      technologies: "Vue.js, Firebase",
      description:
        "Developed a collaborative task management application with real-time updates.",
    },
  ],
  certifications: [
    {
      id: "1",
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2021-03-15",
    },
    {
      id: "2",
      name: "Professional Scrum Master",
      issuer: "Scrum.org",
      date: "2020-08-10",
    },
  ],
  references: [
    {
      id: "1",
      name: "Sarah Williams",
      position: "CTO at Tech Solutions Inc.",
      contact: "sarah.williams@techsolutions.com",
    },
  ],
  social: {
    linkedin: "linkedin.com/in/alexjohnson",
    github: "github.com/alexjohnson",
    twitter: "twitter.com/alexjohnson",
    website: "alexjohnson.dev",
  },
};

export default function UserProfilePage() {
  const { language } = useLoaderData<typeof languageLoader>();
  const t = translations[language] || translations.en;
  const [profile, setProfile] = useState(mockProfile);
  const [editing, setEditing] = useState<string | null>(null);
  const [editData, setEditData] = useState<any>({});

  const handleEdit = (section: string, data?: any) => {
    setEditing(section);
    setEditData(data || {});
  };

  const handleSave = (section: string) => {
    if (section === "summary") {
      setProfile({ ...profile, summary: editData });
    } else if (section.startsWith("experience-")) {
      const id = section.replace("experience-", "");
      setProfile({
        ...profile,
        experience: profile.experience.map((exp) =>
          exp.id === id ? { ...exp, ...editData } : exp
        ),
      });
    }
    // Similar logic for other sections...
    setEditing(null);
  };

  const handleCancel = () => {
    setEditing(null);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center mb-8">
        <User className="h-8 w-8 text-primary-600 mr-3" />
        <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 space-y-8">
        {/* Personal Information */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <User className="h-5 w-5 mr-2 text-primary-600" />
              {t.sections.personal}
            </h2>
            <button
              onClick={() => handleEdit("personal")}
              className="text-primary-600 hover:text-primary-800 text-sm font-medium"
            >
              {t.actions.edit}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <Mail className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">{t.labels.email}</p>
                <p className="text-gray-800">{profile.personal.email}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Phone className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">{t.labels.phone}</p>
                <p className="text-gray-800">{profile.personal.phone}</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">{t.labels.address}</p>
                <p className="text-gray-800">{profile.personal.address}</p>
              </div>
            </div>
            <div className="flex items-start">
              <Calendar className="h-5 w-5 mr-2 text-gray-500 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">{t.labels.birthdate}</p>
                <p className="text-gray-800">{profile.personal.birthdate}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {t.sections.summary}
            </h2>
            <button
              onClick={() => handleEdit("summary", profile.summary)}
              className="text-primary-600 hover:text-primary-800 text-sm font-medium"
            >
              {t.actions.edit}
            </button>
          </div>

          {editing === "summary" ? (
            <div className="space-y-3">
              <textarea
                name="summary"
                value={editData}
                onChange={(e) => setEditData(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                rows={4}
                placeholder={t.placeholders.summary}
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={handleCancel}
                  className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  {t.actions.cancel}
                </button>
                <button
                  onClick={() => handleSave("summary")}
                  className="px-3 py-1 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700"
                >
                  {t.actions.save}
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-700 whitespace-pre-line">
              {profile.summary}
            </p>
          )}
        </section>

        {/* Work Experience */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <Briefcase className="h-5 w-5 mr-2 text-primary-600" />
              {t.sections.experience}
            </h2>
            <button
              onClick={() => handleEdit("experience-new")}
              className="text-primary-600 hover:text-primary-800 text-sm font-medium"
            >
              {t.actions.add}
            </button>
          </div>

          <div className="space-y-6">
            {profile.experience.map((exp) => (
              <div
                key={exp.id}
                className="border-l-2 border-primary-500 pl-4 py-2"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {exp.position}
                    </h3>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="text-sm text-gray-500">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(`experience-${exp.id}`, exp)}
                      className="text-primary-600 hover:text-primary-800"
                    >
                      {t.actions.edit}
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      {t.actions.remove}
                    </button>
                  </div>
                </div>
                {editing === `experience-${exp.id}` ? (
                  <div className="mt-3 space-y-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t.labels.position}
                        </label>
                        <input
                          type="text"
                          name="position"
                          value={editData.position}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t.labels.company}
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={editData.company}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t.labels.period} (Start)
                        </label>
                        <input
                          type="date"
                          name="startDate"
                          value={editData.startDate}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {t.labels.period} (End)
                        </label>
                        <input
                          type="date"
                          name="endDate"
                          value={editData.endDate}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        {t.labels.description}
                      </label>
                      <textarea
                        name="description"
                        value={editData.description}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        rows={3}
                        placeholder={t.placeholders.description}
                      />
                    </div>
                    <div className="flex justify-end space-x-2">
                      <button
                        onClick={handleCancel}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      >
                        {t.actions.cancel}
                      </button>
                      <button
                        onClick={() => handleSave(`experience-${exp.id}`)}
                        className="px-3 py-1 bg-primary-600 text-white rounded-md text-sm font-medium hover:bg-primary-700"
                      >
                        {t.actions.save}
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="mt-2 text-gray-700 whitespace-pre-line">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <GraduationCap className="h-5 w-5 mr-2 text-primary-600" />
              {t.sections.education}
            </h2>
            <button
              onClick={() => handleEdit("education-new")}
              className="text-primary-600 hover:text-primary-800 text-sm font-medium"
            >
              {t.actions.add}
            </button>
          </div>

          <div className="space-y-4">
            {profile.education.map((edu) => (
              <div
                key={edu.id}
                className="border-l-2 border-primary-500 pl-4 py-2"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-primary-600 hover:text-primary-800">
                      {t.actions.edit}
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      {t.actions.remove}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {t.sections.skills}
            </h2>
            <button
              onClick={() => handleEdit("skills-new")}
              className="text-primary-600 hover:text-primary-800 text-sm font-medium"
            >
              {t.actions.add}
            </button>
          </div>

          <div className="flex flex-wrap gap-3">
            {profile.skills.map((skill) => (
              <div
                key={skill.id}
                className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full flex items-center"
              >
                <span>{skill.name}</span>
                <span className="ml-1 text-xs opacity-75">
                  ({t.levels[skill.level as keyof typeof t.levels]})
                </span>
                <button className="ml-1 text-primary-600 hover:text-primary-800">
                  <X className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <Languages className="h-5 w-5 mr-2 text-primary-600" />
              {t.sections.languages}
            </h2>
            <button
              onClick={() => handleEdit("languages-new")}
              className="text-primary-600 hover:text-primary-800 text-sm font-medium"
            >
              {t.actions.add}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {profile.languages.map((lang) => (
              <div
                key={lang.id}
                className="flex items-center justify-between p-2 bg-gray-50 rounded-md"
              >
                <div>
                  <p className="font-medium">{lang.name}</p>
                  <p className="text-sm text-gray-500">
                    {t.levels[lang.proficiency as keyof typeof t.levels]}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="text-primary-600 hover:text-primary-800">
                    {t.actions.edit}
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    {t.actions.remove}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <GitBranch className="h-5 w-5 mr-2 text-primary-600" />
              {t.sections.projects}
            </h2>
            <button
              onClick={() => handleEdit("projects-new")}
              className="text-primary-600 hover:text-primary-800 text-sm font-medium"
            >
              {t.actions.add}
            </button>
          </div>

          <div className="space-y-4">
            {profile.projects.map((project) => (
              <div
                key={project.id}
                className="border-l-2 border-primary-500 pl-4 py-2"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {project.name}
                    </h3>
                    <p className="text-gray-600">{project.role}</p>
                    <p className="text-sm text-gray-500">
                      {project.technologies}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-primary-600 hover:text-primary-800">
                      {t.actions.edit}
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      {t.actions.remove}
                    </button>
                  </div>
                </div>
                <p className="mt-2 text-gray-700">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary-600" />
              {t.sections.certifications}
            </h2>
            <button
              onClick={() => handleEdit("certifications-new")}
              className="text-primary-600 hover:text-primary-800 text-sm font-medium"
            >
              {t.actions.add}
            </button>
          </div>

          <div className="space-y-4">
            {profile.certifications.map((cert) => (
              <div
                key={cert.id}
                className="border-l-2 border-primary-500 pl-4 py-2"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {cert.name}
                    </h3>
                    <p className="text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500">{cert.date}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-primary-600 hover:text-primary-800">
                      {t.actions.edit}
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      {t.actions.remove}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* References */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              {t.sections.references}
            </h2>
            <button
              onClick={() => handleEdit("references-new")}
              className="text-primary-600 hover:text-primary-800 text-sm font-medium"
            >
              {t.actions.add}
            </button>
          </div>

          <div className="space-y-4">
            {profile.references.map((ref) => (
              <div
                key={ref.id}
                className="border-l-2 border-primary-500 pl-4 py-2"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {ref.name}
                    </h3>
                    <p className="text-gray-600">{ref.position}</p>
                    <p className="text-sm text-gray-500">{ref.contact}</p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-primary-600 hover:text-primary-800">
                      {t.actions.edit}
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      {t.actions.remove}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Social Media */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
            <Globe2 className="h-5 w-5 mr-2 text-primary-600" />
            {t.sections.social}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <Linkedin className="h-5 w-5 mr-2 text-[#0077B5]" />
              <a
                href={`https://${profile.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                {profile.social.linkedin}
              </a>
            </div>
            <div className="flex items-center">
              <Github className="h-5 w-5 mr-2 text-gray-800" />
              <a
                href={`https://${profile.social.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                {profile.social.github}
              </a>
            </div>
            <div className="flex items-center">
              <Twitter className="h-5 w-5 mr-2 text-[#1DA1F2]" />
              <a
                href={`https://twitter.com/${profile.social.twitter.replace(
                  "twitter.com/",
                  ""
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                {profile.social.twitter}
              </a>
            </div>
            <div className="flex items-center">
              <Globe className="h-5 w-5 mr-2 text-primary-600" />
              <a
                href={`https://${profile.social.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:underline"
              >
                {profile.social.website}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
