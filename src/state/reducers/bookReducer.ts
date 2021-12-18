import { Reducer } from "redux";
import { Book } from "../../../types";
import { ActionType } from "../action-types";
import { Action } from '../actions';

interface BooksState{
    books:Book[]
}
const initialState={
    books:[]
}
const booksReducer:Reducer<BooksState,Action> = (state:BooksState=initialState,action:Action):BooksState=>{
    switch(action.type){
        case ActionType.ADD_BOOK:
            return{
                ...state,
                books:[...state.books, action.payload]
            }
        case ActionType.REMOVE_BOOK:
            return {
                ...state,
                books:state.books.filter(book=>book.id !== action.payload)
            }
        
        default:
            return state
    }
}



export default booksReducer;