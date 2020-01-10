import { BooksState, initialBooksState } from './modules/books/books.state';

export interface AppState {
  books: BooksState;
}

export const initialAppState: AppState = {
  books: initialBooksState,
};

export const getInitialBooksState = () => initialAppState;
