import { Pool } from "pg";
import Env from "../src/Commons/variables/Env";

const testConfig: {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
} = {
  host: Env.NODE_ENV === "prod" ? Env.DB_HOST : Env.DB_HOST_TEST,
  port: Env.NODE_ENV === "prod" ? Env.DB_PORT : Env.DB_PORT_TEST,
  user: Env.NODE_ENV === "prod" ? Env.DB_USERNAME : Env.DB_USERNAME_TEST,
  password: Env.NODE_ENV === "prod" ? Env.DB_PASSWORD : Env.DB_PASSWORD_TEST,
  database: Env.NODE_ENV === "prod" ? Env.DB_NAME : Env.DB_NAME_TEST,
};

const pool = new Pool(testConfig);

export default pool;
