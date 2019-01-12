import { Validator } from "./validator";

/**
 * Validate one validator
 */
export const validateValidator = (
  validator: Validator,
  value: any,
  globalValue: any
): string | boolean => {
  return validator.run(value, globalValue) ? true : validator.errorMessage;
};

export default validateValidator;
