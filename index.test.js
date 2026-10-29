const modules = require("./index");

test("Should be null", () => {
  expect(modules.pokerHands([])).toBe(0);
});