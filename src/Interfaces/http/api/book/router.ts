import { Router } from "express";
import BookService from "./service";
import container from "../../../../Infrastructures/http/container";

const bookService: BookService = new BookService(container);

const router = Router();
router.post("/book", bookService.postBookService);

export default router;
