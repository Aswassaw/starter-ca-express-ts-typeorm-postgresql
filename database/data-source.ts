import "reflect-metadata";
import { DataSource } from "typeorm";
import EnvList from "../src/Commons/env/EnvList";
import { Book } from "./entitities/Book";
import { MigrationFile1697282166658 } from "./migration/1697282166658-MigrationFile";

export const PostgreDataSource = new DataSource({
  type: "postgres",
  host: EnvList.NODE_ENV === "prod" ? EnvList.DB_HOST : EnvList.DB_HOST_TEST,
  port: EnvList.NODE_ENV === "prod" ? EnvList.DB_PORT : EnvList.DB_PORT_TEST,
  username: EnvList.NODE_ENV === "prod" ? EnvList.DB_USERNAME : EnvList.DB_USERNAME_TEST,
  password: EnvList.NODE_ENV === "prod" ? EnvList.DB_PASSWORD : EnvList.DB_PASSWORD_TEST,
  database: EnvList.NODE_ENV === "prod" ? EnvList.DB_NAME : EnvList.DB_NAME_TEST,
  synchronize: false,
  logging: EnvList.NODE_ENV === "prod" ? false : true,
  entities: [Book],
  migrations: [MigrationFile1697282166658],
  subscribers: [],
});
