import { Book } from './book.models';

export interface BookState {
  selectedBook: Book;
}

export const initialBookState: BookState = {
  selectedBook: null,
};
