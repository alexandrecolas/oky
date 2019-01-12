import { isInteger } from "../src";

describe("Validator", () => {
  test("has name", () => {
    expect(isInteger.name).toBe("isInteger");
  });

  test("has function run", () => {
    expect(typeof isInteger.run).toBe("function");
  });

  test("has errorMessage", () => {
    expect(isInteger.errorMessage).toBe("isIntegerFailed");
  });
});
