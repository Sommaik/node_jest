const request = require("supertest");
const app = require("../../app/app");
const login = require("../../app/service/login");

describe("login controller", () => {
  // it("should return token when login complete", async () => {
  //   const resp = await request(app).post("/login");
  //   expect(resp.statusCode).toEqual(200);
  // });

  it("should return status 200 when call /login/test", async () => {
    const resp = await request(app).get("/login/test");
    expect(resp.statusCode).toEqual(200);
  });

  it("should return token and success when call login", async () => {
    login.singin = jest.fn();
    login.singin.mockResolvedValue({ success: true, token: "xxxxx" });
    const resp = await request(app)
      .post("/login")
      .send({ userId: "admin", password: "admin" });
    expect(resp.body).toEqual({ success: true, token: "xxxxx" });
  });

  it("should return error and success false when call login", async () => {
    login.singin = jest.fn();
    login.singin.mockResolvedValue({ success: false });
    const resp = await request(app)
      .post("/login")
      .send({ userId: "admin", password: "admin" });
    expect(resp.body).toEqual({ success: false, error: "Login fail" });
  });
});
