const fn = require("../../app/service/bar");
describe("bar service", () => {
  it("should return bar!", () => {
    expect(fn()).toEqual("bar!");
  });
});
