import { curry } from "ramda";
import { runValidations } from "./validate";
import createValidator from "./validator";
import { Validator } from "./validator";

/**
 * Validate
 * @param {(Validator[] | Validator | object)} validators
 * @param {any} value - value to test
 * @returns {(boolean | string | string[] | object)} Return true when success or errors when failure.
 *    Errors format depends on the validators format :
 *    it returns an array if validators args is an array and object if validators args is an object
 */
const validate = function(
  validators: Validator[] | Validator | object,
  value: any
): boolean | string | string[] | object {
  return runValidations(validators, value, value);
};

/**
 * Export
 */
export const validator = createValidator;
export * from "./validators";
export default curry(validate);
