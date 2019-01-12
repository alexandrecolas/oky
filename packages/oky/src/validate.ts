import { mapObjIndexed, compose, reject, equals } from "ramda";
import {
  isValidatorsHash,
  isValidatorsValidator,
  isValidatorsValidators
} from "./utils";
import validateValidator from "./validate-validator";
import validateValidators from "./validate-validators";
import { Validator } from "./validator";

/**
 *
 * @param object
 * @param value
 * @param globalValue
 */
const scanHash = (object: object, value: object, globalValue: any) => {
  return compose(
    reject(equals(true)),
    mapObjIndexed((schema: any, name: string) =>
      runValidations(schema, value[name], globalValue)
    )
  )(object);
};

/**
 * Run Validations
 * @param validators
 * @param value
 * @param globalValue
 */
export const runValidations = function(
  validators: Validator[] | Validator | object,
  value: any,
  globalValue: any
) {
  if (isValidatorsValidator(validators)) {
    return validateValidator(validators, value, globalValue);
  } else if (isValidatorsValidators(validators)) {
    return validateValidators(validators, value, globalValue);
  } else if (isValidatorsHash(validators)) {
    return scanHash(validators, value, globalValue);
  } else {
    throw new Error("No validators");
  }
};
