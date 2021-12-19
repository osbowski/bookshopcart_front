import { useState } from "react";
import { Book } from "../../../types";
import { useDispatch } from "react-redux";
import { ActionType } from "../../state/action-types";
import { Button, Card, ListGroup, ButtonGroup } from "react-bootstrap";

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
    setAddBookConfirmation("Książka dodana do koszyka");
    setTimeout(() => {
      setAddBookConfirmation(null);
    }, 3000);
  };

  const onRemoveBook = () => {
    dispatch({ type: ActionType.REMOVE_BOOK, payload: bookData.id });
    setRemoveBookConfirmation("Jedna sztuka książki usunięta z koszyka");
    setTimeout(() => {
      setRemoveBookConfirmation(null);
    }, 3000);
  };
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Header as="h5" className="text-center">{title}</Card.Header>
      <div style={{ textAlign: "center", padding: "10px" }}>
        <Card.Img src={cover_url} alt={title} style={{ width: "10rem" }} />
      </div>

      <ListGroup variant="flush">
        <ListGroup.Item>Autor: {author}</ListGroup.Item>
        <ListGroup.Item>Stron: {pages}</ListGroup.Item>
        <ListGroup.Item>
          Centa: {price / 100} {currency}
        </ListGroup.Item>
        {isInCart && (
          <ListGroup.Item>Ilość w koszyku: {bookData.quantity}</ListGroup.Item>
        )}
      </ListGroup>
      <ButtonGroup>
        <Button variant="primary" onClick={onAddBook}>
          {isInCart ? "Dodaj kolejną sztukę" : "Dodaj do koszyka"}
        </Button>
        {isInCart && (
          <Button variant="danger" onClick={onRemoveBook}>
            Usuń z koszyka
          </Button>
        )}
      </ButtonGroup>
      {addBookConfirmation && <p>{addBookConfirmation}</p>}
      {removeBookConfirmation && <p>{removeBookConfirmation}</p>}
    </Card>
  );
};

export default BookListElement;
