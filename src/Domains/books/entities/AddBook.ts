type PayloadType = {
  bookName: string;
};

class AddBook {
  bookName: string;

  constructor(payload: PayloadType) {
    this.bookName = payload.bookName;
  }

  private _verifyPayload(payload: PayloadType): void {
    if (!payload.bookName) {
      throw new Error("ADD_BOOK.NOT_CONTAIN_NEEDED_PROPERTY");
    }

    if (typeof payload.bookName !== "string") {
      throw new Error("ADD_BOOK.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}

export default AddBook;
