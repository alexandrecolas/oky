import { isHash } from "ramda-validations";
import { is, curry } from "ramda";
import validateValidator from "./validate-validator";
import validateValidators from "./validate-validators";
import validateHash from "./validate-hash";
import { Validator } from "./validator";

/**
 * Checks that validators value is a hash
 * @param validators
 */
const isValidatorsHash = function(validators: any): validators is object {
  return isHash(validators);
};

/**
 * Checks that validators value is a Validator
 * @param validators
 */
const isValidatorsValidator = function(
  validators: any
): validators is Validator {
  return validators.constructor.name.toString() === "Validator";
};

/**
 * Checks that validators value is an array of Validator
 * @param validators
 */
const isValidatorsValidators = function(
  validators: any
): validators is Validator[] {
  return is(Array, validators);
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
    return validateHash(validators, value, globalValue);
  } else {
    throw new Error("No validators");
  }
};
