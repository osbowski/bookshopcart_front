import { Book } from "../../../types";
import { ActionType } from "../action-types";
import { Action } from '../actions';

interface BooksState{
    books:Book[]
}
const initialState={
    books:[]
}
const booksReducer = (state:BooksState=initialState,action:Action)=>{
    switch(action.type){
        case ActionType.ADD_BOOK:
            state.books.push(action.payload)
            return state;
        case ActionType.REMOVE_BOOK:
            return state.books.filter(book=>book.id !== action.payload)
            
        
        default:
            return state
    }
}



export default booksReducer;