import AddBook from "./entities/AddBook";
import AddedBook from "./entities/AddedBook";

abstract class BookRepository {
  abstract add(newBookData: AddBook): Promise<AddedBook>;
  // abstract findAll(): Promise<AddedBook[]>;
  // abstract findOne(id: string): Promise<AddedBook>;
  // abstract updateOne(id: string, newBookData: AddBook): Promise<AddedBook>;
  // abstract deleteOne(id: string): Promise<AddedBook>;
}

export default BookRepository;
