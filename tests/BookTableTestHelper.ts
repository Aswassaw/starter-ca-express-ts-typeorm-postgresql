import pool from "./pool";

class BookTableTestHelper {
  async addBook({
    id = "a4ad6bed-0c9f-4ee0-a18a-57695e6e0a5c",
    bookName = "Test Book",
  }: {
    id?: string;
    bookName?: string;
  }): Promise<void> {
    const query = {
      text: "INSERT INTO books(id, book_name) VALUES($1, $2)",
      values: [id, bookName],
    };

    await pool.query(query);
  }

  async cleanTable(): Promise<void> {
    await pool.query("DELETE FROM books WHERE 1=1");
  }
}

export default BookTableTestHelper;
