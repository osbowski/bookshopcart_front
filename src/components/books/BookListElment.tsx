import { Book } from "../../../types";

interface BookListElementProps {
  bookData: Book;
}

const BookListElement: React.FC<BookListElementProps> = ({ bookData }) => {
  const { title, author, cover_url, pages, price, currency } = bookData;
  return (
    <li>
      <div>
        <img src={cover_url} alt={title} />
        <p>Title: {title}</p>
        <p>Author: {author}</p>
        <p>Pages: {pages}</p>
        <p>Price: {price/100} {currency}</p>
        <button>Dodaj do koszyka</button>
        <button>Przejdź do koszyka</button>
      </div>
    </li>
  );
};

export default BookListElement;
