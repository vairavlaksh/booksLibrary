import { Book } from '../book/book.models';

export interface BooksState {
  books: Book[];
}

export const initialBooksState: BooksState = {
  books: null,
};
