import "reflect-metadata";
import { DataSource } from "typeorm";
import Env from "../src/Commons/variables/Env";
import { Book } from "./entities/Book";

export const PostgreDataSource = new DataSource({
  type: "postgres",
  host: Env.DB_HOST,
  port: Env.DB_PORT,
  username: Env.DB_USERNAME,
  password: Env.DB_PASSWORD,
  database: Env.DB_NAME,
  synchronize: Env.NODE_ENV === "prod" ? false : true,
  logging: Env.NODE_ENV === "prod" ? false : true,
  entities: [Book],
  migrations: [],
  subscribers: [],
});
