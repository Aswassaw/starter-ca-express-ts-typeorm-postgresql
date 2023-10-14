import { Repository } from "typeorm";
import { v4 as uuidv4, v4 } from "uuid";
import { PostgreDataSource } from "../../../database/data-source";
import { Book } from "../../../database/entitities/Book";
import BookRepository from "../../Domains/books/BookRepository";
import AddBook from "../../Domains/books/entities/AddBook";
import AddedBook from "../../Domains/books/entities/AddedBook";

class BookRepositoryImpl implements BookRepository {
  private _bookDB: Repository<Book> = PostgreDataSource.getRepository(Book);
  private _idGenerator: typeof v4 = uuidv4;

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
