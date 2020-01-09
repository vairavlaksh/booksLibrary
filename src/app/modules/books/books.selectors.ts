import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

import { BooksState } from './books.state';

const selectBooks = (state: AppState) => state.books;

export const selectBooksList = createSelector(
  selectBooks,
  (state: BooksState) => state.books,
);
