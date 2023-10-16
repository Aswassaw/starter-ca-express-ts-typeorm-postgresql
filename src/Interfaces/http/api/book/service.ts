import { DependencyContainer } from "tsyringe";
import { Request, Response } from "express";
import { v4 } from "uuid";
import { Repository } from "typeorm";
import { Book } from "../../../../../database/entitities/Book";
import BookRepositoryImpl from "../../../../Infrastructures/repository/BookRepositoryImpl";
import AddBookUseCase from "../../../../Applications/use_case/AddBookUseCase";
import handleError from "../../../../Infrastructures/helpers/exception/handleError";

class BookService {
  private _container: DependencyContainer;

  constructor(container: DependencyContainer) {
    this._container = container;

    this.addBookService = this.addBookService.bind(this);
  }

  async addBookService(req: Request, res: Response): Promise<Response> {
    try {
      const payload: {
        bookName: string;
      } = {
        bookName: req.body.bookName,
      };

      const addBookUseCase = new AddBookUseCase({
        bookRepository: new BookRepositoryImpl(
          this._container.resolve<typeof v4>("idGenerator"),
          this._container.resolve<Repository<Book>>("bookDB")
        ),
      });
      const addedBook = await addBookUseCase.execute(payload);

      return res.status(201).json({
        code: 201,
        status: "success",
        message: "Add Book Success",
        data: addedBook,
      });
    } catch (error) {
      return handleError(res, error);
    }
  }
}

export default BookService;
