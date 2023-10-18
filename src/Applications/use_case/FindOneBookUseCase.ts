import BookRepository from "../../Domains/books/BookRepository";

type FindOneBookUseCaseType = {
  bookRepository: BookRepository;
};

class FindOneBookUseCase {
  private _bookRepository: BookRepository;

  constructor(paylaod: FindOneBookUseCaseType) {
    this._bookRepository = paylaod.bookRepository;
  }

  async execute(id: string) {
    return this._bookRepository.findOne(id);
  }
}

export default FindOneBookUseCase;
