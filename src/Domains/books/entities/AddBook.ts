type AddBookType = {
  bookName: string;
};

class AddBook {
  readonly bookName: string;

  constructor(payload: AddBookType) {
    this.bookName = payload.bookName;
  }
}

export default AddBook;
