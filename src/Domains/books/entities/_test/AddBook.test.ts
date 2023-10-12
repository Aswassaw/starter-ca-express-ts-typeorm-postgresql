/* eslint-disable @typescript-eslint/no-explicit-any */

import AddBook from "../AddBook";

describe("a AddBook entities", () => {
  it("should throw error when payload did not contain needed property", () => {
    // Arrange
    const payload: any = {};

    // Action and Assert
    expect(() => new AddBook(payload)).toThrowError(
      "ADD_BOOK.NOT_CONTAIN_NEEDED_PROPERTY"
    );
  });

  it("should throw error when payload did not meet data type specification", () => {
    // Arrange
    const payload: any = {
      bookName: 123,
    };

    // Action and Assert
    expect(() => new AddBook(payload)).toThrowError(
      "ADD_BOOK.NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });

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
