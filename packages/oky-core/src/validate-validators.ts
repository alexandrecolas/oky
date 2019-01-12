import { map, compose, reject, equals, isEmpty, when, T, curry } from "ramda";
import validateValidator from "./validate-validator";
import { Validator } from "./validator";

/**
 * Remove true from array list and return true if array list is empty or array list
 */
const cleanArrayValidation: ((input: any) => string[] | boolean) = compose(
  when(isEmpty, T),
  reject(equals(true))
);

/**
 * Run All Validators
 */
const runValidators = (
  value: any,
  globalValue: any,
  validators: Validator[]
): (string | boolean)[] =>
  map(
    (validator: Validator): string | boolean =>
      validateValidator(validator, value, globalValue)
  )(validators);

/**
 * Validate Validators
 */
const validateValidators = (
  validators: Validator[],
  value: any,
  globalValue: any
): string[] | boolean => {
  return compose(
    cleanArrayValidation,
    curry(runValidators)(value, globalValue)
  )(validators);
};

export default validateValidators;
