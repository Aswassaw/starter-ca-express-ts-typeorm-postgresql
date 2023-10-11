import { PostgreDataSource } from "../database/data-source";
import createServer from "./Interfaces/http/api/createServer";

PostgreDataSource.initialize()
  .then(async () => {
    const PORT: number = parseInt(process.env.PORT) || 5000;

    createServer.listen(PORT, () => {
      console.log(`Server started on port ${PORT} with ${process.env.NODE_ENV} environment`);
      console.log(`Visit http://localhost:${PORT}`);
      console.log("Developed by Andry Pebrianto");
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
