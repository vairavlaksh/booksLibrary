import { Book } from '../../app.models';

export interface BooksState {
  books: Book;
}

export const initialBooksState: BooksState = {
  books: null,
};
