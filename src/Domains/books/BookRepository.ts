import AddBook from "./entities/AddBook";
import AddedBook from "./entities/AddedBook";

interface BookRepository {
  add: (newBookData: AddBook) => Promise<AddedBook>;
  // findAll: () => Promise<AddedBook[]>;
  // findOne: (id: string) => Promise<AddedBook>;
  // updateOne: (id: string, newBookData: AddBook) => Promise<AddedBook>;
  // deleteOne: (id: string) => Promise<AddedBook>;
}

export default BookRepository;
