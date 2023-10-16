import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity("books")
export class Book {
  @PrimaryColumn({ type: "uuid" })
    id!: string;

  @Column({ length: 50 })
    book_name!: string;
}
