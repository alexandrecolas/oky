(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ramda')) :
  typeof define === 'function' && define.amd ? define(['exports', 'ramda'], factory) :
  (global = global || self, factory(global.oky = {}, global.R));
}(this, function (exports, ramda) { 'use strict';

  var isHash = function isHash(input) {
    return input.constructor == Object;
  };
  /**
   * Checks that validators value is a hash
   * @param validators
   */


  var isValidatorsHash = function isValidatorsHash(validators) {
    return isHash(validators);
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
    return ramda.is(Array, validators);
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
  var cleanArrayValidation = ramda.compose(ramda.when(ramda.isEmpty, ramda.T), ramda.reject(ramda.equals(true)));
  /**
   * Run All Validators
   */

  var runValidators = function runValidators(value, globalValue, validators) {
    return ramda.map(function (validator) {
      return validateValidator(validator, value, globalValue);
    })(validators);
  };
  /**
   * Validate Validators
   */


  var validateValidators = function validateValidators(validators, value, globalValue) {
    return ramda.compose(cleanArrayValidation, ramda.curry(runValidators)(value, globalValue))(validators);
  };

  /**
   *
   * @param object
   * @param value
   * @param globalValue
   */
  var scanHash = function scanHash(object, value, globalValue) {
    return ramda.compose(ramda.reject(ramda.equals(true)), ramda.mapObjIndexed(function (schema, name) {
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
    this.errorMessage = ramda.isNil(errorMessage) ? "".concat(name, "Failed") : errorMessage;
  };
  /**
   * Create New Validators
   * @param {string} name - Validator name
   * @param {Function} func - Function validation, return `true` when succeed or `false` when failure
   * @param {string?} errorMessage - Custom error message
   */

  var validator = function validator(name, func, errorMessage) {
    return new Validator(name, func, errorMessage);
  };

  /**
   * Validate
   * @param {(Validator[] | Validator | object)} validators
   * @param {any} value - value to test
   * @returns {(boolean | string | string[] | object)} Return true when success or errors when failure.
   *    Errors format depends on the validators format :
   *    it returns an array if validators args is an array and object if validators args is an object
   */

  var validate = ramda.curry(function (validators, value) {
    return runValidations(validators, value, value);
  });
  var createValidator = validator;

  exports.validate = validate;
  exports.createValidator = createValidator;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
