const request = require("supertest");
const app = require("../index");

test("GET /", async () => {
	const response = await request(app).get("/");
	expect(response.text).toEqual("hello wold!");
});
