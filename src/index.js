import { isHash } from "ramda-validations";
import { is, curry } from "ramda";
import validateValidator from "./validate-validator";
import validateValidators from "./validate-validators";
import validateHash from "./validate-hash";

/**
 * Validate
 */
const validate = curry((schema, value) => {
  if (isHash(schema)) {
    return validateHash(schema, value);
  } else if (is(Array, schema)) {
    return validateValidators(schema, value);
  } else return validateValidator(schema, value);
});

export default validate;
