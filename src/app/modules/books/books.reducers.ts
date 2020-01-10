import { addBook, parseBooksList } from '../../app.utils';
import { ADD_BOOKS, BooksActions, GET_BOOKS_SUCCESS } from './books.actions';
import { BooksState, initialBooksState } from './books.state';

export const booksReducers = (
  state = initialBooksState,
  action: BooksActions,
): BooksState => {
  switch (action.type) {
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: parseBooksList(action.books),
      };
    case ADD_BOOKS:
      const { newId, newBookData } = addBook(action.book);
      const newBooks = { ...state.books };
      newBooks[newId] = newBookData;
      return {
        ...state,
        books: newBooks,
      };

    default:
      return state;
  }
};
