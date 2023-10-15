import { DependencyContainer } from "tsyringe";
import { Request, Response } from "express";
import { Repository } from "typeorm";
import { v4 } from "uuid";
import BookRepositoryImpl from "../../../../Infrastructures/repository/BookRepositoryImpl";
import AddBookUseCase from "../../../../Applications/use_case/AddBookUseCase";
import { Book } from "../../../../../database/entitities/Book";

class BookService {
  private _container: DependencyContainer;

  constructor(container: DependencyContainer) {
    this._container = container;

    this.postBookService = this.postBookService.bind(this);
  }

  async postBookService(req: Request, res: Response): Promise<Response> {
    const payload = {
      bookName: req.body.bookName,
    };

    const bookRepositoryImpl = new BookRepositoryImpl(
      this._container.resolve<Repository<Book>>("bookDB"),
      this._container.resolve<typeof v4>("idGenerator")
    );
    const addBookUseCase = new AddBookUseCase({
      bookRepository: bookRepositoryImpl,
    });
    const addedBook = await addBookUseCase.execute(payload);

    return res.status(201).json({
      status: "success",
      data: addedBook
    });
  }
}

export default BookService;
