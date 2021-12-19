import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import DataService from "../service/DataService";
import { RootState } from "../state/reducers";
import { IOrder } from "../../types";

interface Inputs {
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
}

const Order = () => {
  const store = useSelector((state: RootState) => state.books);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const [error,setError] = useState<string | null>(null)

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setError(null)
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
    try{
      await DataService.order(JSON.stringify(orderData));
    }catch(error:any){
      console.log('Error:',error.message)
      setError('Wysłanie zamówienia nie powiodło się. Spróbuj później.')
    }
    
  };

  return (
    <>
      <div>Podaj dane i zatwierdź formularz</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="first_name">Imię</label>
          <input
            type="text"
            id="first_name"
            {...register("first_name", { required: true })}
          />
          {errors.first_name && "Musisz podać imię"}
        </div>
        <div>
          <label htmlFor="last_name">Nazwisko</label>
          <input
            type="text"
            id="last_name"
            {...register("last_name", { required: true })}
          />
          {errors.last_name && "Musisz podać nazwisko"}
        </div>
        <div>
          <label htmlFor="city">Miejścowość</label>
          <input
            type="text"
            id="city"
            {...register("city", { required: true })}
          />
          {errors.city && "Musisz podać miasto"}
        </div>
        <div>
          <label htmlFor="zip_code">Kod pocztowy</label>
          <input
            type="text"
            id="zip_code"
            {...register("zip_code", {
              required: true,
              pattern: /\d{2}-\d{3}/,
            })}
          />
          {errors.zip_code && "Musisz podać poprawny kod pocztowy"}
        </div>

        <input type="submit" value="Zamawiam i płacę" />
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default Order;
