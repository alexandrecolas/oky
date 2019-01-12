import { isNil } from "ramda";

interface ValidatorInterface {
  name: string;
  errorMessage: string;
  run: Function;
}

export class Validator implements ValidatorInterface {
  name: string;
  errorMessage: string;
  run: Function;

  constructor(name: string, func: Function, errorMessage?: string) {
    this.name = name;
    this.run = func;
    this.errorMessage = isNil(errorMessage) ? `${name}Failed` : errorMessage;
  }
}

/**
 * Create New Validators
 * @param {string} name - Validator name
 * @param {Function} func - Function validation, return `true` when succeed or `false` when failure
 * @param {string?} errorMessage - Custom error message
 */
const createValidator: any = (
  name: string,
  func: Function,
  errorMessage?: string
) => {
  return new Validator(name, func, errorMessage);
};

export default createValidator;
