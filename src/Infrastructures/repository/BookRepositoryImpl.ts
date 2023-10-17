import { v4 } from "uuid";
import { Repository } from "typeorm";
import { Book } from "../../../database/entities/Book";
import BookRepository from "../../Domains/books/BookRepository";
import AddBook from "../../Domains/books/entities/AddBook";
import DetailBookResponse from "../../Domains/books/entities/DetailBookResponse";

class BookRepositoryImpl extends BookRepository {
  private _idGenerator: typeof v4;
  private _bookDB: Repository<Book>;

  constructor(idGenerator: typeof v4, bookDB: Repository<Book>) {
    super();

    this._idGenerator = idGenerator;
    this._bookDB = bookDB;
  }

  async add(payload: AddBook): Promise<DetailBookResponse> {
    const { bookName }: AddBook = payload;

    const book: Book = new Book();
    book.id = this._idGenerator();
    book.book_name = bookName;

    await this._bookDB.save(book);

    return new DetailBookResponse({
      id: book.id,
      bookName: book.book_name,
      createdAt: book.created_at,
      updatedAt: book.updated_at,
    });
  }

  async findAll(): Promise<DetailBookResponse[]> {
    const books: Book[] = await this._bookDB.find();

    return books.map(
      (book) =>
        new DetailBookResponse({
          id: book.id,
          bookName: book.book_name,
          createdAt: book.created_at,
          updatedAt: book.updated_at,
        })
    );
  }
}

export default BookRepositoryImpl;
