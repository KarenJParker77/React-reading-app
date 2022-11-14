import Joi from "joi";

export const signup = {
  userName: Joi.string().required().min(10),
};

export const searchInput = {
  search: Joi.string().required().min(5),
};
