import { is } from "ramda";
import { Validator } from "./validator";

const isHash = (input: any) => input.constructor == Object;

/**
 * Checks that validators value is a hash
 * @param validators
 */
export const isValidatorsHash = function(
  validators: any
): validators is object {
  return isHash(validators);
};

/**
 * Checks that validators value is a Validator
 * @param validators
 */
export const isValidatorsValidator = function(
  validators: any
): validators is Validator {
  return validators.constructor.name.toString() === "Validator";
};

/**
 * Checks that validators value is an array of Validator
 * @param validators
 */
export const isValidatorsValidators = function(
  validators: any
): validators is Validator[] {
  return is(Array, validators);
};
