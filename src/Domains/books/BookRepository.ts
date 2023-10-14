import AddBook from "./entities/AddBook";
import AddedBook from "./entities/AddedBook";

abstract class BookRepository {
  abstract add: (book: AddBook) => AddedBook;
  abstract findAll: () => AddedBook[];
  abstract findOne: (id: string) => AddedBook;
  abstract updateOne: (id: string, book: AddBook) => AddedBook;
  abstract deleteOne: (id: string) => AddedBook;
}

export default BookRepository;
