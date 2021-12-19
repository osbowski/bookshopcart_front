import { useState } from "react";
import { Book } from "../../../types";
import { useDispatch } from "react-redux";
import { ActionType } from "../../state/action-types";
import { Button, Card, ListGroup, ButtonGroup, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

interface BookListElementProps {
  bookData: Book;
  isInCart: boolean;
}

const BookListElement: React.FC<BookListElementProps> = ({
  bookData,
  isInCart,
}) => {
  const [addBookConfirmation, setAddBookConfirmation] = useState<string | null>(
    null
  );
  const [removeBookConfirmation, setRemoveBookConfirmation] = useState<
    string | null
  >(null);
  const { title, author, cover_url, pages, price, currency } = bookData;
  const dispatch = useDispatch();
  const onAddBook = () => {
    dispatch({ type: ActionType.ADD_BOOK, payload: bookData });
    setRemoveBookConfirmation(null);
    setAddBookConfirmation("Książka dodana do koszyka");
    setTimeout(() => {
      setAddBookConfirmation(null);
    }, 1000);
  };

  const onRemoveBook = () => {
    dispatch({ type: ActionType.REMOVE_BOOK, payload: bookData.id });
    setAddBookConfirmation(null);
    setRemoveBookConfirmation("Jedna sztuka książki usunięta z koszyka");

    setTimeout(() => {
      setRemoveBookConfirmation(null);
    }, 1000);
  };
  return (
    <Card style={{ width: "35rem", margin: "2rem" }}>
      <Card.Header as="h5" className="text-center">
        {title}
      </Card.Header>
      <div style={{ textAlign: "center", padding: "10px" }}>
        <Card.Img src={cover_url} alt={title} style={{ width: "10rem" }} />
      </div>

      <ListGroup variant="flush">
        <ListGroup.Item>Autor: {author}</ListGroup.Item>
        <ListGroup.Item>Stron: {pages}</ListGroup.Item>
        <ListGroup.Item>
          Cena: {(price / 100).toFixed(2)} {currency}
        </ListGroup.Item>
        {isInCart && (
          <ListGroup.Item>Ilość w koszyku: {bookData.quantity}</ListGroup.Item>
        )}
      </ListGroup>
      <div style={{ height: "3.5rem", textAlign: "center" }}>
        {addBookConfirmation && (
          <Alert variant="success">{addBookConfirmation}</Alert>
        )}
        {removeBookConfirmation && (
          <Alert variant="info">{removeBookConfirmation}</Alert>
        )}
      </div>
      <ButtonGroup>
        <Button variant="primary" onClick={onAddBook}>
          {isInCart ? "Dodaj kolejną sztukę" : "Dodaj do koszyka"}
        </Button>
        {!isInCart && (
          <Button variant="info">
            <Link to="/cart"> Przejdź do koszyka</Link>
          </Button>
        )}
        {isInCart && (
          <Button variant="danger" onClick={onRemoveBook}>
            Usuń z koszyka
          </Button>
        )}
      </ButtonGroup>
    </Card>
  );
};

export default BookListElement;
