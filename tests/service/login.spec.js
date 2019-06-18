const login = require("../../app/service/login");
const mydb = require("../../app/helper/mydb");
describe("login service", () => {
  it("should return json when call signin", async () => {
    mydb.doQuery = jest.fn();
    mydb.doQuery.mockImplementation(sql => {
      return new Promise((resolve, reject) => {
        resolve({ userId: "007" });
      });
    });
    const resp = await login.singin("admin", "password");
    expect(resp).toHaveProperty("success", true);
    expect(resp).toHaveProperty("token");
  });
});
