import AddBook from "./entities/AddBook";
import DetailBookResponse from "./entities/DetailBookResponse";

abstract class BookRepository {
  abstract add(payload: AddBook): Promise<DetailBookResponse>;
  abstract findAll(): Promise<DetailBookResponse[]>;
  // abstract findOne(id: string): Promise<AddedBook>;
  // abstract updateOne(id: string, newBookData: AddBook): Promise<AddedBook>;
  // abstract deleteOne(id: string): Promise<AddedBook>;
}

export default BookRepository;
