import express, { Express, Request, Response } from "express";

const createServer: Express = express();

createServer.use(express.json());

createServer.get("/", (req: Request, res: Response) => {
  res.status(200).send("Server Online!");
});

export default createServer;
