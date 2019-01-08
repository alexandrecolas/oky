import { isHash } from "ramda-validations";
import { is, curry } from "ramda";
import validateValidator from "./validate-validator";
import validateValidators from "./validate-validators";
import validateHash from "./validate-hash";

const isSchemaHash = function(schema: any): schema is object {
  return isHash(schema);
};

const isSchemaValidators = function(schema: any): schema is Function[] {
  return is(Array, schema);
};

const isSchemaValidator = function(schema: any): schema is Function {
  return is(Function, schema);
};

/**
 * Validate
 */
const validate = function(schema: object | Function[] | Function, value: any) {
  if (isSchemaHash(schema)) return validateHash(schema, value);
  if (isSchemaValidators(schema)) return validateValidators(schema, value);
  if (isSchemaValidator(schema)) return validateValidator(schema, value);
};

export default curry(validate);
