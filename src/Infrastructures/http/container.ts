import { container } from "tsyringe";
import { v4 as uuidv4, v4 } from "uuid";
import { Repository } from "typeorm";
import { PostgreDataSource } from "../../../database/data-source";
import { Book } from "../../../database/entitities/Book";

container.register<typeof v4>("idGenerator", {
  useValue: uuidv4,
});
container.register<Repository<Book>>("bookDB", {
  useValue: PostgreDataSource.getRepository(Book),
});

export default container;
