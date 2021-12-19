import { Link } from "react-router-dom";
import BookList from "../components/books/BookList";
const Cart = ()=>{
    return(
        <>
       <div>Twój koszyk</div>
       <BookList isInCart={true} />
       <Link to="/order">Zamawiam</Link>
       </>  
    )
}


export default Cart;