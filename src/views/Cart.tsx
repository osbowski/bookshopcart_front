import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../state/reducers";
import { Button } from "react-bootstrap";

import BookList from "../components/books/BookList";
const Cart: React.FC = () => {
  const store = useSelector((state: RootState) => state.books);
  return (
    <>
      <h2
        style={{ textAlign: "center", marginTop: "8rem", marginBottom: "5rem" }}
      >
        Twój koszyk
      </h2>
      {store.books.length > 0 && <div style={{textAlign:"center"}}><Button><Link to="/order">Zamawiam</Link></Button></div>}
      {store.books.length < 1 && <div style={{textAlign:"center"}}><Link className="h4" to="/">Wróć do sklepu by dodać książki do koszyka</Link></div>}
      <BookList isInCart={true} />
      {store.books.length > 0 && <div style={{textAlign:"center", marginBottom:'5rem'}}><Button><Link to="/order">Zamawiam</Link></Button></div>}
    </>
  );
};

export default Cart;
