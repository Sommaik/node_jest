const exam1 = require("../app/service/exam1");

describe("Exam1", () => {
  test("case 1", () => {
    const data = ["One"];
    expect(data).toEqual(["One"]);
  });

  test("Should be 1 + 1 = 2", () => {
    const result = exam1.add(1, 1);
    expect(result).toEqual(2);
  });

  test("Should be 1.235 + 1 = 2.235", () => {
    const result = exam1.add(1.235, 1);
    expect(result).toEqual(2.235);
  });

  test("Shoud call helloWorldCallback retrun h = Hello", () => {
    exam1.helloWorldCallback(function(h, w) {
      expect(h).toEqual("Hello");
    });
  });

  test("Shoud call helloWorldCallback retrun w = Word", () => {
    exam1.helloWorldCallback(function(h, w) {
      expect(w).toEqual("ThisWorld");
    });
  });
});
