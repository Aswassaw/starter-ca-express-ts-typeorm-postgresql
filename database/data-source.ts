import * as dotenv from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { Book } from "./entitities/Book";
import { MigrationFile1697000412110 } from "./migration/1697000412110-MigrationFile";

dotenv.config();

export const PostgreDataSource = new DataSource({
  type: "postgres",
  host:
    process.env.NODE_ENV === "test"
      ? process.env.DB_HOST_TEST
      : process.env.DB_HOST,
  port:
    process.env.NODE_ENV === "test"
      ? parseInt(process.env.DB_PORT_TEST)
      : parseInt(process.env.DB_PORT),
  username:
    process.env.NODE_ENV === "test"
      ? process.env.DB_USERNAME_TEST
      : process.env.DB_USERNAME,
  password:
    process.env.NODE_ENV === "test"
      ? process.env.DB_PASSWORD_TEST
      : process.env.DB_PASSWORD,
  database:
    process.env.NODE_ENV === "test"
      ? process.env.DB_NAME_TEST
      : process.env.DB_NAME,
  synchronize: false,
  logging: process.env.NODE_ENV === "prod" ? false : true,
  entities: [Book],
  migrations: [MigrationFile1697000412110],
  subscribers: [],
});
