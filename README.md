# Oky

Oky is a JavaScript type testing library.

## Installation

To install the stable version:

```bash
npm install --save oky
```

## Usage

Oky is very simple, you just need to use `validate` function with some `validators`

### Validate

```javascript
/**
 * Validate
 * @param {(Validator | Validator[] | object)} validators
 * @param {any} value - value to test
 * @returns {(boolean | string | string[] | object)} Return true when success or errors when failure.
 *    Errors format depends on the validators format :
 *    it returns an array if validators args is an array and object if validators args is an object
 */
validate(validators, value);
```

It takes 2 arguments, validators, and value and returns `true` when success and `errors` list when failure

validators args can be :

- A validator

```javascript
import validate, { isInteger } from "oky";

const validator = isInteger;

validate(validator, 3); // return true
validate(validator, "hello"); // return "isIntegerFailed"
```

- A list of validators

```javascript
import validate, { isInteger, isPositive } from "oky";

const validators = [isInteger, isPositive];

validate(validators, 3); // return true
validate(validators, "hello"); // return ["isIntegerFailed", "isPositiveFailed"]
```

- A hash with validators

```javascript
const validators = {
  name: {
    first: [isString, isPresent],
    last: [isString, isPresent]
  },
  age: [isInteger, isPositive, isPresent]
};

validate(validators, {
  name: {
    first: "Obi wan",
    last: "Kenobi"
  },
  age: 42
});
// return true

validate(validators, {
  name: {
    first: 35,
    last: "Kenobi"
  },
  age: -42
});
/**
 * return {
 *   name: {
 *     first: ["isStringFailed"]
 *   },
 *   age: ["isPositiveFailed"]
 * }
 */
```

### Create custom Validator

You can create your own validator with `validator` function

```typescript
/**
 * Create New Validators
 * @param {string} name - Validator name
 * @param {Function} func - Function validation, return `true` when succeed or `false` when failure
 * @param {string?} errorMessage - Custom error message
 * @return {Validator} - validator
 */
validator(name: string, func: Function, errorMessage?: string);
```

`func` argument is the function validation :

```typescript
const funcValidation = (value: any): boolean
```

```javascript
import validate, { validator } from "oky";

const isBlue = validator("isBlue", (value) => {
  return value ==== "blue";
});

validate(isBlue, "blue") //=> return true
validate(isBlue, "red") //=> return "isBlueFailed"


const isRed = validator("isRed", (value) => value ==== "red", "isNotRed");

validate(isRed, "red") //=> return true
validate(isRed, "blue") //=> return "isNotRed"
```

### Currying

`validate` is curried by default

```javascript
import validate, { isInteger, isPositive } from "oky";

const checkValidation = validate([isInteger, isPositive]);
checkValidation(3); // return true

validate([isInteger, isPositive])(3); // return true;
```

## Validators List

### General

- isEqualsTo
- isPresent
- isBlank
- isOtherThan

### Number

- isGreaterThan
- isGreaterThanOrEqualTo
- isLessThan
- isLessThanOrEqualTo
- isEven
- isOdd
- isNegative
- isPositive
- isInteger
- isFloat
- isFinite
- isMultiple

## String

- hasPattern
- isAlphanum
- isString
- isAlphanum

## Boolean

- isTrue
- isFalse

## Array

- isContains
- isInRange

### Object

- hasKey
- hasKeys
- isObject
- isHash

oky use `ramda` and `ramda-validations` for validators.
