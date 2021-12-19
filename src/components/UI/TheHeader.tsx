import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
const TheHeader: React.FC = () => {
  const state = useSelector((state:RootState)=>state.books)
  let numOfBooks = 0 
  state.books.map(book=>{
    numOfBooks+=book.quantity!
  })
  return (
    <header>
      <div>BookShop</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Sklep</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Koszyk</NavLink>
          </li>
        </ul>
      </nav>
      <div><Link to="/cart">Books in cart: {numOfBooks}</Link></div>
    </header>
  );
};

export default TheHeader;
