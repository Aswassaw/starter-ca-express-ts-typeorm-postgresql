import AddBook from "./entities/AddBook";
import DetailBookResponse from "./entities/DetailBookResponse";

abstract class BookRepository {
  abstract add(payload: AddBook): Promise<DetailBookResponse>;
  abstract findAll(): Promise<DetailBookResponse[]>;
  abstract findOne(id: string): Promise<DetailBookResponse>;
  abstract updateOne(id: string, payload: AddBook): Promise<DetailBookResponse>;
  abstract deleteOne(id: string): void;
}

export default BookRepository;
