import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("books")
export class Book {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  book_name: string;
}
