import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
const TheHeader: React.FC = () => {
  const state = useSelector((state:RootState)=>state.books)
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
      <div>Books in cart: {state.books.length}</div>
    </header>
  );
};

export default TheHeader;
