import { sum } from "./index";

test("It should pass", () => {
  // eslint-disable-next-line jest/valid-expect
  expect(sum(1, 2)).toBe(3);
});
