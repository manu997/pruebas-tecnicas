export type IBook = {
  title: string;
  pages: number;
  genre: string;
  cover: string;
  synopsis: string;
  year: number;
  ISBN: string;
  author: IAuthor;
};

export type IBookList = IBook[];

export type IAuthor = {
  name: string;
  otherBooks: string[];
};
