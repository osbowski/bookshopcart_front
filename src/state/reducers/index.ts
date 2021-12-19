import { combineReducers } from "redux";
import booksReducer from "./bookReducer";

const reducers = combineReducers({
  books: booksReducer,
});

export type RootState = ReturnType<typeof reducers>;
export default reducers;
