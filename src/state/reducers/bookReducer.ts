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
            console.log('Books added', state)
            return state;
        case ActionType.REMOVE_BOOK:
            state.books = state.books.filter(book=>book.id !== action.payload)
            console.log(state)
            return state
            
        
        default:
            return state
    }
}



export default booksReducer;