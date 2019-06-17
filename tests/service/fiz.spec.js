const fiz = require("../../app/service/fiz").fiz;
const fiz2 = require("../../app/service/fiz").fiz2;
describe("fize", () => {
  it("should return fiz!", () => {
    expect(fiz()).toEqual("fiz!");
  });

  it("should return fiz2!", () => {
    expect(fiz2()).toEqual("fiz2!");
  });
});
