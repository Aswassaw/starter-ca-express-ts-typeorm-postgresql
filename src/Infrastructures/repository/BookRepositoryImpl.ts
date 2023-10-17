import { v4 } from "uuid";
import { Repository } from "typeorm";
import { Book } from "../../../database/entities/Book";
import BookRepository from "../../Domains/books/BookRepository";
import AddBook from "../../Domains/books/entities/AddBook";
import AddBookResponse from "../../Domains/books/entities/AddBookResponse";

class BookRepositoryImpl extends BookRepository {
  private _idGenerator: typeof v4;
  private _bookDB: Repository<Book>;

  constructor(idGenerator: typeof v4, bookDB: Repository<Book>) {
    super();

    this._idGenerator = idGenerator;
    this._bookDB = bookDB;
  }

  async add(newBookData: AddBook): Promise<AddBookResponse> {
    const { bookName }: AddBook = newBookData;

    const book: Book = new Book();
    book.id = this._idGenerator();
    book.book_name = bookName;

    await this._bookDB.save(book);

    return new AddBookResponse({
      id: book.id,
      bookName: book.book_name,
    });
  }
}

export default BookRepositoryImpl;
