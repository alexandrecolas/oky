import validate, { isInteger, isPositive, isString, isPresent } from "src";

describe("validate", () => {
  test("validate one validator", () => {
    const checkValidations = validate(isInteger);
    const result = checkValidations("kenobi");
    expect(result).toBe("isIntegerFailed");
  });

  test("validate many validators", () => {
    const checkValidations = validate([isInteger, isPositive, isPresent]);
    const result = checkValidations("kenobi");
    expect(result).toContainEqual("isIntegerFailed");
    expect(result).toContainEqual("isPositiveFailed");
  });

  test("validate hash validators", () => {
    const checkValidations = validate({
      title: [isString, isPresent],
      name: {
        first: [isString, isPresent],
        last: [isString, isPresent]
      },
      age: [isInteger, isPositive, isPresent]
    });

    const result = checkValidations({
      title: "Master",
      name: {
        first: 24,
        last: "Kenobi"
      },
      age: 42
    });

    expect(result.name.first).toContainEqual("isStringFailed");
  });
});
