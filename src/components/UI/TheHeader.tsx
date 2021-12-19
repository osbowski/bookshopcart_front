import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import {Navbar, Container, Nav} from "react-bootstrap";

const TheHeader: React.FC = () => {
  const state = useSelector((state: RootState) => state.books);
  let numOfBooks = 0;
  state.books.forEach((book) => {
    numOfBooks += book.quantity!;
  });
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">BookShop</Link>
        </Navbar.Brand>
        <Navbar.Text>
          <Link to="/cart">Książek w koszyku: {numOfBooks}</Link>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default TheHeader;
