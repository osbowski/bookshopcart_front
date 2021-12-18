import { combineReducers } from "redux";
import booksReducer from "./bookReducer";

const reducers = combineReducers({
    books:booksReducer
})

export default reducers;