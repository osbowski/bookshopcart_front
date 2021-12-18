import { Book } from "../../../types";
import { ActionType } from '../action-types/index';

export interface AddBookAction{
    type: ActionType.ADD_BOOK
    payload:Book
}

export interface RemoveBookAction{
    type:ActionType.REMOVE_BOOK
    payload:number
}

export type Action = AddBookAction | RemoveBookAction;