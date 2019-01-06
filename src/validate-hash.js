import { mapObjIndexed, compose, reject, equals } from "ramda";
import validate from "./index";

/**
 * cleanObjectValidation
 */
const cleanObjectValidation = reject(equals(true));

/**
 * Validate Hash
 */
const validateHash = (object, value) => {
  return compose(
    cleanObjectValidation,
    mapObjIndexed((schema, name) => validate(schema, value[name]))
  )(object);
};

export default validateHash;
