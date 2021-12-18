import { NavLink } from "react-router-dom";
const TheHeader: React.FC = () => {
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
    </header>
  );
};

export default TheHeader;
