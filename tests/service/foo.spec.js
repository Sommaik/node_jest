require("../../app/service/foo");

describe("foo service", () => {
  it("Should return foo!", () => {
    expect(foo()).toEqual("foo!");
  });
});
