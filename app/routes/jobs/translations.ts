import { ContractType, EducationLevel, JobType } from "@onnasoft/pro-meets-core";

const translations = {
    en: {
        locationNotSpecified: "Location not specified",
        jobTypes: {
            [JobType.FULL_TIME]: "Full-time",
            [JobType.PART_TIME]: "Part-time",
            [JobType.CONTRACT]: "Contract",
            [JobType.TEMPORARY]: "Temporary",
            [JobType.INTERN]: "Internship",
        },
        contractTypes: {
            [ContractType.PERMANENT]: "Permanent",
            [ContractType.TEMPORARY]: "Temporary",
            [ContractType.FREELANCE]: "Freelance",
            [ContractType.INTERN]: "Intern",
        },
        educationLevels: {
            [EducationLevel.NONE]: "None",
            [EducationLevel.HIGH_SCHOOL]: "High School",
            [EducationLevel.ASSOCIATE]: "Associate Degree",
            [EducationLevel.BACHELOR]: "Bachelor's Degree",
            [EducationLevel.MASTER]: "Master's Degree",
            [EducationLevel.DOCTORATE]: "Doctorate",
        }
    },
    es: {
        locationNotSpecified: "Ubicación no especificada",
        jobTypes: {
            [JobType.FULL_TIME]: "Tiempo completo",
            [JobType.PART_TIME]: "Medio tiempo",
            [JobType.CONTRACT]: "Contrato",
            [JobType.TEMPORARY]: "Temporal",
            [JobType.INTERN]: "Pasantía",
        },
        contractTypes: {
            [ContractType.PERMANENT]: "Permanente",
            [ContractType.TEMPORARY]: "Temporal",
            [ContractType.FREELANCE]: "Freelance",
            [ContractType.INTERN]: "Pasantía",
        },
        educationLevels: {
            [EducationLevel.NONE]: "Ninguno",
            [EducationLevel.HIGH_SCHOOL]: "Escuela Secundaria",
            [EducationLevel.ASSOCIATE]: "Título de Asociado",
            [EducationLevel.BACHELOR]: "Licenciatura",
            [EducationLevel.MASTER]: "Maestría",
            [EducationLevel.DOCTORATE]: "Doctorado",
        }
    },
    fr: {
        locationNotSpecified: "Emplacement non spécifié",
        jobTypes: {
            [JobType.FULL_TIME]: "Temps plein",
            [JobType.PART_TIME]: "Temps partiel",
            [JobType.CONTRACT]: "Contrat",
            [JobType.TEMPORARY]: "Temporaire",
            [JobType.INTERN]: "Stage",
        },
        contractTypes: {
            [ContractType.PERMANENT]: "Permanent",
            [ContractType.TEMPORARY]: "Temporaire",
            [ContractType.FREELANCE]: "Freelance",
            [ContractType.INTERN]: "Stage",
        },
        educationLevels: {
            [EducationLevel.NONE]: "Aucun",
            [EducationLevel.HIGH_SCHOOL]: "Lycée",
            [EducationLevel.ASSOCIATE]: "Diplôme d'Associé",
            [EducationLevel.BACHELOR]: "Licence",
            [EducationLevel.MASTER]: "Master",
            [EducationLevel.DOCTORATE]: "Doctorat",
        }
    },
    jp: {
        locationNotSpecified: "場所が指定されていません",
        jobTypes: {
            [JobType.FULL_TIME]: "フルタイム",
            [JobType.PART_TIME]: "パートタイム",
            [JobType.CONTRACT]: "契約",
            [JobType.TEMPORARY]: "一時的",
            [JobType.INTERN]: "インターンシップ",
        },
        contractTypes: {
            [ContractType.PERMANENT]: "正社員",
            [ContractType.TEMPORARY]: "一時的",
            [ContractType.FREELANCE]: "フリーランス",
            [ContractType.INTERN]: "インターンシップ",
        },
        educationLevels: {
            [EducationLevel.NONE]: "なし",
            [EducationLevel.HIGH_SCHOOL]: "高校",
            [EducationLevel.ASSOCIATE]: "準学士",
            [EducationLevel.BACHELOR]: "学士",
            [EducationLevel.MASTER]: "修士",
            [EducationLevel.DOCTORATE]: "博士",
        }
    },
    zh: {
        locationNotSpecified: "未指定位置",
        jobTypes: {
            [JobType.FULL_TIME]: "全职",
            [JobType.PART_TIME]: "兼职",
            [JobType.CONTRACT]: "合同",
            [JobType.TEMPORARY]: "临时",
            [JobType.INTERN]: "实习",
        },
        contractTypes: {
            [ContractType.PERMANENT]: "永久",
            [ContractType.TEMPORARY]: "临时",
            [ContractType.FREELANCE]: "自由职业",
            [ContractType.INTERN]: "实习",
        },
        educationLevels: {
            [EducationLevel.NONE]: "无",
            [EducationLevel.HIGH_SCHOOL]: "高中",
            [EducationLevel.ASSOCIATE]: "副学士",
            [EducationLevel.BACHELOR]: "学士",
            [EducationLevel.MASTER]: "硕士",
            [EducationLevel.DOCTORATE]: "博士",
        }
    }
};

const formatDate = (dateString?: string, language: string = 'es') => {
    if (!dateString) return translations[language as keyof typeof translations].locationNotSpecified;

    const locales: Record<string, string> = {
        en: 'en-US',
        es: 'es-ES',
        fr: 'fr-FR',
        jp: 'ja-JP',
        zh: 'zh-CN'
    };

    return new Date(dateString).toLocaleDateString(locales[language] || 'es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};

export { formatDate };

export default translations;
