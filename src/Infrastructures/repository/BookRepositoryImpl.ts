import { v4 } from "uuid";
import { Repository } from "typeorm";
import { Book } from "../../../database/entitities/Book";
import BookRepository from "../../Domains/books/BookRepository";
import AddBook from "../../Domains/books/entities/AddBook";
import AddedBook from "../../Domains/books/entities/AddedBook";

class BookRepositoryImpl extends BookRepository {
  private _idGenerator: typeof v4;
  private _bookDB: Repository<Book>;

  constructor(idGenerator: typeof v4, bookDB: Repository<Book>) {
    super();

    this._idGenerator = idGenerator;
    this._bookDB = bookDB;
  }

  async add(newBookData: AddBook): Promise<AddedBook> {
    const { bookName }: AddBook = newBookData;

    const book: Book = new Book();
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
