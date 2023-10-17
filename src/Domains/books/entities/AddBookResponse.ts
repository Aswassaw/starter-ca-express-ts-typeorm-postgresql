type AddBookResponseType = {
  id: string;
  bookName: string;
  createdAt: Date;
  updatedAt: Date;
};

class AddBookResponse {
  readonly id: string;
  readonly bookName: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(payload: AddBookResponseType) {
    this.id = payload.id;
    this.bookName = payload.bookName;
    this.createdAt = payload.createdAt;
    this.updatedAt = payload.updatedAt;
  }
}

export default AddBookResponse;
