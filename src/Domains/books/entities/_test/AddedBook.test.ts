/* eslint-disable @typescript-eslint/no-explicit-any */

import AddedBook from "../AddedBook";

describe("a AddedBook entities", () => {
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
