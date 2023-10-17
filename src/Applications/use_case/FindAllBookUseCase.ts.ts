import BookRepository from "../../Domains/books/BookRepository";

type FindAllBookUseCaseType = {
  bookRepository: BookRepository;
};

class FindAllBookUseCase {
  private _bookRepository: BookRepository;

  constructor(paylaod: FindAllBookUseCaseType) {
    this._bookRepository = paylaod.bookRepository;
  }

  async execute() {
    return this._bookRepository.findAll();
  }
}

export default FindAllBookUseCase;
