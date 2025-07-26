import Joi from "joi";
import translations from "./translations";

export const loginAuthSchema = (t: typeof translations.en) =>
  Joi.object({
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

    password: Joi.string()
      .min(8)
      .max(255)
      .pattern(/(?=.*[a-z])/, "lowercase letter")
      .pattern(/(?=.*[A-Z])/, "uppercase letter")
      .pattern(/(?=.*\d)/, "number")
      .message(t.errors.password)
      .required(),

    rememberMe: Joi.boolean().optional(),
  });
