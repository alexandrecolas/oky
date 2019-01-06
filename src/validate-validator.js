const getErrorMessage = validator => {
  return `${validator.name}Failed`;
};

/**
 * Validate Validator
 */
export const validateValidator = (validator, value) => {
  return !validator(value) ? getErrorMessage(validator) : true;
};

export default validateValidator;
