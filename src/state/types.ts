import { Book } from "../../types";

export interface AddBookAction{
    type:'ADD_BOOK',
    payload:Book
}

export interface RemoveBookAction{
    type:'REMOVE_BOOK',
    payload:string
}

export type Action = AddBookAction | RemoveBookAction;