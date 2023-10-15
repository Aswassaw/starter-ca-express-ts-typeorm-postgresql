type AddedBookType = {
  id: string;
  bookName: string;
};

class AddedBook {
  readonly id: string;
  readonly bookName: string;

  constructor(payload: AddedBookType) {
    this.id = payload.id;
    this.bookName = payload.bookName;
  }
}

export default AddedBook;
