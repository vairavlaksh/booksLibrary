import { ActionReducerMap } from '@ngrx/store';

import { AppState } from './app.state';
import { booksReducers } from './modules/books/books.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  books: booksReducers,
};
