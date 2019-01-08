import * as RV from "ramda-validations";
import R from "ramda";

export const hasPattern = R.test;
export const isContains = R.includes;
export const isEqualsTo = R.equals;
export const hasKey = R.has;
export const isGreaterThan = R.gt;
export const isGreaterThanOrEqualTo = R.gte;
export const isLessThan = R.lt;
export const isLessThanOrEqualTo = R.lte;
export const isAlphanum = RV.isAlphanum;
export const isEven = RV.isEven;
export const isString = RV.isString;
export const isOdd = RV.isOdd;
export const isOtherThan = RV.isOtherThan;
export const isPresent = RV.isPresent;
export const isBlank = RV.isBlank;
export const isNegative = RV.isNegative;
export const isPositive = RV.isPositive;
export const isTrue = RV.isTrue;
export const isFalse = RV.isFalse;
export const isInRange = RV.isInRange;
export const isInteger = RV.isInteger;
export const isFloat = RV.isFloat;
export const hasKeys = RV.hasKeys;
export const isObject = RV.isObject;
export const isHash = RV.isHash;
export const isFinite = RV.isFinite;
export const isMultiple = RV.isMultiple;

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
