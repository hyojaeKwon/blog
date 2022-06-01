class Post {
  private id: number;
  private author: string;
  private title: string;
  private shortDesc: string;

  constructor(id: number, author: string, title: string, shortDest: string) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.shortDesc = shortDest;
  }

  get getPostID() {
    return this.id;
  }
  get getPostAuthor() {
    return this.author;
  }
  get getPostTitle() {
    return this.title;
  }
  get getPostShortDesc() {
    return this.shortDesc;
  }
}

export default Post;
