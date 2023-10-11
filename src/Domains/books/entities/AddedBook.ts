type PayloadType = {
  id: string;
  bookName: string;
};

class AddedBook {
  id: string;
  bookName: string;

  constructor(payload: PayloadType) {
    this._verifyPayload(payload);

    this.id = payload.id;
    this.bookName = payload.bookName;
  }

  private _verifyPayload(payload: PayloadType): void {
    if (!payload.id || !payload.bookName) {
      throw new Error("ADD_BOOK.NOT_CONTAIN_NEEDED_PROPERTY");
    }

    if (typeof payload.id !== "string" || typeof payload.bookName !== "string") {
      throw new Error("ADD_BOOK.NOT_MEET_DATA_TYPE_SPECIFICATION");
    }
  }
}

export default AddedBook;
