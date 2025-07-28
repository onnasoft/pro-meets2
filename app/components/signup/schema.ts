import Joi from "joi";
import translations from "./translations";

export const registerAuthSchema = (t: typeof translations.en) =>
  Joi.object({
    name: Joi.string()
      .min(2)
      .messages({
        "string.min": t.errors.name,
      })
      .required(),

    email: Joi.string()
      .email({
        tlds: { allow: false },
      })
      .max(255)
      .messages({
        "string.email": t.errors.email,
        "string.max": t.errors.email,
      })
      .required(),

    company: Joi.string()
      .max(255)
      .pattern(/^[a-zA-Z0-9\s]*$/)
      .messages({
        "string.pattern.base": t.errors.company,
        "string.max": t.errors.company,
      })
      .optional(),

    password: Joi.string()
      .min(8)
      .max(255)
      .pattern(/(?=.*[a-z])/, "lowercase letter")
      .pattern(/(?=.*[A-Z])/, "uppercase letter")
      .pattern(/(?=.*\d)/, "number")
      .message(t.errors.password)
      .required(),

    confirmPassword: Joi.string()
      .valid(Joi.ref("password"))
      .required()
      .messages({ "any.only": t.errors.confirmPassword }),

    terms: Joi.bool(),
  });
