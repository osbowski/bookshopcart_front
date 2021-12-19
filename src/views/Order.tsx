import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import DataService from "../service/DataService";
import { RootState } from "../state/reducers";
import { IOrder } from '../../types';

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



  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const orderData:IOrder = {
        order:[],
        ...data
    }
    store.books.map(book=>{
        const orderBookData = {
            id:book.id,
            quantity:book.quantity!
        }
        orderData.order.push(orderBookData)
    })
    DataService.order(JSON.stringify(orderData))
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
      </form>
    </>
  );
};

export default Order;
