import BookList from "../components/books/BookList";

const Homepage = () => {
  return (
    <>
      <h2
        style={{ textAlign: "center", marginTop: "8rem", marginBottom: "5rem" }}
      >
        Nasze książki
      </h2>
      <BookList isInCart={false} />
    </>
  );
};

export default Homepage;
