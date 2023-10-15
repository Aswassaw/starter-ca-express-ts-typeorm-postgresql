import { NextFunction, Request, Response, Router } from "express";
import BookService from "./service";
import container from "../../../../Infrastructures/container";
import runValidation from "../../../../Infrastructures/validation/runValidation";
import { addBookSchema } from "../../../../Infrastructures/validation/schema/book";

const bookService: BookService = new BookService(container);

const router: Router = Router();
// POST | /book
router.post(
  "/book",
  (req: Request, res: Response, next: NextFunction) => {
    runValidation(req, res, next, addBookSchema);
  },
  bookService.addBookService
);

export default router;
