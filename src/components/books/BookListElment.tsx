import { useState } from "react";
import { Book } from "../../../types";
import { useDispatch } from 'react-redux';
import { ActionType } from "../../state/action-types";

interface BookListElementProps {
  bookData: Book;
  isInCart:boolean;
}

const BookListElement: React.FC<BookListElementProps> = ({ bookData, isInCart }) => {
  const [addBookConfirmation, setAddBookConfirmation] = useState<string | null>(null);
  const { title, author, cover_url, pages, price, currency } = bookData;
  const dispatch = useDispatch();
  const onAddBook = ()=>{
    dispatch({type:ActionType.ADD_BOOK, payload:bookData})
    setAddBookConfirmation('Książka dodana do koszyka')
    setTimeout(()=>{
      setAddBookConfirmation(null)
    },3000)
  }

  const onRemoveBook = ()=>{
    dispatch({type:ActionType.REMOVE_BOOK, payload:bookData.id})
  }
  return (
    <li>
      <div>
        <img src={cover_url} alt={title} />
        <p>Title: {title}</p>
        <p>Author: {author}</p>
        <p>Pages: {pages}</p>
        <p>Price: {price/100} {currency}</p>
        {isInCart && <p>Quantity: {bookData.quantity}</p> }
        <button onClick={onAddBook}>{isInCart ? 'Dodaj kolejną sztukę' : 'Dodaj do koszyka'}</button>
        {isInCart && <button onClick={onRemoveBook}>Usuń z koszyka</button> }
        {addBookConfirmation && <p>{addBookConfirmation}</p>}
        
        
      </div>
    </li>
  );
};

export default BookListElement;
