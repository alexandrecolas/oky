import { map, compose, reject, equals, isEmpty, when, T } from "ramda";
import validateValidator from "./validate-validator";

/**
 * cleanArrayValidation
 */
const cleanArrayValidation = compose(
  when(isEmpty, T),
  reject(equals(true))
);

/**
 * Validate Validators
 */
const validateValidators = (validators, value) => {
  return compose(
    cleanArrayValidation,
    map(validator => validateValidator(validator, value))
  )(validators);
};

export default validateValidators;
