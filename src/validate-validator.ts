const getErrorMessage = (validator: Function): string => {
  return `${validator.name}Failed`;
};

/**
 * Validate Validator
 */
export const validateValidator = (validator: Function, value: any): string | boolean => {
  return !validator(value) ? getErrorMessage(validator) : true;
};

export default validateValidator;
