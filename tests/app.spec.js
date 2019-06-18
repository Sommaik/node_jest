const app = require("../app/app");
const request = require("supertest");

describe("app", () => {
  it("should return hello world", async () => {
    const resp = await request(app).get("/");
    expect(resp.statusCode).toEqual(200);
    expect(resp.text).toEqual("Hello World");
  });

  it("should return error 404 ", async () => {
    const resp = await request(app).get("/dummy");
    expect(resp.statusCode).toEqual(404);
  });
});
