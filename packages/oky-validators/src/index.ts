import * as RV from "ramda-validations";
import R from "ramda";
import { validator } from "oky";

/**
 * Validators
 */
export const hasPattern = validator("hasPattern", R.test);

export const isContains = validator("isContains", R.includes);

export const isEqualsTo = validator("isEqualsTo", R.equals);

export const hasKey = validator("hasKey", R.has);

export const isGreaterThan = validator("isGreaterThan", R.gt);

export const isGreaterThanOrEqualTo = validator(
  "isGreaterThanOrEqualTo",
  R.gte
);
export const isLessThan = validator("isLessThan", R.lt);

export const isLessThanOrEqualTo = validator("isLessThanOrEqualTo", R.lte);

export const isAlphanum = validator("isAlphanum", RV.isAlphanum);

export const isEven = validator("isEven", RV.isEven);

export const isString = validator("isString", RV.isString);

export const isOdd = validator("isOdd", RV.isOdd);

export const isOtherThan = validator("isOtherThan", RV.isOtherThan);

export const isPresent = validator("isPresent", RV.isPresent);

export const isBlank = validator("isBlank", RV.isBlank);

export const isNegative = validator("isNegative", RV.isNegative);

export const isPositive = validator("isPositive", RV.isPositive);

export const isTrue = validator("isTrue", RV.isTrue);

export const isFalse = validator("isFalse", RV.isFalse);

export const isInRange = validator("isInRange", RV.isInRange);

export const isInteger = validator("isInteger", RV.isInteger);

export const isFloat = validator("isFloat", RV.isFloat);

export const hasKeys = validator("hasKeys", RV.hasKeys);

export const isObject = validator("isObject", RV.isObject);

export const isHash = validator("isHash", RV.isHash);

export const isFinite = validator("isFinite", RV.isFinite);

export const isMultiple = validator("isMultiple", RV.isMultiple);
