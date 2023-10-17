type DetailBookResponseType = {
  id: string;
  bookName: string;
  createdAt: Date;
  updatedAt: Date;
};

class DetailBookResponse {
  readonly id: string;
  readonly bookName: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(payload: DetailBookResponseType) {
    this.id = payload.id;
    this.bookName = payload.bookName;
    this.createdAt = payload.createdAt;
    this.updatedAt = payload.updatedAt;
  }
}

export default DetailBookResponse;
