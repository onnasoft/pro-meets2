import Joi from "joi";
import translations from "./translations";
import { ContractType, EducationLevel, JobStatus, JobType } from "~/models/Job";

export const getJobSchema = (t: typeof translations.en) =>
  Joi.object({
    title: Joi.string().min(1).max(255).required().messages({
      "string.min": t.errors.title.min,
      "string.max": t.errors.title.max,
      "string.empty": t.errors.title.empty,
      "any.required": t.errors.title.required,
    }),
    description: Joi.string().allow("").optional(),
    status: Joi.string()
      .valid(...Object.values(JobStatus))
      .optional()
      .messages({
        "any.only": t.errors.status.invalid,
      }),
    type: Joi.string()
      .valid(...Object.values(JobType))
      .required()
      .messages({
        "any.required": t.errors.type.required,
        "any.only": t.errors.type.invalid,
      }),
    contractType: Joi.string()
      .valid(...Object.values(ContractType))
      .required()
      .messages({
        "any.required": t.errors.contractType.required,
        "any.only": t.errors.contractType.invalid,
      }),
    salaryMin: Joi.number().optional(),
    salaryMax: Joi.number().optional(),
    location: Joi.string().required().min(1).max(255),
    postedAt: Joi.date().iso().optional(),
    isActive: Joi.boolean().required().messages({
      "any.required": t.errors.isActive.required,
    }),
    recruiterFee: Joi.number().optional(),
    experienceRequired: Joi.string().allow("").optional(),
    educationLevel: Joi.string()
      .valid(...Object.values(EducationLevel))
      .optional()
      .messages({
        "any.only": t.errors.educationLevel.invalid,
      }),
    skillsRequired: Joi.string().allow("").optional(),
    benefits: Joi.string().allow("").optional(),
    organizationId: Joi.string().uuid().required().messages({
      "any.required": t.errors.organizationId.required,
      "string.guid": t.errors.organizationId.invalid,
    }),
    projectId: Joi.string().uuid().required().messages({
      "any.required": t.errors.projectId.required,
      "string.guid": t.errors.projectId.invalid,
    }),
  });
