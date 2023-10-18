import BookRepository from "../../Domains/books/BookRepository";

type DeleteOneBookUseCaseType = {
  bookRepository: BookRepository;
};

class DeleteOneBookUseCase {
  private _bookRepository: BookRepository;

  constructor(paylaod: DeleteOneBookUseCaseType) {
    this._bookRepository = paylaod.bookRepository;
  }

  async execute(id: string) {
    return this._bookRepository.deleteOne(id);
  }
}

export default DeleteOneBookUseCase;
