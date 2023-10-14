import BookRepository from "../../Domains/books/BookRepository";
import AddBook from "../../Domains/books/entities/AddBook";

type AddBookUseCaseType = {
  bookRepository: BookRepository;
};

class AddBookUseCase {
  private _bookRepository: BookRepository;

  constructor(paylaod: AddBookUseCaseType) {
    this._bookRepository = paylaod.bookRepository;
  }

  async execute({ bookName }: { bookName: string }) {
    const addBook = new AddBook({ bookName });
    return this._bookRepository.add(addBook);
  }
}

export default AddBookUseCase;
