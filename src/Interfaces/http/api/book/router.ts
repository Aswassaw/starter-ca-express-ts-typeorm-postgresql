import { Request, Response, Router } from "express";
import BookService from "./service";
import container from "../../../../Infrastructures/container";
import { addBookSchema } from "./validation";

const bookService: BookService = new BookService(container);

const router: Router = Router();
// POST | /book
router.post("/book", (req: Request, res: Response) => {
  const { error } = addBookSchema.validate(req.body);
  if (error)
    return res.status(400).json({
      code: 400,
      status: "failed",
      message: "Validation Failed",
      error: error.details[0].message,
    });

  bookService.addBookService(req, res);
});

export default router;
