type AddBookResponseType = {
  id: string;
  bookName: string;
};

class AddBookResponse {
  readonly id: string;
  readonly bookName: string;

  constructor(payload: AddBookResponseType) {
    this.id = payload.id;
    this.bookName = payload.bookName;
  }
}

export default AddBookResponse;
