import express from "express";

const createServer = express();

createServer.use(express.json());
createServer.use(express.urlencoded({ extended: false }));

createServer.get("/", (req: express.Request, res: express.Response) => {
  res.send("Server Online!");
});

export default createServer;
