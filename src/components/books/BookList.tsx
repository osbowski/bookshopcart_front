import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import { Book } from "../../../types";
import DataService from "../../service/DataService";
import BookListElement from "./BookListElment";

interface BookListProps {
  isInCart: boolean;
}
const BookList: React.FC<BookListProps> = ({ isInCart }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const store = useSelector((state: RootState) => state.books);
  useEffect(() => {
    if (isInCart) {
      setBooks(store.books);
    } else {
      const getBooks = async () => {
        try {
          const data = await DataService.getAll();
          const fetchedBooks = data.data;
          setBooks(fetchedBooks.data);
        } catch (error: any) {
          console.log("Error:", error.message);
          setError("Coś poszło nie tak, spróbuj później");
        }
      };
      getBooks();
    }

    return () => {
      setError(null);
    };
  }, [store.books]);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {books.map((book: Book) => {
            return (
              <BookListElement
                key={book.id}
                bookData={book}
                isInCart={isInCart}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default BookList;
