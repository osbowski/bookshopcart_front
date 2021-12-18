import { Book } from "../../../types";
import { ActionType } from "../action-types";
import { Action } from '../actions';

const initialState:Book[]=[]
const booksReducer = (state:Book[]=initialState,action:Action)=>{
    switch(action.type){
        case ActionType.ADD_BOOK:
            state.push(action.payload)
            return state;
        case ActionType.REMOVE_BOOK:
            return state.filter(book=>book.id !== action.payload)
            
        
        default:
            return state
    }
}



export default booksReducer;