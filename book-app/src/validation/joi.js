import Joi from "joi";
// this function is given schema and data and returns errors or true if no errors
export const jValidate = (schema, payload) => {
  const j = Joi.object(schema);

  //   try {
  const r = j.validate(payload, { abortEarly: false });
  console.log(r);
  if (r.error) {
    const errorsMod = {};

    // go over what Joi gives back - the errors - to make the keys and values the right way round!

    r.error.details.forEach((error) => {
      errorsMod[error.context.key] = error.message;
    });

    return errorsMod;
  }

  return true;
  //   }
};
