import { stat } from "fs";
import { Reducer } from "redux";
import { Book } from "../../../types";
import { ActionType } from "../action-types";
import { Action } from "../actions";

interface BooksState {
  books: Book[];
}
const initialState = {
  books: [],
};
const booksReducer: Reducer<BooksState, Action> = (
  state: BooksState = initialState,
  action: Action
): BooksState => {
  switch (action.type) {
    case ActionType.ADD_BOOK:
      const indexOfBookInStore = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      const bookToAdd = { ...action.payload, quantity: 1 };

      if (indexOfBookInStore > -1) {
        const newState = { ...state };
        newState.books[indexOfBookInStore].quantity! += 1;
        console.log('Book alredy in cart',newState.books[indexOfBookInStore]);
        return newState;
      } else {
          console.log('Book add first time')
        return {
          ...state,
          books: [...state.books, bookToAdd],
        };
      }

    case ActionType.REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    default:
      return state;
  }
};

export default booksReducer;
