import express, { Express, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";

import BookRouter from "../../Interfaces/http/api/book/router";

const createServer: Express = express();

createServer.use(express.json());
createServer.use(helmet());
createServer.use(cors({ origin: ["http://localhost:5173"] }));

createServer.get("/", (req: Request, res: Response): Response<string> => {
  return res.status(200).send("Server Online!");
});

createServer.use(BookRouter);

export default createServer;
