import { isHash } from "ramda-validations";
import { is, curry } from "ramda";
import validateValidator from "./validate-validator";
import validateValidators from "./validate-validators";
import validateHash from "./validate-hash";

const isValidatorsHash = function(validators: any): validators is object {
  return isHash(validators);
};

const isValidatorsValidators = function(
  validators: any
): validators is Function[] {
  return is(Array, validators);
};

const isValidatorsValidator = function(
  validators: any
): validators is Function {
  return is(Function, validators);
};

/**
 * Validate
 * @param {(Function |Function[] | object)} validators
 * @param {any} value - value to test
 * @returns {(boolean | string | string[] | object)} Return true when success or errors when failure.
 *    Errors format depends on the validators format :
 *    it return an array if validators args is an array and object if validators args is an object
 */
const validate = function(
  validators: Function | Function[] | object,
  value: any
): boolean | string | string[] | object {
  if (isValidatorsHash(validators)) return validateHash(validators, value);
  if (isValidatorsValidators(validators))
    return validateValidators(validators, value);
  if (isValidatorsValidator(validators))
    return validateValidator(validators, value);
};

export default curry(validate);
