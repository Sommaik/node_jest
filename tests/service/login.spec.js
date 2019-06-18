const login = require("../../app/service/login");
const mydb = require("../../app/helper/mydb");
describe("login service", () => {
  it("should return json when call signin", async () => {
    mydb.doQuery = jest.fn();
    // mydb.doQuery.mockResolvedValue({ userId: "007" });
    mydb.doQuery.mockImplementation(sql => {
      console.log(sql);
      return new Promise((resolve, reject) => {
        resolve({ userId: "007" });
      });
    });
    const resp = await login.singin("admin", "password");
    expect(resp).toEqual({ success: true, token: "xxxx" });
  });
});
