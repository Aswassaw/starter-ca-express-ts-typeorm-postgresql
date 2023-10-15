/* eslint-disable @typescript-eslint/no-explicit-any */

import AddBook from "../AddBook";

describe("a AddBook entities", () => {
  it("should create addBook object correctly", () => {
    // Arrange
    const payload = {
      bookName: "10 Dosa Besar Hiruzen",
    };

    // Action
    const { bookName } = new AddBook(payload);

    // Assert
    expect(bookName).toEqual(payload.bookName);
  });
});
