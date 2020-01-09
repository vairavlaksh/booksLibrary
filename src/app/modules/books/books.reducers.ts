import { BooksActions, GET_BOOKS_SUCCESS } from './books.actions';
import { BooksState, initialBooksState } from './books.state';

export const booksReducers = (
  state = initialBooksState,
  action: BooksActions,
): BooksState => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.books,
      };
    default:
      return state;
  }
};
