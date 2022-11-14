import { jValidate } from "./joi";
import { signup, searchInput } from "./joiSchemas";
// below, use same numbers as for screens for types
// no Joi logic in this file!!

export const validate = (type, payload) => {
  switch (type) {
    case 1:
      // send jValidate function the relevant schema and the payload (data)
      return jValidate(signup, payload);

    case 2:
      return jValidate(searchInput, payload);

    default:
      console.log("invalid type sent in");
      break;
  }
};
