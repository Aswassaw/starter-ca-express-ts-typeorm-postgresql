import { DependencyContainer } from "tsyringe";
import { Request, Response } from "express";
import { v4 } from "uuid";
import { Repository } from "typeorm";
import { Book } from "../../../../../database/entities/Book";
import BookRepositoryImpl from "../../../../Infrastructures/repository/BookRepositoryImpl";
import AddBookUseCase from "../../../../Applications/use_case/AddBookUseCase";
import handleError from "../../../../Infrastructures/helper/exception/handleError";
import FindAllBookUseCase from "../../../../Applications/use_case/FindAllBookUseCase.ts";
import FindOneBookUseCase from "../../../../Applications/use_case/FindOneBookUseCase";

class BookService {
  private _container: DependencyContainer;

  constructor(container: DependencyContainer) {
    this._container = container;

    this.addBookService = this.addBookService.bind(this);
    this.findAllBookService = this.findAllBookService.bind(this);
    this.findOneBookService = this.findOneBookService.bind(this);
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
      const addBookResponse = await addBookUseCase.execute(payload);

      return res.status(201).json({
        code: 201,
        status: "success",
        message: "Add Book Success",
        data: addBookResponse,
      });
    } catch (error) {
      return handleError(res, error);
    }
  }

  async findAllBookService(req: Request, res: Response): Promise<Response> {
    try {
      const findAllBookUseCase = new FindAllBookUseCase({
        bookRepository: new BookRepositoryImpl(
          this._container.resolve<typeof v4>("idGenerator"),
          this._container.resolve<Repository<Book>>("bookDB")
        ),
      });
      const findAllBookResponse = await findAllBookUseCase.execute();

      return res.status(201).json({
        code: 201,
        status: "success",
        message: "Find All Book Success",
        data: findAllBookResponse,
      });
    } catch (error) {
      return handleError(res, error);
    }
  }

  async findOneBookService(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      if (
        !/^[a-f\d]{8}-[a-f\d]{4}-4[a-f\d]{3}-[89aAbB][a-f\d]{3}-[a-f\d]{12}$/.test(
          id
        )
      ) {
        throw new Error("BUKAN UUID BRENGSEK");
      }

      const findOneBookUseCase = new FindOneBookUseCase({
        bookRepository: new BookRepositoryImpl(
          this._container.resolve<typeof v4>("idGenerator"),
          this._container.resolve<Repository<Book>>("bookDB")
        ),
      });
      const findOneBookResponse = await findOneBookUseCase.execute(id);

      return res.status(201).json({
        code: 201,
        status: "success",
        message: "Find One Book Success",
        data: findOneBookResponse,
      });
    } catch (error) {
      return handleError(res, error);
    }
  }
}

export default BookService;
