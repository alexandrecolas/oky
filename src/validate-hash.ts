import { mapObjIndexed, compose, reject, equals } from "ramda";
import { runValidations } from "./validate";

/**
 * Remove props with true result
 */
const cleanObjectValidation: { (object: object): object } = reject(
  equals(true)
);

/**
 * Validate Hash
 */
const validateHash = (object: object, value: object, globalValue: any) => {
  return compose(
    cleanObjectValidation,
    mapObjIndexed((schema: any, name: string) =>
      runValidations(schema, value[name], globalValue)
    )
  )(object);
};

export default validateHash;
