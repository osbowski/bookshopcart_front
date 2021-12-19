import OrderForm from "../components/form/OrderForm";
const Order = () => {
  return (
    <>
      <h2
        style={{ textAlign: "center", marginTop: "8rem", marginBottom: "5rem" }}
      >
        Podaj dane i zatwierdź formularz
      </h2>
      <OrderForm />
    </>
  );
};

export default Order;
