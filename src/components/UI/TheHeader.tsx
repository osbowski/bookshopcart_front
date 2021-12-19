import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import {Navbar, Container} from "react-bootstrap";

const TheHeader: React.FC = () => {
  const store = useSelector((state: RootState) => state.books);
  let numOfBooks = 0;
  store.books.forEach((book) => {
    numOfBooks += book.quantity!;
  });

  useEffect(()=>{},[store.books])
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to='/'>BookShop</Link>
        </Navbar.Brand>
        <Navbar.Text>
          <Link to="/cart">Książek w koszyku: {numOfBooks}</Link>
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default TheHeader;
