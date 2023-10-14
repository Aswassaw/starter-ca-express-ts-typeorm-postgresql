import { PostgreDataSource } from "../database/data-source";
import createServer from "./Infrastructures/http/createServer";
import Env from "./Commons/variables/Env";

PostgreDataSource.initialize()
  .then(async () => {
    createServer.listen(Env.PORT, () => {
      console.log(`Server started on port ${Env.PORT} with ${Env.NODE_ENV} environment`);
      console.log(`Visit http://localhost:${Env.PORT}`);
      console.log("Developed by Andry Pebrianto");
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
