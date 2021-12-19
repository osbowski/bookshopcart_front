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
      const indexOfBookToAddInStore = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      const bookToAdd = { ...action.payload, quantity: 1 };

      if (indexOfBookToAddInStore > -1) {
        const newState = { ...state };
        newState.books[indexOfBookToAddInStore].quantity! += 1;
        return newState;
      } else {
        return {
          ...state,
          books: [...state.books, bookToAdd],
        };
      }

    case ActionType.REMOVE_BOOK:
      const indexOfBookToRemoveInStore = state.books.findIndex(
        (book) => book.id === action.payload
      );
      if (state.books[indexOfBookToRemoveInStore].quantity! > 1) {
        const newState = { ...state };
        newState.books[indexOfBookToRemoveInStore].quantity!--;
        console.log("Book-1", newState.books[indexOfBookToRemoveInStore]);
        return newState;
      } else {
          console.log('Book removed', state.books[indexOfBookToRemoveInStore])
        return {
          ...state,
          books: state.books.filter((book) => book.id !== action.payload),
        };
      }

    default:
      return state;
  }
};

export default booksReducer;
