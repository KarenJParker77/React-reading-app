import Joi from "joi";

export const signup = {
  userEmail: Joi.string().email({ tlds: { allow: false } }),
  userPassword: Joi.string().required().min(10),
};

export const searchInput = {
  search: Joi.string().required().min(5),
};
