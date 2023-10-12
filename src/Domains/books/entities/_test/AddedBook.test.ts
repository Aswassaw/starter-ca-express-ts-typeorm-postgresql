/* eslint-disable @typescript-eslint/no-explicit-any */

import AddedBook from "../AddedBook";

describe("a AddedBook entities", () => {
  it("should throw error when payload did not contain needed property", () => {
    // Arrange
    const payload: any = {
      bookName: "10 Dosa Besar Hiruzen",
    };

    // Action and Assert
    expect(() => new AddedBook(payload)).toThrowError(
      "ADDED_BOOK.NOT_CONTAIN_NEEDED_PROPERTY"
    );
  });

  it("should throw error when payload did not meet data type specification", () => {
    // Arrange
    const payload: any = {
      id: 123,
      bookName: "10 Dosa Besar Hiruzen",
    };

    // Action and Assert
    expect(() => new AddedBook(payload)).toThrowError(
      "ADDED_BOOK.NOT_MEET_DATA_TYPE_SPECIFICATION"
    );
  });

  it("should create addedBook object correctly", () => {
    // Arrange
    const payload = {
      id: "f437a94c-01c3-481a-9fb8-7415f89b69d7",
      bookName: "10 Dosa Besar Hiruzen",
    };

    // Action
    const { id, bookName } = new AddedBook(payload);

    // Assert
    expect(id).toEqual(payload.id);
    expect(bookName).toEqual(payload.bookName);
  });
});
