import * as RV from "ramda-validations";
import R from "ramda";
import createValidator from "./validator";

/**
 * Validators
 */
export const hasPattern = createValidator("hasPattern", R.test);

export const isContains = createValidator("isContains", R.includes);

export const isEqualsTo = createValidator("isEqualsTo", R.equals);

export const hasKey = createValidator("hasKey", R.has);

export const isGreaterThan = createValidator("isGreaterThan", R.gt);

export const isGreaterThanOrEqualTo = createValidator(
  "isGreaterThanOrEqualTo",
  R.gte
);
export const isLessThan = createValidator("isLessThan", R.lt);

export const isLessThanOrEqualTo = createValidator(
  "isLessThanOrEqualTo",
  R.lte
);
export const isAlphanum = createValidator("isAlphanum", RV.isAlphanum);

export const isEven = createValidator("isEven", RV.isEven);

export const isString = createValidator("isString", RV.isString);

export const isOdd = createValidator("isOdd", RV.isOdd);

export const isOtherThan = createValidator("isOtherThan", RV.isOtherThan);

export const isPresent = createValidator("isPresent", RV.isPresent);

export const isBlank = createValidator("isBlank", RV.isBlank);

export const isNegative = createValidator("isNegative", RV.isNegative);

export const isPositive = createValidator("isPositive", RV.isPositive);

export const isTrue = createValidator("isTrue", RV.isTrue);

export const isFalse = createValidator("isFalse", RV.isFalse);

export const isInRange = createValidator("isInRange", RV.isInRange);

export const isInteger = createValidator("isInteger", RV.isInteger);

export const isFloat = createValidator("isFloat", RV.isFloat);

export const hasKeys = createValidator("hasKeys", RV.hasKeys);

export const isObject = createValidator("isObject", RV.isObject);

export const isHash = createValidator("isHash", RV.isHash);

export const isFinite = createValidator("isFinite", RV.isFinite);

export const isMultiple = createValidator("isMultiple", RV.isMultiple);

export const Validators = {
  hasPattern: hasPattern,
  isContains: isContains,
  isEqualsTo: isEqualsTo,
  hasKey: hasKey,
  isGreaterThan: isGreaterThan,
  isGreaterThanOrEqualTo: isGreaterThanOrEqualTo,
  isLessThan: isLessThan,
  isLessThanOrEqualTo: isLessThanOrEqualTo,
  isAlphanum: isAlphanum,
  isEven: isEven,
  isString: isString,
  isOdd: isOdd,
  isOtherThan: isOtherThan,
  isPresent: isPresent,
  isBlank: isBlank,
  isNegative: isNegative,
  isPositive: isPositive,
  isTrue: isTrue,
  isFalse: isFalse,
  isInRange: isInRange,
  isInteger: isInteger,
  isFloat: isFloat,
  hasKeys: hasKeys,
  isObject: isObject,
  isHash: isHash,
  isFinite: isFinite,
  isMultiple: isMultiple
};
