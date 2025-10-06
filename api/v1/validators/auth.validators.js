import Joi from "joi";

export const registerSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required().messages({
    "string.base": "El username ser un texto",
    "string.empty": "El username no puede estar vacío",
    "string.min": "El username debe tener al menos {#limit} caracteres",
    "any.required": "El username es obligatorio",
  }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .messages({
      "string.base": "La contraseña debe ser un texto",
      "string.empty": "La contraseña no puede estar vacía",
      "string.min": "La contraseña debe tener al menos {#limit} caracteres",
      "any.required": "La contraseña es obligatoria",
    }),
  confirmPassword: Joi.ref("password"),
  plan: Joi.string().valid("plus", "premium").default("plus"),
});

export const loginSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required().messages({
    "string.base": "El username ser un texto",
    "string.empty": "El username no puede estar vacío",
    "string.min": "El username debe tener al menos {#limit} caracteres",
    "any.required": "El username es obligatorio",
  }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .messages({
      "string.base": "La contraseña debe ser un texto",
      "string.empty": "La contraseña no puede estar vacía",
      "string.min": "La contraseña debe tener al menos {#limit} caracteres",
      "any.required": "La contraseña es obligatoria",
    }),
});
