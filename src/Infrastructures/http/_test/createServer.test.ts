import request from "supertest";
import createServer from "../createServer";

describe("HTTP server", () => {
  describe("when GET /", () => {
    it("should return 200 and Server Online!", async () => {
      // Arrange & Action
      const response = await request(createServer).get("/");

      // Assert
      expect(response.statusCode).toEqual(200);
      expect(response.text).toEqual("Server Online!");
    });
  });

  it("should response 404 when request not found route", async () => {
    // Arrange
    const response = await request(createServer).get("/random-url");

    // Assert
    expect(response.statusCode).toEqual(404);
    expect(response.text).toEqual("404 - Not Found!");
  });
});
