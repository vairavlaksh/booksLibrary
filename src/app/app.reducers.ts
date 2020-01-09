import { ActionReducerMap } from '@ngrx/store';

import { AppState } from './app.state';
import { bookReducers } from './modules/book/book.reducers';
import { booksReducers } from './modules/books/books.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  books: booksReducers,
  selectedBook: bookReducers,
};
