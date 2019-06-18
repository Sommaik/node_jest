const app = require("../app/app");
const request = require("supertest");
const jwt = require("jwt-simple");
const config = require("config");
const Config = config.get("Config");

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

  it("should post data and return json response", async () => {
    const resp = await request(app)
      .post("/")
      .send({ code: "007" });
    expect(resp.body).toEqual({
      success: true,
      data: { code: "007" }
    });
  });

  it("should get with param return json response", async () => {
    const resp = await request(app).get("/users/100/books/8989");
    expect(resp.body).toEqual({
      success: true,
      data: { userId: "100", bookId: "8989" }
    });
  });

  it("should return dummy when get /dummy ", async () => {
    const token = await jwt.encode({}, Config.auth.jwtSecret);
    const resp = await request(app)
      .get("/dum")
      .set("Authorization", "jwt " + token);
    expect(resp.statusCode).toEqual(200);
    expect(resp.text).toEqual("dummy");
  });
});
