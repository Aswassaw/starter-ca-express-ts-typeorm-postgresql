import BookRepository from "../../Domains/books/BookRepository";
import AddBook from "../../Domains/books/entities/AddBook";

type AddBookUseCaseType = {
  bookRepository: BookRepository;
};

type AddBookUseCasePayloadType = {
  bookName: string;
};

class AddBookUseCase {
  private _bookRepository: BookRepository;

  constructor(paylaod: AddBookUseCaseType) {
    this._bookRepository = paylaod.bookRepository;
  }

  async execute({ bookName }: AddBookUseCasePayloadType) {
    return this._bookRepository.add(new AddBook({ bookName }));
  }
}

export default AddBookUseCase;
