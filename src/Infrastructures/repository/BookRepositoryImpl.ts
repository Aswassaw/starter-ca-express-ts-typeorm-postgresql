import { Repository } from "typeorm";
import { v4 } from "uuid";
import { Book } from "../../../database/entitities/Book";
import BookRepository from "../../Domains/books/BookRepository";
import AddBook from "../../Domains/books/entities/AddBook";
import AddedBook from "../../Domains/books/entities/AddedBook";

class BookRepositoryImpl implements BookRepository {
  private _bookDB: Repository<Book>;
  private _idGenerator: typeof v4;

  constructor(bookDB: Repository<Book>, idGenerator: typeof v4) {
    this._bookDB = bookDB;
    this._idGenerator = idGenerator;
  }

  async add(newBookData: AddBook): Promise<AddedBook> {
    const { bookName } = newBookData;

    const book = new Book();
    book.id = this._idGenerator();
    book.book_name = bookName;

    await this._bookDB.save(book);

    return new AddedBook({
      id: book.id,
      bookName: book.book_name,
    });
  }
}

export default BookRepositoryImpl;
