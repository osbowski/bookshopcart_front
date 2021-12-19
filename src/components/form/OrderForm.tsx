import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import DataService from "../../service/DataService";
import { RootState } from '../../state/reducers'
import { IOrder } from '../../../types'
import { Form, Alert } from "react-bootstrap";
import { ActionType } from "../../state/action-types";

interface Inputs {
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
}

const OrderForm = () => {
  const store = useSelector((state: RootState) => state.books);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [error, setError] = useState<string | null>(null);
  const [ sendFormConfirmation, setSendFormConfirmation ] = useState<string | null>(null)
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setError(null);
    const orderData: IOrder = {
      order: [],
      ...data,
    };
    store.books.forEach((book) => {
      const orderBookData = {
        id: book.id,
        quantity: book.quantity!,
      };
      orderData.order.push(orderBookData);
    });
    try {
      await DataService.order(JSON.stringify(orderData));
      setSendFormConfirmation('Zamówienie wysłane')
      dispatch({type:ActionType.REMOVE_ALL_BOOK})
      setTimeout(()=>{
          setSendFormConfirmation(null)
      },1000)
    } catch (error: any) {
      console.log("Error:", error.message);
      setError("Wysłanie zamówienia nie powiodło się. Spróbuj później.");
    }
  };

  return (
    <Form className="m-5 p-5" onSubmit={handleSubmit(onSubmit)}>
      <Form.Group>
        <Form.Label htmlFor="first_name">Imię</Form.Label>
        <Form.Control
          type="text"
          id="first_name"
          {...register("first_name", { required: true })}
        />
        {errors.first_name && "Musisz podać imię"}
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="last_name">Nazwisko</Form.Label>
        <Form.Control
          type="text"
          id="last_name"
          {...register("last_name", { required: true })}
        />
        {errors.last_name && "Musisz podać nazwisko"}
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="city">Miejścowość</Form.Label>
        <Form.Control
          type="text"
          id="city"
          {...register("city", { required: true })}
        />
        {errors.city && "Musisz podać miasto"}
      </Form.Group>
      <Form.Group>
        <Form.Label htmlFor="zip_code">Kod pocztowy</Form.Label>
        <Form.Control
          type="text"
          id="zip_code"
          {...register("zip_code", {
            required: true,
            pattern: /\d{2}-\d{3}/,
          })}
        />
        {errors.zip_code && "Musisz podać poprawny kod pocztowy"}
      </Form.Group>
      <div style={{height:'3.5rem'}}>
       { sendFormConfirmation && <Alert variant="success">{sendFormConfirmation}</Alert> }
       {error && <Alert variant="danger">{error}</Alert>}
      </div>
      <Form.Control type="submit" value="Zamawiam i płacę" />
      
    </Form>
  );
};

export default OrderForm;
