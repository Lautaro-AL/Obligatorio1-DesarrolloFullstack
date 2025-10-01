import joi from "joi";

export const registerSchema = joi.object({
  username: joi.string().alphanum().min(3).max(30).required(),
  password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
}); //ver como funcionan los controller, middleware en clases (ver en el calendario Notion)
