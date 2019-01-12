(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ramda'), require('ramda-validations')) :
  typeof define === 'function' && define.amd ? define(['exports', 'ramda', 'ramda-validations'], factory) :
  (global = global || self, factory(global.oky = {}, global.R, global.RV));
}(this, function (exports, R, RV) { 'use strict';

  var R__default = 'default' in R ? R['default'] : R;

  /**
   * Checks that validators value is a hash
   * @param validators
   */
  var isValidatorsHash = function isValidatorsHash(validators) {
    return RV.isHash(validators);
  };
  /**
   * Checks that validators value is a Validator
   * @param validators
   */

  var isValidatorsValidator = function isValidatorsValidator(validators) {
    return validators.constructor.name.toString() === "Validator";
  };
  /**
   * Checks that validators value is an array of Validator
   * @param validators
   */

  var isValidatorsValidators = function isValidatorsValidators(validators) {
    return R.is(Array, validators);
  };

  /**
   * Validate one validator
   */
  var validateValidator = function validateValidator(validator, value, globalValue) {
    return validator.run(value, globalValue) ? true : validator.errorMessage;
  };

  /**
   * Remove true from array list and return true if array list is empty or array list
   */
  var cleanArrayValidation = R.compose(R.when(R.isEmpty, R.T), R.reject(R.equals(true)));
  /**
   * Run All Validators
   */

  var runValidators = function runValidators(value, globalValue, validators) {
    return R.map(function (validator) {
      return validateValidator(validator, value, globalValue);
    })(validators);
  };
  /**
   * Validate Validators
   */


  var validateValidators = function validateValidators(validators, value, globalValue) {
    return R.compose(cleanArrayValidation, R.curry(runValidators)(value, globalValue))(validators);
  };

  /**
   *
   * @param object
   * @param value
   * @param globalValue
   */
  var scanHash = function scanHash(object, value, globalValue) {
    return R.compose(R.reject(R.equals(true)), R.mapObjIndexed(function (schema, name) {
      return runValidations(schema, value[name], globalValue);
    }))(object);
  };
  /**
   * Run Validations
   * @param validators
   * @param value
   * @param globalValue
   */


  var runValidations = function runValidations(validators, value, globalValue) {
    if (isValidatorsValidator(validators)) {
      return validateValidator(validators, value, globalValue);
    } else if (isValidatorsValidators(validators)) {
      return validateValidators(validators, value, globalValue);
    } else if (isValidatorsHash(validators)) {
      return scanHash(validators, value, globalValue);
    } else {
      throw new Error("No validators");
    }
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Validator = function Validator(name, func, errorMessage) {
    _classCallCheck(this, Validator);

    this.name = name;
    this.run = func;
    this.errorMessage = R.isNil(errorMessage) ? "".concat(name, "Failed") : errorMessage;
  };
  /**
   * Create New Validators
   * @param {string} name - Validator name
   * @param {Function} func - Function validation, return `true` when succeed or `false` when failure
   * @param {string?} errorMessage - Custom error message
   */

  var createValidator = function createValidator(name, func, errorMessage) {
    return new Validator(name, func, errorMessage);
  };

  /**
   * Validators
   */

  var hasPattern = createValidator("hasPattern", R__default.test);
  var isContains = createValidator("isContains", R__default.includes);
  var isEqualsTo = createValidator("isEqualsTo", R__default.equals);
  var hasKey = createValidator("hasKey", R__default.has);
  var isGreaterThan = createValidator("isGreaterThan", R__default.gt);
  var isGreaterThanOrEqualTo = createValidator("isGreaterThanOrEqualTo", R__default.gte);
  var isLessThan = createValidator("isLessThan", R__default.lt);
  var isLessThanOrEqualTo = createValidator("isLessThanOrEqualTo", R__default.lte);
  var isAlphanum = createValidator("isAlphanum", RV.isAlphanum);
  var isEven = createValidator("isEven", RV.isEven);
  var isString = createValidator("isString", RV.isString);
  var isOdd = createValidator("isOdd", RV.isOdd);
  var isOtherThan = createValidator("isOtherThan", RV.isOtherThan);
  var isPresent = createValidator("isPresent", RV.isPresent);
  var isBlank = createValidator("isBlank", RV.isBlank);
  var isNegative = createValidator("isNegative", RV.isNegative);
  var isPositive = createValidator("isPositive", RV.isPositive);
  var isTrue = createValidator("isTrue", RV.isTrue);
  var isFalse = createValidator("isFalse", RV.isFalse);
  var isInRange = createValidator("isInRange", RV.isInRange);
  var isInteger = createValidator("isInteger", RV.isInteger);
  var isFloat = createValidator("isFloat", RV.isFloat);
  var hasKeys = createValidator("hasKeys", RV.hasKeys);
  var isObject = createValidator("isObject", RV.isObject);
  var isHash = createValidator("isHash", RV.isHash);
  var isFinite = createValidator("isFinite", RV.isFinite);
  var isMultiple = createValidator("isMultiple", RV.isMultiple);
  var Validators = {
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

  /**
   * Validate
   * @param {(Validator[] | Validator | object)} validators
   * @param {any} value - value to test
   * @returns {(boolean | string | string[] | object)} Return true when success or errors when failure.
   *    Errors format depends on the validators format :
   *    it returns an array if validators args is an array and object if validators args is an object
   */
  var validate = function validate(validators, value) {
    return runValidations(validators, value, value);
  };
  /**
   * Export
   */


  var validator = createValidator;
  var index = R.curry(validate);

  exports.validator = validator;
  exports.default = index;
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
  exports.Validators = Validators;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
