import Joi from "joi";
import translations from "./translations";
import { OrganizationPlan } from "~/models/Organization";

export const getOrganizationSchema = (t: typeof translations.en) =>
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
    logoUrl: Joi.string().optional(),
    plan: Joi.string()
      .valid(
        OrganizationPlan.FREE,
        OrganizationPlan.PRO,
        OrganizationPlan.ENTERPRISE
      )
      .required()
      .messages({
        "any.required": t.errors.plan.required,
        "any.only": t.errors.plan.required,
      }),
  });
