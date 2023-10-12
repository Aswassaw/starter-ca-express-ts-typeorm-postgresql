import "reflect-metadata";
import { DataSource } from "typeorm";
import Env from "../src/Infrastructures/utils/Env";
import { Book } from "./entitities/Book";
import { MigrationFile1697000412110 } from "./migration/1697000412110-MigrationFile";

export const PostgreDataSource = new DataSource({
  type: "postgres",
  host: Env.NODE_ENV === "prod" ? Env.DB_HOST : Env.DB_HOST_TEST,
  port: Env.NODE_ENV === "prod" ? Env.DB_PORT : Env.DB_PORT_TEST,
  username: Env.NODE_ENV === "prod" ? Env.DB_USERNAME : Env.DB_USERNAME_TEST,
  password: Env.NODE_ENV === "prod" ? Env.DB_PASSWORD : Env.DB_PASSWORD_TEST,
  database: Env.NODE_ENV === "prod" ? Env.DB_NAME : Env.DB_NAME_TEST,
  synchronize: false,
  logging: Env.NODE_ENV === "prod" ? false : true,
  entities: [Book],
  migrations: [MigrationFile1697000412110],
  subscribers: [],
});