(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ramda-validations'), require('ramda'), require('oky')) :
  typeof define === 'function' && define.amd ? define(['exports', 'ramda-validations', 'ramda', 'oky'], factory) :
  (global = global || self, factory(global['oky-validations'] = {}, global.RV, global.R, global.oky));
}(this, function (exports, RV, R, oky) { 'use strict';

  R = R && R.hasOwnProperty('default') ? R['default'] : R;

  /**
   * Validators
   */

  var hasPattern = oky.createValidator("hasPattern", R.test);
  var isContains = oky.createValidator("isContains", R.includes);
  var isEqualsTo = oky.createValidator("isEqualsTo", R.equals);
  var hasKey = oky.createValidator("hasKey", R.has);
  var isGreaterThan = oky.createValidator("isGreaterThan", R.gt);
  var isGreaterThanOrEqualTo = oky.createValidator("isGreaterThanOrEqualTo", R.gte);
  var isLessThan = oky.createValidator("isLessThan", R.lt);
  var isLessThanOrEqualTo = oky.createValidator("isLessThanOrEqualTo", R.lte);
  var isAlphanum = oky.createValidator("isAlphanum", RV.isAlphanum);
  var isEven = oky.createValidator("isEven", RV.isEven);
  var isString = oky.createValidator("isString", RV.isString);
  var isOdd = oky.createValidator("isOdd", RV.isOdd);
  var isOtherThan = oky.createValidator("isOtherThan", RV.isOtherThan);
  var isPresent = oky.createValidator("isPresent", RV.isPresent);
  var isBlank = oky.createValidator("isBlank", RV.isBlank);
  var isNegative = oky.createValidator("isNegative", RV.isNegative);
  var isPositive = oky.createValidator("isPositive", RV.isPositive);
  var isTrue = oky.createValidator("isTrue", RV.isTrue);
  var isFalse = oky.createValidator("isFalse", RV.isFalse);
  var isInRange = oky.createValidator("isInRange", RV.isInRange);
  var isInteger = oky.createValidator("isInteger", RV.isInteger);
  var isFloat = oky.createValidator("isFloat", RV.isFloat);
  var hasKeys = oky.createValidator("hasKeys", RV.hasKeys);
  var isObject = oky.createValidator("isObject", RV.isObject);
  var isHash = oky.createValidator("isHash", RV.isHash);
  var isFinite = oky.createValidator("isFinite", RV.isFinite);
  var isMultiple = oky.createValidator("isMultiple", RV.isMultiple);

  exports.hasPattern = hasPattern;
  exports.isContains = isContains;
  exports.isEqualsTo = isEqualsTo;
  exports.hasKey = hasKey;
  exports.isGreaterThan = isGreaterThan;
  exports.isGreaterThanOrEqualTo = isGreaterThanOrEqualTo;
  exports.isLessThan = isLessThan;
  exports.isLessThanOrEqualTo = isLessThanOrEqualTo;
  exports.isAlphanum = isAlphanum;
  exports.isEven = isEven;
  exports.isString = isString;
  exports.isOdd = isOdd;
  exports.isOtherThan = isOtherThan;
  exports.isPresent = isPresent;
  exports.isBlank = isBlank;
  exports.isNegative = isNegative;
  exports.isPositive = isPositive;
  exports.isTrue = isTrue;
  exports.isFalse = isFalse;
  exports.isInRange = isInRange;
  exports.isInteger = isInteger;
  exports.isFloat = isFloat;
  exports.hasKeys = hasKeys;
  exports.isObject = isObject;
  exports.isHash = isHash;
  exports.isFinite = isFinite;
  exports.isMultiple = isMultiple;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
