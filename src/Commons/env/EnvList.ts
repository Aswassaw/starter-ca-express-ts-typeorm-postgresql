import dotenv from "dotenv";

dotenv.config();

class EnvList {
  static NODE_ENV: string = process.env.NODE_ENV || "prod";
  static PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;

  static DB_HOST: string = process.env.DB_HOST || "localhost";
  static DB_PORT: number = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432;
  static DB_USERNAME: string = process.env.DB_USERNAME || "postgres";
  static DB_PASSWORD: string = process.env.DB_PASSWORD || "secret";
  static DB_NAME: string = process.env.DB_NAME || "typeorm-db";

  static DB_HOST_TEST: string = process.env.DB_HOST_TEST || "localhost";
  static DB_PORT_TEST: number = process.env.DB_PORT_TEST ? parseInt(process.env.DB_PORT_TEST) : 5432;
  static DB_USERNAME_TEST: string = process.env.DB_USERNAME_TEST || "postgres";
  static DB_PASSWORD_TEST: string = process.env.DB_PASSWORD_TEST || "secret";
  static DB_NAME_TEST: string = process.env.DB_NAME_TEST || "typeorm-db-test";
}

export default EnvList;
