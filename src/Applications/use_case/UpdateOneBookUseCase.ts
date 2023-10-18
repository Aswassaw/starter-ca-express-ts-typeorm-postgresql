import BookRepository from "../../Domains/books/BookRepository";
import AddBook from "../../Domains/books/entities/AddBook";

type UpdateOneBookUseCaseType = {
  bookRepository: BookRepository;
};

type UpdateBookUseCasePayloadType = {
  bookName: string;
};

class UpdateOneBookUseCase {
  private _bookRepository: BookRepository;

  constructor(paylaod: UpdateOneBookUseCaseType) {
    this._bookRepository = paylaod.bookRepository;
  }

  async execute(id: string, { bookName }: UpdateBookUseCasePayloadType) {
    return this._bookRepository.updateOne(id, new AddBook({ bookName }));
  }
}

export default UpdateOneBookUseCase;
