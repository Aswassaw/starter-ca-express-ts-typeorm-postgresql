import BookRepository from "../../Domains/books/BookRepository";
import AddBookPayload from "../../Domains/books/entities/AddBookPayload";

type FindDetailUseCaseType = {
  bookRepository: BookRepository;
};

class FindDetailUseCase {
  private _bookRepository: BookRepository;

  constructor(paylaod: FindDetailUseCaseType) {
    this._bookRepository = paylaod.bookRepository;
  }

  async execute({ bookName }: { bookName: string }) {
    const payload: AddBookPayload = new AddBookPayload({ bookName });
    return this._bookRepository.add(payload);
  }
}

export default FindDetailUseCase;
