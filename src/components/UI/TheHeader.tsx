import { NavLink } from "react-router-dom";
import { store } from "../../state/store";
const TheHeader: React.FC = () => {
    console.log(store)
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
      <div>
          <p>In cart: </p>
      </div>
    </header>
  );
};

export default TheHeader;
