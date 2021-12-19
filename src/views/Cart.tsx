import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../state/reducers";

import BookList from "../components/books/BookList";
const Cart:React.FC = () => {
    const store = useSelector((state:RootState)=>state.books)
  return (
    <>
      <div>Twój koszyk</div>
      <BookList isInCart={true} />
      {store.books.length > 0 &&  <Link to="/order">Zamawiam</Link> }
     
    </>
  );
};

export default Cart;
