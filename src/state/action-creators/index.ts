import { Dispatch } from 'redux'
import { ActionType } from "../action-types/index";
import { Book } from "../../../types";
import { Action } from '../actions/index'

export const addBookToCart = (book: Book) => {
  return (dispatch:Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_BOOK,
      payload:book
    });
  };
};

export const removeBookFromCart = (id:number)=>{
    return (dispatch:Dispatch) =>{
        dispatch({
            type:ActionType.REMOVE_BOOK,
            payload:id
        })
    }
}
export const removeAllBookFromCart = ()=>{
    return (dispatch:Dispatch) =>{
        dispatch({
            type:ActionType.REMOVE_ALL_BOOK
        })
    }
}
