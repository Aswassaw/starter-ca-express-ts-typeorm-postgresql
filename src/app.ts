import { PostgreDataSource } from "../database/data-source";
import createServer from "./Infrastructures/http/createServer";
import EnvList from "./Commons/env/EnvList";

PostgreDataSource.initialize()
  .then(async () => {
    createServer.listen(EnvList.PORT, () => {
      console.log(`Server started on port ${EnvList.PORT} with ${EnvList.NODE_ENV} environment`);
      console.log(`Visit http://localhost:${EnvList.PORT}`);
      console.log("Developed by Andry Pebrianto");
    });
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
