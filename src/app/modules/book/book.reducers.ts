import { BookActions, bookActions } from './book.actions';
import { BookState, initialBookState } from './book.state';

export const bookReducers = (
  state = initialBookState,
  action: BookActions,
): BookState => {
  switch (action.type) {
    case bookActions.UpdateSelectedBook: {
      return {
        ...state,
        selectedBook: action.book,
      };
    }
    default:
      return state;
  }
};
