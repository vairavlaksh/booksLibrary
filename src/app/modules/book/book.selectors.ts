import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/app.state';

import { BookState } from './book.state';

const selectBook = (state: AppState) => state.selectedBook;

export const selectSelectedBook = createSelector(
  selectBook,
  (state: BookState) => state.selectedBook,
);
