import BookRepository from "../../../Domains/books/BookRepository";
import AddBook from "../../../Domains/books/entities/AddBook";
import AddedBook from "../../../Domains/books/entities/AddedBook";
import AddBookUseCase from "../AddBookUseCase";

class MockBookRepositoryImpl extends BookRepository {
  add(): Promise<AddedBook> {
    return Promise.resolve(
      new AddedBook({
        id: "",
        bookName: "",
      })
    );
  }
}

describe("AddBookUseCase", () => {
  it("should orchestrating the add book correctly", async () => {
    // Arrange
    const useCasePayload = {
      bookName: "Judul Buku",
    };

    const expectedAddedBook = new AddedBook({
      id: "123",
      bookName: useCasePayload.bookName,
    });

    const mockBookRepository = new MockBookRepositoryImpl();
    mockBookRepository.add = jest
      .fn()
      .mockImplementation(() => Promise.resolve(expectedAddedBook));

    const addBookUseCase = new AddBookUseCase({
      bookRepository: mockBookRepository,
    });

    // Action
    const addedBook = await addBookUseCase.execute(useCasePayload);

    // Assert
    expect(addedBook).toStrictEqual(expectedAddedBook);
    expect(mockBookRepository.add).toBeCalledWith(new AddBook(useCasePayload));
  });
});
