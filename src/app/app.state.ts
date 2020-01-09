import { BookState, initialBookState } from './modules/book/book.state';
import { BooksState, initialBooksState } from './modules/books/books.state';

export interface AppState {
  books: BooksState;
  selectedBook: BookState;
}

export const initialAppState: AppState = {
  books: initialBooksState,
  selectedBook: initialBookState,
};

export const getInitialBooksState = () => initialAppState;
