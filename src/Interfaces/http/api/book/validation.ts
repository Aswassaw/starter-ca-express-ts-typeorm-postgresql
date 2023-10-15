import Joi from "joi";

export const addBookSchema = Joi.object({
  bookName: Joi.string().required().max(50),
});
