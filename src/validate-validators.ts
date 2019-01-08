import { map, compose, reject, equals, isEmpty, when, T, curry } from "ramda";
import validateValidator from "./validate-validator";

/**
 * Clean Array Validations
 * Remove true from array list and return true if array list is empty or array list
 */
const cleanArrayValidation: ((input: any) => string[] | boolean) = compose(
  when(isEmpty, T),
  reject(equals(true))
);

/**
 * Run Validators
 */
const runValidators = (
  value: any,
  validators: Function[]
): (string | boolean)[] =>
  map(
    (validator: Function): string | boolean =>
      validateValidator(validator, value)
  )(validators);

/**
 * Validate Validators
 */
const validateValidators = (
  validators: Function[],
  value: any
): string[] | boolean => {
  return compose(
    cleanArrayValidation,
    curry(runValidators)(value)
  )(validators);
};

export default validateValidators;
