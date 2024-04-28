import { create } from 'zustand';
import { IBook } from '../types';

interface BookStore {
  booksStored: IBook[];
  addBook: (newBook: IBook) => void;
  removeBook: (ISBN: string) => void;
}

export const useBookStore = create<BookStore>((set) => ({
  booksStored: [],
  addBook: (newBook) =>
    set(({ booksStored: books }) => {
      const alreadyInStore = books.find((book) => book.ISBN === newBook.ISBN);
      return !alreadyInStore
        ? { booksStored: [...books, newBook] }
        : { booksStored: books };
    }),
  removeBook: (ISBN) =>
    set(({ booksStored: books }) => ({
      booksStored: books.filter((book) => book.ISBN !== ISBN),
    })),
}));
