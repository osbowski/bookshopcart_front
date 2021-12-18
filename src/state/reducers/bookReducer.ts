import { Book } from "../../../types";
import { Action } from '../types';

const initialState:Book[]=[]
const booksReducer = (state:Book[]=initialState,action:Action)=>{
    switch(action.type){
        case "ADD_BOOK":
            state.push(action.payload)
            return state;
        case "REMOVE_BOOK":
            return state;
        
        default:
            return state
    }
}



export default booksReducer;