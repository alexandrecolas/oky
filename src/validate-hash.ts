import { mapObjIndexed, compose, reject, equals } from "ramda";
import validate from "./index";

/**
 * cleanObjectValidation
 */
const cleanObjectValidation: { (object: object): object } = reject(
  equals(true)
);

/**
 * Validate Hash
 */
const validateHash = (object: object, value: object) => {
  return compose(
    cleanObjectValidation,
    mapObjIndexed((schema: any, name: string) => validate(schema, value[name]))
  )(object);
};

export default validateHash;
